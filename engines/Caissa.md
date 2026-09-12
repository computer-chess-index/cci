# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3416<sub>(+33) | 3536<sub>(0) | 3559<sub>(-4) |  |
| 1.25 | 2026-04-05 | 3383<sub>(-10) | 3536<sub>(-5) | 3563<sub>(+6) |  |
| 1.24 | 2025-12-03 | 3393<sub>(+2) | 3541<sub>(+15) | 3557<sub>(+1) |  |
| 1.23 | 2025-08-21 | 3391<sub>(+16) | 3526<sub>(+4) | 3556<sub>(+18) |  |
| 1.22 | 2025-04-30 | 3375<sub>(+8) | 3522<sub>(+8) | 3538<sub>(-11) |  |
| 1.21 | 2024-10-27 | 3367<sub>(+7) | 3514<sub>(+19) | 3549<sub>(-2) |  |
| 1.20 | 2024-07-28 | 3360 | 3495 | 3551 |  |
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

Generated: 2026-09-12 04:36:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3360, 3367, 3375, 3391, 3393, 3383, 3416]
  line "STC (8.0+0.08s)" [3360, 3367, 3375, 3391, 3393, 3383, 3416]
  line "LTC (60.0+0.60s)" [3495, 3514, 3522, 3526, 3541, 3536, 3536]
  line "" [3551, 3549, 3538, 3556, 3557, 3563, 3559]
  line "VLTC (2m24s+1.12s)" [3551, 3549, 3538, 3556, 3557, 3563, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 32 | 234 | 50% | 3557 | 84% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 27 | 308 | 50% | 3533 | 85% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3416 | 29 | 290 | 50% | 3414 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 23 | 420 | 50% | 3561 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 23 | 440 | 50% | 3536 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3383 | 23 | 460 | 48% | 3397 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 28 | 296 | 52% | 3546 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 29 | 272 | 50% | 3538 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3393 | 21 | 534 | 50% | 3391 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 28 | 288 | 51% | 3549 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 29 | 280 | 51% | 3524 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3391 | 23 | 468 | 48% | 3403 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 24 | 388 | 50% | 3537 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 25 | 356 | 49% | 3528 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3375 | 25 | 380 | 50% | 3372 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 18 | 724 | 51% | 3542 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 15 | 1096 | 51% | 3495 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3367 | 15 | 1136 | 50% | 3368 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 36 | 176 | 51% | 3545 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 37 | 168 | 50% | 3463 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3360 | 30 | 267 | 48% | 3374 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |