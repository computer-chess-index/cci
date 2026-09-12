# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.3 | 2026-09-04 | 2866<sub>(+152) | 3101<sub>(+158) | 3156<sub>(+74) |  |
| 0.4.2 | 2026-08-08 | 2714<sub>(+216) | 2943<sub>(+142) | 3082<sub>(+219) |  |
| 0.4.1 | 2026-07-26 | 2498<sub>(+133) | 2801<sub>(+116) | 2863<sub>(+70) |  |
| 0.4.0 | 2026-07-19 | 2365<sub>(+92) | 2685<sub>(+89) | 2793<sub>(+120) |  |
| 0.3.2 | 2026-07-06 | 2273<sub>(+new) | 2596<sub>(+new) | 2673<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1925<sub>(+228) | 2109<sub>(+245) | 2226<sub>(+293) |  |
| 0.2.8 | 2026-05-15 | 1697<sub>(+99) | 1864<sub>(+32) | 1933<sub>(+73) |  |
| 0.2.7 | 2026-05-11 | 1598 | 1832 | 1860 |  |
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

Generated: 2026-09-12 04:37:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2", "0.4.3"]
  y-axis "Elo Rating" 1500 --> 3200
  line "" [1598, 1697, 1925, 2273, 2365, 2498, 2714, 2866]
  line "STC (8.0+0.08s)" [1598, 1697, 1925, 2273, 2365, 2498, 2714, 2866]
  line "LTC (60.0+0.60s)" [1832, 1864, 2109, 2596, 2685, 2801, 2943, 3101]
  line "" [1860, 1933, 2226, 2673, 2793, 2863, 3082, 3156]
  line "VLTC (2m24s+1.12s)" [1860, 1933, 2226, 2673, 2793, 2863, 3082, 3156]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3156 | 35 | 220 | 50% | 3151 | 64% |
| 0.4.3 | LTC <sub>(60.0+0.60s)</sub> | 3101 | 32 | 268 | 54% | 3071 | 60% |
| 0.4.3 | STC <sub>(8.0+0.08s)</sub> | 2866 | 36 | 228 | 51% | 2859 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3082 | 31 | 286 | 50% | 3078 | 55% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2943 | 33 | 256 | 51% | 2935 | 50% |
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
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2596 | 44 | 174 | 54% | 2554 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2273 | 42 | 200 | 48% | 2286 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2226 | 34 | 298 | 51% | 2223 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2109 | 37 | 258 | 52% | 2093 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1925 | 35 | 288 | 51% | 1918 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1933 | 34 | 312 | 48% | 1947 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1864 | 35 | 276 | 51% | 1847 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1697 | 33 | 314 | 46% | 1727 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1860 | 32 | 334 | 47% | 1890 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1832 | 35 | 304 | 49% | 1848 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1598 | 36 | 292 | 50% | 1594 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |