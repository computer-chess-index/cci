# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3452<sub>(+22) | 3567<sub>(+10) | 3576<sub>(+20) |  |
| 7.0.0 | 2025-09-25 | 3430<sub>(+new) | 3557<sub>(+new) | 3556<sub>(+5) |  |
| 6.0.2 | 2025-06-06 |  |  | 3551<sub>(+2) |  |
| 5.0.0 | 2025-03-23 | 3359<sub>(+6) | 3525<sub>(+new) | 3549<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3353<sub>(+66) |  | 3525<sub>(+4) |  |
| 3.0.1 | 2024-11-22 | 3287<sub>(-31) | 3430<sub>(-33) | 3521<sub>(+23) |  |
| 2.1.0 | 2024-07-02 | 3318 | 3463 | 3498 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PlentyChess+<version>&body=###%20Engine%20name%0APlentyChess%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:27:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3318, 3287, 3359, 3430, 3452]
  line "STC (8.0+0.08s)" [3318, 3287, 3359, 3430, 3452]
  line "LTC (60.0+0.60s)" [3463, 3430, 3525, 3557, 3567]
  line "VLTC (2m24s+1.12s)" [3498, 3521, 3549, 3556, 3576]
  line "VLTC (2m24s+1.12s)" [3498, 3521, 3549, 3556, 3576]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 42 | 124 | 51% | 3571 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3567 | 42 | 128 | 50% | 3567 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3452 | 35 | 200 | 47% | 3472 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 24 | 392 | 51% | 3551 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3557 | 42 | 130 | 50% | 3556 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3430 | 35 | 204 | 49% | 3432 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 34 | 192 | 51% | 3546 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 26 | 332 | 51% | 3540 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 68 | 48 | 48% | 3538 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3359 | 208 | 4 | 50% | 3359 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 20 | 600 | 50% | 3524 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3353 | 59 | 72 | 52% | 3337 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 21 | 544 | 50% | 3518 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3430 | 36 | 208 | 50% | 3424 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3287 | 33 | 248 | 47% | 3306 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3498 | 23 | 460 | 52% | 3483 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 63 | 64 | 63% | 3360 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3318 | 98 | 92 | 92% | 2518 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |