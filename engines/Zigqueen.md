# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3362<sub>(+37) | 3615<sub>(+62) | 3653<sub>(+36) |  |
| 6.5.0 | 2026-10-21 | 3325<sub>(+73) | 3553<sub>(+47) | 3617<sub>(+19) |  |
| 6.4.0 | 2026-10-10 | 3252<sub>(+31) | 3506<sub>(+20) | 3598<sub>(+6) |  |
| 6.3.0 | 2026-09-25 | 3221<sub>(+185) | 3486<sub>(+75) | 3592<sub>(+137) |  |
| 6.1.1 | 2026-09-03 | 3036 | 3411 | 3455 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3409<sub>(+8) | 3519<sub>(-57) | 3619<sub>(+19) |  |
| 6.5.0 | 2026-10-21 | 3401<sub>(+73) | 3576<sub>(+78) | 3600<sub>(+49) |  |
| 6.4.0 | 2026-10-10 | 3328<sub>(+123) | 3498<sub>(+49) | 3551<sub>(-20) |  |
| 6.3.0 | 2026-09-25 | 3205<sub>(+57) | 3449<sub>(+36) | 3571<sub>(+97) |  |
| 6.1.1 | 2026-09-03 | 3148 | 3413 | 3474 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3.0 | 2026-09-25 | 3258<sub>(+85) | 3487<sub>(+55) | 3525<sub>(+47) |  |
| 6.1.1 | 2026-09-03 | 3173<sub>(-27) | 3432<sub>(+81) | 3478<sub>(-13) |  |
| 6.1.0 | 2026-08-31 | 3200<sub>(+75) | 3351<sub>(-12) | 3491<sub>(+88) |  |
| 6.0.0 | 2026-08-19 | 3125<sub>(+116) | 3363<sub>(+37) | 3403<sub>(+17) |  |
| 5.8.3 | 2026-07-25 | 3009 | 3326 | 3386 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zigqueen+<version>&body=###%20Engine%20name%0AZigqueen%0A%0A###%20Version%0A6.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:45:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "6.3.0", "6.4.0", "6.5.0", "6.6.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3036, 3221, 3252, 3325, 3362]
  line "E1: LTC (60.0+0.60s)" [3411, 3486, 3506, 3553, 3615]
  line "E1: VLTC (2m24s+1.12s)" [3455, 3592, 3598, 3617, 3653]
  line "P1: STC (8.0+0.08s)" [3148, 3205, 3328, 3401, 3409]
  line "P1: LTC (60.0+0.60s)" [3413, 3449, 3498, 3576, 3519]
  line "P1: VLTC (2m24s+1.12s)" [3474, 3571, 3551, 3600, 3619]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0", "6.1.0", "6.1.1", "6.3.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "T1: STC (8.0+0.08s)" [3009, 3125, 3200, 3173, 3258]
  line "T1: LTC (60.0+0.60s)" [3326, 3363, 3351, 3432, 3487]
  line "T1: VLTC (2m24s+1.12s)" [3386, 3403, 3491, 3478, 3525]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3619 | 53 | 76 | 50% | 3618 | 95% |
|  |  | E1 | 3653 | 41 | 132 | 51% | 3645 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3519 | 80 | 36 | 46% | 3548 | 81% |
|  |  | E1 | 3615 | 37 | 174 | 52% | 3600 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3409 | 69 | 48 | 46% | 3436 | 83% |
|  |  | E1 | 3362 | 43 | 136 | 51% | 3355 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3617 | 37 | 172 | 52% | 3603 | 84% |
|  |  | P1 | 3600 | 50 | 92 | 50% | 3600 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3553 | 37 | 170 | 52% | 3542 | 82% |
|  |  | P1 | 3576 | 50 | 92 | 49% | 3578 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3325 | 36 | 192 | 52% | 3312 | 72% |
|  |  | P1 | 3401 | 49 | 100 | 53% | 3379 | 80% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3551 | 56 | 72 | 54% | 3522 | 89% |
|  |  | E1 | 3598 | 44 | 120 | 53% | 3580 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3498 | 65 | 56 | 56% | 3455 | 80% |
|  |  | E1 | 3506 | 47 | 108 | 50% | 3501 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3328 | 51 | 100 | 55% | 3289 | 62% |
|  |  | E1 | 3252 | 32 | 250 | 56% | 3206 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3571 | 78 | 36 | 46% | 3598 | 92% |
|  |  | E1 | 3592 | 49 | 96 | 47% | 3610 | 84% |
|  |  | T1 | 3525 | 37 | 174 | 47% | 3544 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3486 | 54 | 84 | 49% | 3494 | 76% |
|  |  | T1 | 3487 | 43 | 126 | 50% | 3488 | 82% |
|  |  | P1 | 3449 | 65 | 52 | 48% | 3463 | 92% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3221 | 60 | 70 | 46% | 3251 | 69% |
|  |  | T1 | 3258 | 41 | 147 | 53% | 3231 | 70% |
|  |  | P1 | 3205 | 55 | 88 | 41% | 3266 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3478 | 45 | 114 | 50% | 3475 | 85% |
|  |  | P1 | 3474 | 57 | 78 | 58% | 3370 | 73% |
|  |  | E1 | 3455 | 49 | 124 | 59% | 3270 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3432 | 35 | 200 | 48% | 3447 | 78% |
|  |  | P1 | 3413 | 68 | 78 | 70% | 3000 | 47% |
|  |  | E1 | 3411 | 53 | 116 | 68% | 3033 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3173 | 34 | 240 | 52% | 3160 | 57% |
|  |  | P1 | 3148 | 73 | 54 | 56% | 3069 | 56% |
|  |  | E1 | 3036 | 57 | 88 | 54% | 3001 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3491 | 41 | 140 | 53% | 3472 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3351 | 47 | 112 | 49% | 3357 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3200 | 44 | 136 | 49% | 3209 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3403 | 45 | 120 | 50% | 3399 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3363 | 39 | 160 | 50% | 3362 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3125 | 45 | 132 | 50% | 3123 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3386 | 33 | 228 | 48% | 3399 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3326 | 40 | 160 | 51% | 3318 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3009 | 38 | 188 | 54% | 2977 | 57% |