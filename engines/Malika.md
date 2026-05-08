# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3093<sub>(+65) | 3370<sub>(+141) | 3325<sub>(+22) |  |
| 1.0 | 2026-03-26 | 3028<sub>(+312) | 3229<sub>(+291) | 3303<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2716<sub>(-43) | 2938<sub>(-101) | 2944<sub>(-206) |  |
| 0.418 | 2026-02-07 | 2759 | 3039 | 3150 |  |
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

Generated: 2026-05-08 06:25:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2700 --> 3400
  line "STC (8.0+0.08s)" [2759, 2716, 3028, 3093]
  line "STC (8.0+0.08s)" [2759, 2716, 3028, 3093]
  line "LTC (60.0+0.60s)" [3039, 2938, 3229, 3370]
  line "VLTC (2m24s+1.12s)" [3150, 2944, 3303, 3325]
  line "VLTC (2m24s+1.12s)" [3150, 2944, 3303, 3325]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3325 | 72 | 52 | 47% | 3347 | 56% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 87 | 40 | 60% | 3286 | 40% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3093 | 71 | 64 | 60% | 3000 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3303 | 28 | 366 | 50% | 3305 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3229 | 29 | 364 | 50% | 3227 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3028 | 29 | 408 | 52% | 3006 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2944 | 35 | 286 | 49% | 2957 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 34 | 288 | 49% | 2946 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2716 | 35 | 292 | 52% | 2695 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3150 | 33 | 276 | 50% | 3148 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 3039 | 35 | 244 | 52% | 3021 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2759 | 37 | 228 | 51% | 2749 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |