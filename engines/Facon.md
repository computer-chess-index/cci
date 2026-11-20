# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2699<sub>(+332) | 3023<sub>(+272) | 3074<sub>(+204) |  |
| 1.7 | 2026-10-04 | 2367<sub>(+292) | 2751<sub>(+388) | 2870<sub>(+422) |  |
| 1.5 | 2026-05-26 | 2075 | 2363 | 2448 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2649<sub>(+355) | 2954<sub>(+255) | 3058<sub>(+268) |  |
| 1.7 | 2026-10-04 | 2294<sub>(+207) | 2699<sub>(+331) | 2790<sub>(+413) |  |
| 1.5 | 2026-05-26 | 2087 | 2368 | 2377 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2381<sub>(+216) | 2624<sub>(+220) | 2757<sub>(+246) |  |
| 1.5 | 2026-05-26 | 2165<sub>(+156) | 2404<sub>(+106) | 2511<sub>(+154) |  |
| 1.4 | 2026-04-25 | 2009<sub>(+489) | 2298<sub>(+436) | 2357<sub>(+381) |  |
| 1.3 | 2026-04-11 | 1520 | 1862 | 1976 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-20 05:38:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.7", "1.8"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2075, 2367, 2699]
  line "E1: LTC (60.0+0.60s)" [2363, 2751, 3023]
  line "E1: VLTC (2m24s+1.12s)" [2448, 2870, 3074]
  line "P1: STC (8.0+0.08s)" [2087, 2294, 2649]
  line "P1: LTC (60.0+0.60s)" [2368, 2699, 2954]
  line "P1: VLTC (2m24s+1.12s)" [2377, 2790, 3058]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "T1: STC (8.0+0.08s)" [1520, 2009, 2165, 2381]
  line "T1: LTC (60.0+0.60s)" [1862, 2298, 2404, 2624]
  line "T1: VLTC (2m24s+1.12s)" [1976, 2357, 2511, 2757]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3058 | 38 | 208 | 48% | 3071 | 45% |
|  |  | E1 | 3074 | 30 | 334 | 52% | 3059 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2954 | 36 | 230 | 53% | 2934 | 47% |
|  |  | E1 | 3023 | 32 | 318 | 50% | 3017 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2649 | 42 | 184 | 50% | 2651 | 36% |
|  |  | E1 | 2699 | 34 | 268 | 55% | 2649 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2790 | 37 | 234 | 50% | 2784 | 37% |
|  |  | E1 | 2870 | 33 | 302 | 50% | 2854 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2699 | 36 | 252 | 55% | 2633 | 36% |
|  |  | E1 | 2751 | 35 | 282 | 48% | 2766 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2294 | 40 | 220 | 55% | 2237 | 29% |
|  |  | E1 | 2367 | 33 | 312 | 53% | 2346 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2757 | 32 | 314 | 46% | 2785 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2624 | 34 | 280 | 51% | 2610 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2381 | 36 | 256 | 53% | 2354 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2511 | 32 | 330 | 50% | 2510 | 26% |
|  |  | P1 | 2377 | 49 | 144 | 48% | 2404 | 24% |
|  |  | E1 | 2448 | 41 | 208 | 51% | 2444 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2404 | 35 | 262 | 51% | 2396 | 34% |
|  |  | P1 | 2368 | 47 | 154 | 44% | 2448 | 31% |
|  |  | E1 | 2363 | 46 | 172 | 44% | 2453 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2165 | 31 | 374 | 52% | 2145 | 22% |
|  |  | P1 | 2087 | 50 | 144 | 48% | 2109 | 19% |
|  |  | E1 | 2075 | 36 | 286 | 49% | 2067 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2357 | 29 | 420 | 51% | 2345 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2298 | 31 | 380 | 53% | 2264 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2009 | 30 | 406 | 51% | 1991 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1976 | 34 | 324 | 48% | 1993 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1862 | 32 | 364 | 50% | 1859 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1520 | 32 | 378 | 50% | 1515 | 19% |