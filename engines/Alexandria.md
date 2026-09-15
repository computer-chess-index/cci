# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3436<sub>(+3) | 3555<sub>(+4) | 3582<sub>(-4) |  |
| 8.1.12 | 2025-11-09 | 3433<sub>(+7) | 3551<sub>(-1) | 3586<sub>(+14) |  |
| 8.1 | 2025-08-16 | 3426<sub>(+31) | 3552<sub>(+26) | 3572<sub>(+9) |  |
| 8.0 | 2025-03-03 | 3395<sub>(+43) | 3526<sub>(+13) | 3563<sub>(+18) |  |
| 7.1 | 2024-10-26 | 3352<sub>(+12) | 3513<sub>(+16) | 3545<sub>(+5) |  |
| 7.0 | 2024-05-25 | 3340 | 3497 | 3540 |  |
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

Generated: 2026-09-15 04:35:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3340, 3352, 3395, 3426, 3433, 3436]
  line "STC (8.0+0.08s)" [3340, 3352, 3395, 3426, 3433, 3436]
  line "LTC (60.0+0.60s)" [3497, 3513, 3526, 3552, 3551, 3555]
  line "" [3540, 3545, 3563, 3572, 3586, 3582]
  line "VLTC (2m24s+1.12s)" [3540, 3545, 3563, 3572, 3586, 3582]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3582 | 26 | 342 | 51% | 3569 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 23 | 436 | 51% | 3548 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3436 | 20 | 638 | 51% | 3432 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 34 | 202 | 51% | 3578 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3551 | 30 | 256 | 49% | 3557 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3433 | 26 | 360 | 50% | 3432 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 31 | 240 | 50% | 3571 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3552 | 27 | 304 | 50% | 3552 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3426 | 26 | 348 | 50% | 3424 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 26 | 348 | 51% | 3553 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 23 | 428 | 50% | 3530 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3395 | 24 | 440 | 50% | 3398 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 19 | 648 | 51% | 3538 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 16 | 868 | 50% | 3514 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3352 | 16 | 964 | 50% | 3355 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 30 | 268 | 56% | 3461 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 33 | 212 | 51% | 3488 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3340 | 32 | 244 | 52% | 3321 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |