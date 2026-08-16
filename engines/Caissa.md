# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3399<sub>(+31) | 3526<sub>(+5) | 3551<sub>(+2) |  |
| 1.25 | 2026-04-05 | 3368<sub>(-10) | 3521<sub>(-5) | 3549<sub>(+7) |  |
| 1.24 | 2025-12-03 | 3378<sub>(+2) | 3526<sub>(+15) | 3542<sub>(+2) |  |
| 1.23 | 2025-08-21 | 3376<sub>(+16) | 3511<sub>(+4) | 3540<sub>(+18) |  |
| 1.22 | 2025-04-30 | 3360<sub>(+7) | 3507<sub>(+8) | 3522<sub>(-12) |  |
| 1.21 | 2024-10-27 | 3353<sub>(+8) | 3499<sub>(+19) | 3534<sub>(-2) |  |
| 1.20 | 2024-07-28 | 3345 | 3480 | 3536 |  |
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

Generated: 2026-08-16 06:23:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3345, 3353, 3360, 3376, 3378, 3368, 3399]
  line "STC (8.0+0.08s)" [3345, 3353, 3360, 3376, 3378, 3368, 3399]
  line "LTC (60.0+0.60s)" [3480, 3499, 3507, 3511, 3526, 3521, 3526]
  line "VLTC (2m24s+1.12s)" [3536, 3534, 3522, 3540, 3542, 3549, 3551]
  line "VLTC (2m24s+1.12s)" [3536, 3534, 3522, 3540, 3542, 3549, 3551]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 54 | 78 | 51% | 3548 | 86% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 44 | 120 | 52% | 3514 | 87% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3399 | 45 | 120 | 50% | 3399 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 23 | 420 | 50% | 3546 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 23 | 440 | 50% | 3519 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3368 | 23 | 460 | 48% | 3382 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 28 | 296 | 52% | 3532 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 29 | 272 | 50% | 3524 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3378 | 21 | 534 | 50% | 3376 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 28 | 288 | 51% | 3534 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3511 | 29 | 280 | 51% | 3509 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3376 | 23 | 468 | 48% | 3389 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 24 | 388 | 50% | 3522 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3507 | 25 | 356 | 49% | 3511 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3360 | 25 | 380 | 50% | 3359 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 18 | 724 | 51% | 3528 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3499 | 15 | 1096 | 51% | 3480 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3353 | 15 | 1136 | 50% | 3353 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 36 | 176 | 51% | 3530 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 37 | 168 | 50% | 3448 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3345 | 30 | 267 | 48% | 3359 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |