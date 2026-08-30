# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3430<sub>(+1) | 3548<sub>(+2) | 3578<sub>(-2) |  |
| 8.1.12 | 2025-11-09 | 3429<sub>(+8) | 3546<sub>(0) | 3580<sub>(+13) |  |
| 8.1 | 2025-08-16 | 3421<sub>(+30) | 3546<sub>(+24) | 3567<sub>(+10) |  |
| 8.0 | 2025-03-03 | 3391<sub>(+43) | 3522<sub>(+13) | 3557<sub>(+17) |  |
| 7.1 | 2024-10-26 | 3348<sub>(+12) | 3509<sub>(+18) | 3540<sub>(+6) |  |
| 7.0 | 2024-05-25 | 3336 | 3491 | 3534 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexandria+<version>&body=###%20Engine%20name%0AAlexandria%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 06:22:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3336, 3348, 3391, 3421, 3429, 3430]
  line "STC (8.0+0.08s)" [3336, 3348, 3391, 3421, 3429, 3430]
  line "LTC (60.0+0.60s)" [3491, 3509, 3522, 3546, 3546, 3548]
  line "" [3534, 3540, 3557, 3567, 3580, 3578]
  line "VLTC (2m24s+1.12s)" [3534, 3540, 3557, 3567, 3580, 3578]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 27 | 322 | 52% | 3564 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 23 | 420 | 51% | 3542 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3430 | 20 | 616 | 51% | 3426 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 34 | 202 | 51% | 3572 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 30 | 256 | 49% | 3552 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3429 | 26 | 360 | 50% | 3426 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 31 | 240 | 50% | 3567 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 27 | 304 | 50% | 3546 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3421 | 26 | 348 | 50% | 3420 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 26 | 348 | 51% | 3549 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 23 | 428 | 50% | 3525 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3391 | 24 | 440 | 50% | 3393 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 19 | 648 | 51% | 3533 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 16 | 868 | 50% | 3509 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3348 | 16 | 964 | 50% | 3351 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 30 | 268 | 56% | 3457 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3491 | 33 | 212 | 51% | 3484 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3336 | 32 | 244 | 52% | 3317 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |