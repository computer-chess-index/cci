# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3417<sub>(+34) | 3534<sub>(0) | 3555<sub>(-8) |  |
| 1.25 | 2026-04-05 | 3383<sub>(-8) | 3534<sub>(-7) | 3563<sub>(+6) |  |
| 1.24 | 2025-12-03 | 3391<sub>(+1) | 3541<sub>(+16) | 3557<sub>(+2) |  |
| 1.23 | 2025-08-21 | 3390<sub>(+16) | 3525<sub>(+3) | 3555<sub>(+18) |  |
| 1.22 | 2025-04-30 | 3374<sub>(+7) | 3522<sub>(+9) | 3537<sub>(-11) |  |
| 1.21 | 2024-10-27 | 3367<sub>(+8) | 3513<sub>(+18) | 3548<sub>(-3) |  |
| 1.20 | 2024-07-28 | 3359 | 3495 | 3551 |  |
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

Generated: 2026-09-07 04:36:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3359, 3367, 3374, 3390, 3391, 3383, 3417]
  line "STC (8.0+0.08s)" [3359, 3367, 3374, 3390, 3391, 3383, 3417]
  line "LTC (60.0+0.60s)" [3495, 3513, 3522, 3525, 3541, 3534, 3534]
  line "" [3551, 3548, 3537, 3555, 3557, 3563, 3555]
  line "VLTC (2m24s+1.12s)" [3551, 3548, 3537, 3555, 3557, 3563, 3555]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 32 | 230 | 50% | 3557 | 85% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 27 | 308 | 50% | 3532 | 85% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3417 | 29 | 282 | 50% | 3414 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 23 | 420 | 50% | 3560 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 23 | 440 | 50% | 3534 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3383 | 23 | 460 | 48% | 3395 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 28 | 296 | 52% | 3545 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 29 | 272 | 50% | 3538 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3391 | 21 | 534 | 50% | 3391 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 28 | 288 | 51% | 3549 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 29 | 280 | 51% | 3522 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3390 | 23 | 468 | 48% | 3403 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 24 | 388 | 50% | 3537 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 25 | 356 | 49% | 3526 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3374 | 25 | 380 | 50% | 3372 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 18 | 724 | 51% | 3541 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 15 | 1096 | 51% | 3495 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3367 | 15 | 1136 | 50% | 3367 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 36 | 176 | 51% | 3544 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 37 | 168 | 50% | 3461 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3359 | 30 | 267 | 48% | 3372 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |