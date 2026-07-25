# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.685 | 2026-07-17 | 3102<sub>(+78) | 3287<sub>(+52) | 3343<sub>(+77) |  |
| 1.116 | 2026-05-07 | 3024<sub>(+54) | 3235<sub>(+64) | 3266<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2970<sub>(+313) | 3171<sub>(+291) | 3247<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2657<sub>(-44) | 2880<sub>(-101) | 2888<sub>(-204) |  |
| 0.418 | 2026-02-07 | 2701 | 2981 | 3092 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Malika+<version>&body=###%20Engine%20name%0AMalika%0A%0A###%20Version%0A1.685" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-25 06:26:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685"]
  y-axis "Elo Rating" 2600 --> 3400
  line "STC (8.0+0.08s)" [2701, 2657, 2970, 3024, 3102]
  line "STC (8.0+0.08s)" [2701, 2657, 2970, 3024, 3102]
  line "LTC (60.0+0.60s)" [2981, 2880, 3171, 3235, 3287]
  line "VLTC (2m24s+1.12s)" [3092, 2888, 3247, 3266, 3343]
  line "VLTC (2m24s+1.12s)" [3092, 2888, 3247, 3266, 3343]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3343 | 31 | 280 | 48% | 3357 | 64% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3287 | 32 | 264 | 52% | 3271 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3102 | 37 | 208 | 50% | 3104 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 28 | 366 | 48% | 3283 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3235 | 25 | 466 | 49% | 3244 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3024 | 27 | 422 | 51% | 3015 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3247 | 28 | 366 | 50% | 3247 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3171 | 29 | 364 | 50% | 3170 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2970 | 29 | 408 | 52% | 2948 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2888 | 35 | 286 | 49% | 2898 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2880 | 34 | 288 | 49% | 2888 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2657 | 35 | 292 | 52% | 2635 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3092 | 33 | 276 | 50% | 3089 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2981 | 35 | 244 | 52% | 2963 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2701 | 37 | 228 | 51% | 2691 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |