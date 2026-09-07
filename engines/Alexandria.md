# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3433<sub>(+3) | 3551<sub>(+3) | 3579<sub>(-4) |  |
| 8.1.12 | 2025-11-09 | 3430<sub>(+6) | 3548<sub>(-1) | 3583<sub>(+14) |  |
| 8.1 | 2025-08-16 | 3424<sub>(+30) | 3549<sub>(+25) | 3569<sub>(+9) |  |
| 8.0 | 2025-03-03 | 3394<sub>(+45) | 3524<sub>(+14) | 3560<sub>(+18) |  |
| 7.1 | 2024-10-26 | 3349<sub>(+10) | 3510<sub>(+16) | 3542<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3339 | 3494 | 3537 |  |
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

Generated: 2026-09-07 04:35:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3339, 3349, 3394, 3424, 3430, 3433]
  line "STC (8.0+0.08s)" [3339, 3349, 3394, 3424, 3430, 3433]
  line "LTC (60.0+0.60s)" [3494, 3510, 3524, 3549, 3548, 3551]
  line "" [3537, 3542, 3560, 3569, 3583, 3579]
  line "VLTC (2m24s+1.12s)" [3537, 3542, 3560, 3569, 3583, 3579]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 26 | 330 | 52% | 3567 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3551 | 23 | 424 | 51% | 3545 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3433 | 20 | 624 | 51% | 3428 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 34 | 202 | 51% | 3575 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 30 | 256 | 49% | 3555 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3430 | 26 | 360 | 50% | 3429 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 31 | 240 | 50% | 3568 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3549 | 27 | 304 | 50% | 3549 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3424 | 26 | 348 | 50% | 3421 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 26 | 348 | 51% | 3551 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 23 | 428 | 50% | 3528 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3394 | 24 | 440 | 50% | 3395 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 19 | 648 | 51% | 3536 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 16 | 868 | 50% | 3511 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3349 | 16 | 964 | 50% | 3352 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 30 | 268 | 56% | 3459 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3494 | 33 | 212 | 51% | 3486 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3339 | 32 | 244 | 52% | 3318 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |