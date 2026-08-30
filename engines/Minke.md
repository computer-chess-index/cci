# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3353<sub>(+198) | 3519<sub>(+149) | 3532<sub>(+107) |  |
| 6.0.0 | 2026-04-25 | 3155<sub>(+23) | 3370<sub>(+53) | 3425<sub>(+39) |  |
| 5.0.0 | 2026-02-13 | 3132<sub>(+61) | 3317<sub>(+43) | 3386<sub>(+88) |  |
| 4.0.0 | 2025-12-29 | 3071<sub>(+94) | 3274<sub>(+64) | 3298<sub>(+51) |  |
| 3.0.0 | 2025-10-20 | 2977 | 3210 | 3247 |  |
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

Generated: 2026-08-30 13:10:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 2900 --> 3600
  line "" [2977, 3071, 3132, 3155, 3353]
  line "STC (8.0+0.08s)" [2977, 3071, 3132, 3155, 3353]
  line "LTC (60.0+0.60s)" [3210, 3274, 3317, 3370, 3519]
  line "" [3247, 3298, 3386, 3425, 3532]
  line "VLTC (2m24s+1.12s)" [3247, 3298, 3386, 3425, 3532]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 38 | 154 | 50% | 3530 | 88% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 40 | 148 | 51% | 3510 | 81% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3353 | 31 | 282 | 46% | 3383 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 23 | 450 | 49% | 3430 | 76% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 24 | 432 | 50% | 3370 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3155 | 27 | 382 | 49% | 3164 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3386 | 24 | 414 | 50% | 3387 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3317 | 26 | 382 | 51% | 3309 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3132 | 25 | 444 | 51% | 3128 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3298 | 30 | 276 | 51% | 3289 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3274 | 31 | 268 | 48% | 3289 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3071 | 33 | 252 | 51% | 3043 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3247 | 37 | 184 | 50% | 3248 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3210 | 32 | 252 | 48% | 3225 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2977 | 34 | 240 | 48% | 2989 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |