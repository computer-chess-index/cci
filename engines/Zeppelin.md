# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1926<sub>(+120) | 2192<sub>(+121) | 2276<sub>(+51) |  |
| 1.4.2 | 2026-03-22 | 1806<sub>(+12) | 2071<sub>(-63) | 2225<sub>(+41) |  |
| 1.4.1 | 2026-03-15 | 1794<sub>(+5) | 2134<sub>(+109) | 2184<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1789<sub>(+154) | 2025<sub>(+99) | 2179<sub>(+177) |  |
| 1.3.0 | 2026-03-05 | 1635<sub>(+61) | 1926<sub>(+129) | 2002<sub>(+57) |  |
| 1.2.0 | 2026-02-09 | 1574<sub>(+67) | 1797<sub>(+99) | 1945<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1507<sub>(+334) | 1698<sub>(+118) | 1825<sub>(+187) |  |
| 1.0.0 | 2026-02-01 | 1173<sub>(-35) | 1580<sub>(+153) | 1638<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1208<sub>(+new) | 1427<sub>(+new) | 1527<sub>(+new) |  |
| 0.1.1 | 2025-10-12 |  |  |  |  |
| 0.1.0 | 2025-10-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeppelin+<version>&body=###%20Engine%20name%0AZeppelin%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:30:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1208, 1173, 1507, 1574, 1635, 1789, 1794, 1806, 1926]
  line "STC (8.0+0.08s)" [1208, 1173, 1507, 1574, 1635, 1789, 1794, 1806, 1926]
  line "LTC (60.0+0.60s)" [1427, 1580, 1698, 1797, 1926, 2025, 2134, 2071, 2192]
  line "VLTC (2m24s+1.12s)" [1527, 1638, 1825, 1945, 2002, 2179, 2184, 2225, 2276]
  line "VLTC (2m24s+1.12s)" [1527, 1638, 1825, 1945, 2002, 2179, 2184, 2225, 2276]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2276 | 29 | 402 | 52% | 2261 | 27% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2192 | 28 | 454 | 52% | 2169 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1926 | 29 | 460 | 49% | 1928 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2225 | 36 | 278 | 54% | 2184 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2071 | 36 | 280 | 45% | 2122 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1806 | 41 | 208 | 52% | 1786 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2184 | 32 | 340 | 50% | 2188 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2134 | 39 | 230 | 54% | 2099 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1794 | 41 | 216 | 53% | 1764 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2179 | 36 | 272 | 48% | 2201 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2025 | 40 | 218 | 52% | 2010 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1789 | 41 | 206 | 51% | 1782 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2002 | 39 | 224 | 50% | 2002 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1926 | 39 | 232 | 49% | 1940 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1635 | 44 | 182 | 49% | 1640 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1945 | 38 | 254 | 46% | 1985 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1797 | 41 | 216 | 50% | 1794 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1574 | 43 | 198 | 49% | 1578 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1825 | 38 | 258 | 55% | 1767 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1698 | 45 | 178 | 47% | 1729 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1507 | 48 | 160 | 53% | 1476 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1638 | 48 | 162 | 51% | 1624 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1580 | 46 | 178 | 46% | 1620 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1173 | 65 | 80 | 47% | 1202 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1527 | 37 | 290 | 42% | 1658 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1427 | 43 | 218 | 48% | 1463 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1208 | 118 | 30 | 33% | 1412 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |