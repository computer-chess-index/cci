# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.685 | 2026-07-17 | 3094<sub>(+73) | 3285<sub>(+53) | 3339<sub>(+76) |  |
| 1.116 | 2026-05-07 | 3021<sub>(+54) | 3232<sub>(+64) | 3263<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2967<sub>(+312) | 3168<sub>(+291) | 3244<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2655<sub>(-44) | 2877<sub>(-101) | 2885<sub>(-204) |  |
| 0.418 | 2026-02-07 | 2699 | 2978 | 3089 |  |
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

Generated: 2026-07-22 06:26:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685"]
  y-axis "Elo Rating" 2600 --> 3400
  line "STC (8.0+0.08s)" [2699, 2655, 2967, 3021, 3094]
  line "STC (8.0+0.08s)" [2699, 2655, 2967, 3021, 3094]
  line "LTC (60.0+0.60s)" [2978, 2877, 3168, 3232, 3285]
  line "VLTC (2m24s+1.12s)" [3089, 2885, 3244, 3263, 3339]
  line "VLTC (2m24s+1.12s)" [3089, 2885, 3244, 3263, 3339]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3339 | 31 | 268 | 48% | 3355 | 63% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3285 | 33 | 252 | 52% | 3266 | 60% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3094 | 39 | 184 | 49% | 3100 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3263 | 28 | 366 | 48% | 3281 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3232 | 25 | 466 | 49% | 3241 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3021 | 27 | 422 | 51% | 3012 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 28 | 366 | 50% | 3244 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3168 | 29 | 364 | 50% | 3167 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2967 | 29 | 408 | 52% | 2946 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2885 | 35 | 286 | 49% | 2896 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2877 | 34 | 288 | 49% | 2885 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2655 | 35 | 292 | 52% | 2633 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3089 | 33 | 276 | 50% | 3086 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2978 | 35 | 244 | 52% | 2961 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2699 | 37 | 228 | 51% | 2688 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |