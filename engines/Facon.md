# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2684<sub>(+320) | 3002<sub>(+256) | 3059<sub>(+190) |  |
| 1.7 | 2026-10-04 | 2364<sub>(+289) | 2746<sub>(+382) | 2869<sub>(+421) |  |
| 1.5 | 2026-05-26 | 2075 | 2364 | 2448 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2668<sub>(+347) | 2965<sub>(+245) | 3075<sub>(+260) |  |
| 1.7 | 2026-10-04 | 2321<sub>(+214) | 2720<sub>(+333) | 2815<sub>(+419) |  |
| 1.5 | 2026-05-26 | 2107 | 2387 | 2396 |  |
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

Generated: 2026-11-28 05:38:30

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.7", "1.8"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2075, 2364, 2684]
  line "E1: LTC (60.0+0.60s)" [2364, 2746, 3002]
  line "E1: VLTC (2m24s+1.12s)" [2448, 2869, 3059]
  line "P1: STC (8.0+0.08s)" [2107, 2321, 2668]
  line "P1: LTC (60.0+0.60s)" [2387, 2720, 2965]
  line "P1: VLTC (2m24s+1.12s)" [2396, 2815, 3075]
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
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3059 | 29 | 350 | 51% | 3055 | 47% |
|  |  | P1 | 3075 | 36 | 228 | 47% | 3098 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3002 | 29 | 374 | 49% | 3009 | 38% |
|  |  | P1 | 2965 | 31 | 310 | 50% | 2965 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2668 | 38 | 216 | 50% | 2673 | 36% |
|  |  | E1 | 2684 | 31 | 320 | 53% | 2655 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2815 | 37 | 238 | 50% | 2808 | 37% |
|  |  | E1 | 2869 | 33 | 314 | 51% | 2847 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2720 | 36 | 256 | 55% | 2655 | 36% |
|  |  | E1 | 2746 | 35 | 286 | 48% | 2762 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2321 | 38 | 236 | 56% | 2256 | 28% |
|  |  | E1 | 2364 | 32 | 324 | 52% | 2348 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2757 | 32 | 314 | 46% | 2785 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2624 | 34 | 280 | 51% | 2610 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2381 | 36 | 256 | 53% | 2354 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2396 | 49 | 144 | 48% | 2425 | 24% |
|  |  | E1 | 2448 | 41 | 208 | 51% | 2445 | 25% |
|  |  | T1 | 2511 | 32 | 330 | 50% | 2510 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2364 | 46 | 172 | 44% | 2453 | 23% |
|  |  | T1 | 2404 | 35 | 262 | 51% | 2396 | 34% |
|  |  | P1 | 2387 | 47 | 154 | 44% | 2466 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2075 | 36 | 286 | 49% | 2068 | 20% |
|  |  | T1 | 2165 | 31 | 374 | 52% | 2145 | 22% |
|  |  | P1 | 2107 | 50 | 144 | 48% | 2129 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2357 | 29 | 420 | 51% | 2345 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2298 | 31 | 380 | 53% | 2264 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2009 | 30 | 406 | 51% | 1991 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1976 | 34 | 324 | 48% | 1993 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1862 | 32 | 364 | 50% | 1859 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1520 | 32 | 378 | 50% | 1515 | 19% |