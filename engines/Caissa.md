# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3411<sub>(-19) | 3621<sub>(+45) | 3667<sub>(+4) |  |
| 1.25 | 2026-04-05 | 3430 | 3576 | 3663 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3328<sub>(-66) | 3548<sub>(+27) | 3576<sub>(+133) |  |
| 1.25 | 2026-04-05 | 3394 | 3521 | 3443 |  |
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

Generated: 2026-11-17 05:36:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3430, 3411]
  line "E1: LTC (60.0+0.60s)" [3576, 3621]
  line "E1: VLTC (2m24s+1.12s)" [3663, 3667]
  line "P1: STC (8.0+0.08s)" [3394, 3328]
  line "P1: LTC (60.0+0.60s)" [3521, 3548]
  line "P1: VLTC (2m24s+1.12s)" [3443, 3576]
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
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3556 | 41 | 130 | 50% | 3553 | 96% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3443 | 41 | 138 | 50% | 3441 | 81% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3576 | 40 | 140 | 50% | 3579 | 88% |
|  |  | T1 | 3567 | 31 | 242 | 50% | 3567 | 85% |
|  |  | E1 | 3667 | 30 | 250 | 50% | 3664 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3621 | 29 | 274 | 50% | 3619 | 81% |
|  |  | P1 | 3548 | 38 | 160 | 50% | 3549 | 88% |
|  |  | T1 | 3545 | 27 | 318 | 51% | 3541 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3411 | 24 | 434 | 48% | 3422 | 70% |
|  |  | P1 | 3328 | 28 | 320 | 49% | 3337 | 70% |
|  |  | T1 | 3425 | 28 | 302 | 50% | 3422 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3571 | 23 | 420 | 50% | 3569 | 91% |
|  |  | E1 | 3663 | 63 | 68 | 63% | 3470 | 69% |
|  |  | P1 | 3443 | 100 | 24 | 65% | 3337 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3576 | 67 | 64 | 62% | 3399 | 64% |
|  |  | T1 | 3544 | 23 | 440 | 50% | 3542 | 86% |
|  |  | P1 | 3521 | 155 | 20 | 85% | 2855 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3430 | 67 | 72 | 59% | 3276 | 49% |
|  |  | T1 | 3391 | 23 | 460 | 48% | 3403 | 73% |
|  |  | P1 | 3394 | 107 | 28 | 70% | 3213 | 39% |
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