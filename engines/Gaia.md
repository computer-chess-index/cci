# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.3.1 | 2026-09-08 |  |  |  |  |
| 4.3.0 | 2026-09-05 | 3357<sub>(+81) | 3542<sub>(+74) | 3557<sub>(+33) |  |
| 4.2.6 | 2026-08-29 | 3276<sub>(+1) | 3468<sub>(+7) | 3524<sub>(+19) |  |
| 4.2.5 | 2026-08-24 | 3275<sub>(+20) | 3461<sub>(+21) | 3505<sub>(+8) |  |
| 4.2.4 | 2026-08-23 | 3255<sub>(+12) | 3440<sub>(-21) | 3497<sub>(0) |  |
| 4.2.3 | 2026-08-21 | 3243<sub>(-8) | 3461<sub>(+12) | 3497<sub>(+21) |  |
| 4.2.2 | 2026-08-13 | 3251<sub>(+53) | 3449<sub>(-3) | 3476<sub>(-31) |  |
| 4.2.1 | 2026-08-09 | 3198<sub>(+new) | 3452<sub>(+new) | 3507<sub>(+new) |  |
| 4.1.3 | 2026-02-26 |  |  |  |  |
| 4.1.2 | 2026-02-24 |  |  |  |  |
| 4.1.1 | 2026-02-24 |  |  |  |  |
| 4.1.0 | 2026-02-22 |  |  |  | Skipped for 4.1.1 |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-11 04:38:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6", "4.3.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3198, 3251, 3243, 3255, 3275, 3276, 3357]
  line "STC (8.0+0.08s)" [3198, 3251, 3243, 3255, 3275, 3276, 3357]
  line "LTC (60.0+0.60s)" [3452, 3449, 3461, 3440, 3461, 3468, 3542]
  line "" [3507, 3476, 3497, 3497, 3505, 3524, 3557]
  line "VLTC (2m24s+1.12s)" [3507, 3476, 3497, 3497, 3505, 3524, 3557]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 43 | 124 | 51% | 3552 | 90% |
| 4.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 34 | 196 | 51% | 3540 | 85% |
| 4.3.0 | STC <sub>(8.0+0.08s)</sub> | 3357 | 33 | 234 | 49% | 3364 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 33 | 208 | 50% | 3522 | 84% |
| 4.2.6 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 31 | 250 | 51% | 3461 | 81% |
| 4.2.6 | STC <sub>(8.0+0.08s)</sub> | 3276 | 33 | 232 | 50% | 3275 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 28 | 300 | 51% | 3499 | 79% |
| 4.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3461 | 28 | 306 | 51% | 3453 | 76% |
| 4.2.5 | STC <sub>(8.0+0.08s)</sub> | 3275 | 33 | 236 | 52% | 3255 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 31 | 248 | 49% | 3503 | 79% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3440 | 33 | 226 | 51% | 3436 | 77% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3255 | 33 | 238 | 47% | 3274 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 36 | 190 | 51% | 3491 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3461 | 30 | 266 | 48% | 3475 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3243 | 35 | 212 | 49% | 3254 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 32 | 240 | 50% | 3479 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 32 | 236 | 50% | 3451 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3251 | 33 | 248 | 51% | 3247 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 56 | 88 | 59% | 3348 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3452 | 47 | 128 | 59% | 3279 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3198 | 45 | 152 | 56% | 3075 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |