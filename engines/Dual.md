# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.2 | 2026-08-08 | 2705<sub>(+210) | 2935<sub>(+136) | 3078<sub>(+216) |  |
| 0.4.1 | 2026-07-26 | 2495<sub>(+132) | 2799<sub>(+117) | 2862<sub>(+72) |  |
| 0.4.0 | 2026-07-19 | 2363<sub>(+92) | 2682<sub>(+89) | 2790<sub>(+120) |  |
| 0.3.2 | 2026-07-06 | 2271<sub>(+new) | 2593<sub>(+new) | 2670<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1924<sub>(+227) | 2107<sub>(+244) | 2223<sub>(+291) |  |
| 0.2.8 | 2026-05-15 | 1697<sub>(+100) | 1863<sub>(+31) | 1932<sub>(+72) |  |
| 0.2.7 | 2026-05-11 | 1597 | 1832 | 1860 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.4.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-28 06:24:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2"]
  y-axis "Elo Rating" 1500 --> 3100
  line "" [1597, 1697, 1924, 2271, 2363, 2495, 2705]
  line "STC (8.0+0.08s)" [1597, 1697, 1924, 2271, 2363, 2495, 2705]
  line "LTC (60.0+0.60s)" [1832, 1863, 2107, 2593, 2682, 2799, 2935]
  line "" [1860, 1932, 2223, 2670, 2790, 2862, 3078]
  line "VLTC (2m24s+1.12s)" [1860, 1932, 2223, 2670, 2790, 2862, 3078]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3078 | 32 | 262 | 50% | 3074 | 56% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 34 | 248 | 50% | 2931 | 49% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2705 | 34 | 258 | 51% | 2699 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 33 | 276 | 52% | 2847 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2799 | 33 | 272 | 48% | 2813 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2495 | 33 | 304 | 48% | 2512 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2790 | 35 | 244 | 53% | 2769 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2682 | 39 | 216 | 53% | 2660 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2363 | 39 | 216 | 49% | 2372 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2670 | 39 | 200 | 50% | 2665 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2593 | 44 | 174 | 54% | 2552 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2271 | 42 | 200 | 48% | 2283 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2223 | 34 | 298 | 51% | 2221 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2107 | 37 | 258 | 52% | 2090 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1924 | 35 | 288 | 51% | 1917 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1932 | 34 | 312 | 48% | 1945 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1863 | 35 | 276 | 51% | 1845 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1697 | 33 | 314 | 46% | 1727 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1860 | 32 | 334 | 47% | 1889 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1832 | 35 | 304 | 49% | 1848 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1597 | 36 | 292 | 50% | 1593 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |