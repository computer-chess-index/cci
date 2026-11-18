# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3437<sub>(+293) | 3646<sub>(+46) | 3672<sub>(0) |  |
| 0.5.2 | 2026-07-12 | 3144 | 3600 | 3672 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3429<sub>(+169) | 3586<sub>(+106) | 3609<sub>(+88) |  |
| 0.5.2 | 2026-07-12 | 3260 | 3480 | 3521 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3441<sub>(+51) | 3568<sub>(+13) | 3579<sub>(+7) |  |
| 0.5.2 | 2026-07-12 | 3390<sub>(+20) | 3555<sub>(+10) | 3572<sub>(-6) |  |
| 0.5.1 | 2026-07-08 | 3370<sub>(-44) | 3545<sub>(+4) | 3578<sub>(-14) |  |
| 0.5.0 | 2026-07-04 | 3414<sub>(+50) | 3541<sub>(+53) | 3592<sub>(+73) |  |
| 0.4.1 | 2025-12-05 | 3364<sub>(+43) | 3488<sub>(-3) | 3519<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3321 | 3491 | 3538 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cinder+<version>&body=###%20Engine%20name%0ACinder%0A%0A###%20Version%0A0.6.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:37:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3144, 3437]
  line "E1: LTC (60.0+0.60s)" [3600, 3646]
  line "E1: VLTC (2m24s+1.12s)" [3672, 3672]
  line "P1: STC (8.0+0.08s)" [3260, 3429]
  line "P1: LTC (60.0+0.60s)" [3480, 3586]
  line "P1: VLTC (2m24s+1.12s)" [3521, 3609]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3321, 3364, 3414, 3370, 3390, 3441]
  line "T1: LTC (60.0+0.60s)" [3491, 3488, 3541, 3545, 3555, 3568]
  line "T1: VLTC (2m24s+1.12s)" [3538, 3519, 3592, 3578, 3572, 3579]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3672 | 32 | 222 | 50% | 3671 | 90% |
|  |  | T1 | 3579 | 32 | 220 | 51% | 3573 | 92% |
|  |  | P1 | 3609 | 37 | 170 | 52% | 3595 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3568 | 29 | 276 | 51% | 3563 | 88% |
|  |  | P1 | 3586 | 40 | 140 | 50% | 3583 | 91% |
|  |  | E1 | 3646 | 30 | 262 | 50% | 3644 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3441 | 27 | 330 | 50% | 3443 | 76% |
|  |  | P1 | 3429 | 35 | 200 | 51% | 3407 | 80% |
|  |  | E1 | 3437 | 24 | 420 | 48% | 3452 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3572 | 29 | 264 | 50% | 3572 | 91% |
|  |  | P1 | 3521 | 126 | 20 | 73% | 3231 | 55% |
|  |  | E1 | 3672 | 68 | 64 | 63% | 3379 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3555 | 25 | 354 | 51% | 3549 | 91% |
|  |  | P1 | 3480 | 106 | 36 | 79% | 2932 | 42% |
|  |  | E1 | 3600 | 72 | 56 | 63% | 3429 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3390 | 27 | 322 | 49% | 3399 | 83% |
|  |  | P1 | 3260 | 82 | 56 | 78% | 2813 | 45% |
|  |  | E1 | 3144 | 58 | 108 | 75% | 2790 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3578 | 39 | 152 | 49% | 3584 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3545 | 43 | 120 | 50% | 3545 | 93% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3370 | 44 | 124 | 49% | 3378 | 78% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3592 | 44 | 118 | 50% | 3588 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3541 | 44 | 120 | 52% | 3530 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3414 | 35 | 192 | 48% | 3426 | 80% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3519 | 23 | 424 | 50% | 3518 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3488 | 25 | 368 | 50% | 3488 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3364 | 21 | 564 | 49% | 3371 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3538 | 43 | 128 | 54% | 3503 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3491 | 50 | 108 | 56% | 3386 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3321 | 68 | 72 | 65% | 3073 | 51% |