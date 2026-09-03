# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.6 | 2026-08-29 | 3279<sub>(+7) | 3459<sub>(0) | 3515<sub>(+13) |  |
| 4.2.5 | 2026-08-24 | 3272<sub>(+18) | 3459<sub>(+22) | 3502<sub>(+8) |  |
| 4.2.4 | 2026-08-23 | 3254<sub>(+3) | 3437<sub>(+4) | 3494<sub>(+4) |  |
| 4.2.4 | 2026-08-23 | 3251<sub>(+10) | 3433<sub>(-26) | 3490<sub>(-4) |  |
| 4.2.3 | 2026-08-21 | 3241<sub>(-8) | 3459<sub>(+12) | 3494<sub>(+20) |  |
| 4.2.2 | 2026-08-13 | 3249<sub>(+52) | 3447<sub>(-2) | 3474<sub>(-31) |  |
| 4.2.1 | 2026-08-09 | 3197<sub>(+new) | 3449<sub>(+new) | 3505<sub>(+new) |  |
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

Generated: 2026-09-03 04:35:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.4", "4.2.5", "4.2.6"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3197, 3249, 3241, 3254, 3251, 3272, 3279]
  line "STC (8.0+0.08s)" [3197, 3249, 3241, 3254, 3251, 3272, 3279]
  line "LTC (60.0+0.60s)" [3449, 3447, 3459, 3437, 3433, 3459, 3459]
  line "" [3505, 3474, 3494, 3494, 3490, 3502, 3515]
  line "VLTC (2m24s+1.12s)" [3505, 3474, 3494, 3494, 3490, 3502, 3515]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 36 | 176 | 50% | 3517 | 83% |
| 4.2.6 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 33 | 216 | 50% | 3459 | 82% |
| 4.2.6 | STC <sub>(8.0+0.08s)</sub> | 3279 | 34 | 220 | 51% | 3274 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 28 | 300 | 51% | 3497 | 79% |
| 4.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 28 | 306 | 51% | 3451 | 76% |
| 4.2.5 | STC <sub>(8.0+0.08s)</sub> | 3272 | 33 | 236 | 52% | 3254 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 31 | 248 | 49% | 3501 | 79% |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 31 | 244 | 49% | 3498 | 79% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3433 | 33 | 222 | 51% | 3430 | 78% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3437 | 33 | 226 | 51% | 3433 | 77% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3251 | 33 | 234 | 47% | 3270 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3254 | 33 | 238 | 47% | 3272 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 36 | 190 | 51% | 3488 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 30 | 266 | 48% | 3472 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3241 | 35 | 212 | 49% | 3252 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 32 | 240 | 50% | 3476 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 32 | 236 | 50% | 3447 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3249 | 33 | 248 | 51% | 3245 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 56 | 88 | 59% | 3345 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 47 | 128 | 59% | 3276 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3197 | 45 | 152 | 56% | 3075 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |