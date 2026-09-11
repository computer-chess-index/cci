# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3474<sub>(+new) | 3561<sub>(+new) | 3594<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3378<sub>(+8) | 3544<sub>(+8) | 3555<sub>(+10) |  |
| 1.9.1 | 2026-01-12 | 3370<sub>(-9) | 3536<sub>(+17) | 3545<sub>(-10) |  |
| 1.9 | 2026-01-03 | 3379<sub>(+new) | 3519<sub>(+new) | 3555<sub>(+new) |  |
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

Generated: 2026-09-11 04:40:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3379, 3370, 3378, 3474]
  line "STC (8.0+0.08s)" [3379, 3370, 3378, 3474]
  line "LTC (60.0+0.60s)" [3519, 3536, 3544, 3561]
  line "" [3555, 3545, 3555, 3594]
  line "VLTC (2m24s+1.12s)" [3555, 3545, 3555, 3594]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3594 | 28 | 290 | 53% | 3576 | 90% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3561 | 26 | 344 | 50% | 3559 | 90% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3474 | 25 | 396 | 52% | 3463 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 25 | 380 | 51% | 3551 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 25 | 372 | 51% | 3540 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3378 | 22 | 518 | 49% | 3383 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 35 | 188 | 49% | 3555 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 35 | 186 | 51% | 3529 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3370 | 35 | 208 | 51% | 3357 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 35 | 192 | 53% | 3525 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 33 | 224 | 53% | 3479 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3379 | 34 | 224 | 54% | 3333 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |