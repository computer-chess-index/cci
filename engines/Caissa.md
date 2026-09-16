# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3420<sub>(+34) | 3540<sub>(+2) | 3563<sub>(-2) |  |
| 1.25 | 2026-04-05 | 3386<sub>(-9) | 3538<sub>(-6) | 3565<sub>(+5) |  |
| 1.24 | 2025-12-03 | 3395<sub>(+1) | 3544<sub>(+15) | 3560<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3394<sub>(+18) | 3529<sub>(+4) | 3557<sub>(+17) |  |
| 1.22 | 2025-04-30 | 3376<sub>(+6) | 3525<sub>(+8) | 3540<sub>(-12) |  |
| 1.21 | 2024-10-27 | 3370<sub>(+7) | 3517<sub>(+19) | 3552<sub>(-1) |  |
| 1.20 | 2024-07-28 | 3363 | 3498 | 3553 |  |
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

Generated: 2026-09-16 04:36:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3363, 3370, 3376, 3394, 3395, 3386, 3420]
  line "STC (8.0+0.08s)" [3363, 3370, 3376, 3394, 3395, 3386, 3420]
  line "LTC (60.0+0.60s)" [3498, 3517, 3525, 3529, 3544, 3538, 3540]
  line "" [3553, 3552, 3540, 3557, 3560, 3565, 3563]
  line "VLTC (2m24s+1.12s)" [3553, 3552, 3540, 3557, 3560, 3565, 3563]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 31 | 242 | 50% | 3561 | 85% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3540 | 27 | 318 | 51% | 3536 | 85% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3420 | 28 | 302 | 50% | 3417 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 23 | 420 | 50% | 3564 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 23 | 440 | 50% | 3538 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3386 | 23 | 460 | 48% | 3398 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 28 | 296 | 52% | 3549 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 29 | 272 | 50% | 3541 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3395 | 21 | 534 | 50% | 3394 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 28 | 288 | 51% | 3552 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 29 | 280 | 51% | 3526 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3394 | 23 | 468 | 48% | 3406 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 24 | 388 | 50% | 3540 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 25 | 356 | 49% | 3529 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3376 | 25 | 380 | 50% | 3375 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 18 | 724 | 51% | 3545 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 15 | 1096 | 51% | 3498 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3370 | 15 | 1136 | 50% | 3371 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 36 | 176 | 51% | 3548 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3498 | 37 | 168 | 50% | 3465 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3363 | 30 | 267 | 48% | 3376 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |