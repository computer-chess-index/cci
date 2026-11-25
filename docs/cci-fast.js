// cci-fast.js v0.20 — fast sorting, filtering and link checks for the CCI rating pages.
//
// Works on both pages (all TCs per release / each time control separate): columns are
// recognised by their header names. Version history: see CHANGELOG.md.
//
// Main idea for speed: read the table ONCE into JavaScript, work on that data, and
// write to the page in batches. Never read layout-dependent values (innerText,
// sizes) in a loop that also changes the page — that forces a re-layout per row.

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================================
    // 1. Settings
    // ======================================================================

    // Per column: sort type, width, special sort rule. Fixed widths were measured in
    // the page (Arial 16px, 10px padding per side): header text + 23px for the sort
    // arrow, or the widest cell. Flexible columns share the rest of the window.
    //   width: px    fixed width
    //   flex: [w, m] share of the remaining width (weight w, at least m px)
    //   type:        "number" | "date" | "string" (default)
    //   nullsLast:   empty cells last in BOTH sort directions
    const COLUMNS = {
        Engine:      { flex: [1.0, 110] },
        Version:     { width: 112 },
        TimeControl: { width: 158 },
        Published:   { width: 120, type: "date" },
        Author:      { flex: [1.2, 110] },
        STC:         { width: 76,  type: "number" },
        LTC:         { width: 76,  type: "number" },
        VLTC:        { width: 86,  type: "number" },
        cElo:        { width: 78,  type: "number" },
        Games:       { width: 98,  type: "number" },
        Deviation:   { width: 116 },
        Score:       { width: 88,  type: "number" },
        AvgOpp:      { width: 106, type: "number" },
        Draws:       { width: 92,  type: "number" },
        Check:       { width: 142, type: "number", nullsLast: true },
        Home:        { flex: [1.6, 150] },
    };
    const DEFAULT_COLUMN = { flex: [1, 100] };
    const NAV_WIDTHS = [44, 84];           // the two scroll-button columns

    const MIN_SPIN_MS = 250;               // busy indicator stays at least this long
    const FILTER_DELAY_MS = 80;            // wait for a pause in typing
    const SCROLL_FALLBACK_MS = 2000;       // if "scrollend" never comes
    const HIGHLIGHT_COLOURS = 6;           // ::highlight(cci-search-0 … 5) in the CSS

    // Files that prove a GitHub repository exists (tried in this order, via raw).
    // READMEs are read as text: their first heading and paragraph become the Home
    // link's tooltip (a web page cannot read the repo page's own title/description).
    const PROBE_FILES = ["README.md", "readme.md", "Readme.md", "README.rst", "README",
                         "README.txt", "LICENSE", ".gitignore"];
    const README_FILES = 6;                // the first 6 of PROBE_FILES are READMEs
    const SUMMARY_MAX = 200;               // max. characters of the description


    // ======================================================================
    // 2. Page elements
    // ======================================================================

    const table = document.getElementById("ratingTable");
    const tbody = table.tBodies[0];
    const headRow = table.tHead.rows[0];
    const searchInput = document.getElementById("searchInput");
    const overlay = document.getElementById("cciSpinner");          // optional
    const nameOf = th => th.textContent.trim();


    // ======================================================================
    // 3. Extend the table (before it is read in step 4)
    // ======================================================================

    // 3a. "Check" column left of "Home": one check button per row (filled in step 9).
    const homeAt = Array.from(headRow.cells).findIndex(th => nameOf(th) === "Home");
    if (homeAt >= 0) {
        const th = document.createElement("th");
        th.textContent = "Check";
        th.title = "Click a row's button to check its Home link and the engine's CCI page. " +
                   "Sorting: by status (OK, reachable, not found, unreachable, no Home), then by time; " +
                   "rows not checked yet are always listed last.";
        headRow.insertBefore(th, headRow.cells[homeAt]);

        for (const tr of tbody.rows) {
            const td = document.createElement("td");
            td.className = "cci-time";
            tr.insertBefore(td, tr.cells[homeAt]);
        }
    }

    // 3b. Columns: the leading "nav" columns hold the scroll buttons, the rest is data.
    const allHeads = Array.from(headRow.cells);
    const NAV = allHeads.filter(th => th.classList.contains("nav")).length;
    const headers = allHeads.slice(NAV);
    const names = headers.map(nameOf);
    const meta = names.map(n => COLUMNS[n] || DEFAULT_COLUMN);
    const col = name => names.indexOf(name);                         // data index, -1 if absent

    // 3c. Header text in a span, so it can be cut with "…" while the sort arrow
    //     (CSS ::after) stays visible right after it.
    for (const th of headers) {
        const span = document.createElement("span");
        span.className = "th-text";
        while (th.firstChild) span.appendChild(th.firstChild);
        th.appendChild(span);
    }

    // 3d. Column widths: table-layout is fixed, so widths come from a <colgroup>,
    //     never from the content — no wrapping, no width changes after a check.
    //     If the window is too narrow for all minimums, the page scrolls sideways.
    const widthSpec = [...NAV_WIDTHS.slice(0, NAV).map(px => ({ width: px })), ...meta];
    const colgroup = document.createElement("colgroup");
    const cols = widthSpec.map(() => colgroup.appendChild(document.createElement("col")));
    table.insertBefore(colgroup, table.firstChild);

    const layoutColumns = () => {
        const fixed = widthSpec.reduce((sum, c) => sum + (c.width || 0), 0);
        const weights = widthSpec.reduce((sum, c) => sum + (c.flex ? c.flex[0] : 0), 0);
        const rest = Math.max(0, table.parentElement.clientWidth - fixed);
        let total = 0;

        widthSpec.forEach((c, i) => {
            const px = c.width || Math.max(c.flex[1], Math.floor(rest * c.flex[0] / weights));
            cols[i].style.width = px + "px";
            total += px;
        });
        table.style.width = total + "px";
    };

    layoutColumns();
    let resizeFrame = 0;
    window.addEventListener("resize", () => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(layoutColumns);
    });

    // 3e. Tooltip with the full text, only for cells that are actually cut off.
    table.addEventListener("mouseover", e => {
        const cell = e.target.closest("td, th");
        if (!cell || cell.classList.contains("nav") || cell.classList.contains("cci-time")) return;

        const box = cell.tagName === "TH" ? cell.querySelector(".th-text") : cell;
        if (!box) return;

        if (box.scrollWidth > box.clientWidth + 1) {
            if (!cell.title) { cell.title = cell.textContent.trim(); cell.dataset.autoTitle = "1"; }
        } else if (cell.dataset.autoTitle) {
            cell.removeAttribute("title");
            delete cell.dataset.autoTitle;
        }
    });


    // ======================================================================
    // 4. Read the table once
    // ======================================================================

    // textContent needs no layout (innerText does). Per row we keep:
    //   keys   sort values per column (number / date / string, or null if empty)
    //   text   all cell texts in lower case, for the filter
    //   nodes  the row's text nodes, for highlighting
    //   homeLink   the Home <a> element (its tooltip gets the README summary)
    //   home, md   the Home link and the engine's CCI page link (for step 9); md only
    //              if the engine name links to a file on GitHub (…/blob/…), which is
    //              not the case on an original page, where the name links to Home
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
    const hrefIn = td => { const a = td && td.querySelector("a[href]"); return a ? a.getAttribute("href") : ""; };
    const GITHUB_FILE = /^https?:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/(.+)$/i;

    const toKey = (value, type) => {
        if (type === "number") { const n = parseFloat(value.replace(",", ".")); return isNaN(n) ? null : n; }
        if (type === "date")   { const d = Date.parse(value); return isNaN(d) ? null : d; }
        return value;
    };

    const rows = Array.from(tbody.rows).map(tr => {
        const cells = Array.from(tr.cells).slice(NAV);
        const texts = cells.map(td => td.textContent.trim());
        const engineLink = hrefIn(cells[col("Engine")]);

        const nodes = [];
        const walker = document.createTreeWalker(tr, NodeFilter.SHOW_TEXT);
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
            if (n.data.trim()) nodes.push({ node: n, lower: n.data.toLowerCase() });
        }

        return {
            tr,
            keys: texts.map((t, i) => toKey(t, meta[i].type)),
            text: texts.join("\t").toLowerCase(),
            nodes,
            visible: true,
            home: hrefIn(cells[col("Home")]),
            homeLink: cells[col("Home")] ? cells[col("Home")].querySelector("a[href]") : null,
            md: GITHUB_FILE.test(engineLink) ? engineLink : "",
        };
    });

    // Zebra striping by class (CSS :nth-child would also count hidden rows).
    const restripe = () => {
        let n = 0;
        for (const r of rows) if (r.visible) r.tr.classList.toggle("odd", (n++ & 1) === 1);
    };


    // ======================================================================
    // 5. Busy indicator (dimmed page + spinner)
    // ======================================================================

    // Shown during sorting, filtering and scrolling; it also blocks mouse clicks.
    // The spinner is a CSS transform animation, which the browser keeps running
    // even while the script is busy. A counter allows overlapping uses.
    let busyCount = 0;

    const showBusy = () => {
        busyCount++;
        if (overlay) overlay.hidden = false;
        return performance.now();
    };

    const hideBusy = startedAt => {
        const wait = Math.max(0, MIN_SPIN_MS - (performance.now() - startedAt));
        setTimeout(() => { if (--busyCount === 0 && overlay) overlay.hidden = true; }, wait);
    };

    // Show the indicator, let the browser paint it, then run the (blocking) work.
    const whileBusy = work => {
        const startedAt = showBusy();
        requestAnimationFrame(() => setTimeout(() => {
            try { work(); } finally { hideBusy(startedAt); }
        }, 0));
    };


    // ======================================================================
    // 6. Sorting
    // ======================================================================

    const sortRows = (index, asc) => {
        const dir = asc ? 1 : -1;
        const { type, nullsLast } = meta[index];

        rows.sort((a, b) => {
            const x = a.keys[index], y = b.keys[index];
            if (x === null || y === null) {
                if (x === y) return 0;
                return (x === null ? 1 : -1) * (nullsLast ? 1 : dir);   // original: empty first when descending
            }
            return dir * (type === "number" || type === "date" ? x - y : collator.compare(x, y));
        });

        const frag = document.createDocumentFragment();
        for (const r of rows) frag.appendChild(r.tr);
        tbody.appendChild(frag);                                        // one change, one layout
        restripe();
    };

    headers.forEach((th, index) => th.addEventListener("click", () => {
        const asc = !th.classList.contains("asc");
        headers.forEach(h => h.classList.remove("asc", "desc"));
        th.classList.add(asc ? "asc" : "desc");
        whileBusy(() => sortRows(index, asc));
    }));


    // ======================================================================
    // 7. Filter and highlighting
    // ======================================================================

    // Highlighting uses the CSS Custom Highlight API: it marks text without changing
    // the page, and survives sorting (the ranges point at the same text nodes).
    // One Highlight per search word, each with its own colour. Browsers without the
    // API (before Chromium 105, Safari 17.2, Firefox 140) simply show no highlights.
    const canHighlight = !!(window.CSS && CSS.highlights && window.Highlight);
    const highlights = [];
    if (canHighlight) {
        for (let k = 0; k < HIGHLIGHT_COLOURS; k++) {
            const h = new Highlight();
            h.priority = k;                                   // later words on top
            CSS.highlights.set("cci-search-" + k, h);
            highlights.push(h);
        }
    }

    const highlight = words => {
        if (!canHighlight) return;
        for (const h of highlights) h.clear();
        if (!words.length) return;

        for (const r of rows) {
            if (!r.visible) continue;
            for (const { node, lower } of r.nodes) {
                if (lower.length !== node.data.length) continue;      // rare Unicode case-folding edge
                words.forEach((w, k) => {
                    const h = highlights[k % HIGHLIGHT_COLOURS];
                    for (let i = lower.indexOf(w); i !== -1; i = lower.indexOf(w, i + w.length)) {
                        h.add(new StaticRange({ startContainer: node, startOffset: i,
                                                endContainer: node, endOffset: i + w.length }));
                    }
                });
            }
        }
    };

    // Words separated by spaces; a row is shown only if it contains ALL words
    // (anywhere in the row, in any order, not case-sensitive).
    const applyFilter = () => {
        const words = [...new Set(searchInput.value.toLowerCase().split(/\s+/).filter(Boolean))];

        for (const r of rows) {
            const show = words.every(w => r.text.includes(w));
            if (show !== r.visible) { r.visible = show; r.tr.hidden = !show; }   // only real changes
        }
        restripe();
        highlight(words);
    };

    let filterTimer = 0;
    searchInput.addEventListener("input", () => {
        clearTimeout(filterTimer);
        filterTimer = setTimeout(() => whileBusy(applyFilter), FILTER_DELAY_MS);
    });
    searchInput.addEventListener("search", () => {          // the × or Esc: apply at once
        clearTimeout(filterTimer);
        whileBusy(applyFilter);
    });


    // ======================================================================
    // 8. Scroll buttons (to top / to bottom)
    // ======================================================================

    // Busy indicator while the smooth scroll runs; its end is detected with the
    // "scrollend" event (Chromium 114+, Firefox 109+), with a timeout as fallback.
    const scrollToY = target => {
        const y = Math.max(0, Math.min(target, document.documentElement.scrollHeight - window.innerHeight));
        const startedAt = showBusy();
        if (Math.abs(window.scrollY - y) < 1) { hideBusy(startedAt); return; }   // already there

        let fallback = 0;
        const finish = () => {
            clearTimeout(fallback);
            window.removeEventListener("scrollend", finish);
            hideBusy(startedAt);
        };
        window.addEventListener("scrollend", finish, { once: true });
        fallback = setTimeout(finish, SCROLL_FALLBACK_MS);
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    document.getElementById("cciToTop")?.addEventListener("click", () => scrollToY(0));
    document.getElementById("cciToBottom")?.addEventListener("click",
        () => scrollToY(document.documentElement.scrollHeight));


    // ======================================================================
    // 9. Link check per row
    // ======================================================================

    // No GitHub API (so no hourly limit and no token). A web page may read files from
    // raw.githubusercontent.com, which is what the checks rely on:
    // - Home on GitHub: look for README.md (then other common files) in the default
    //   branch. Found -> OK (certain). Nothing found -> "not found": probably deleted,
    //   but the repo may just lack these files. A renamed repo still shows OK.
    // - Home elsewhere: its status can't be read (CORS), only whether it answers.
    // - The engine's CCI page (.md): same file via raw -> 200 or 404 (badge).
    // Rows sharing a Home link (or, without Home, the same engine page) get the result
    // of one click. Results last until the page is reloaded; a click re-checks.
    const iCheck = col("Check");
    if (iCheck >= 0) {

        // 9a. Building blocks: icons, labels, groups of rows, button and badge per row.
        const ICON_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" ' +
            'stroke-linecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>';
        const ICON_SPIN = '<svg class="spin" viewBox="0 0 50 50" aria-hidden="true"><circle cx="25" cy="25" r="20" fill="none" ' +
            'stroke="#d5d9ea" stroke-width="7"/><circle cx="25" cy="25" r="20" fill="none" stroke="rgb(76, 94, 175)" ' +
            'stroke-width="7" stroke-linecap="round" stroke-dasharray="40 126"/></svg>';

        const HOME_RESULT = {          // kind -> [button label, sort rank, tooltip]
            ok:          ["OK",          0, res => `Home repository exists (found ${res.file}).`],
            reachable:   ["reachable",   1, () => "The Home site answered. Its exact status cannot be read by a web page (CORS)."],
            notfound:    ["not found",   2, res => "No README, LICENSE or .gitignore found in this GitHub repository" +
                                                   (res.note ? ` (${res.note})` : "") + ": the repository is probably " +
                                                   "deleted or renamed, but it may also just lack these files. Open the link to be sure."],
            unreachable: ["unreachable", 3, () => "The Home site could not be reached."],
        };

        const NO_HOME_RANK = 4;

        const groupBy = keyOf => {
            const groups = new Map();
            for (const r of rows) {
                const key = keyOf(r);
                if (!key) continue;
                if (!groups.has(key)) groups.set(key, []);
                groups.get(key).push(r);
            }
            return groups;
        };
        const checkKey = r => r.home || (r.md ? "page:" + r.md : "");
        const rowsByCheck = groupBy(checkKey);
        const rowsByPage = groupBy(r => r.md);
        const rowOf = new Map(rows.map(r => [r.tr, r]));

        // Button in the Check cell of every row.
        for (const r of rows) {
            r.btn = document.createElement("button");
            r.btn.type = "button";
            r.btn.className = "cci-chkbtn";
            r.btn.innerHTML = ICON_SEARCH;
            r.btn.title = "Check this Home link and the engine's CCI page";
            r.tr.cells[NAV + iCheck].appendChild(r.btn);
        }

        // Badge for the CCI page: in the empty nav cell left of the engine name
        // (or after the engine name on a page without nav columns). Created on demand.
        const badgeOf = r => {
            if (!r.badge) {
                r.badge = document.createElement("span");
                (NAV > 0 ? r.tr.cells[NAV - 1] : r.tr.cells[NAV + col("Engine")]).appendChild(r.badge);
            }
            return r.badge;
        };

        // 9b. The checks themselves (network only, no page changes).
        const rawUrl = href => {       // github.com/o/r/blob/path -> raw.githubusercontent.com/o/r/path
            const m = href.match(GITHUB_FILE);
            return `https://raw.githubusercontent.com/${m[1]}/${m[2]}/${m[3]}`;
        };

        // Title + short description from a README (Markdown, reStructuredText or text):
        // the first heading, and the first paragraph of plain text (up to a list/table).
        const readmeSummary = (text, MAX = 200) => {
            const decode = s => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<")
                                 .replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
            const clean = s => decode(s
                .replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, "")      // linked badges
                .replace(/!\[[^\]]*\]\([^)]*\)/g, "")                  // images
                .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")               // links -> their text
                .replace(/\[([^\]]*)\]\[[^\]]*\]/g, "$1")              // reference links
                .replace(/[*_`~]+/g, ""))                              // emphasis, code marks
                .replace(/\s+/g, " ").replace(/\s+([.,;:!?])/g, "$1").trim();

            let t = text.replace(/\r/g, "").replace(/<!--[\s\S]*?-->/g, "");

            // title: the first heading in the file, Markdown (#..###) or HTML (<h1>..<h3>)
            const mdHead = t.match(/^#{1,3}\s+(.+)$/m);
            const htmlHead = t.match(/<h([1-3])[^>]*>([\s\S]*?)<\/h\1>/i);
            const headText = h => clean(h.replace(/<img[^>]*\balt="([^"]*)"[^>]*>/gi, "$1").replace(/<[^>]*>/g, ""));
            let title = "";
            if (htmlHead && (!mdHead || htmlHead.index < mdHead.index)) title = headText(htmlHead[2]);
            else if (mdHead) title = headText(mdHead[1]);

            t = t.replace(/<[^>]*>/g, "\n");                                  // HTML tags (also multi-line)
            let desc = "";
            const UNDERLINE = /^[=\-~^"#*]{3,}$/;                              // setext / rst heading lines
            const NOT_TEXT = /^(\||```|>|[-*+] |\d+\.\s|\.\.|\[!|!\[|:)/;     // tables, code, lists, rst

            for (const block of t.split(/\n\s*\n/)) {                          // paragraphs
                let lines = block.split("\n").map(l => l.trim().replace(/\\$/, "")).filter(Boolean);

                // a heading at the start of the block: take it as title (if none yet), keep the rest
                const md = lines[0] && lines[0].match(/^#{1,3}\s+(.*)/);
                if (md) {
                    if (!title) title = clean(md[1]);
                    lines = lines.slice(1);
                } else if (lines.length >= 3 && UNDERLINE.test(lines[0]) && UNDERLINE.test(lines[2])) {
                    if (!title) title = clean(lines[1]);                       // rst: ===\nTitle\n===
                    lines = lines.slice(3);
                } else if (lines.length >= 2 && UNDERLINE.test(lines[1])) {
                    if (!title) title = clean(lines[0]);                       // Title\n=====
                    lines = lines.slice(2);
                }
                if (desc || !lines.length || NOT_TEXT.test(lines[0]) || /^#/.test(lines[0])) continue;

                const para = [];                                                // up to a list / table
                for (const l of lines) { if (NOT_TEXT.test(l) || /^#/.test(l)) break; para.push(l); }
                const c = clean(para.join(" "));
                if (c.length >= 25 && /[a-z]{3}/i.test(c)) desc = c;
                if (title && desc) break;
            }
            if (desc.length > MAX) desc = desc.slice(0, desc.lastIndexOf(" ", MAX)) + "…";
            return { title, desc };
        };

        const checkHome = async url => {
            const t0 = performance.now();
            const result = (kind, extra) => ({ kind, ms: Math.round(performance.now() - t0), ...extra });
            const gh = url.match(/^https?:\/\/(?:www\.)?github\.com\/([^\/?#]+)\/([^\/?#]+?)(?:\.git)?\/?(?:[?#].*)?$/i);

            if (!gh) {                                          // not GitHub: reachable or not
                try { await fetch(url, { mode: "no-cors", cache: "no-store" }); return result("reachable"); }
                catch (e) { return result("unreachable"); }
            }
            for (const [i, file] of PROBE_FILES.entries()) {
                const isReadme = i < README_FILES;
                try {
                    const res = await fetch(`https://raw.githubusercontent.com/${gh[1]}/${gh[2]}/HEAD/${file}`,
                                            { method: isReadme ? "GET" : "HEAD", cache: "no-store" });
                    if (res.ok) {
                        const summary = isReadme ? readmeSummary(await res.text(), SUMMARY_MAX) : null;
                        return result("ok", { file, summary });
                    }
                    if (res.status !== 404) return result("notfound", { note: "HTTP " + res.status });
                } catch (e) {
                    return result("unreachable", { note: e.message });
                }
            }
            return result("notfound");
        };

        const checkPage = async href => {                       // HTTP status, 0 = unreachable
            try { return (await fetch(rawUrl(href), { method: "HEAD", cache: "no-store" })).status; }
            catch (e) { return 0; }
        };

        // 9c. One click: mark the rows as busy, run both checks, show the results.
        const runCheck = async r => {
            const checkRows = rowsByCheck.get(checkKey(r)) || [r];
            const pageRows = r.md ? rowsByPage.get(r.md) : [];

            for (const x of checkRows) {
                x.btn.className = "cci-chkbtn busy";
                x.btn.innerHTML = ICON_SPIN;
                x.btn.title = "Checking…";
                x.btn.disabled = true;
            }
            for (const x of pageRows) {
                const g = badgeOf(x);
                g.className = "cci-mdbadge busy";
                g.innerHTML = ICON_SPIN;
                g.title = "Checking the CCI page…";
            }

            const [home, page] = await Promise.all([
                r.home ? checkHome(r.home) : null,
                r.md ? checkPage(r.md) : null,
            ]);

            // CCI page badge.
            const pageName = r.md ? decodeURIComponent(r.md.split("/").pop()) : "";
            for (const x of pageRows) {
                const g = badgeOf(x);
                if (page === 200) {
                    g.className = "cci-mdbadge ok";
                    g.textContent = "page OK";
                    g.title = `The engine's CCI page (${pageName}) exists.`;
                } else {
                    g.className = "cci-mdbadge dead";
                    g.textContent = page ? "page " + page : "page ?";
                    g.title = `The engine's CCI page (${pageName}) ` +
                              (page ? `answered HTTP ${page}${page === 404 ? " (the file does not exist)" : ""}`
                                    : "could not be reached") + ".";
                }
            }

            // Home result in the Check button (also the sort key of the Check column).
            const pageNote = r.md ? "\nCCI page: " + (page === 200 ? "OK." : (page ? "HTTP " + page : "unreachable") + "!") : "";
            for (const x of checkRows) {
                x.btn.disabled = false;
                if (!home) {
                    x.btn.className = "cci-chkbtn none";
                    x.btn.textContent = "no Home";
                    x.btn.title = "This engine has no Home link." + pageNote + "\nClick to check again.";
                    x.keys[iCheck] = NO_HOME_RANK * 1e6;          // after "unreachable", before unchecked
                    continue;
                }
                const [label, rank, tooltip] = HOME_RESULT[home.kind];
                x.btn.className = "cci-chkbtn " + home.kind;
                x.btn.textContent = `${label} ${(home.ms / 1000).toFixed(2)}s`;
                x.btn.title = tooltip(home) + pageNote + "\nClick to check again.";
                x.keys[iCheck] = rank * 1e6 + home.ms;          // sort: status, then time
                if (x.homeLink) x.homeLink.title = homeTooltip(r.home, home);
            }
        };

        // Tooltip of the Home link after a check: the URL plus what could be learned.
        const homeTooltip = (url, home) => {
            let info;
            if (home.summary && (home.summary.title || home.summary.desc)) {
                info = [home.summary.title, home.summary.desc].filter(Boolean).join("\n") +
                       `\n(from the repository's ${home.file})`;
            } else if (home.kind === "ok") {
                info = `Repository exists, but its ${home.file} has no title or description.`;
            } else if (home.kind === "reachable") {
                info = "Title and description cannot be shown: this site does not allow other pages to read it.";
            } else {
                info = HOME_RESULT[home.kind][2](home);
            }
            return url + "\n\n" + info;
        };

        tbody.addEventListener("click", e => {
            const btn = e.target.closest("button.cci-chkbtn");
            if (btn && !btn.disabled) runCheck(rowOf.get(btn.closest("tr")));
        });
    }


    // ======================================================================
    // 10. Start
    // ======================================================================

    restripe();
    if (searchInput.value) applyFilter();        // e.g. filter text kept after "back"
    window.__cciFilter = applyFilter;            // test hooks for bench.py
    window.__cciSort = sortRows;
});
