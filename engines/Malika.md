# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3098<sub>(-3) | 3370<sub>(+80) | 3418<sub>(+59) |  |
| 1.685 | 2026-07-17 | 3101<sub>(+66) | 3290<sub>(+45) | 3359<sub>(+81) |  |
| 1.116 | 2026-05-07 | 3035<sub>(+56) | 3245<sub>(+62) | 3278<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2979<sub>(+311) | 3183<sub>(+294) | 3259<sub>(+362) |  |
| 0.892 | 2026-02-23 | 2668<sub>(-43) | 2889<sub>(-103) | 2897<sub>(-205) |  |
| 0.418 | 2026-02-07 | 2711 | 2992 | 3102 |  |
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

Generated: 2026-09-01 19:02:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3500
  line "" [2711, 2668, 2979, 3035, 3101, 3098]
  line "STC (8.0+0.08s)" [2711, 2668, 2979, 3035, 3101, 3098]
  line "LTC (60.0+0.60s)" [2992, 2889, 3183, 3245, 3290, 3370]
  line "" [3102, 2897, 3259, 3278, 3359, 3418]
  line "VLTC (2m24s+1.12s)" [3102, 2897, 3259, 3278, 3359, 3418]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 28 | 308 | 50% | 3421 | 72% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 30 | 288 | 50% | 3371 | 66% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3098 | 31 | 288 | 51% | 3090 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3359 | 28 | 348 | 49% | 3364 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3290 | 29 | 324 | 50% | 3286 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3101 | 32 | 272 | 49% | 3109 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3278 | 28 | 366 | 48% | 3295 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3245 | 25 | 466 | 49% | 3256 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3035 | 27 | 422 | 51% | 3024 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 28 | 366 | 50% | 3259 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3183 | 29 | 364 | 50% | 3181 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2979 | 29 | 408 | 52% | 2958 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2897 | 35 | 286 | 49% | 2908 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2889 | 34 | 288 | 49% | 2897 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2668 | 35 | 292 | 52% | 2645 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3102 | 33 | 276 | 50% | 3100 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2992 | 35 | 244 | 52% | 2973 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2711 | 37 | 228 | 51% | 2700 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |