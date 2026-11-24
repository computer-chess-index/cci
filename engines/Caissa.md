# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-19 | 3487<sub>(+82) | 3640<sub>(+26) | 3675<sub>(+19) |  |
| 1.26 | 2026-08-09 | 3405<sub>(-16) | 3614<sub>(+45) | 3656<sub>(0) |  |
| 1.25 | 2026-04-05 | 3421 | 3569 | 3656 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3348<sub>(-68) | 3559<sub>(-19) | 3588<sub>(+71) |  |
| 1.25 | 2026-04-05 | 3416 | 3578 | 3517 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-19 | 3443<sub>(+18) | 3556<sub>(+11) | 3580<sub>(+13) |  |
| 1.26 | 2026-08-09 | 3425<sub>(+34) | 3545<sub>(+1) | 3567<sub>(-4) |  |
| 1.25 | 2026-04-05 | 3391<sub>(-10) | 3544<sub>(-5) | 3571<sub>(+6) |  |
| 1.24 | 2025-12-03 | 3401<sub>(+2) | 3549<sub>(+15) | 3565<sub>(+2) |  |
| 1.23 | 2025-08-21 | 3399<sub>(+17) | 3534<sub>(+4) | 3563<sub>(+18) |  |
| 1.22 | 2025-04-30 | 3382<sub>(+7) | 3530<sub>(+8) | 3545<sub>(-12) |  |
| 1.21 | 2024-10-27 | 3375<sub>(+7) | 3522<sub>(+19) | 3557<sub>(-2) |  |
| 1.20 | 2024-07-28 | 3368 | 3503 | 3559 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Caissa+<version>&body=###%20Engine%20name%0ACaissa%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:36:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.25", "1.26", "2.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3421, 3405, 3487]
  line "E1: LTC (60.0+0.60s)" [3569, 3614, 3640]
  line "E1: VLTC (2m24s+1.12s)" [3656, 3656, 3675]
  line "P1: STC (8.0+0.08s)" [3416, 3348]
  line "P1: LTC (60.0+0.60s)" [3578, 3559]
  line "P1: VLTC (2m24s+1.12s)" [3517, 3588]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26", "2.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3368, 3375, 3382, 3399, 3401, 3391, 3425, 3443]
  line "T1: LTC (60.0+0.60s)" [3503, 3522, 3530, 3534, 3549, 3544, 3545, 3556]
  line "T1: VLTC (2m24s+1.12s)" [3559, 3557, 3545, 3563, 3565, 3571, 3567, 3580]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3580 | 40 | 144 | 51% | 3573 | 88% |
|  |  | E1 | 3675 | 40 | 140 | 49% | 3680 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3561 | 207 | 4 | 50% | 3561 | 100% |
|  |  | T1 | 3556 | 41 | 130 | 50% | 3553 | 96% |
|  |  | E1 | 3640 | 37 | 170 | 52% | 3623 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3370 | 50 | 96 | 49% | 3375 | 77% |
|  |  | T1 | 3443 | 41 | 138 | 50% | 3441 | 81% |
|  |  | E1 | 3487 | 43 | 128 | 52% | 3476 | 78% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3588 | 40 | 140 | 50% | 3591 | 88% |
|  |  | T1 | 3567 | 31 | 242 | 50% | 3567 | 85% |
|  |  | E1 | 3656 | 29 | 268 | 50% | 3653 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3614 | 28 | 298 | 50% | 3613 | 81% |
|  |  | P1 | 3559 | 37 | 164 | 49% | 3563 | 88% |
|  |  | T1 | 3545 | 27 | 318 | 51% | 3541 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3405 | 24 | 442 | 48% | 3417 | 70% |
|  |  | P1 | 3348 | 28 | 324 | 49% | 3357 | 71% |
|  |  | T1 | 3425 | 28 | 302 | 50% | 3422 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3571 | 23 | 420 | 50% | 3569 | 91% |
|  |  | E1 | 3656 | 63 | 68 | 63% | 3463 | 69% |
|  |  | P1 | 3517 | 89 | 32 | 66% | 3401 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3569 | 67 | 64 | 62% | 3393 | 64% |
|  |  | T1 | 3544 | 23 | 440 | 50% | 3542 | 86% |
|  |  | P1 | 3578 | 103 | 32 | 73% | 3116 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3421 | 62 | 80 | 58% | 3287 | 53% |
|  |  | T1 | 3391 | 23 | 460 | 48% | 3403 | 73% |
|  |  | P1 | 3416 | 97 | 32 | 67% | 3258 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3565 | 28 | 296 | 52% | 3555 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3549 | 29 | 272 | 50% | 3546 | 92% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3401 | 21 | 534 | 50% | 3399 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 28 | 288 | 51% | 3557 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3534 | 29 | 280 | 51% | 3532 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3399 | 23 | 468 | 48% | 3411 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3545 | 24 | 388 | 50% | 3545 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3530 | 25 | 356 | 49% | 3534 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3382 | 25 | 380 | 50% | 3380 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3557 | 18 | 724 | 51% | 3551 | 92% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3522 | 15 | 1096 | 51% | 3503 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3375 | 15 | 1136 | 50% | 3376 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3559 | 36 | 176 | 51% | 3553 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3503 | 37 | 168 | 50% | 3471 | 89% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3368 | 30 | 267 | 48% | 3382 | 75% |