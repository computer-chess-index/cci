# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3356<sub>(+198) | 3519<sub>(+148) | 3536<sub>(+110) |  |
| 6.0.0 | 2026-04-25 | 3158<sub>(+23) | 3371<sub>(+51) | 3426<sub>(+37) |  |
| 5.0.0 | 2026-02-13 | 3135<sub>(+62) | 3320<sub>(+45) | 3389<sub>(+90) |  |
| 4.0.0 | 2025-12-29 | 3073<sub>(+95) | 3275<sub>(+63) | 3299<sub>(+51) |  |
| 3.0.0 | 2025-10-20 | 2978 | 3212 | 3248 |  |
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

Generated: 2026-09-01 04:36:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 2900 --> 3600
  line "" [2978, 3073, 3135, 3158, 3356]
  line "STC (8.0+0.08s)" [2978, 3073, 3135, 3158, 3356]
  line "LTC (60.0+0.60s)" [3212, 3275, 3320, 3371, 3519]
  line "" [3248, 3299, 3389, 3426, 3536]
  line "VLTC (2m24s+1.12s)" [3248, 3299, 3389, 3426, 3536]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 38 | 162 | 51% | 3532 | 88% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 37 | 168 | 51% | 3511 | 81% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3356 | 30 | 294 | 46% | 3383 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 23 | 450 | 49% | 3432 | 76% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 24 | 432 | 50% | 3371 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3158 | 27 | 382 | 49% | 3167 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3389 | 24 | 414 | 50% | 3389 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3320 | 26 | 382 | 51% | 3312 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3135 | 25 | 444 | 51% | 3131 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3299 | 30 | 276 | 51% | 3290 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3275 | 31 | 268 | 48% | 3290 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3073 | 33 | 252 | 51% | 3044 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3248 | 37 | 184 | 50% | 3249 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3212 | 32 | 252 | 48% | 3227 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2978 | 34 | 240 | 48% | 2990 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |