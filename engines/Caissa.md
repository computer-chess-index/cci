# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3414<sub>(+36) | 3529<sub>(0) | 3557<sub>(0) |  |
| 1.25 | 2026-04-05 | 3378<sub>(-9) | 3529<sub>(-7) | 3557<sub>(+5) |  |
| 1.24 | 2025-12-03 | 3387<sub>(+1) | 3536<sub>(+17) | 3552<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3386<sub>(+18) | 3519<sub>(+2) | 3549<sub>(+17) |  |
| 1.22 | 2025-04-30 | 3368<sub>(+6) | 3517<sub>(+8) | 3532<sub>(-10) |  |
| 1.21 | 2024-10-27 | 3362<sub>(+7) | 3509<sub>(+19) | 3542<sub>(-3) |  |
| 1.20 | 2024-07-28 | 3355 | 3490 | 3545 |  |
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

Generated: 2026-08-24 06:23:14

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3355, 3362, 3368, 3386, 3387, 3378, 3414]
  line "STC (8.0+0.08s)" [3355, 3362, 3368, 3386, 3387, 3378, 3414]
  line "LTC (60.0+0.60s)" [3490, 3509, 3517, 3519, 3536, 3529, 3529]
  line "VLTC (2m24s+1.12s)" [3545, 3542, 3532, 3549, 3552, 3557, 3557]
  line "VLTC (2m24s+1.12s)" [3545, 3542, 3532, 3549, 3552, 3557, 3557]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 38 | 158 | 50% | 3560 | 84% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 31 | 250 | 50% | 3528 | 84% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3414 | 31 | 252 | 51% | 3407 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 23 | 420 | 50% | 3556 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 23 | 440 | 50% | 3529 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3378 | 23 | 460 | 48% | 3390 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 28 | 296 | 52% | 3541 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 29 | 272 | 50% | 3533 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3387 | 21 | 534 | 50% | 3386 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 28 | 288 | 51% | 3544 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 29 | 280 | 51% | 3517 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3386 | 23 | 468 | 48% | 3398 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 24 | 388 | 50% | 3532 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 25 | 356 | 49% | 3521 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3368 | 25 | 380 | 50% | 3367 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 18 | 724 | 51% | 3536 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 15 | 1096 | 51% | 3490 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3362 | 15 | 1136 | 50% | 3363 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 36 | 176 | 51% | 3538 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 37 | 168 | 50% | 3457 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3355 | 30 | 267 | 48% | 3368 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |