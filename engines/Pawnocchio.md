# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3472<sub>(+new) | 3560<sub>(+new) | 3592<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3376<sub>(+8) | 3542<sub>(+8) | 3553<sub>(+9) |  |
| 1.9.1 | 2026-01-12 | 3368<sub>(-10) | 3534<sub>(+17) | 3544<sub>(-9) |  |
| 1.9 | 2026-01-03 | 3378<sub>(+new) | 3517<sub>(+new) | 3553<sub>(+new) |  |
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

Generated: 2026-09-06 06:26:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3378, 3368, 3376, 3472]
  line "STC (8.0+0.08s)" [3378, 3368, 3376, 3472]
  line "LTC (60.0+0.60s)" [3517, 3534, 3542, 3560]
  line "" [3553, 3544, 3553, 3592]
  line "VLTC (2m24s+1.12s)" [3553, 3544, 3553, 3592]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3592 | 28 | 282 | 53% | 3575 | 90% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3560 | 26 | 328 | 50% | 3557 | 90% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3472 | 25 | 396 | 52% | 3460 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 25 | 380 | 51% | 3549 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 25 | 372 | 51% | 3538 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3376 | 22 | 518 | 49% | 3382 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 35 | 188 | 49% | 3553 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 35 | 186 | 51% | 3528 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3368 | 35 | 208 | 51% | 3356 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 35 | 192 | 53% | 3524 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 33 | 224 | 53% | 3478 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3378 | 34 | 224 | 54% | 3332 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |