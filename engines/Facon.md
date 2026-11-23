# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2689<sub>(+325) | 3009<sub>(+262) | 3070<sub>(+204) |  |
| 1.7 | 2026-10-04 | 2364<sub>(+293) | 2747<sub>(+387) | 2866<sub>(+422) |  |
| 1.5 | 2026-05-26 | 2071 | 2360 | 2444 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2658<sub>(+362) | 2970<sub>(+261) | 3070<sub>(+269) |  |
| 1.7 | 2026-10-04 | 2296<sub>(+202) | 2709<sub>(+336) | 2801<sub>(+417) |  |
| 1.5 | 2026-05-26 | 2094 | 2373 | 2384 |  |
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

Generated: 2026-11-23 05:38:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.7", "1.8"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2071, 2364, 2689]
  line "E1: LTC (60.0+0.60s)" [2360, 2747, 3009]
  line "E1: VLTC (2m24s+1.12s)" [2444, 2866, 3070]
  line "P1: STC (8.0+0.08s)" [2094, 2296, 2658]
  line "P1: LTC (60.0+0.60s)" [2373, 2709, 2970]
  line "P1: VLTC (2m24s+1.12s)" [2384, 2801, 3070]
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
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3070 | 37 | 212 | 48% | 3085 | 45% |
|  |  | E1 | 3070 | 30 | 334 | 52% | 3056 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2970 | 34 | 254 | 53% | 2951 | 47% |
|  |  | E1 | 3009 | 31 | 338 | 49% | 3012 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2689 | 34 | 276 | 55% | 2649 | 38% |
|  |  | P1 | 2658 | 40 | 196 | 50% | 2661 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2801 | 37 | 234 | 50% | 2796 | 37% |
|  |  | E1 | 2866 | 33 | 302 | 50% | 2850 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2709 | 36 | 252 | 55% | 2645 | 36% |
|  |  | E1 | 2747 | 35 | 282 | 48% | 2762 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2296 | 39 | 228 | 55% | 2241 | 29% |
|  |  | E1 | 2364 | 33 | 312 | 53% | 2342 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2757 | 32 | 314 | 46% | 2785 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2624 | 34 | 280 | 51% | 2610 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2381 | 36 | 256 | 53% | 2354 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2511 | 32 | 330 | 50% | 2510 | 26% |
|  |  | P1 | 2384 | 49 | 144 | 48% | 2411 | 24% |
|  |  | E1 | 2444 | 41 | 208 | 51% | 2441 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2373 | 47 | 154 | 44% | 2454 | 31% |
|  |  | E1 | 2360 | 46 | 172 | 44% | 2449 | 23% |
|  |  | T1 | 2404 | 35 | 262 | 51% | 2396 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2094 | 50 | 144 | 48% | 2115 | 19% |
|  |  | E1 | 2071 | 36 | 286 | 49% | 2064 | 20% |
|  |  | T1 | 2165 | 31 | 374 | 52% | 2145 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2357 | 29 | 420 | 51% | 2345 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2298 | 31 | 380 | 53% | 2264 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2009 | 30 | 406 | 51% | 1991 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1976 | 34 | 324 | 48% | 1993 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1862 | 32 | 364 | 50% | 1859 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1520 | 32 | 378 | 50% | 1515 | 19% |