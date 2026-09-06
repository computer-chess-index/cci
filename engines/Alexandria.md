# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3433<sub>(+3) | 3549<sub>(+1) | 3579<sub>(-3) |  |
| 8.1.12 | 2025-11-09 | 3430<sub>(+8) | 3548<sub>(-1) | 3582<sub>(+13) |  |
| 8.1 | 2025-08-16 | 3422<sub>(+29) | 3549<sub>(+25) | 3569<sub>(+9) |  |
| 8.0 | 2025-03-03 | 3393<sub>(+44) | 3524<sub>(+14) | 3560<sub>(+19) |  |
| 7.1 | 2024-10-26 | 3349<sub>(+12) | 3510<sub>(+18) | 3541<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3337 | 3492 | 3536 |  |
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

Generated: 2026-09-06 06:21:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3337, 3349, 3393, 3422, 3430, 3433]
  line "STC (8.0+0.08s)" [3337, 3349, 3393, 3422, 3430, 3433]
  line "LTC (60.0+0.60s)" [3492, 3510, 3524, 3549, 3548, 3549]
  line "" [3536, 3541, 3560, 3569, 3582, 3579]
  line "VLTC (2m24s+1.12s)" [3536, 3541, 3560, 3569, 3582, 3579]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 27 | 322 | 52% | 3565 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3549 | 23 | 420 | 51% | 3544 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3433 | 20 | 624 | 51% | 3428 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3582 | 34 | 202 | 51% | 3573 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 30 | 256 | 49% | 3555 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3430 | 26 | 360 | 50% | 3429 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 31 | 240 | 50% | 3568 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3549 | 27 | 304 | 50% | 3549 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3422 | 26 | 348 | 50% | 3421 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 26 | 348 | 51% | 3551 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 23 | 428 | 50% | 3526 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3393 | 24 | 440 | 50% | 3394 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 19 | 648 | 51% | 3534 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 16 | 868 | 50% | 3510 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3349 | 16 | 964 | 50% | 3352 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 30 | 268 | 56% | 3459 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3492 | 33 | 212 | 51% | 3486 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3337 | 32 | 244 | 52% | 3318 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |