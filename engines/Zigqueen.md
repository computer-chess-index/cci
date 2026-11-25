# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3367<sub>(+37) | 3623<sub>(+64) | 3657<sub>(+35) |  |
| 6.5.0 | 2026-10-21 | 3330<sub>(+72) | 3559<sub>(+48) | 3622<sub>(+20) |  |
| 6.4.0 | 2026-10-10 | 3258<sub>(+33) | 3511<sub>(+20) | 3602<sub>(+4) |  |
| 6.3.0 | 2026-09-25 | 3225<sub>(+183) | 3491<sub>(+74) | 3598<sub>(+138) |  |
| 6.1.1 | 2026-09-03 | 3042 | 3417 | 3460 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.6.0 | 2026-11-18 | 3409<sub>(+8) | 3519<sub>(-56) | 3618<sub>(+18) |  |
| 6.5.0 | 2026-10-21 | 3401<sub>(+72) | 3575<sub>(+77) | 3600<sub>(+51) |  |
| 6.4.0 | 2026-10-10 | 3329<sub>(+123) | 3498<sub>(+49) | 3549<sub>(-22) |  |
| 6.3.0 | 2026-09-25 | 3206<sub>(+56) | 3449<sub>(+35) | 3571<sub>(+97) |  |
| 6.1.1 | 2026-09-03 | 3150 | 3414 | 3474 |  |
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

Generated: 2026-11-25 05:45:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "6.3.0", "6.4.0", "6.5.0", "6.6.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3042, 3225, 3258, 3330, 3367]
  line "E1: LTC (60.0+0.60s)" [3417, 3491, 3511, 3559, 3623]
  line "E1: VLTC (2m24s+1.12s)" [3460, 3598, 3602, 3622, 3657]
  line "P1: STC (8.0+0.08s)" [3150, 3206, 3329, 3401, 3409]
  line "P1: LTC (60.0+0.60s)" [3414, 3449, 3498, 3575, 3519]
  line "P1: VLTC (2m24s+1.12s)" [3474, 3571, 3549, 3600, 3618]
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
| 6.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3618 | 53 | 76 | 50% | 3618 | 95% |
|  |  | E1 | 3657 | 41 | 132 | 51% | 3649 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3623 | 38 | 168 | 53% | 3603 | 80% |
|  |  | P1 | 3519 | 80 | 36 | 46% | 3546 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3367 | 43 | 136 | 51% | 3360 | 74% |
|  |  | P1 | 3409 | 69 | 48 | 46% | 3437 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3600 | 50 | 92 | 50% | 3600 | 87% |
|  |  | E1 | 3622 | 37 | 172 | 52% | 3609 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3575 | 50 | 92 | 49% | 3578 | 86% |
|  |  | E1 | 3559 | 37 | 170 | 52% | 3546 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3401 | 49 | 100 | 53% | 3380 | 80% |
|  |  | E1 | 3330 | 36 | 192 | 52% | 3317 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3602 | 44 | 120 | 53% | 3584 | 85% |
|  |  | P1 | 3549 | 56 | 72 | 54% | 3522 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3511 | 47 | 108 | 50% | 3505 | 82% |
|  |  | P1 | 3498 | 65 | 56 | 56% | 3455 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3329 | 51 | 100 | 55% | 3290 | 62% |
|  |  | E1 | 3258 | 32 | 250 | 56% | 3212 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 37 | 174 | 47% | 3544 | 79% |
|  |  | P1 | 3571 | 78 | 36 | 46% | 3598 | 92% |
|  |  | E1 | 3598 | 49 | 96 | 47% | 3615 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 43 | 126 | 50% | 3488 | 82% |
|  |  | P1 | 3449 | 68 | 48 | 48% | 3463 | 92% |
|  |  | E1 | 3491 | 55 | 80 | 49% | 3499 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3258 | 41 | 147 | 53% | 3231 | 70% |
|  |  | P1 | 3206 | 55 | 88 | 41% | 3267 | 63% |
|  |  | E1 | 3225 | 60 | 70 | 46% | 3256 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3478 | 45 | 114 | 50% | 3475 | 85% |
|  |  | P1 | 3474 | 57 | 78 | 58% | 3371 | 73% |
|  |  | E1 | 3460 | 49 | 124 | 59% | 3274 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3432 | 35 | 200 | 48% | 3447 | 78% |
|  |  | P1 | 3414 | 68 | 78 | 70% | 3001 | 47% |
|  |  | E1 | 3417 | 53 | 116 | 68% | 3036 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3150 | 73 | 54 | 56% | 3071 | 56% |
|  |  | E1 | 3042 | 57 | 88 | 54% | 3006 | 58% |
|  |  | T1 | 3173 | 34 | 240 | 52% | 3160 | 57% |
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