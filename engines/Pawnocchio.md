# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3478<sub>(+new) | 3567<sub>(+new) | 3599<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3383<sub>(+8) | 3549<sub>(+8) | 3560<sub>(+9) |  |
| 1.9.1 | 2026-01-12 | 3375<sub>(-9) | 3541<sub>(+16) | 3551<sub>(-9) |  |
| 1.9 | 2026-01-03 | 3384<sub>(+new) | 3525<sub>(+new) | 3560<sub>(+new) |  |
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

Generated: 2026-09-25 04:40:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3384, 3375, 3383, 3478]
  line "STC (8.0+0.08s)" [3384, 3375, 3383, 3478]
  line "LTC (60.0+0.60s)" [3525, 3541, 3549, 3567]
  line "" [3560, 3551, 3560, 3599]
  line "VLTC (2m24s+1.12s)" [3560, 3551, 3560, 3599]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3599 | 27 | 302 | 53% | 3582 | 89% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3567 | 25 | 356 | 50% | 3564 | 90% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3478 | 24 | 424 | 51% | 3470 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 25 | 380 | 51% | 3556 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3549 | 25 | 372 | 51% | 3545 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3383 | 22 | 518 | 49% | 3389 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 35 | 188 | 49% | 3560 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 35 | 186 | 51% | 3534 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3375 | 35 | 208 | 51% | 3363 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 35 | 192 | 53% | 3530 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 33 | 224 | 53% | 3484 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3384 | 34 | 224 | 54% | 3339 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |