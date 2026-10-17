# Engine: Viridithas

Author: Cosmo Bobak

Home: https://github.com/cosmobobak/viridithas

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20.0.0 | 2026-06-27 | 3398 | 3607 | 3634 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20.0.0 | 2026-06-27 | 3614 | 3741 | 3780 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20.0.0 | 2026-06-27 | 3461<sub>(+44) | 3568<sub>(+27) | 3596<sub>(+29) |  |
| 19.0.1 | 2026-01-06 | 3417<sub>(-3) | 3541<sub>(-5) | 3567<sub>(-17) |  |
| 19.0.0 | 2026-01-04 | 3420<sub>(+19) | 3546<sub>(+20) | 3584<sub>(+38) |  |
| 18.0.0 | 2025-08-25 | 3401<sub>(+58) | 3526<sub>(+32) | 3546<sub>(+16) |  |
| 17.0.0 | 2025-04-10 | 3343<sub>(+2) | 3494<sub>(-9) | 3530<sub>(+2) |  |
| 16.0.0 | 2025-01-27 | 3341<sub>(+38) | 3503<sub>(+9) | 3528<sub>(+2) |  |
| 15.0.0 | 2024-10-13 | 3303<sub>(+32) | 3494<sub>(+29) | 3526<sub>(+19) |  |
| 14.0.1 | 2024-08-15 | 3271<sub>(+12) | 3465<sub>(+20) | 3507<sub>(+60) |  |
| 13.0.0 | 2024-06-26 | 3259<sub>(+43) | 3445<sub>(+50) | 3447<sub>(+42) |  |
| 12.0.0 | 2024-03-01 | 3216 | 3395 | 3405 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Viridithas+<version>&body=###%20Engine%20name%0AViridithas%0A%0A###%20Version%0A20.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-17 04:44:24

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["12.0.0", "13.0.0", "14.0.1", "15.0.0", "16.0.0", "17.0.0", "18.0.0", "19.0.0", "19.0.1", "20.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3216, 3259, 3271, 3303, 3341, 3343, 3401, 3420, 3417, 3461]
  line "T1: LTC (60.0+0.60s)" [3395, 3445, 3465, 3494, 3503, 3494, 3526, 3546, 3541, 3568]
  line "T1: VLTC (2m24s+1.12s)" [3405, 3447, 3507, 3526, 3528, 3530, 3546, 3584, 3567, 3596]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3634 | 35 | 188 | 50% | 3633 | 90% |
|  |  | T1 | 3596 | 28 | 290 | 52% | 3584 | 88% |
|  |  | P1 | 3780 | 48 | 96 | 52% | 3769 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3741 | 41 | 136 | 50% | 3738 | 86% |
|  |  | E1 | 3607 | 36 | 180 | 50% | 3607 | 85% |
|  |  | T1 | 3568 | 23 | 422 | 49% | 3575 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3614 | 39 | 156 | 48% | 3625 | 80% |
|  |  | E1 | 3398 | 29 | 288 | 45% | 3432 | 74% |
|  |  | T1 | 3461 | 25 | 372 | 49% | 3467 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 19.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3567 | 25 | 364 | 51% | 3563 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3541 | 25 | 358 | 49% | 3546 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3417 | 22 | 522 | 50% | 3416 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 19.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3584 | 47 | 102 | 50% | 3582 | 93% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3546 | 35 | 184 | 51% | 3541 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3420 | 43 | 132 | 50% | 3420 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 18.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3546 | 25 | 372 | 50% | 3545 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3526 | 25 | 364 | 51% | 3521 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3401 | 24 | 416 | 49% | 3405 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 17.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3530 | 23 | 420 | 50% | 3529 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3494 | 25 | 388 | 50% | 3497 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3343 | 25 | 392 | 50% | 3345 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3528 | 19 | 632 | 50% | 3525 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3503 | 19 | 652 | 49% | 3509 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3341 | 20 | 616 | 49% | 3348 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3526 | 16 | 880 | 50% | 3525 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3494 | 17 | 840 | 50% | 3494 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3303 | 17 | 848 | 50% | 3303 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 14.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3507 | 31 | 240 | 52% | 3492 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3465 | 31 | 236 | 49% | 3475 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3271 | 28 | 352 | 54% | 3239 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 13.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3447 | 31 | 248 | 50% | 3449 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3445 | 36 | 192 | 51% | 3441 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3259 | 33 | 232 | 50% | 3259 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 12.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3405 | 37 | 186 | 48% | 3417 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3395 | 35 | 200 | 51% | 3387 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3216 | 39 | 172 | 49% | 3227 | 60% |