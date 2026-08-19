# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1894<sub>(+104) | 2175<sub>(+119) | 2260<sub>(+51) |  |
| 1.4.2 | 2026-03-22 | 1790<sub>(+12) | 2056<sub>(-62) | 2209<sub>(+41) |  |
| 1.4.1 | 2026-03-15 | 1778<sub>(+4) | 2118<sub>(+109) | 2168<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1774<sub>(+154) | 2009<sub>(+99) | 2163<sub>(+178) |  |
| 1.3.0 | 2026-03-05 | 1620<sub>(+59) | 1910<sub>(+128) | 1985<sub>(+57) |  |
| 1.2.0 | 2026-02-09 | 1561<sub>(+67) | 1782<sub>(+100) | 1928<sub>(+119) |  |
| 1.1.0 | 2026-02-03 | 1494<sub>(+322) | 1682<sub>(+116) | 1809<sub>(+185) |  |
| 1.0.0 | 2026-02-01 | 1172<sub>(-31) | 1566<sub>(+150) | 1624<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1203 | 1416 | 1513 |  |
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

Generated: 2026-08-19 06:33:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1203, 1172, 1494, 1561, 1620, 1774, 1778, 1790, 1894]
  line "STC (8.0+0.08s)" [1203, 1172, 1494, 1561, 1620, 1774, 1778, 1790, 1894]
  line "LTC (60.0+0.60s)" [1416, 1566, 1682, 1782, 1910, 2009, 2118, 2056, 2175]
  line "VLTC (2m24s+1.12s)" [1513, 1624, 1809, 1928, 1985, 2163, 2168, 2209, 2260]
  line "VLTC (2m24s+1.12s)" [1513, 1624, 1809, 1928, 1985, 2163, 2168, 2209, 2260]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2260 | 27 | 474 | 51% | 2249 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2175 | 26 | 502 | 52% | 2157 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1894 | 26 | 562 | 48% | 1905 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2209 | 36 | 278 | 54% | 2168 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 36 | 280 | 45% | 2106 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1790 | 41 | 208 | 52% | 1769 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2168 | 32 | 340 | 50% | 2172 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2118 | 39 | 230 | 54% | 2084 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1778 | 41 | 216 | 53% | 1748 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2163 | 36 | 272 | 48% | 2184 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2009 | 40 | 218 | 52% | 1993 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1774 | 41 | 206 | 51% | 1766 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1985 | 39 | 224 | 50% | 1986 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1910 | 39 | 232 | 49% | 1924 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1620 | 44 | 182 | 49% | 1625 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1928 | 38 | 254 | 46% | 1967 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1782 | 41 | 216 | 50% | 1778 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1561 | 43 | 198 | 49% | 1566 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1809 | 38 | 258 | 55% | 1752 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1682 | 45 | 178 | 47% | 1713 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1494 | 48 | 160 | 53% | 1465 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1624 | 48 | 162 | 51% | 1611 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1566 | 46 | 178 | 46% | 1607 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1172 | 65 | 80 | 47% | 1200 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1513 | 37 | 290 | 42% | 1646 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1416 | 43 | 218 | 48% | 1453 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1203 | 118 | 30 | 33% | 1405 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |