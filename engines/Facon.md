# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2711<sub>(+300) | 3110<sub>(+299) | 3144<sub>(+223) |  |
| 1.7 | 2026-10-04 | 2411<sub>(+291) | 2811<sub>(+399) | 2921<sub>(+421) |  |
| 1.5 | 2026-05-26 | 2120 | 2412 | 2500 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8 | 2026-11-03 | 2846<sub>(+396) | 3105<sub>(+215) | 3310<sub>(+312) |  |
| 1.7 | 2026-10-04 | 2450<sub>(+214) | 2890<sub>(+348) | 2998<sub>(+442) |  |
| 1.5 | 2026-05-26 | 2236 | 2542 | 2556 |  |
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

Generated: 2026-11-05 05:38:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.7", "1.8"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2120, 2411, 2711]
  line "E1: LTC (60.0+0.60s)" [2412, 2811, 3110]
  line "E1: VLTC (2m24s+1.12s)" [2500, 2921, 3144]
  line "P1: STC (8.0+0.08s)" [2236, 2450, 2846]
  line "P1: LTC (60.0+0.60s)" [2542, 2890, 3105]
  line "P1: VLTC (2m24s+1.12s)" [2556, 2998, 3310]
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
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3310 | 68 | 68 | 46% | 3343 | 38% |
|  |  | E1 | 3144 | 49 | 120 | 58% | 3081 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3105 | 70 | 60 | 51% | 3094 | 42% |
|  |  | E1 | 3110 | 54 | 108 | 56% | 3054 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2846 | 71 | 60 | 51% | 2826 | 42% |
|  |  | E1 | 2711 | 78 | 54 | 64% | 2583 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2921 | 35 | 262 | 51% | 2915 | 32% |
|  |  | P1 | 2998 | 39 | 206 | 49% | 3002 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2811 | 36 | 262 | 50% | 2809 | 27% |
|  |  | P1 | 2890 | 37 | 236 | 56% | 2807 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2450 | 40 | 204 | 53% | 2438 | 30% |
|  |  | E1 | 2411 | 34 | 292 | 53% | 2388 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2757 | 32 | 314 | 46% | 2785 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2624 | 34 | 280 | 51% | 2610 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2381 | 36 | 256 | 53% | 2354 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2511 | 32 | 330 | 50% | 2510 | 26% |
|  |  | P1 | 2556 | 49 | 144 | 48% | 2583 | 24% |
|  |  | E1 | 2500 | 41 | 208 | 51% | 2496 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2404 | 35 | 262 | 51% | 2396 | 34% |
|  |  | P1 | 2542 | 47 | 154 | 44% | 2627 | 31% |
|  |  | E1 | 2412 | 46 | 172 | 44% | 2503 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2165 | 31 | 374 | 52% | 2145 | 22% |
|  |  | P1 | 2236 | 50 | 144 | 48% | 2257 | 19% |
|  |  | E1 | 2120 | 35 | 286 | 49% | 2111 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2357 | 29 | 420 | 51% | 2345 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2298 | 31 | 380 | 53% | 2264 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2009 | 30 | 406 | 51% | 1991 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1976 | 34 | 324 | 48% | 1993 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1862 | 32 | 364 | 50% | 1859 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1520 | 32 | 378 | 50% | 1515 | 19% |