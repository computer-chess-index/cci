# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3437<sub>(+3) | 3555<sub>(+3) | 3583<sub>(-3) |  |
| 8.1.12 | 2025-11-09 | 3434<sub>(+8) | 3552<sub>(-1) | 3586<sub>(+13) |  |
| 8.1 | 2025-08-16 | 3426<sub>(+29) | 3553<sub>(+25) | 3573<sub>(+9) |  |
| 8.0 | 2025-03-03 | 3397<sub>(+44) | 3528<sub>(+14) | 3564<sub>(+19) |  |
| 7.1 | 2024-10-26 | 3353<sub>(+12) | 3514<sub>(+17) | 3545<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3341 | 3497 | 3540 |  |
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

Generated: 2026-09-16 04:35:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3341, 3353, 3397, 3426, 3434, 3437]
  line "STC (8.0+0.08s)" [3341, 3353, 3397, 3426, 3434, 3437]
  line "LTC (60.0+0.60s)" [3497, 3514, 3528, 3553, 3552, 3555]
  line "" [3540, 3545, 3564, 3573, 3586, 3583]
  line "VLTC (2m24s+1.12s)" [3540, 3545, 3564, 3573, 3586, 3583]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 26 | 342 | 51% | 3571 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 23 | 436 | 51% | 3549 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3437 | 20 | 638 | 51% | 3432 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 34 | 202 | 51% | 3578 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3552 | 30 | 256 | 49% | 3559 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3434 | 26 | 360 | 50% | 3433 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3573 | 31 | 240 | 50% | 3572 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3553 | 27 | 304 | 50% | 3553 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3426 | 26 | 348 | 50% | 3425 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 26 | 348 | 51% | 3555 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 23 | 428 | 50% | 3530 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3397 | 24 | 440 | 50% | 3398 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 19 | 648 | 51% | 3538 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 16 | 868 | 50% | 3514 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3353 | 16 | 964 | 50% | 3356 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 30 | 268 | 56% | 3463 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 33 | 212 | 51% | 3490 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3341 | 32 | 244 | 52% | 3322 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |