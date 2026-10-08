# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1.0 | 2026-10-04 |  |  |  |  |
| 9.0 | 2026-02-27 | 3441<sub>(+3) | 3559<sub>(+3) | 3587<sub>(-3) |  |
| 8.1.12 | 2025-11-09 | 3438<sub>(+8) | 3556<sub>(-1) | 3590<sub>(+12) |  |
| 8.1 | 2025-08-16 | 3430<sub>(+29) | 3557<sub>(+25) | 3578<sub>(+10) |  |
| 8.0 | 2025-03-03 | 3401<sub>(+44) | 3532<sub>(+14) | 3568<sub>(+19) |  |
| 7.1 | 2024-10-26 | 3357<sub>(+12) | 3518<sub>(+17) | 3549<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3345 | 3501 | 3544 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexandria+<version>&body=###%20Engine%20name%0AAlexandria%0A%0A###%20Version%0A9.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-08 04:35:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3345, 3357, 3401, 3430, 3438, 3441]
  line "STC (8.0+0.08s)" [3345, 3357, 3401, 3430, 3438, 3441]
  line "LTC (60.0+0.60s)" [3501, 3518, 3532, 3557, 3556, 3559]
  line "" [3544, 3549, 3568, 3578, 3590, 3587]
  line "VLTC (2m24s+1.12s)" [3544, 3549, 3568, 3578, 3590, 3587]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3587 | 26 | 342 | 51% | 3575 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 23 | 440 | 51% | 3553 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3441 | 19 | 642 | 51% | 3436 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 34 | 202 | 51% | 3582 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3556 | 30 | 256 | 49% | 3563 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3438 | 26 | 360 | 50% | 3437 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 31 | 240 | 50% | 3576 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3557 | 27 | 304 | 50% | 3557 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3430 | 26 | 348 | 50% | 3429 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 26 | 348 | 51% | 3559 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 23 | 428 | 50% | 3534 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3401 | 24 | 440 | 50% | 3402 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 19 | 648 | 51% | 3542 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 16 | 868 | 50% | 3518 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3357 | 16 | 964 | 50% | 3360 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 30 | 268 | 56% | 3467 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3501 | 33 | 212 | 51% | 3494 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3345 | 32 | 244 | 52% | 3326 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |