# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3368<sub>(+208) | 3524<sub>(+149) | 3534<sub>(+104) |  |
| 6.0.0 | 2026-04-25 | 3160<sub>(+24) | 3375<sub>(+53) | 3430<sub>(+39) |  |
| 5.0.0 | 2026-02-13 | 3136<sub>(+61) | 3322<sub>(+43) | 3391<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3075<sub>(+93) | 3279<sub>(+65) | 3302<sub>(+51) |  |
| 3.0.0 | 2025-10-20 | 2982 | 3214 | 3251 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Minke+<version>&body=###%20Engine%20name%0AMinke%0A%0A###%20Version%0A7.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-20 04:39:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 2900 --> 3600
  line "" [2982, 3075, 3136, 3160, 3368]
  line "STC (8.0+0.08s)" [2982, 3075, 3136, 3160, 3368]
  line "LTC (60.0+0.60s)" [3214, 3279, 3322, 3375, 3524]
  line "" [3251, 3302, 3391, 3430, 3534]
  line "VLTC (2m24s+1.12s)" [3251, 3302, 3391, 3430, 3534]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 29 | 264 | 50% | 3536 | 88% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 31 | 248 | 50% | 3521 | 81% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3368 | 28 | 346 | 48% | 3382 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 23 | 450 | 49% | 3436 | 76% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 24 | 432 | 50% | 3375 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3160 | 27 | 382 | 49% | 3170 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3391 | 24 | 414 | 50% | 3393 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3322 | 26 | 382 | 51% | 3314 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3136 | 25 | 444 | 51% | 3133 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3302 | 30 | 276 | 51% | 3294 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3279 | 31 | 268 | 48% | 3293 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3075 | 33 | 252 | 51% | 3047 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3251 | 37 | 184 | 50% | 3252 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3214 | 32 | 252 | 48% | 3229 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2982 | 34 | 240 | 48% | 2994 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |