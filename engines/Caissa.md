# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3397<sub>(+30) | 3519<sub>(+1) | 3546<sub>(0) |  |
| 1.25 | 2026-04-05 | 3367<sub>(-9) | 3518<sub>(-7) | 3546<sub>(+5) |  |
| 1.24 | 2025-12-03 | 3376<sub>(+1) | 3525<sub>(+15) | 3541<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3375<sub>(+16) | 3510<sub>(+4) | 3538<sub>(+17) |  |
| 1.22 | 2025-04-30 | 3359<sub>(+7) | 3506<sub>(+8) | 3521<sub>(-12) |  |
| 1.21 | 2024-10-27 | 3352<sub>(+8) | 3498<sub>(+19) | 3533<sub>(-1) |  |
| 1.20 | 2024-07-28 | 3344 | 3479 | 3534 |  |
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

Generated: 2026-08-12 07:47:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3344, 3352, 3359, 3375, 3376, 3367, 3397]
  line "STC (8.0+0.08s)" [3344, 3352, 3359, 3375, 3376, 3367, 3397]
  line "LTC (60.0+0.60s)" [3479, 3498, 3506, 3510, 3525, 3518, 3519]
  line "VLTC (2m24s+1.12s)" [3534, 3533, 3521, 3538, 3541, 3546, 3546]
  line "VLTC (2m24s+1.12s)" [3534, 3533, 3521, 3538, 3541, 3546, 3546]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 101 | 20 | 50% | 3546 | 100% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 47 | 104 | 51% | 3513 | 87% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3397 | 50 | 100 | 50% | 3397 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 23 | 420 | 50% | 3545 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 23 | 440 | 50% | 3518 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3367 | 23 | 460 | 48% | 3380 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 28 | 296 | 52% | 3530 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 29 | 272 | 50% | 3522 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3376 | 21 | 534 | 50% | 3375 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 28 | 288 | 51% | 3533 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 29 | 280 | 51% | 3506 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3375 | 23 | 468 | 48% | 3387 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 24 | 388 | 50% | 3521 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3506 | 25 | 356 | 49% | 3510 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3359 | 25 | 380 | 50% | 3357 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 18 | 724 | 51% | 3526 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3498 | 15 | 1096 | 51% | 3479 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3352 | 15 | 1136 | 50% | 3352 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 36 | 176 | 51% | 3529 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 37 | 168 | 50% | 3447 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3344 | 30 | 267 | 48% | 3357 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |