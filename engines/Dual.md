# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.3 | 2026-09-04 | 2867<sub>(+153) | 3073<sub>(+131) | 3154<sub>(+73) |  |
| 0.4.2 | 2026-08-08 | 2714<sub>(+216) | 2942<sub>(+141) | 3081<sub>(+218) |  |
| 0.4.1 | 2026-07-26 | 2498<sub>(+133) | 2801<sub>(+116) | 2863<sub>(+70) |  |
| 0.4.0 | 2026-07-19 | 2365<sub>(+93) | 2685<sub>(+90) | 2793<sub>(+120) |  |
| 0.3.2 | 2026-07-06 | 2272<sub>(+new) | 2595<sub>(+new) | 2673<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1925<sub>(+228) | 2109<sub>(+245) | 2225<sub>(+292) |  |
| 0.2.8 | 2026-05-15 | 1697<sub>(+99) | 1864<sub>(+32) | 1933<sub>(+71) |  |
| 0.2.7 | 2026-05-11 | 1598 | 1832 | 1862 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.4.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:24:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2", "0.4.3"]
  y-axis "Elo Rating" 1500 --> 3200
  line "" [1598, 1697, 1925, 2272, 2365, 2498, 2714, 2867]
  line "STC (8.0+0.08s)" [1598, 1697, 1925, 2272, 2365, 2498, 2714, 2867]
  line "LTC (60.0+0.60s)" [1832, 1864, 2109, 2595, 2685, 2801, 2942, 3073]
  line "" [1862, 1933, 2225, 2673, 2793, 2863, 3081, 3154]
  line "VLTC (2m24s+1.12s)" [1862, 1933, 2225, 2673, 2793, 2863, 3081, 3154]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 44 | 132 | 51% | 3143 | 66% |
| 0.4.3 | LTC <sub>(60.0+0.60s)</sub> | 3073 | 44 | 138 | 54% | 3047 | 61% |
| 0.4.3 | STC <sub>(8.0+0.08s)</sub> | 2867 | 42 | 164 | 52% | 2851 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3081 | 31 | 286 | 50% | 3077 | 55% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2942 | 33 | 256 | 51% | 2934 | 50% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2714 | 33 | 278 | 51% | 2699 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2863 | 33 | 276 | 52% | 2850 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2801 | 33 | 272 | 48% | 2816 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2498 | 33 | 304 | 48% | 2515 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2793 | 35 | 244 | 53% | 2772 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2685 | 39 | 216 | 53% | 2661 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2365 | 39 | 216 | 49% | 2375 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2673 | 39 | 200 | 50% | 2666 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2595 | 44 | 174 | 54% | 2554 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2272 | 42 | 200 | 48% | 2286 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2225 | 34 | 298 | 51% | 2223 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2109 | 37 | 258 | 52% | 2093 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1925 | 35 | 288 | 51% | 1918 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1933 | 34 | 312 | 48% | 1947 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1864 | 35 | 276 | 51% | 1847 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1697 | 33 | 314 | 46% | 1727 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1862 | 32 | 334 | 47% | 1890 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1832 | 35 | 304 | 49% | 1850 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1598 | 36 | 292 | 50% | 1594 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |