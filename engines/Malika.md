# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3105<sub>(+1) | 3370<sub>(+79) | 3421<sub>(+59) |  |
| 1.685 | 2026-07-17 | 3104<sub>(+66) | 3291<sub>(+43) | 3362<sub>(+81) |  |
| 1.116 | 2026-05-07 | 3038<sub>(+56) | 3248<sub>(+63) | 3281<sub>(+21) |  |
| 1.0 | 2026-03-26 | 2982<sub>(+313) | 3185<sub>(+293) | 3260<sub>(+362) |  |
| 0.892 | 2026-02-23 | 2669<sub>(-43) | 2892<sub>(-102) | 2898<sub>(-206) |  |
| 0.418 | 2026-02-07 | 2712 | 2994 | 3104 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Malika+<version>&body=###%20Engine%20name%0AMalika%0A%0A###%20Version%0A1.821" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-13 04:39:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3500
  line "" [2712, 2669, 2982, 3038, 3104, 3105]
  line "STC (8.0+0.08s)" [2712, 2669, 2982, 3038, 3104, 3105]
  line "LTC (60.0+0.60s)" [2994, 2892, 3185, 3248, 3291, 3370]
  line "" [3104, 2898, 3260, 3281, 3362, 3421]
  line "VLTC (2m24s+1.12s)" [3104, 2898, 3260, 3281, 3362, 3421]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3421 | 28 | 328 | 50% | 3424 | 73% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 29 | 316 | 50% | 3374 | 67% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3105 | 30 | 308 | 51% | 3094 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3362 | 28 | 348 | 49% | 3367 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3291 | 29 | 324 | 50% | 3289 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3104 | 32 | 272 | 49% | 3112 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 28 | 366 | 48% | 3298 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3248 | 25 | 466 | 49% | 3259 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3038 | 27 | 422 | 51% | 3027 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3260 | 28 | 366 | 50% | 3262 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3185 | 29 | 364 | 50% | 3182 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2982 | 29 | 408 | 52% | 2961 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2898 | 35 | 286 | 49% | 2911 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2892 | 34 | 288 | 49% | 2900 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2669 | 35 | 292 | 52% | 2646 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3104 | 33 | 276 | 50% | 3102 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2994 | 35 | 244 | 52% | 2975 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2712 | 37 | 228 | 51% | 2701 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |