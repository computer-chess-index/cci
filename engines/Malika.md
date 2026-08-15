# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3035<sub>(-55) | 3359<sub>(+81) | 3398<sub>(+51) |  |
| 1.685 | 2026-07-17 | 3090<sub>(+67) | 3278<sub>(+45) | 3347<sub>(+81) |  |
| 1.116 | 2026-05-07 | 3023<sub>(+54) | 3233<sub>(+62) | 3266<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2969<sub>(+314) | 3171<sub>(+293) | 3247<sub>(+362) |  |
| 0.892 | 2026-02-23 | 2655<sub>(-45) | 2878<sub>(-101) | 2885<sub>(-205) |  |
| 0.418 | 2026-02-07 | 2700 | 2979 | 3090 |  |
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

Generated: 2026-08-15 06:26:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3400
  line "STC (8.0+0.08s)" [2700, 2655, 2969, 3023, 3090, 3035]
  line "STC (8.0+0.08s)" [2700, 2655, 2969, 3023, 3090, 3035]
  line "LTC (60.0+0.60s)" [2979, 2878, 3171, 3233, 3278, 3359]
  line "VLTC (2m24s+1.12s)" [3090, 2885, 3247, 3266, 3347, 3398]
  line "VLTC (2m24s+1.12s)" [3090, 2885, 3247, 3266, 3347, 3398]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3398 | 57 | 78 | 51% | 3395 | 65% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 50 | 100 | 51% | 3351 | 68% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3035 | 56 | 84 | 45% | 3071 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3347 | 28 | 348 | 49% | 3352 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3278 | 29 | 324 | 50% | 3274 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3090 | 32 | 272 | 49% | 3098 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 28 | 366 | 48% | 3283 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3233 | 25 | 466 | 49% | 3244 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3023 | 27 | 422 | 51% | 3013 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3247 | 28 | 366 | 50% | 3247 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3171 | 29 | 364 | 50% | 3168 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2969 | 29 | 408 | 52% | 2947 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2885 | 35 | 286 | 49% | 2897 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2878 | 34 | 288 | 49% | 2886 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2655 | 35 | 292 | 52% | 2633 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3090 | 33 | 276 | 50% | 3087 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2979 | 35 | 244 | 52% | 2962 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2700 | 37 | 228 | 51% | 2688 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |