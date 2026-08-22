# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3407<sub>(+29) | 3528<sub>(-1) | 3561<sub>(+4) |  |
| 1.25 | 2026-04-05 | 3378<sub>(-8) | 3529<sub>(-5) | 3557<sub>(+6) |  |
| 1.24 | 2025-12-03 | 3386<sub>(+2) | 3534<sub>(+15) | 3551<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3384<sub>(+16) | 3519<sub>(+4) | 3548<sub>(+16) |  |
| 1.22 | 2025-04-30 | 3368<sub>(+6) | 3515<sub>(+8) | 3532<sub>(-10) |  |
| 1.21 | 2024-10-27 | 3362<sub>(+9) | 3507<sub>(+19) | 3542<sub>(-2) |  |
| 1.20 | 2024-07-28 | 3353 | 3488 | 3544 |  |
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

Generated: 2026-08-22 06:23:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3353, 3362, 3368, 3384, 3386, 3378, 3407]
  line "STC (8.0+0.08s)" [3353, 3362, 3368, 3384, 3386, 3378, 3407]
  line "LTC (60.0+0.60s)" [3488, 3507, 3515, 3519, 3534, 3529, 3528]
  line "VLTC (2m24s+1.12s)" [3544, 3542, 3532, 3548, 3551, 3557, 3561]
  line "VLTC (2m24s+1.12s)" [3544, 3542, 3532, 3548, 3551, 3557, 3561]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 40 | 146 | 50% | 3559 | 84% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 32 | 234 | 50% | 3528 | 83% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3407 | 33 | 232 | 50% | 3405 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 23 | 420 | 50% | 3555 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 23 | 440 | 50% | 3528 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3378 | 23 | 460 | 48% | 3390 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 28 | 296 | 52% | 3540 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 29 | 272 | 50% | 3532 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3386 | 21 | 534 | 50% | 3386 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 28 | 288 | 51% | 3542 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 29 | 280 | 51% | 3517 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3384 | 23 | 468 | 48% | 3397 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 24 | 388 | 50% | 3530 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 25 | 356 | 49% | 3519 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3368 | 25 | 380 | 50% | 3367 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 18 | 724 | 51% | 3536 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3507 | 15 | 1096 | 51% | 3488 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3362 | 15 | 1136 | 50% | 3362 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 36 | 176 | 51% | 3538 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3488 | 37 | 168 | 50% | 3456 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3353 | 30 | 267 | 48% | 3367 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |