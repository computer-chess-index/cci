# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.3 | 2026-09-04 | 2873<sub>(+158) | 3104<sub>(+158) | 3159<sub>(+74) |  |
| 0.4.2 | 2026-08-08 | 2715<sub>(+216) | 2946<sub>(+142) | 3085<sub>(+219) |  |
| 0.4.1 | 2026-07-26 | 2499<sub>(+132) | 2804<sub>(+117) | 2866<sub>(+71) |  |
| 0.4.0 | 2026-07-19 | 2367<sub>(+92) | 2687<sub>(+90) | 2795<sub>(+121) |  |
| 0.3.2 | 2026-07-06 | 2275<sub>(+new) | 2597<sub>(+new) | 2674<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1926<sub>(+228) | 2110<sub>(+244) | 2228<sub>(+293) |  |
| 0.2.8 | 2026-05-15 | 1698<sub>(+98) | 1866<sub>(+33) | 1935<sub>(+73) |  |
| 0.2.7 | 2026-05-11 | 1600 | 1833 | 1862 |  |
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

Generated: 2026-09-16 04:37:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2", "0.4.3"]
  y-axis "Elo Rating" 1600 --> 3200
  line "" [1600, 1698, 1926, 2275, 2367, 2499, 2715, 2873]
  line "STC (8.0+0.08s)" [1600, 1698, 1926, 2275, 2367, 2499, 2715, 2873]
  line "LTC (60.0+0.60s)" [1833, 1866, 2110, 2597, 2687, 2804, 2946, 3104]
  line "" [1862, 1935, 2228, 2674, 2795, 2866, 3085, 3159]
  line "VLTC (2m24s+1.12s)" [1862, 1935, 2228, 2674, 2795, 2866, 3085, 3159]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3159 | 34 | 232 | 51% | 3152 | 64% |
| 0.4.3 | LTC <sub>(60.0+0.60s)</sub> | 3104 | 30 | 298 | 53% | 3079 | 60% |
| 0.4.3 | STC <sub>(8.0+0.08s)</sub> | 2873 | 36 | 232 | 52% | 2861 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3085 | 31 | 286 | 50% | 3081 | 55% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2946 | 33 | 256 | 51% | 2938 | 50% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2715 | 33 | 278 | 51% | 2701 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2866 | 33 | 276 | 52% | 2853 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 33 | 272 | 48% | 2819 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2499 | 33 | 304 | 48% | 2516 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2795 | 35 | 244 | 53% | 2773 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2687 | 39 | 216 | 53% | 2664 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2367 | 39 | 216 | 49% | 2376 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2674 | 39 | 200 | 50% | 2668 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2597 | 44 | 174 | 54% | 2556 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2275 | 42 | 200 | 48% | 2287 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2228 | 34 | 298 | 51% | 2225 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2110 | 37 | 258 | 52% | 2094 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1926 | 35 | 288 | 51% | 1920 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1935 | 34 | 312 | 48% | 1948 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1866 | 35 | 276 | 51% | 1848 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1698 | 33 | 314 | 46% | 1728 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1862 | 32 | 334 | 47% | 1891 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1833 | 35 | 304 | 49% | 1851 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1600 | 36 | 292 | 50% | 1596 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |