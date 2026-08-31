# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.6 | 2026-08-29 | 3276<sub>(+4) | 3460<sub>(+3) | 3518<sub>(+17) |  |
| 4.2.5 | 2026-08-24 | 3272<sub>(+18) | 3457<sub>(+21) | 3501<sub>(+7) |  |
| 4.2.4 | 2026-08-23 | 3254<sub>(+3) | 3436<sub>(+3) | 3494<sub>(+4) |  |
| 4.2.4 | 2026-08-23 | 3251<sub>(+11) | 3433<sub>(-24) | 3490<sub>(-2) |  |
| 4.2.3 | 2026-08-21 | 3240<sub>(-8) | 3457<sub>(+12) | 3492<sub>(+18) |  |
| 4.2.2 | 2026-08-13 | 3248<sub>(+51) | 3445<sub>(-3) | 3474<sub>(-29) |  |
| 4.2.1 | 2026-08-09 | 3197<sub>(+new) | 3448<sub>(+new) | 3503<sub>(+new) |  |
| 4.1.3 | 2026-02-26 |  |  |  |  |
| 4.1.2 | 2026-02-24 |  |  |  |  |
| 4.1.1 | 2026-02-24 |  |  |  |  |
| 4.1.0 | 2026-02-22 |  |  |  | Skipped for 4.1.1 |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.2.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-31 04:35:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.4", "4.2.5", "4.2.6"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3197, 3248, 3240, 3254, 3251, 3272, 3276]
  line "STC (8.0+0.08s)" [3197, 3248, 3240, 3254, 3251, 3272, 3276]
  line "LTC (60.0+0.60s)" [3448, 3445, 3457, 3436, 3433, 3457, 3460]
  line "" [3503, 3474, 3492, 3494, 3490, 3501, 3518]
  line "VLTC (2m24s+1.12s)" [3503, 3474, 3492, 3494, 3490, 3501, 3518]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 44 | 120 | 51% | 3514 | 83% |
| 4.2.6 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 35 | 196 | 51% | 3455 | 82% |
| 4.2.6 | STC <sub>(8.0+0.08s)</sub> | 3276 | 35 | 212 | 51% | 3274 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 28 | 300 | 51% | 3495 | 79% |
| 4.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 28 | 306 | 51% | 3449 | 76% |
| 4.2.5 | STC <sub>(8.0+0.08s)</sub> | 3272 | 33 | 236 | 52% | 3252 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 31 | 248 | 49% | 3501 | 79% |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 31 | 244 | 49% | 3498 | 79% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3433 | 33 | 222 | 51% | 3430 | 78% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3436 | 33 | 226 | 51% | 3432 | 77% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3251 | 33 | 234 | 47% | 3270 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3254 | 33 | 238 | 47% | 3271 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 36 | 190 | 51% | 3487 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 30 | 266 | 48% | 3471 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3240 | 35 | 212 | 49% | 3252 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 32 | 240 | 50% | 3475 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 32 | 236 | 50% | 3447 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3248 | 33 | 248 | 51% | 3245 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 56 | 88 | 59% | 3344 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 47 | 128 | 59% | 3276 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3197 | 45 | 152 | 56% | 3074 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |