# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3475<sub>(+new) | 3563<sub>(+new) | 3595<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3379<sub>(+8) | 3545<sub>(+7) | 3556<sub>(+10) |  |
| 1.9.1 | 2026-01-12 | 3371<sub>(-9) | 3538<sub>(+17) | 3546<sub>(-11) |  |
| 1.9 | 2026-01-03 | 3380<sub>(+new) | 3521<sub>(+new) | 3557<sub>(+new) |  |
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

Generated: 2026-09-15 04:40:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3380, 3371, 3379, 3475]
  line "STC (8.0+0.08s)" [3380, 3371, 3379, 3475]
  line "LTC (60.0+0.60s)" [3521, 3538, 3545, 3563]
  line "" [3557, 3546, 3556, 3595]
  line "VLTC (2m24s+1.12s)" [3557, 3546, 3556, 3595]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3595 | 27 | 298 | 53% | 3578 | 90% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3563 | 25 | 352 | 50% | 3560 | 90% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3475 | 24 | 420 | 51% | 3465 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 25 | 380 | 51% | 3552 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 25 | 372 | 51% | 3542 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3379 | 22 | 518 | 49% | 3384 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 35 | 188 | 49% | 3556 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 35 | 186 | 51% | 3530 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3371 | 35 | 208 | 51% | 3359 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 35 | 192 | 53% | 3526 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 33 | 224 | 53% | 3482 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3380 | 34 | 224 | 54% | 3335 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |