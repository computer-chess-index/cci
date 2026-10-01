# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.3 | 2026-09-04 | 2880<sub>(+162) | 3102<sub>(+155) | 3160<sub>(+74) |  |
| 0.4.2 | 2026-08-08 | 2718<sub>(+216) | 2947<sub>(+142) | 3086<sub>(+217) |  |
| 0.4.1 | 2026-07-26 | 2502<sub>(+134) | 2805<sub>(+116) | 2869<sub>(+72) |  |
| 0.4.0 | 2026-07-19 | 2368<sub>(+92) | 2689<sub>(+89) | 2797<sub>(+120) |  |
| 0.3.2 | 2026-07-06 | 2276<sub>(+new) | 2600<sub>(+new) | 2677<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1928<sub>(+227) | 2113<sub>(+246) | 2229<sub>(+293) |  |
| 0.2.8 | 2026-05-15 | 1701<sub>(+99) | 1867<sub>(+31) | 1936<sub>(+72) |  |
| 0.2.7 | 2026-05-11 | 1602 | 1836 | 1864 |  |
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

Generated: 2026-10-01 04:38:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2", "0.4.3"]
  y-axis "Elo Rating" 1600 --> 3200
  line "" [1602, 1701, 1928, 2276, 2368, 2502, 2718, 2880]
  line "STC (8.0+0.08s)" [1602, 1701, 1928, 2276, 2368, 2502, 2718, 2880]
  line "LTC (60.0+0.60s)" [1836, 1867, 2113, 2600, 2689, 2805, 2947, 3102]
  line "" [1864, 1936, 2229, 2677, 2797, 2869, 3086, 3160]
  line "VLTC (2m24s+1.12s)" [1864, 1936, 2229, 2677, 2797, 2869, 3086, 3160]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 33 | 244 | 50% | 3156 | 65% |
| 0.4.3 | LTC <sub>(60.0+0.60s)</sub> | 3102 | 29 | 322 | 52% | 3085 | 60% |
| 0.4.3 | STC <sub>(8.0+0.08s)</sub> | 2880 | 35 | 240 | 52% | 2865 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3086 | 31 | 286 | 50% | 3083 | 55% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2947 | 33 | 256 | 51% | 2939 | 50% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2718 | 33 | 278 | 51% | 2703 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2869 | 33 | 276 | 52% | 2854 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2805 | 33 | 272 | 48% | 2822 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2502 | 33 | 304 | 48% | 2519 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2797 | 35 | 244 | 53% | 2776 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2689 | 39 | 216 | 53% | 2665 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2368 | 39 | 216 | 49% | 2379 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2677 | 39 | 200 | 50% | 2670 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2600 | 44 | 174 | 54% | 2558 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2276 | 42 | 200 | 48% | 2288 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2229 | 34 | 298 | 51% | 2228 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2113 | 37 | 258 | 52% | 2095 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1928 | 35 | 288 | 51% | 1922 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1936 | 34 | 312 | 48% | 1951 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1867 | 35 | 276 | 51% | 1850 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1701 | 33 | 314 | 46% | 1731 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1864 | 32 | 334 | 47% | 1893 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1836 | 35 | 304 | 49% | 1852 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1602 | 36 | 292 | 50% | 1597 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |