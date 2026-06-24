# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1898<sub>(+109) | 2171<sub>(+119) | 2259<sub>(+52) |  |
| 1.4.2 | 2026-03-22 | 1789<sub>(+14) | 2052<sub>(-62) | 2207<sub>(+42) |  |
| 1.4.1 | 2026-03-15 | 1775<sub>(+4) | 2114<sub>(+108) | 2165<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1771<sub>(+154) | 2006<sub>(+98) | 2160<sub>(+178) |  |
| 1.3.0 | 2026-03-05 | 1617<sub>(+59) | 1908<sub>(+129) | 1982<sub>(+56) |  |
| 1.2.0 | 2026-02-09 | 1558<sub>(+66) | 1779<sub>(+98) | 1926<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1492<sub>(+324) | 1681<sub>(+118) | 1806<sub>(+185) |  |
| 1.0.0 | 2026-02-01 | 1168<sub>(-31) | 1563<sub>(+148) | 1621<sub>(+110) |  |
| 0.2.0 | 2025-11-16 | 1199<sub>(+new) | 1415<sub>(+new) | 1511<sub>(+new) |  |
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

Generated: 2026-06-24 06:30:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1199, 1168, 1492, 1558, 1617, 1771, 1775, 1789, 1898]
  line "STC (8.0+0.08s)" [1199, 1168, 1492, 1558, 1617, 1771, 1775, 1789, 1898]
  line "LTC (60.0+0.60s)" [1415, 1563, 1681, 1779, 1908, 2006, 2114, 2052, 2171]
  line "VLTC (2m24s+1.12s)" [1511, 1621, 1806, 1926, 1982, 2160, 2165, 2207, 2259]
  line "VLTC (2m24s+1.12s)" [1511, 1621, 1806, 1926, 1982, 2160, 2165, 2207, 2259]
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
  line "STC (8.0+0.08s)" [1199, 1168, 1492, 1558, 1617, 1771, 1775, 1789, 1898]
  line "STC (8.0+0.08s)" [1199, 1168, 1492, 1558, 1617, 1771, 1775, 1789, 1898]
  line "LTC (60.0+0.60s)" [1415, 1563, 1681, 1779, 1908, 2006, 2114, 2052, 2171]
  line "VLTC (2m24s+1.12s)" [1511, 1621, 1806, 1926, 1982, 2160, 2165, 2207, 2259]
  line "VLTC (2m24s+1.12s)" [1511, 1621, 1806, 1926, 1982, 2160, 2165, 2207, 2259]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2259 | 29 | 414 | 52% | 2244 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2171 | 28 | 466 | 52% | 2151 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1898 | 27 | 510 | 49% | 1905 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 36 | 278 | 54% | 2165 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2052 | 36 | 280 | 45% | 2103 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1789 | 41 | 208 | 52% | 1767 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2165 | 32 | 340 | 50% | 2169 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2114 | 39 | 230 | 54% | 2080 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1775 | 41 | 216 | 53% | 1747 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2160 | 36 | 272 | 48% | 2182 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2006 | 40 | 218 | 52% | 1990 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1771 | 41 | 206 | 51% | 1763 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1982 | 39 | 224 | 50% | 1983 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1908 | 39 | 232 | 49% | 1921 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1617 | 44 | 182 | 49% | 1623 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1926 | 38 | 254 | 46% | 1966 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1779 | 41 | 216 | 50% | 1775 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1558 | 43 | 198 | 49% | 1563 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1806 | 38 | 258 | 55% | 1750 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1681 | 45 | 178 | 47% | 1712 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1492 | 48 | 160 | 53% | 1462 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1621 | 48 | 162 | 51% | 1608 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1563 | 46 | 178 | 46% | 1602 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1168 | 65 | 80 | 47% | 1196 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1511 | 37 | 290 | 42% | 1642 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1415 | 43 | 218 | 48% | 1451 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1199 | 118 | 30 | 33% | 1403 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |