# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3440<sub>(+3) | 3559<sub>(+4) | 3586<sub>(-4) |  |
| 8.1.12 | 2025-11-09 | 3437<sub>(+7) | 3555<sub>(-1) | 3590<sub>(+14) |  |
| 8.1 | 2025-08-16 | 3430<sub>(+31) | 3556<sub>(+26) | 3576<sub>(+9) |  |
| 8.0 | 2025-03-03 | 3399<sub>(+43) | 3530<sub>(+13) | 3567<sub>(+19) |  |
| 7.1 | 2024-10-26 | 3356<sub>(+12) | 3517<sub>(+18) | 3548<sub>(+4) |  |
| 7.0 | 2024-05-25 | 3344 | 3499 | 3544 |  |
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

Generated: 2026-09-26 04:35:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3344, 3356, 3399, 3430, 3437, 3440]
  line "STC (8.0+0.08s)" [3344, 3356, 3399, 3430, 3437, 3440]
  line "LTC (60.0+0.60s)" [3499, 3517, 3530, 3556, 3555, 3559]
  line "" [3544, 3548, 3567, 3576, 3590, 3586]
  line "VLTC (2m24s+1.12s)" [3544, 3548, 3567, 3576, 3590, 3586]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 26 | 342 | 51% | 3573 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 23 | 436 | 51% | 3552 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3440 | 19 | 642 | 51% | 3436 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 34 | 202 | 51% | 3582 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 30 | 256 | 49% | 3561 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3437 | 26 | 360 | 50% | 3436 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 31 | 240 | 50% | 3575 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3556 | 27 | 304 | 50% | 3556 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3430 | 26 | 348 | 50% | 3428 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 26 | 348 | 51% | 3557 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 23 | 428 | 50% | 3534 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3399 | 24 | 440 | 50% | 3402 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 19 | 648 | 51% | 3541 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 16 | 868 | 50% | 3518 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3356 | 16 | 964 | 50% | 3359 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 30 | 268 | 56% | 3465 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3499 | 33 | 212 | 51% | 3492 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3344 | 32 | 244 | 52% | 3325 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |