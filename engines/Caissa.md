# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3417<sub>(+37) | 3530<sub>(-2) | 3556<sub>(-4) |  |
| 1.25 | 2026-04-05 | 3380<sub>(-10) | 3532<sub>(-6) | 3560<sub>(+5) |  |
| 1.24 | 2025-12-03 | 3390<sub>(+1) | 3538<sub>(+14) | 3555<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3389<sub>(+17) | 3524<sub>(+5) | 3552<sub>(+18) |  |
| 1.22 | 2025-04-30 | 3372<sub>(+8) | 3519<sub>(+8) | 3534<sub>(-11) |  |
| 1.21 | 2024-10-27 | 3364<sub>(+7) | 3511<sub>(+19) | 3545<sub>(-3) |  |
| 1.20 | 2024-07-28 | 3357 | 3492 | 3548 |  |
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

Generated: 2026-08-30 13:07:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3357, 3364, 3372, 3389, 3390, 3380, 3417]
  line "STC (8.0+0.08s)" [3357, 3364, 3372, 3389, 3390, 3380, 3417]
  line "LTC (60.0+0.60s)" [3492, 3511, 3519, 3524, 3538, 3532, 3530]
  line "" [3548, 3545, 3534, 3552, 3555, 3560, 3556]
  line "VLTC (2m24s+1.12s)" [3548, 3545, 3534, 3552, 3555, 3560, 3556]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 33 | 210 | 50% | 3555 | 85% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 29 | 278 | 50% | 3529 | 84% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3417 | 31 | 262 | 51% | 3411 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 23 | 420 | 50% | 3559 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 23 | 440 | 50% | 3532 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3380 | 23 | 460 | 48% | 3393 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 28 | 296 | 52% | 3544 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 29 | 272 | 50% | 3536 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3390 | 21 | 534 | 50% | 3389 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 28 | 288 | 51% | 3546 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 29 | 280 | 51% | 3519 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3389 | 23 | 468 | 48% | 3401 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 24 | 388 | 50% | 3534 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 25 | 356 | 49% | 3524 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3372 | 25 | 380 | 50% | 3370 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 18 | 724 | 51% | 3540 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3511 | 15 | 1096 | 51% | 3492 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3364 | 15 | 1136 | 50% | 3366 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 36 | 176 | 51% | 3541 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3492 | 37 | 168 | 50% | 3460 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3357 | 30 | 267 | 48% | 3371 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |