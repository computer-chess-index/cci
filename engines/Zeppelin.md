# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1895<sub>(+109) | 2171<sub>(+119) | 2261<sub>(+55) |  |
| 1.4.2 | 2026-03-22 | 1786<sub>(+12) | 2052<sub>(-62) | 2206<sub>(+42) |  |
| 1.4.1 | 2026-03-15 | 1774<sub>(+5) | 2114<sub>(+109) | 2164<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1769<sub>(+153) | 2005<sub>(+99) | 2159<sub>(+179) |  |
| 1.3.0 | 2026-03-05 | 1616<sub>(+59) | 1906<sub>(+129) | 1980<sub>(+55) |  |
| 1.2.0 | 2026-02-09 | 1557<sub>(+67) | 1777<sub>(+99) | 1925<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1490<sub>(+324) | 1678<sub>(+116) | 1805<sub>(+185) |  |
| 1.0.0 | 2026-02-01 | 1166<sub>(-31) | 1562<sub>(+150) | 1620<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1197<sub>(+new) | 1412<sub>(+new) | 1509<sub>(+new) |  |
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

Generated: 2026-07-06 06:32:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1197, 1166, 1490, 1557, 1616, 1769, 1774, 1786, 1895]
  line "STC (8.0+0.08s)" [1197, 1166, 1490, 1557, 1616, 1769, 1774, 1786, 1895]
  line "LTC (60.0+0.60s)" [1412, 1562, 1678, 1777, 1906, 2005, 2114, 2052, 2171]
  line "VLTC (2m24s+1.12s)" [1509, 1620, 1805, 1925, 1980, 2159, 2164, 2206, 2261]
  line "VLTC (2m24s+1.12s)" [1509, 1620, 1805, 1925, 1980, 2159, 2164, 2206, 2261]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1197, 1166, 1490, 1557, 1616, 1769, 1774, 1786, 1895]
  line "STC (8.0+0.08s)" [1197, 1166, 1490, 1557, 1616, 1769, 1774, 1786, 1895]
  line "LTC (60.0+0.60s)" [1412, 1562, 1678, 1777, 1906, 2005, 2114, 2052, 2171]
  line "VLTC (2m24s+1.12s)" [1509, 1620, 1805, 1925, 1980, 2159, 2164, 2206, 2261]
  line "VLTC (2m24s+1.12s)" [1509, 1620, 1805, 1925, 1980, 2159, 2164, 2206, 2261]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2261 | 28 | 418 | 52% | 2242 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2171 | 28 | 466 | 52% | 2151 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1895 | 27 | 514 | 49% | 1904 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 36 | 278 | 54% | 2164 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2052 | 36 | 280 | 45% | 2102 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1786 | 41 | 208 | 52% | 1766 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2164 | 32 | 340 | 50% | 2168 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2114 | 39 | 230 | 54% | 2079 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1774 | 41 | 216 | 53% | 1744 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2159 | 36 | 272 | 48% | 2180 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2005 | 40 | 218 | 52% | 1990 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1769 | 41 | 206 | 51% | 1762 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1980 | 39 | 224 | 50% | 1982 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1906 | 39 | 232 | 49% | 1920 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1616 | 44 | 182 | 49% | 1621 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1925 | 38 | 254 | 46% | 1964 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1777 | 41 | 216 | 50% | 1774 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1557 | 43 | 198 | 49% | 1561 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1805 | 38 | 258 | 55% | 1748 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1678 | 45 | 178 | 47% | 1709 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1490 | 48 | 160 | 53% | 1459 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1620 | 48 | 162 | 51% | 1605 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1562 | 46 | 178 | 46% | 1601 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1166 | 65 | 80 | 47% | 1196 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1509 | 37 | 290 | 42% | 1640 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1412 | 43 | 218 | 48% | 1449 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1197 | 118 | 30 | 33% | 1401 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |