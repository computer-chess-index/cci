# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3418<sub>(+34) | 3538<sub>(+1) | 3561<sub>(-4) |  |
| 1.25 | 2026-04-05 | 3384<sub>(-10) | 3537<sub>(-5) | 3565<sub>(+6) |  |
| 1.24 | 2025-12-03 | 3394<sub>(+1) | 3542<sub>(+14) | 3559<sub>(+2) |  |
| 1.23 | 2025-08-21 | 3393<sub>(+17) | 3528<sub>(+3) | 3557<sub>(+17) |  |
| 1.22 | 2025-04-30 | 3376<sub>(+6) | 3525<sub>(+10) | 3540<sub>(-11) |  |
| 1.21 | 2024-10-27 | 3370<sub>(+8) | 3515<sub>(+18) | 3551<sub>(-2) |  |
| 1.20 | 2024-07-28 | 3362 | 3497 | 3553 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Caissa+<version>&body=###%20Engine%20name%0ACaissa%0A%0A###%20Version%0A1.26" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:36:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3362, 3370, 3376, 3393, 3394, 3384, 3418]
  line "STC (8.0+0.08s)" [3362, 3370, 3376, 3393, 3394, 3384, 3418]
  line "LTC (60.0+0.60s)" [3497, 3515, 3525, 3528, 3542, 3537, 3538]
  line "" [3553, 3551, 3540, 3557, 3559, 3565, 3561]
  line "VLTC (2m24s+1.12s)" [3553, 3551, 3540, 3557, 3559, 3565, 3561]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 31 | 242 | 50% | 3560 | 85% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 27 | 314 | 51% | 3534 | 85% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3418 | 28 | 302 | 50% | 3416 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 23 | 420 | 50% | 3563 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3537 | 23 | 440 | 50% | 3537 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3384 | 23 | 460 | 48% | 3398 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 28 | 296 | 52% | 3548 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 29 | 272 | 50% | 3541 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3394 | 21 | 534 | 50% | 3393 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 28 | 288 | 51% | 3552 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 29 | 280 | 51% | 3525 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3393 | 23 | 468 | 48% | 3405 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 24 | 388 | 50% | 3540 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 25 | 356 | 49% | 3529 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3376 | 25 | 380 | 50% | 3375 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 18 | 724 | 51% | 3544 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 15 | 1096 | 51% | 3498 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3370 | 15 | 1136 | 50% | 3370 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 36 | 176 | 51% | 3546 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 37 | 168 | 50% | 3464 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3362 | 30 | 267 | 48% | 3375 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |