# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3089<sub>(-5) | 3368<sub>(+86) | 3416<sub>(+65) |  |
| 1.685 | 2026-07-17 | 3094<sub>(+67) | 3282<sub>(+43) | 3351<sub>(+81) |  |
| 1.116 | 2026-05-07 | 3027<sub>(+54) | 3239<sub>(+64) | 3270<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2973<sub>(+313) | 3175<sub>(+293) | 3251<sub>(+361) |  |
| 0.892 | 2026-02-23 | 2660<sub>(-43) | 2882<sub>(-102) | 2890<sub>(-204) |  |
| 0.418 | 2026-02-07 | 2703 | 2984 | 3094 |  |
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

Generated: 2026-08-18 06:26:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3500
  line "STC (8.0+0.08s)" [2703, 2660, 2973, 3027, 3094, 3089]
  line "STC (8.0+0.08s)" [2703, 2660, 2973, 3027, 3094, 3089]
  line "LTC (60.0+0.60s)" [2984, 2882, 3175, 3239, 3282, 3368]
  line "VLTC (2m24s+1.12s)" [3094, 2890, 3251, 3270, 3351, 3416]
  line "VLTC (2m24s+1.12s)" [3094, 2890, 3251, 3270, 3351, 3416]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3416 | 33 | 230 | 50% | 3414 | 72% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 40 | 164 | 51% | 3362 | 66% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3089 | 36 | 216 | 51% | 3078 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3351 | 28 | 348 | 49% | 3356 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3282 | 29 | 324 | 50% | 3278 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3094 | 32 | 272 | 49% | 3102 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 28 | 366 | 48% | 3287 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3239 | 25 | 466 | 49% | 3248 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3027 | 27 | 422 | 51% | 3017 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3251 | 28 | 366 | 50% | 3251 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3175 | 29 | 364 | 50% | 3173 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2973 | 29 | 408 | 52% | 2951 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2890 | 35 | 286 | 49% | 2901 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2882 | 34 | 288 | 49% | 2890 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2660 | 35 | 292 | 52% | 2637 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3094 | 33 | 276 | 50% | 3093 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2984 | 35 | 244 | 52% | 2966 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2703 | 37 | 228 | 51% | 2692 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |