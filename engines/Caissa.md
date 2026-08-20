# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.26 | 2026-08-09 | 3401<sub>(+26) | 3528<sub>(+2) | 3559<sub>(+4) |  |
| 1.25 | 2026-04-05 | 3375<sub>(-8) | 3526<sub>(-6) | 3555<sub>(+6) |  |
| 1.24 | 2025-12-03 | 3383<sub>(+1) | 3532<sub>(+15) | 3549<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3382<sub>(+16) | 3517<sub>(+3) | 3546<sub>(+17) |  |
| 1.22 | 2025-04-30 | 3366<sub>(+7) | 3514<sub>(+9) | 3529<sub>(-11) |  |
| 1.21 | 2024-10-27 | 3359<sub>(+8) | 3505<sub>(+19) | 3540<sub>(-2) |  |
| 1.20 | 2024-07-28 | 3351 | 3486 | 3542 |  |
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

Generated: 2026-08-20 06:23:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3351, 3359, 3366, 3382, 3383, 3375, 3401]
  line "STC (8.0+0.08s)" [3351, 3359, 3366, 3382, 3383, 3375, 3401]
  line "LTC (60.0+0.60s)" [3486, 3505, 3514, 3517, 3532, 3526, 3528]
  line "VLTC (2m24s+1.12s)" [3542, 3540, 3529, 3546, 3549, 3555, 3559]
  line "VLTC (2m24s+1.12s)" [3542, 3540, 3529, 3546, 3549, 3555, 3559]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.26 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 42 | 134 | 50% | 3559 | 84% |
| 1.26 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 33 | 210 | 50% | 3525 | 84% |
| 1.26 | STC <sub>(8.0+0.08s)</sub> | 3401 | 35 | 204 | 50% | 3405 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 23 | 420 | 50% | 3553 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 23 | 440 | 50% | 3526 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3375 | 23 | 460 | 48% | 3387 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 28 | 296 | 52% | 3537 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 29 | 272 | 50% | 3530 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3383 | 21 | 534 | 50% | 3383 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 28 | 288 | 51% | 3541 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 29 | 280 | 51% | 3514 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3382 | 23 | 468 | 48% | 3395 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 24 | 388 | 50% | 3529 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 25 | 356 | 49% | 3518 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3366 | 25 | 380 | 50% | 3364 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 18 | 724 | 51% | 3533 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3505 | 15 | 1096 | 51% | 3487 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3359 | 15 | 1136 | 50% | 3359 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 36 | 176 | 51% | 3536 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 37 | 168 | 50% | 3453 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3351 | 30 | 267 | 48% | 3364 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |