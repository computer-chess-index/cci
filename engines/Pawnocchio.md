# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3463<sub>(+new) | 3556<sub>(+new) | 3590<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3372<sub>(+8) | 3538<sub>(+8) | 3549<sub>(+11) |  |
| 1.9.1 | 2026-01-12 | 3364<sub>(-10) | 3530<sub>(+17) | 3538<sub>(-11) |  |
| 1.9 | 2026-01-03 | 3374<sub>(+new) | 3513<sub>(+new) | 3549<sub>(+new) |  |
| 1.8.1 | 2025-07-25 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnocchio+<version>&body=###%20Engine%20name%0APawnocchio%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:27:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3374, 3364, 3372, 3463]
  line "STC (8.0+0.08s)" [3374, 3364, 3372, 3463]
  line "LTC (60.0+0.60s)" [3513, 3530, 3538, 3556]
  line "VLTC (2m24s+1.12s)" [3549, 3538, 3549, 3590]
  line "VLTC (2m24s+1.12s)" [3549, 3538, 3549, 3590]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 29 | 270 | 53% | 3569 | 90% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3556 | 27 | 316 | 50% | 3553 | 90% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3463 | 26 | 360 | 51% | 3455 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 25 | 380 | 51% | 3545 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 25 | 372 | 51% | 3534 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3372 | 22 | 518 | 49% | 3378 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 35 | 188 | 49% | 3548 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 35 | 186 | 51% | 3522 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3364 | 35 | 208 | 51% | 3352 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 35 | 192 | 53% | 3519 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 33 | 224 | 53% | 3474 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3374 | 34 | 224 | 54% | 3328 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |