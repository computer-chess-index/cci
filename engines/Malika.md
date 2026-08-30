# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3097<sub>(-3) | 3368<sub>(+79) | 3420<sub>(+63) |  |
| 1.685 | 2026-07-17 | 3100<sub>(+67) | 3289<sub>(+45) | 3357<sub>(+81) |  |
| 1.116 | 2026-05-07 | 3033<sub>(+55) | 3244<sub>(+62) | 3276<sub>(+18) |  |
| 1.0 | 2026-03-26 | 2978<sub>(+313) | 3182<sub>(+294) | 3258<sub>(+362) |  |
| 0.892 | 2026-02-23 | 2665<sub>(-44) | 2888<sub>(-102) | 2896<sub>(-205) |  |
| 0.418 | 2026-02-07 | 2709 | 2990 | 3101 |  |
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

Generated: 2026-08-30 06:26:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3500
  line "" [2709, 2665, 2978, 3033, 3100, 3097]
  line "STC (8.0+0.08s)" [2709, 2665, 2978, 3033, 3100, 3097]
  line "LTC (60.0+0.60s)" [2990, 2888, 3182, 3244, 3289, 3368]
  line "" [3101, 2896, 3258, 3276, 3357, 3420]
  line "VLTC (2m24s+1.12s)" [3101, 2896, 3258, 3276, 3357, 3420]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3420 | 29 | 302 | 50% | 3420 | 72% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 30 | 288 | 50% | 3371 | 66% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3097 | 32 | 276 | 51% | 3089 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3357 | 28 | 348 | 49% | 3363 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3289 | 29 | 324 | 50% | 3286 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3100 | 32 | 272 | 49% | 3109 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3276 | 28 | 366 | 48% | 3294 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3244 | 25 | 466 | 49% | 3255 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3033 | 27 | 422 | 51% | 3024 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3258 | 28 | 366 | 50% | 3258 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3182 | 29 | 364 | 50% | 3179 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2978 | 29 | 408 | 52% | 2957 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2896 | 35 | 286 | 49% | 2908 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2888 | 34 | 288 | 49% | 2896 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2665 | 35 | 292 | 52% | 2643 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3101 | 33 | 276 | 50% | 3100 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2990 | 35 | 244 | 52% | 2971 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2709 | 37 | 228 | 51% | 2699 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |