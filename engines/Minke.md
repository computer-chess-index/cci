# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3366<sub>(+208) | 3522<sub>(+150) | 3536<sub>(+108) |  |
| 6.0.0 | 2026-04-25 | 3158<sub>(+23) | 3372<sub>(+51) | 3428<sub>(+38) |  |
| 5.0.0 | 2026-02-13 | 3135<sub>(+61) | 3321<sub>(+45) | 3390<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3074<sub>(+95) | 3276<sub>(+63) | 3301<sub>(+52) |  |
| 3.0.0 | 2025-10-20 | 2979 | 3213 | 3249 |  |
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

Generated: 2026-09-10 04:40:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 2900 --> 3600
  line "" [2979, 3074, 3135, 3158, 3366]
  line "STC (8.0+0.08s)" [2979, 3074, 3135, 3158, 3366]
  line "LTC (60.0+0.60s)" [3213, 3276, 3321, 3372, 3522]
  line "" [3249, 3301, 3390, 3428, 3536]
  line "VLTC (2m24s+1.12s)" [3249, 3301, 3390, 3428, 3536]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 31 | 234 | 50% | 3534 | 88% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 32 | 234 | 51% | 3517 | 80% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3366 | 28 | 334 | 48% | 3380 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 23 | 450 | 49% | 3433 | 76% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3372 | 24 | 432 | 50% | 3372 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3158 | 27 | 382 | 49% | 3167 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3390 | 24 | 414 | 50% | 3390 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3321 | 26 | 382 | 51% | 3313 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3135 | 25 | 444 | 51% | 3131 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3301 | 30 | 276 | 51% | 3291 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3276 | 31 | 268 | 48% | 3291 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3074 | 33 | 252 | 51% | 3046 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3249 | 37 | 184 | 50% | 3251 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3213 | 32 | 252 | 48% | 3228 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2979 | 34 | 240 | 48% | 2992 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |