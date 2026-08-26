# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3096<sub>(-4) | 3368<sub>(+81) | 3417<sub>(+60) |  |
| 1.685 | 2026-07-17 | 3100<sub>(+68) | 3287<sub>(+43) | 3357<sub>(+82) |  |
| 1.116 | 2026-05-07 | 3032<sub>(+54) | 3244<sub>(+63) | 3275<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2978<sub>(+313) | 3181<sub>(+293) | 3256<sub>(+362) |  |
| 0.892 | 2026-02-23 | 2665<sub>(-43) | 2888<sub>(-101) | 2894<sub>(-206) |  |
| 0.418 | 2026-02-07 | 2708 | 2989 | 3100 |  |
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

Generated: 2026-08-26 06:26:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3500
  line "STC (8.0+0.08s)" [2708, 2665, 2978, 3032, 3100, 3096]
  line "STC (8.0+0.08s)" [2708, 2665, 2978, 3032, 3100, 3096]
  line "LTC (60.0+0.60s)" [2989, 2888, 3181, 3244, 3287, 3368]
  line "VLTC (2m24s+1.12s)" [3100, 2894, 3256, 3275, 3357, 3417]
  line "VLTC (2m24s+1.12s)" [3100, 2894, 3256, 3275, 3357, 3417]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 30 | 282 | 50% | 3421 | 72% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 32 | 256 | 50% | 3370 | 66% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3096 | 32 | 264 | 51% | 3086 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3357 | 28 | 348 | 49% | 3363 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3287 | 29 | 324 | 50% | 3285 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3100 | 32 | 272 | 49% | 3108 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3275 | 28 | 366 | 48% | 3293 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3244 | 25 | 466 | 49% | 3254 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3032 | 27 | 422 | 51% | 3023 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3256 | 28 | 366 | 50% | 3256 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3181 | 29 | 364 | 50% | 3178 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2978 | 29 | 408 | 52% | 2957 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2894 | 35 | 286 | 49% | 2907 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2888 | 34 | 288 | 49% | 2896 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2665 | 35 | 292 | 52% | 2642 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3100 | 33 | 276 | 50% | 3098 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2989 | 35 | 244 | 52% | 2971 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2708 | 37 | 228 | 51% | 2697 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |