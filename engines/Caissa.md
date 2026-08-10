# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 |  |  |  |  |
| 1.25 | 2026-04-05 | 3370<sub>(-9) | 3521<sub>(-7) | 3549<sub>(+5) |  |
| 1.24 | 2025-12-03 | 3379<sub>(+1) | 3528<sub>(+15) | 3544<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3378<sub>(+16) | 3513<sub>(+4) | 3541<sub>(+17) |  |
| 1.22 | 2025-04-30 | 3362<sub>(+7) | 3509<sub>(+8) | 3524<sub>(-12) |  |
| 1.21 | 2024-10-27 | 3355<sub>(+8) | 3501<sub>(+19) | 3536<sub>(-1) |  |
| 1.20 | 2024-07-28 | 3347 | 3482 | 3537 |  |
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

Generated: 2026-08-10 06:59:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3347, 3355, 3362, 3378, 3379, 3370]
  line "STC (8.0+0.08s)" [3347, 3355, 3362, 3378, 3379, 3370]
  line "LTC (60.0+0.60s)" [3482, 3501, 3509, 3513, 3528, 3521]
  line "VLTC (2m24s+1.12s)" [3537, 3536, 3524, 3541, 3544, 3549]
  line "VLTC (2m24s+1.12s)" [3537, 3536, 3524, 3541, 3544, 3549]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 23 | 420 | 50% | 3548 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 23 | 436 | 50% | 3521 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3370 | 23 | 460 | 48% | 3383 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 28 | 296 | 52% | 3533 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 29 | 272 | 50% | 3525 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3379 | 21 | 534 | 50% | 3378 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 28 | 288 | 51% | 3536 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 29 | 280 | 51% | 3509 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3378 | 23 | 468 | 48% | 3390 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 24 | 388 | 50% | 3524 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 25 | 356 | 49% | 3513 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3362 | 25 | 380 | 50% | 3360 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 18 | 724 | 51% | 3529 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3501 | 15 | 1096 | 51% | 3482 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3355 | 15 | 1136 | 50% | 3355 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 36 | 176 | 51% | 3530 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 37 | 168 | 50% | 3449 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3347 | 30 | 267 | 48% | 3360 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |