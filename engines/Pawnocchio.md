# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3470<sub>(+new) | 3559<sub>(+new) | 3592<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3376<sub>(+9) | 3541<sub>(+7) | 3552<sub>(+10) |  |
| 1.9.1 | 2026-01-12 | 3367<sub>(-11) | 3534<sub>(+17) | 3542<sub>(-11) |  |
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

Generated: 2026-09-02 04:37:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3378, 3367, 3376, 3470]
  line "STC (8.0+0.08s)" [3378, 3367, 3376, 3470]
  line "LTC (60.0+0.60s)" [3517, 3534, 3541, 3559]
  line "" [3553, 3542, 3552, 3592]
  line "VLTC (2m24s+1.12s)" [3553, 3542, 3552, 3592]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3592 | 29 | 270 | 53% | 3572 | 90% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 27 | 316 | 50% | 3556 | 90% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3470 | 25 | 388 | 52% | 3460 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 25 | 380 | 51% | 3548 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 25 | 372 | 51% | 3538 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3376 | 22 | 518 | 49% | 3382 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 35 | 188 | 49% | 3552 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 35 | 186 | 51% | 3526 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3367 | 35 | 208 | 51% | 3356 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 35 | 192 | 53% | 3522 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 33 | 224 | 53% | 3478 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3378 | 34 | 224 | 54% | 3332 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |