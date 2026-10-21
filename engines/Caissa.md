# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3418 | 3622 | 3669 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3509 | 3727 | 3758 |  |
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

Generated: 2026-10-21 04:36:40

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
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3556 | 41 | 130 | 50% | 3553 | 96% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3443 | 41 | 138 | 50% | 3441 | 81% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3669 | 33 | 210 | 50% | 3667 | 86% |
|  |  | P1 | 3758 | 47 | 102 | 50% | 3756 | 89% |
|  |  | T1 | 3567 | 31 | 242 | 50% | 3567 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3622 | 32 | 226 | 50% | 3622 | 81% |
|  |  | P1 | 3727 | 42 | 128 | 50% | 3730 | 88% |
|  |  | T1 | 3545 | 27 | 318 | 51% | 3541 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3418 | 28 | 326 | 48% | 3429 | 71% |
|  |  | P1 | 3509 | 31 | 260 | 48% | 3525 | 70% |
|  |  | T1 | 3425 | 28 | 302 | 50% | 3422 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3571 | 23 | 420 | 50% | 3569 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3544 | 23 | 440 | 50% | 3542 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3391 | 23 | 460 | 48% | 3403 | 73% |
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