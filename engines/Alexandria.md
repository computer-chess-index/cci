# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3436<sub>(+3) | 3553<sub>(+2) | 3582<sub>(-2) |  |
| 8.1.12 | 2025-11-09 | 3433<sub>(+8) | 3551<sub>(-1) | 3584<sub>(+12) |  |
| 8.1 | 2025-08-16 | 3425<sub>(+30) | 3552<sub>(+26) | 3572<sub>(+11) |  |
| 8.0 | 2025-03-03 | 3395<sub>(+43) | 3526<sub>(+13) | 3561<sub>(+17) |  |
| 7.1 | 2024-10-26 | 3352<sub>(+12) | 3513<sub>(+18) | 3544<sub>(+6) |  |
| 7.0 | 2024-05-25 | 3340 | 3495 | 3538 |  |
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

Generated: 2026-09-13 04:35:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3340, 3352, 3395, 3425, 3433, 3436]
  line "STC (8.0+0.08s)" [3340, 3352, 3395, 3425, 3433, 3436]
  line "LTC (60.0+0.60s)" [3495, 3513, 3526, 3552, 3551, 3553]
  line "" [3538, 3544, 3561, 3572, 3584, 3582]
  line "VLTC (2m24s+1.12s)" [3538, 3544, 3561, 3572, 3584, 3582]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3582 | 26 | 338 | 51% | 3569 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3553 | 23 | 436 | 51% | 3548 | 90% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3436 | 20 | 638 | 51% | 3430 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3584 | 34 | 202 | 51% | 3576 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3551 | 30 | 256 | 49% | 3557 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3433 | 26 | 360 | 50% | 3430 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 31 | 240 | 50% | 3571 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3552 | 27 | 304 | 50% | 3551 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3425 | 26 | 348 | 50% | 3424 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 26 | 348 | 51% | 3553 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 23 | 428 | 50% | 3529 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3395 | 24 | 440 | 50% | 3397 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 19 | 648 | 51% | 3537 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 16 | 868 | 50% | 3513 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3352 | 16 | 964 | 50% | 3355 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 30 | 268 | 56% | 3461 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 33 | 212 | 51% | 3488 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3340 | 32 | 244 | 52% | 3321 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |