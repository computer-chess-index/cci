# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.821 | 2026-08-12 | 3089<sub>(-7) | 3367<sub>(+84) | 3418<sub>(+65) |  |
| 1.685 | 2026-07-17 | 3096<sub>(+68) | 3283<sub>(+43) | 3353<sub>(+82) |  |
| 1.116 | 2026-05-07 | 3028<sub>(+54) | 3240<sub>(+62) | 3271<sub>(+19) |  |
| 1.0 | 2026-03-26 | 2974<sub>(+313) | 3178<sub>(+294) | 3252<sub>(+360) |  |
| 0.892 | 2026-02-23 | 2661<sub>(-43) | 2884<sub>(-102) | 2892<sub>(-204) |  |
| 0.418 | 2026-02-07 | 2704 | 2986 | 3096 |  |
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

Generated: 2026-08-21 06:27:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116", "1.685", "1.821"]
  y-axis "Elo Rating" 2600 --> 3500
  line "STC (8.0+0.08s)" [2704, 2661, 2974, 3028, 3096, 3089]
  line "STC (8.0+0.08s)" [2704, 2661, 2974, 3028, 3096, 3089]
  line "LTC (60.0+0.60s)" [2986, 2884, 3178, 3240, 3283, 3367]
  line "VLTC (2m24s+1.12s)" [3096, 2892, 3252, 3271, 3353, 3418]
  line "VLTC (2m24s+1.12s)" [3096, 2892, 3252, 3271, 3353, 3418]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.821 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 32 | 238 | 50% | 3417 | 72% |
| 1.821 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 35 | 212 | 50% | 3367 | 67% |
| 1.821 | STC <sub>(8.0+0.08s)</sub> | 3089 | 34 | 236 | 51% | 3081 | 54% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.685 | VLTC <sub>(2m24s+1.12s)</sub> | 3353 | 28 | 348 | 49% | 3359 | 61% |
| 1.685 | LTC <sub>(60.0+0.60s)</sub> | 3283 | 29 | 324 | 50% | 3281 | 61% |
| 1.685 | STC <sub>(8.0+0.08s)</sub> | 3096 | 32 | 272 | 49% | 3104 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3271 | 28 | 366 | 48% | 3289 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3240 | 25 | 466 | 49% | 3251 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3028 | 27 | 422 | 51% | 3019 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3252 | 28 | 366 | 50% | 3254 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3178 | 29 | 364 | 50% | 3175 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2974 | 29 | 408 | 52% | 2952 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2892 | 35 | 286 | 49% | 2903 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2884 | 34 | 288 | 49% | 2892 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2661 | 35 | 292 | 52% | 2638 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3096 | 33 | 276 | 50% | 3094 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2986 | 35 | 244 | 52% | 2967 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2704 | 37 | 228 | 51% | 2693 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |