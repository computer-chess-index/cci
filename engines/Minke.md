# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3371<sub>(+208) | 3526<sub>(+148) | 3537<sub>(+104) |  |
| 6.0.0 | 2026-04-25 | 3163<sub>(+24) | 3378<sub>(+53) | 3433<sub>(+39) |  |
| 5.0.0 | 2026-02-13 | 3139<sub>(+61) | 3325<sub>(+43) | 3394<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3078<sub>(+93) | 3282<sub>(+65) | 3305<sub>(+51) |  |
| 3.0.0 | 2025-10-20 | 2985 | 3217 | 3254 |  |
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

Generated: 2026-09-24 04:40:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 2900 --> 3600
  line "" [2985, 3078, 3139, 3163, 3371]
  line "STC (8.0+0.08s)" [2985, 3078, 3139, 3163, 3371]
  line "LTC (60.0+0.60s)" [3217, 3282, 3325, 3378, 3526]
  line "" [3254, 3305, 3394, 3433, 3537]
  line "VLTC (2m24s+1.12s)" [3254, 3305, 3394, 3433, 3537]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 29 | 270 | 50% | 3538 | 88% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 31 | 248 | 50% | 3524 | 81% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3371 | 28 | 346 | 48% | 3384 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 23 | 450 | 49% | 3438 | 76% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3378 | 24 | 432 | 50% | 3378 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3163 | 27 | 382 | 49% | 3173 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3394 | 24 | 414 | 50% | 3395 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3325 | 26 | 382 | 51% | 3317 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3139 | 25 | 444 | 51% | 3135 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3305 | 30 | 276 | 51% | 3295 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3282 | 31 | 268 | 48% | 3295 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3078 | 33 | 252 | 51% | 3050 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3254 | 37 | 184 | 50% | 3255 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3217 | 32 | 252 | 48% | 3232 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2985 | 34 | 240 | 48% | 2997 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |