# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3432<sub>(+3) | 3548<sub>(+2) | 3579<sub>(-3) |  |
| 8.1.12 | 2025-11-09 | 3429<sub>(+7) | 3546<sub>(-2) | 3582<sub>(+14) |  |
| 8.1 | 2025-08-16 | 3422<sub>(+29) | 3548<sub>(+26) | 3568<sub>(+9) |  |
| 8.0 | 2025-03-03 | 3393<sub>(+45) | 3522<sub>(+13) | 3559<sub>(+19) |  |
| 7.1 | 2024-10-26 | 3348<sub>(+11) | 3509<sub>(+18) | 3540<sub>(+4) |  |
| 7.0 | 2024-05-25 | 3337 | 3491 | 3536 |  |
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

Generated: 2026-09-01 18:57:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3337, 3348, 3393, 3422, 3429, 3432]
  line "STC (8.0+0.08s)" [3337, 3348, 3393, 3422, 3429, 3432]
  line "LTC (60.0+0.60s)" [3491, 3509, 3522, 3548, 3546, 3548]
  line "" [3536, 3540, 3559, 3568, 3582, 3579]
  line "VLTC (2m24s+1.12s)" [3536, 3540, 3559, 3568, 3582, 3579]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 27 | 322 | 52% | 3564 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 23 | 420 | 51% | 3544 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3432 | 20 | 620 | 51% | 3426 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3582 | 34 | 202 | 51% | 3573 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 30 | 256 | 49% | 3553 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3429 | 26 | 360 | 50% | 3428 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 31 | 240 | 50% | 3567 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 27 | 304 | 50% | 3548 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3422 | 26 | 348 | 50% | 3421 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 26 | 348 | 51% | 3549 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 23 | 428 | 50% | 3526 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3393 | 24 | 440 | 50% | 3394 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 19 | 648 | 51% | 3533 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 16 | 868 | 50% | 3510 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3348 | 16 | 964 | 50% | 3351 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 30 | 268 | 56% | 3457 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3491 | 33 | 212 | 51% | 3484 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3337 | 32 | 244 | 52% | 3318 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |