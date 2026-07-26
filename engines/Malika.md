# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.685 | 2026-07-17 | 3101<sub>(+77) | 3289<sub>(+54) | 3340<sub>(+74) |  |
| 1.116 | 2026-05-07 | 3024<sub>(+54) | 3235<sub>(+62) | 3266<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2970<sub>(+312) | 3173<sub>(+293) | 3247<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2658<sub>(-43) | 2880<sub>(-101) | 2888<sub>(-204) |  |
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

Generated: 2026-07-26 06:26:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685"]
  y-axis "Elo Rating" 2600 --> 3400
  line "STC (8.0+0.08s)" [2701, 2658, 2970, 3024, 3101]
  line "STC (8.0+0.08s)" [2701, 2658, 2970, 3024, 3101]
  line "LTC (60.0+0.60s)" [2981, 2880, 3173, 3235, 3289]
  line "VLTC (2m24s+1.12s)" [3092, 2888, 3247, 3266, 3340]
  line "VLTC (2m24s+1.12s)" [3092, 2888, 3247, 3266, 3340]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3340 | 30 | 284 | 48% | 3356 | 63% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3289 | 32 | 268 | 52% | 3270 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3101 | 36 | 216 | 50% | 3104 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 28 | 366 | 48% | 3283 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3235 | 25 | 466 | 49% | 3245 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3024 | 27 | 422 | 51% | 3015 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3247 | 28 | 366 | 50% | 3247 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3173 | 29 | 364 | 50% | 3170 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2970 | 29 | 408 | 52% | 2948 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2888 | 35 | 286 | 49% | 2900 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2880 | 34 | 288 | 49% | 2888 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2658 | 35 | 292 | 52% | 2635 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3092 | 33 | 276 | 50% | 3090 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2981 | 35 | 244 | 52% | 2963 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2701 | 37 | 228 | 51% | 2691 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |