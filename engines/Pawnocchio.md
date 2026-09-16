# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3475<sub>(+new) | 3564<sub>(+new) | 3596<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3380<sub>(+9) | 3546<sub>(+8) | 3557<sub>(+9) |  |
| 1.9.1 | 2026-01-12 | 3371<sub>(-11) | 3538<sub>(+17) | 3548<sub>(-9) |  |
| 1.9 | 2026-01-03 | 3382<sub>(+new) | 3521<sub>(+new) | 3557<sub>(+new) |  |
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

Generated: 2026-09-16 04:40:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3382, 3371, 3380, 3475]
  line "STC (8.0+0.08s)" [3382, 3371, 3380, 3475]
  line "LTC (60.0+0.60s)" [3521, 3538, 3546, 3564]
  line "" [3557, 3548, 3557, 3596]
  line "VLTC (2m24s+1.12s)" [3557, 3548, 3557, 3596]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3596 | 27 | 298 | 53% | 3579 | 90% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3564 | 25 | 352 | 50% | 3561 | 90% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3475 | 24 | 420 | 51% | 3467 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 25 | 380 | 51% | 3553 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 25 | 372 | 51% | 3542 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3380 | 22 | 518 | 49% | 3386 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 35 | 188 | 49% | 3557 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 35 | 186 | 51% | 3532 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3371 | 35 | 208 | 51% | 3360 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 35 | 192 | 53% | 3528 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 33 | 224 | 53% | 3482 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3382 | 34 | 224 | 54% | 3336 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |