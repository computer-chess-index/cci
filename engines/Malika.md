# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3101<sub>(-1) | 3370<sub>(+79) | 3422<sub>(+60) |  |
| 1.685 | 2026-07-17 | 3102<sub>(+66) | 3291<sub>(+44) | 3362<sub>(+83) |  |
| 1.116 | 2026-05-07 | 3036<sub>(+55) | 3247<sub>(+62) | 3279<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2981<sub>(+313) | 3185<sub>(+295) | 3260<sub>(+362) |  |
| 0.892 | 2026-02-23 | 2668<sub>(-44) | 2890<sub>(-103) | 2898<sub>(-206) |  |
| 0.418 | 2026-02-07 | 2712 | 2993 | 3104 |  |
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

Generated: 2026-09-09 04:40:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3500
  line "" [2712, 2668, 2981, 3036, 3102, 3101]
  line "STC (8.0+0.08s)" [2712, 2668, 2981, 3036, 3102, 3101]
  line "LTC (60.0+0.60s)" [2993, 2890, 3185, 3247, 3291, 3370]
  line "" [3104, 2898, 3260, 3279, 3362, 3422]
  line "VLTC (2m24s+1.12s)" [3104, 2898, 3260, 3279, 3362, 3422]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 28 | 324 | 50% | 3424 | 73% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 29 | 304 | 50% | 3374 | 67% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3101 | 30 | 300 | 51% | 3093 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3362 | 28 | 348 | 49% | 3367 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3291 | 29 | 324 | 50% | 3289 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3102 | 32 | 272 | 49% | 3110 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3279 | 28 | 366 | 48% | 3297 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3247 | 25 | 466 | 49% | 3258 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3036 | 27 | 422 | 51% | 3027 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3260 | 28 | 366 | 50% | 3260 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3185 | 29 | 364 | 50% | 3182 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2981 | 29 | 408 | 52% | 2959 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2898 | 35 | 286 | 49% | 2911 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2890 | 34 | 288 | 49% | 2898 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2668 | 35 | 292 | 52% | 2646 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3104 | 33 | 276 | 50% | 3101 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2993 | 35 | 244 | 52% | 2974 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2712 | 37 | 228 | 51% | 2701 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |