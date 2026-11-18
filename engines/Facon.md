# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2696<sub>(+333) | 3021<sub>(+275) | 3065<sub>(+199) |  |
| 1.7 | 2026-10-04 | 2363<sub>(+292) | 2746<sub>(+388) | 2866<sub>(+424) |  |
| 1.5 | 2026-05-26 | 2071 | 2358 | 2442 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2647<sub>(+359) | 2947<sub>(+252) | 3055<sub>(+270) |  |
| 1.7 | 2026-10-04 | 2288<sub>(+202) | 2695<sub>(+332) | 2785<sub>(+413) |  |
| 1.5 | 2026-05-26 | 2086 | 2363 | 2372 |  |
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

Generated: 2026-11-18 05:38:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.7", "1.8"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2071, 2363, 2696]
  line "E1: LTC (60.0+0.60s)" [2358, 2746, 3021]
  line "E1: VLTC (2m24s+1.12s)" [2442, 2866, 3065]
  line "P1: STC (8.0+0.08s)" [2086, 2288, 2647]
  line "P1: LTC (60.0+0.60s)" [2363, 2695, 2947]
  line "P1: VLTC (2m24s+1.12s)" [2372, 2785, 3055]
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
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3055 | 38 | 204 | 48% | 3069 | 45% |
|  |  | E1 | 3065 | 30 | 318 | 51% | 3056 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2947 | 37 | 214 | 54% | 2915 | 47% |
|  |  | E1 | 3021 | 32 | 310 | 51% | 3013 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2647 | 42 | 180 | 50% | 2646 | 37% |
|  |  | E1 | 2696 | 35 | 260 | 56% | 2643 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2785 | 37 | 234 | 50% | 2778 | 37% |
|  |  | E1 | 2866 | 33 | 302 | 50% | 2851 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2695 | 36 | 248 | 55% | 2626 | 36% |
|  |  | E1 | 2746 | 35 | 282 | 48% | 2761 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2288 | 40 | 220 | 55% | 2232 | 29% |
|  |  | E1 | 2363 | 33 | 312 | 53% | 2341 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2757 | 32 | 314 | 46% | 2785 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2624 | 34 | 280 | 51% | 2610 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2381 | 36 | 256 | 53% | 2354 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2511 | 32 | 330 | 50% | 2510 | 26% |
|  |  | P1 | 2372 | 49 | 144 | 48% | 2399 | 24% |
|  |  | E1 | 2442 | 41 | 208 | 51% | 2438 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2404 | 35 | 262 | 51% | 2396 | 34% |
|  |  | P1 | 2363 | 47 | 154 | 44% | 2444 | 31% |
|  |  | E1 | 2358 | 46 | 172 | 44% | 2448 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2086 | 50 | 144 | 48% | 2106 | 19% |
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