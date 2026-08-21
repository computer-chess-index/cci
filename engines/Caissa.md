# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3405<sub>(+30) | 3529<sub>(+3) | 3560<sub>(+4) |  |
| 1.25 | 2026-04-05 | 3375<sub>(-9) | 3526<sub>(-7) | 3556<sub>(+7) |  |
| 1.24 | 2025-12-03 | 3384<sub>(+1) | 3533<sub>(+15) | 3549<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3383<sub>(+16) | 3518<sub>(+4) | 3546<sub>(+17) |  |
| 1.22 | 2025-04-30 | 3367<sub>(+7) | 3514<sub>(+8) | 3529<sub>(-12) |  |
| 1.21 | 2024-10-27 | 3360<sub>(+8) | 3506<sub>(+19) | 3541<sub>(-1) |  |
| 1.20 | 2024-07-28 | 3352 | 3487 | 3542 |  |
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

Generated: 2026-08-21 06:23:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3352, 3360, 3367, 3383, 3384, 3375, 3405]
  line "STC (8.0+0.08s)" [3352, 3360, 3367, 3383, 3384, 3375, 3405]
  line "LTC (60.0+0.60s)" [3487, 3506, 3514, 3518, 3533, 3526, 3529]
  line "VLTC (2m24s+1.12s)" [3542, 3541, 3529, 3546, 3549, 3556, 3560]
  line "VLTC (2m24s+1.12s)" [3542, 3541, 3529, 3546, 3549, 3556, 3560]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 40 | 142 | 50% | 3559 | 84% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 33 | 218 | 50% | 3525 | 83% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3405 | 34 | 216 | 50% | 3405 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 23 | 420 | 50% | 3553 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 23 | 440 | 50% | 3526 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3375 | 23 | 460 | 48% | 3389 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 28 | 296 | 52% | 3538 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 29 | 272 | 50% | 3530 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3384 | 21 | 534 | 50% | 3383 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 28 | 288 | 51% | 3541 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 29 | 280 | 51% | 3514 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3383 | 23 | 468 | 48% | 3395 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 24 | 388 | 50% | 3529 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 25 | 356 | 49% | 3518 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3367 | 25 | 380 | 50% | 3366 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 18 | 724 | 51% | 3534 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3506 | 15 | 1096 | 51% | 3487 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3360 | 15 | 1136 | 50% | 3360 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 36 | 176 | 51% | 3536 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 37 | 168 | 50% | 3455 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3352 | 30 | 267 | 48% | 3366 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |