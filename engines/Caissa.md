# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3416<sub>(+37) | 3530<sub>(0) | 3557<sub>(-2) |  |
| 1.25 | 2026-04-05 | 3379<sub>(-10) | 3530<sub>(-7) | 3559<sub>(+6) |  |
| 1.24 | 2025-12-03 | 3389<sub>(+2) | 3537<sub>(+15) | 3553<sub>(+2) |  |
| 1.23 | 2025-08-21 | 3387<sub>(+16) | 3522<sub>(+4) | 3551<sub>(+18) |  |
| 1.22 | 2025-04-30 | 3371<sub>(+8) | 3518<sub>(+8) | 3533<sub>(-12) |  |
| 1.21 | 2024-10-27 | 3363<sub>(+7) | 3510<sub>(+19) | 3545<sub>(-1) |  |
| 1.20 | 2024-07-28 | 3356 | 3491 | 3546 |  |
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

Generated: 2026-08-26 06:23:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3356, 3363, 3371, 3387, 3389, 3379, 3416]
  line "STC (8.0+0.08s)" [3356, 3363, 3371, 3387, 3389, 3379, 3416]
  line "LTC (60.0+0.60s)" [3491, 3510, 3518, 3522, 3537, 3530, 3530]
  line "VLTC (2m24s+1.12s)" [3546, 3545, 3533, 3551, 3553, 3559, 3557]
  line "VLTC (2m24s+1.12s)" [3546, 3545, 3533, 3551, 3553, 3559, 3557]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 36 | 174 | 50% | 3560 | 84% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 30 | 266 | 50% | 3528 | 84% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3416 | 31 | 256 | 51% | 3409 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 23 | 420 | 50% | 3557 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 23 | 440 | 50% | 3530 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3379 | 23 | 460 | 48% | 3393 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 28 | 296 | 52% | 3542 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3537 | 29 | 272 | 50% | 3534 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3389 | 21 | 534 | 50% | 3387 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 28 | 288 | 51% | 3545 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 29 | 280 | 51% | 3518 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3387 | 23 | 468 | 48% | 3399 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 24 | 388 | 50% | 3533 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 25 | 356 | 49% | 3522 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3371 | 25 | 380 | 50% | 3368 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 18 | 724 | 51% | 3538 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 15 | 1096 | 51% | 3491 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3363 | 15 | 1136 | 50% | 3364 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 36 | 176 | 51% | 3540 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3491 | 37 | 168 | 50% | 3459 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3356 | 30 | 267 | 48% | 3370 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |