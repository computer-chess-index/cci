# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1908<sub>(+114) | 2180<sub>(+117) | 2263<sub>(+48) |  |
| 1.4.2 | 2026-03-22 | 1794<sub>(+12) | 2063<sub>(-62) | 2215<sub>(+40) |  |
| 1.4.1 | 2026-03-15 | 1782<sub>(+4) | 2125<sub>(+111) | 2175<sub>(+6) |  |
| 1.4.0 | 2026-03-14 | 1778<sub>(+153) | 2014<sub>(+98) | 2169<sub>(+179) |  |
| 1.3.0 | 2026-03-05 | 1625<sub>(+60) | 1916<sub>(+130) | 1990<sub>(+55) |  |
| 1.2.0 | 2026-02-09 | 1565<sub>(+65) | 1786<sub>(+100) | 1935<sub>(+122) |  |
| 1.1.0 | 2026-02-03 | 1500<sub>(+323) | 1686<sub>(+116) | 1813<sub>(+185) |  |
| 1.0.0 | 2026-02-01 | 1177<sub>(-30) | 1570<sub>(+148) | 1628<sub>(+111) |  |
| 0.2.0 | 2025-11-16 | 1207 | 1422 | 1517 |  |
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

Generated: 2026-09-06 04:40:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "" [1207, 1177, 1500, 1565, 1625, 1778, 1782, 1794, 1908]
  line "STC (8.0+0.08s)" [1207, 1177, 1500, 1565, 1625, 1778, 1782, 1794, 1908]
  line "LTC (60.0+0.60s)" [1422, 1570, 1686, 1786, 1916, 2014, 2125, 2063, 2180]
  line "" [1517, 1628, 1813, 1935, 1990, 2169, 2175, 2215, 2263]
  line "VLTC (2m24s+1.12s)" [1517, 1628, 1813, 1935, 1990, 2169, 2175, 2215, 2263]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2263 | 26 | 494 | 51% | 2255 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2180 | 26 | 510 | 51% | 2165 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1908 | 25 | 606 | 49% | 1909 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2215 | 36 | 278 | 54% | 2175 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2063 | 36 | 280 | 45% | 2113 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1794 | 41 | 208 | 52% | 1774 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2175 | 32 | 340 | 50% | 2179 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2125 | 39 | 230 | 54% | 2091 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1782 | 41 | 216 | 53% | 1754 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2169 | 36 | 272 | 48% | 2191 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2014 | 40 | 218 | 52% | 1999 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1778 | 41 | 206 | 51% | 1770 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1990 | 39 | 224 | 50% | 1991 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1916 | 39 | 232 | 49% | 1929 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1625 | 44 | 182 | 49% | 1631 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1935 | 38 | 254 | 46% | 1972 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1786 | 41 | 216 | 50% | 1782 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1565 | 43 | 198 | 49% | 1570 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1813 | 38 | 258 | 55% | 1756 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1686 | 45 | 178 | 47% | 1719 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1500 | 48 | 160 | 53% | 1469 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1628 | 48 | 162 | 51% | 1615 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1570 | 46 | 178 | 46% | 1611 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1177 | 65 | 80 | 47% | 1206 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1517 | 37 | 290 | 42% | 1650 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1422 | 43 | 218 | 48% | 1458 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1207 | 118 | 30 | 33% | 1409 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |