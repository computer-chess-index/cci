# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3407<sub>(+33) | 3529<sub>(+4) | 3557<sub>(+4) |  |
| 1.25 | 2026-04-05 | 3374<sub>(-8) | 3525<sub>(-5) | 3553<sub>(+5) |  |
| 1.24 | 2025-12-03 | 3382<sub>(+2) | 3530<sub>(+15) | 3548<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3380<sub>(+16) | 3515<sub>(+2) | 3545<sub>(+17) |  |
| 1.22 | 2025-04-30 | 3364<sub>(+7) | 3513<sub>(+10) | 3528<sub>(-10) |  |
| 1.21 | 2024-10-27 | 3357<sub>(+8) | 3503<sub>(+19) | 3538<sub>(-3) |  |
| 1.20 | 2024-07-28 | 3349 | 3484 | 3541 |  |
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

Generated: 2026-08-18 06:23:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3349, 3357, 3364, 3380, 3382, 3374, 3407]
  line "STC (8.0+0.08s)" [3349, 3357, 3364, 3380, 3382, 3374, 3407]
  line "LTC (60.0+0.60s)" [3484, 3503, 3513, 3515, 3530, 3525, 3529]
  line "VLTC (2m24s+1.12s)" [3541, 3538, 3528, 3545, 3548, 3553, 3557]
  line "VLTC (2m24s+1.12s)" [3541, 3538, 3528, 3545, 3548, 3553, 3557]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 43 | 122 | 50% | 3560 | 84% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 36 | 182 | 51% | 3524 | 84% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3407 | 38 | 172 | 50% | 3405 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 23 | 420 | 50% | 3552 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 23 | 440 | 50% | 3525 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3374 | 23 | 460 | 48% | 3386 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 28 | 296 | 52% | 3536 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 29 | 272 | 50% | 3529 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3382 | 21 | 534 | 50% | 3382 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 28 | 288 | 51% | 3540 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 29 | 280 | 51% | 3513 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3380 | 23 | 468 | 48% | 3394 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 24 | 388 | 50% | 3528 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 25 | 356 | 49% | 3517 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3364 | 25 | 380 | 50% | 3363 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 18 | 724 | 51% | 3532 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3503 | 15 | 1096 | 51% | 3486 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3357 | 15 | 1136 | 50% | 3357 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 36 | 176 | 51% | 3534 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 37 | 168 | 50% | 3452 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3349 | 30 | 267 | 48% | 3363 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |