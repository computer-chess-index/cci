# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3355<sub>(+199) | 3519<sub>(+149) | 3534<sub>(+109) |  |
| 6.0.0 | 2026-04-25 | 3156<sub>(+23) | 3370<sub>(+52) | 3425<sub>(+38) |  |
| 5.0.0 | 2026-02-13 | 3133<sub>(+62) | 3318<sub>(+43) | 3387<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3071<sub>(+93) | 3275<sub>(+65) | 3298<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 2978 | 3210 | 3248 |  |
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

Generated: 2026-09-01 19:02:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 2900 --> 3600
  line "" [2978, 3071, 3133, 3156, 3355]
  line "STC (8.0+0.08s)" [2978, 3071, 3133, 3156, 3355]
  line "LTC (60.0+0.60s)" [3210, 3275, 3318, 3370, 3519]
  line "" [3248, 3298, 3387, 3425, 3534]
  line "VLTC (2m24s+1.12s)" [3248, 3298, 3387, 3425, 3534]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 38 | 162 | 51% | 3530 | 88% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 37 | 168 | 51% | 3510 | 81% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3355 | 30 | 298 | 46% | 3382 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 23 | 450 | 49% | 3430 | 76% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 24 | 432 | 50% | 3370 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3156 | 27 | 382 | 49% | 3166 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 24 | 414 | 50% | 3387 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3318 | 26 | 382 | 51% | 3310 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3133 | 25 | 444 | 51% | 3129 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3298 | 30 | 276 | 51% | 3289 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3275 | 31 | 268 | 48% | 3289 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3071 | 33 | 252 | 51% | 3043 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3248 | 37 | 184 | 50% | 3248 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3210 | 32 | 252 | 48% | 3227 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2978 | 34 | 240 | 48% | 2990 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |