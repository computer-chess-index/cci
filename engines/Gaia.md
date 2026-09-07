# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.3.0 | 2026-09-05 | 3375<sub>(+99) | 3528<sub>(+61) | 3560<sub>(+36) |  |
| 4.2.6 | 2026-08-29 | 3276<sub>(+2) | 3467<sub>(+7) | 3524<sub>(+21) |  |
| 4.2.5 | 2026-08-24 | 3274<sub>(+19) | 3460<sub>(+22) | 3503<sub>(+6) |  |
| 4.2.4 | 2026-08-23 | 3255<sub>(+12) | 3438<sub>(-22) | 3497<sub>(+2) |  |
| 4.2.3 | 2026-08-21 | 3243<sub>(-6) | 3460<sub>(+12) | 3495<sub>(+19) |  |
| 4.2.2 | 2026-08-13 | 3249<sub>(+51) | 3448<sub>(-3) | 3476<sub>(-30) |  |
| 4.2.1 | 2026-08-09 | 3198<sub>(+new) | 3451<sub>(+new) | 3506<sub>(+new) |  |
| 4.1.3 | 2026-02-26 |  |  |  |  |
| 4.1.2 | 2026-02-24 |  |  |  |  |
| 4.1.1 | 2026-02-24 |  |  |  |  |
| 4.1.0 | 2026-02-22 |  |  |  | Skipped for 4.1.1 |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-07 04:38:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6", "4.3.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3198, 3249, 3243, 3255, 3274, 3276, 3375]
  line "STC (8.0+0.08s)" [3198, 3249, 3243, 3255, 3274, 3276, 3375]
  line "LTC (60.0+0.60s)" [3451, 3448, 3460, 3438, 3460, 3467, 3528]
  line "" [3506, 3476, 3495, 3497, 3503, 3524, 3560]
  line "VLTC (2m24s+1.12s)" [3506, 3476, 3495, 3497, 3503, 3524, 3560]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 55 | 76 | 52% | 3546 | 86% |
| 4.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 52 | 88 | 48% | 3538 | 78% |
| 4.3.0 | STC <sub>(8.0+0.08s)</sub> | 3375 | 63 | 64 | 51% | 3371 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 33 | 208 | 50% | 3521 | 84% |
| 4.2.6 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 31 | 246 | 51% | 3460 | 81% |
| 4.2.6 | STC <sub>(8.0+0.08s)</sub> | 3276 | 33 | 232 | 50% | 3274 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 28 | 300 | 51% | 3498 | 79% |
| 4.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 28 | 306 | 51% | 3452 | 76% |
| 4.2.5 | STC <sub>(8.0+0.08s)</sub> | 3274 | 33 | 236 | 52% | 3255 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 31 | 248 | 49% | 3503 | 79% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 33 | 226 | 51% | 3434 | 77% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3255 | 33 | 238 | 47% | 3272 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 36 | 190 | 51% | 3490 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 30 | 266 | 48% | 3474 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3243 | 35 | 212 | 49% | 3254 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 32 | 240 | 50% | 3478 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 32 | 236 | 50% | 3449 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3249 | 33 | 248 | 51% | 3247 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 56 | 88 | 59% | 3347 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3451 | 47 | 128 | 59% | 3278 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3198 | 45 | 152 | 56% | 3075 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |