# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3025<sub>(+56) | 3229<sub>(+59) | 3272<sub>(+27) |  |
| 1.0 | 2026-03-26 | 2969<sub>(+311) | 3170<sub>(+292) | 3245<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2658<sub>(-43) | 2878<sub>(-101) | 2886<sub>(-204) |  |
| 0.418 | 2026-02-07 | 2701 | 2979 | 3090 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Malika+<version>&body=###%20Engine%20name%0AMalika%0A%0A###%20Version%0A1.116" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:26:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2701, 2658, 2969, 3025]
  line "STC (8.0+0.08s)" [2701, 2658, 2969, 3025]
  line "LTC (60.0+0.60s)" [2979, 2878, 3170, 3229]
  line "VLTC (2m24s+1.12s)" [3090, 2886, 3245, 3272]
  line "VLTC (2m24s+1.12s)" [3090, 2886, 3245, 3272]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3272 | 30 | 318 | 49% | 3282 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3229 | 27 | 414 | 48% | 3243 | 45% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3025 | 30 | 354 | 52% | 3009 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3245 | 28 | 366 | 50% | 3245 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3170 | 29 | 364 | 50% | 3167 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2969 | 29 | 408 | 52% | 2947 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2886 | 35 | 286 | 49% | 2898 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2878 | 34 | 288 | 49% | 2886 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2658 | 35 | 292 | 52% | 2635 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3090 | 33 | 276 | 50% | 3087 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2979 | 35 | 244 | 52% | 2962 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2701 | 37 | 228 | 51% | 2691 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |