# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3094<sub>(-3) | 3366<sub>(+80) | 3420<sub>(+64) |  |
| 1.685 | 2026-07-17 | 3097<sub>(+66) | 3286<sub>(+43) | 3356<sub>(+82) |  |
| 1.116 | 2026-05-07 | 3031<sub>(+54) | 3243<sub>(+64) | 3274<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2977<sub>(+313) | 3179<sub>(+293) | 3255<sub>(+362) |  |
| 0.892 | 2026-02-23 | 2664<sub>(-43) | 2886<sub>(-102) | 2893<sub>(-205) |  |
| 0.418 | 2026-02-07 | 2707 | 2988 | 3098 |  |
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

Generated: 2026-08-24 06:26:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3500
  line "STC (8.0+0.08s)" [2707, 2664, 2977, 3031, 3097, 3094]
  line "STC (8.0+0.08s)" [2707, 2664, 2977, 3031, 3097, 3094]
  line "LTC (60.0+0.60s)" [2988, 2886, 3179, 3243, 3286, 3366]
  line "VLTC (2m24s+1.12s)" [3098, 2893, 3255, 3274, 3356, 3420]
  line "VLTC (2m24s+1.12s)" [3098, 2893, 3255, 3274, 3356, 3420]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3420 | 30 | 270 | 50% | 3418 | 73% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3366 | 32 | 252 | 50% | 3368 | 66% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3094 | 33 | 256 | 51% | 3085 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3356 | 28 | 348 | 49% | 3362 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3286 | 29 | 324 | 50% | 3283 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3097 | 32 | 272 | 49% | 3106 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3274 | 28 | 366 | 48% | 3291 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3243 | 25 | 466 | 49% | 3252 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3031 | 27 | 422 | 51% | 3021 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3255 | 28 | 366 | 50% | 3255 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3179 | 29 | 364 | 50% | 3177 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2977 | 29 | 408 | 52% | 2954 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2893 | 35 | 286 | 49% | 2905 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2886 | 34 | 288 | 49% | 2894 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2664 | 35 | 292 | 52% | 2641 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3098 | 33 | 276 | 50% | 3097 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2988 | 35 | 244 | 52% | 2970 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2707 | 37 | 228 | 51% | 2696 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |