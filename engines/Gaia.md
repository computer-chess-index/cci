# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.3.0 | 2026-09-05 |  |  |  |  |
| 4.2.6 | 2026-08-29 | 3275<sub>(+1) | 3467<sub>(+7) | 3522<sub>(+19) |  |
| 4.2.5 | 2026-08-24 | 3274<sub>(+20) | 3460<sub>(+23) | 3503<sub>(+8) |  |
| 4.2.4 | 2026-08-23 | 3254<sub>(+13) | 3437<sub>(-23) | 3495<sub>(+1) |  |
| 4.2.3 | 2026-08-21 | 3241<sub>(-8) | 3460<sub>(+12) | 3494<sub>(+19) |  |
| 4.2.2 | 2026-08-13 | 3249<sub>(+52) | 3448<sub>(-1) | 3475<sub>(-30) |  |
| 4.2.1 | 2026-08-09 | 3197<sub>(+new) | 3449<sub>(+new) | 3505<sub>(+new) |  |
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

Generated: 2026-09-06 09:59:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3197, 3249, 3241, 3254, 3274, 3275]
  line "STC (8.0+0.08s)" [3197, 3249, 3241, 3254, 3274, 3275]
  line "LTC (60.0+0.60s)" [3449, 3448, 3460, 3437, 3460, 3467]
  line "" [3505, 3475, 3494, 3495, 3503, 3522]
  line "VLTC (2m24s+1.12s)" [3505, 3475, 3494, 3495, 3503, 3522]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 34 | 204 | 50% | 3519 | 83% |
| 4.2.6 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 31 | 246 | 51% | 3460 | 81% |
| 4.2.6 | STC <sub>(8.0+0.08s)</sub> | 3275 | 33 | 232 | 50% | 3274 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 28 | 300 | 51% | 3498 | 79% |
| 4.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 28 | 306 | 51% | 3452 | 76% |
| 4.2.5 | STC <sub>(8.0+0.08s)</sub> | 3274 | 33 | 236 | 52% | 3254 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 31 | 248 | 49% | 3502 | 79% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3437 | 33 | 226 | 51% | 3433 | 77% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3254 | 33 | 238 | 47% | 3272 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 36 | 190 | 51% | 3490 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 30 | 266 | 48% | 3474 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3241 | 35 | 212 | 49% | 3252 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3475 | 32 | 240 | 50% | 3478 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 32 | 236 | 50% | 3448 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3249 | 33 | 248 | 51% | 3247 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 56 | 88 | 59% | 3347 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 47 | 128 | 59% | 3278 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3197 | 45 | 152 | 56% | 3075 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |