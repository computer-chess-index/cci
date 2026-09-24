# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3114<sub>(+8) | 3375<sub>(+80) | 3424<sub>(+58) |  |
| 1.685 | 2026-07-17 | 3106<sub>(+64) | 3295<sub>(+43) | 3366<sub>(+81) |  |
| 1.116 | 2026-05-07 | 3042<sub>(+56) | 3252<sub>(+63) | 3285<sub>(+21) |  |
| 1.0 | 2026-03-26 | 2986<sub>(+313) | 3189<sub>(+293) | 3264<sub>(+361) |  |
| 0.892 | 2026-02-23 | 2673<sub>(-43) | 2896<sub>(-102) | 2903<sub>(-205) |  |
| 0.418 | 2026-02-07 | 2716 | 2998 | 3108 |  |
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

Generated: 2026-09-24 04:39:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3500
  line "" [2716, 2673, 2986, 3042, 3106, 3114]
  line "STC (8.0+0.08s)" [2716, 2673, 2986, 3042, 3106, 3114]
  line "LTC (60.0+0.60s)" [2998, 2896, 3189, 3252, 3295, 3375]
  line "" [3108, 2903, 3264, 3285, 3366, 3424]
  line "VLTC (2m24s+1.12s)" [3108, 2903, 3264, 3285, 3366, 3424]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3424 | 27 | 334 | 50% | 3428 | 73% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 29 | 316 | 50% | 3378 | 67% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3114 | 28 | 348 | 52% | 3101 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3366 | 28 | 348 | 49% | 3371 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3295 | 29 | 324 | 50% | 3293 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3106 | 32 | 272 | 49% | 3116 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3285 | 28 | 366 | 48% | 3302 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3252 | 25 | 466 | 49% | 3263 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3042 | 27 | 422 | 51% | 3032 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3264 | 28 | 366 | 50% | 3266 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3189 | 29 | 364 | 50% | 3186 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2986 | 29 | 408 | 52% | 2965 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2903 | 35 | 286 | 49% | 2915 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2896 | 34 | 288 | 49% | 2904 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2673 | 35 | 292 | 52% | 2650 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3108 | 33 | 276 | 50% | 3106 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2998 | 35 | 244 | 52% | 2979 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2716 | 37 | 228 | 51% | 2705 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |