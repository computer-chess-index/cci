# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3464<sub>(+new) | 3557<sub>(+new) | 3590<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3374<sub>(+8) | 3540<sub>(+8) | 3549<sub>(+9) |  |
| 1.9.1 | 2026-01-12 | 3366<sub>(-9) | 3532<sub>(+18) | 3540<sub>(-11) |  |
| 1.9 | 2026-01-03 | 3375<sub>(+new) | 3514<sub>(+new) | 3551<sub>(+new) |  |
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

Generated: 2026-08-26 06:27:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3375, 3366, 3374, 3464]
  line "STC (8.0+0.08s)" [3375, 3366, 3374, 3464]
  line "LTC (60.0+0.60s)" [3514, 3532, 3540, 3557]
  line "VLTC (2m24s+1.12s)" [3551, 3540, 3549, 3590]
  line "VLTC (2m24s+1.12s)" [3551, 3540, 3549, 3590]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 29 | 270 | 53% | 3571 | 90% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3557 | 27 | 316 | 50% | 3555 | 90% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3464 | 25 | 372 | 51% | 3456 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 25 | 380 | 51% | 3546 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3540 | 25 | 372 | 51% | 3536 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3374 | 22 | 518 | 49% | 3379 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 35 | 188 | 49% | 3549 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 35 | 186 | 51% | 3524 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3366 | 35 | 208 | 51% | 3353 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 35 | 192 | 53% | 3521 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 33 | 224 | 53% | 3475 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3375 | 34 | 224 | 54% | 3329 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |