# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1899<sub>(+109) | 2176<sub>(+120) | 2260<sub>(+50) |  |
| 1.4.2 | 2026-03-22 | 1790<sub>(+12) | 2056<sub>(-64) | 2210<sub>(+42) |  |
| 1.4.1 | 2026-03-15 | 1778<sub>(+4) | 2120<sub>(+110) | 2168<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1774<sub>(+153) | 2010<sub>(+100) | 2163<sub>(+177) |  |
| 1.3.0 | 2026-03-05 | 1621<sub>(+59) | 1910<sub>(+128) | 1986<sub>(+57) |  |
| 1.2.0 | 2026-02-09 | 1562<sub>(+66) | 1782<sub>(+99) | 1929<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1496<sub>(+324) | 1683<sub>(+117) | 1809<sub>(+185) |  |
| 1.0.0 | 2026-02-01 | 1172<sub>(-31) | 1566<sub>(+148) | 1624<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1203 | 1418 | 1513 |  |
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

Generated: 2026-08-21 06:33:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1203, 1172, 1496, 1562, 1621, 1774, 1778, 1790, 1899]
  line "STC (8.0+0.08s)" [1203, 1172, 1496, 1562, 1621, 1774, 1778, 1790, 1899]
  line "LTC (60.0+0.60s)" [1418, 1566, 1683, 1782, 1910, 2010, 2120, 2056, 2176]
  line "VLTC (2m24s+1.12s)" [1513, 1624, 1809, 1929, 1986, 2163, 2168, 2210, 2260]
  line "VLTC (2m24s+1.12s)" [1513, 1624, 1809, 1929, 1986, 2163, 2168, 2210, 2260]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2260 | 27 | 478 | 51% | 2250 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2176 | 26 | 502 | 52% | 2159 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1899 | 26 | 566 | 49% | 1906 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2210 | 36 | 278 | 54% | 2168 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 36 | 280 | 45% | 2107 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1790 | 41 | 208 | 52% | 1770 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2168 | 32 | 340 | 50% | 2174 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2120 | 39 | 230 | 54% | 2086 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1778 | 41 | 216 | 53% | 1750 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2163 | 36 | 272 | 48% | 2184 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2010 | 40 | 218 | 52% | 1994 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1774 | 41 | 206 | 51% | 1766 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1986 | 39 | 224 | 50% | 1986 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1910 | 39 | 232 | 49% | 1924 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1621 | 44 | 182 | 49% | 1627 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1929 | 38 | 254 | 46% | 1968 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1782 | 41 | 216 | 50% | 1778 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1562 | 43 | 198 | 49% | 1566 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1809 | 38 | 258 | 55% | 1752 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1683 | 45 | 178 | 47% | 1715 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1496 | 48 | 160 | 53% | 1465 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1624 | 48 | 162 | 51% | 1611 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1566 | 46 | 178 | 46% | 1607 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1172 | 65 | 80 | 47% | 1200 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1513 | 37 | 290 | 42% | 1646 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1418 | 43 | 218 | 48% | 1454 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1203 | 118 | 30 | 33% | 1405 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |