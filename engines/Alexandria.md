# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3430<sub>(+2) | 3546<sub>(+1) | 3578<sub>(-1) |  |
| 8.1.12 | 2025-11-09 | 3428<sub>(+7) | 3545<sub>(-1) | 3579<sub>(+12) |  |
| 8.1 | 2025-08-16 | 3421<sub>(+30) | 3546<sub>(+25) | 3567<sub>(+10) |  |
| 8.0 | 2025-03-03 | 3391<sub>(+44) | 3521<sub>(+14) | 3557<sub>(+19) |  |
| 7.1 | 2024-10-26 | 3347<sub>(+11) | 3507<sub>(+17) | 3538<sub>(+4) |  |
| 7.0 | 2024-05-25 | 3336 | 3490 | 3534 |  |
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

Generated: 2026-08-27 07:31:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3336, 3347, 3391, 3421, 3428, 3430]
  line "STC (8.0+0.08s)" [3336, 3347, 3391, 3421, 3428, 3430]
  line "LTC (60.0+0.60s)" [3490, 3507, 3521, 3546, 3545, 3546]
  line "" [3534, 3538, 3557, 3567, 3579, 3578]
  line "VLTC (2m24s+1.12s)" [3534, 3538, 3557, 3567, 3579, 3578]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 27 | 322 | 52% | 3563 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 23 | 420 | 51% | 3542 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3430 | 20 | 610 | 51% | 3425 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 34 | 202 | 51% | 3571 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 30 | 256 | 49% | 3552 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3428 | 26 | 360 | 50% | 3426 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 31 | 240 | 50% | 3565 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 27 | 304 | 50% | 3546 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3421 | 26 | 348 | 50% | 3418 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 26 | 348 | 51% | 3548 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 23 | 428 | 50% | 3524 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3391 | 24 | 440 | 50% | 3393 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 19 | 648 | 51% | 3532 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3507 | 16 | 868 | 50% | 3507 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3347 | 16 | 964 | 50% | 3349 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 30 | 268 | 56% | 3456 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 33 | 212 | 51% | 3483 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3336 | 32 | 244 | 52% | 3316 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |