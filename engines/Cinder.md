# Engine: Cinder

Author: Bruno Dutra

Home: https://github.com/brunocodutra/cinder

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.1 | 2026-08-16 | 3433<sub>(+50) | 3561<sub>(+12) | 3572<sub>(+7) |  |
| 0.5.2 | 2026-07-12 | 3383<sub>(+19) | 3549<sub>(+9) | 3565<sub>(-7) |  |
| 0.5.1 | 2026-07-08 | 3364<sub>(-45) | 3540<sub>(+4) | 3572<sub>(-15) |  |
| 0.5.0 | 2026-07-04 | 3409<sub>(+52) | 3536<sub>(+54) | 3587<sub>(+73) |  |
| 0.4.1 | 2025-12-05 | 3357<sub>(+43) | 3482<sub>(-2) | 3514<sub>(-19) |  |
| 0.4.0 | 2025-12-04 | 3314<sub>(+new) | 3484<sub>(+new) | 3533<sub>(+new) |  |
| 0.3.1 | 2025-08-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cinder+<version>&body=###%20Engine%20name%0ACinder%0A%0A###%20Version%0A0.6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:37:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.4.1", "0.5.0", "0.5.1", "0.5.2", "0.6.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3314, 3357, 3409, 3364, 3383, 3433]
  line "STC (8.0+0.08s)" [3314, 3357, 3409, 3364, 3383, 3433]
  line "LTC (60.0+0.60s)" [3484, 3482, 3536, 3540, 3549, 3561]
  line "" [3533, 3514, 3587, 3572, 3565, 3572]
  line "VLTC (2m24s+1.12s)" [3533, 3514, 3587, 3572, 3565, 3572]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 32 | 212 | 51% | 3568 | 93% |
| 0.6.1 | LTC <sub>(60.0+0.60s)</sub> | 3561 | 29 | 266 | 51% | 3557 | 88% |
| 0.6.1 | STC <sub>(8.0+0.08s)</sub> | 3433 | 27 | 324 | 49% | 3437 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 29 | 264 | 50% | 3567 | 91% |
| 0.5.2 | LTC <sub>(60.0+0.60s)</sub> | 3549 | 25 | 354 | 51% | 3542 | 91% |
| 0.5.2 | STC <sub>(8.0+0.08s)</sub> | 3383 | 27 | 322 | 49% | 3393 | 83% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 39 | 152 | 49% | 3579 | 89% |
| 0.5.1 | LTC <sub>(60.0+0.60s)</sub> | 3540 | 43 | 120 | 50% | 3540 | 93% |
| 0.5.1 | STC <sub>(8.0+0.08s)</sub> | 3364 | 44 | 124 | 49% | 3371 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3587 | 44 | 118 | 50% | 3583 | 89% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 44 | 120 | 52% | 3524 | 85% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 3409 | 35 | 192 | 48% | 3421 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 23 | 424 | 50% | 3513 | 86% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 25 | 368 | 50% | 3483 | 86% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 3357 | 21 | 564 | 49% | 3364 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 43 | 128 | 54% | 3497 | 82% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 50 | 108 | 56% | 3380 | 71% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3314 | 68 | 72 | 65% | 3066 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |