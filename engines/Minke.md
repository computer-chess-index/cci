# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3210<sub>(+28) | 3417<sub>(+53) | 3478<sub>(+45) |  |
| 5.0.0 | 2026-02-13 | 3182<sub>(+61) | 3364<sub>(+43) | 3433<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3121<sub>(+94) | 3321<sub>(+63) | 3344<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 3027<sub>(+new) | 3258<sub>(+new) | 3294<sub>(+new) |  |
| 2.0.0 | 2025-09-14 |  |  |  |  |
| 1.0.0 | 2025-08-26 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Minke+<version>&body=###%20Engine%20name%0AMinke%0A%0A###%20Version%0A6.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-12 06:26:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3027, 3121, 3182, 3210]
  line "STC (8.0+0.08s)" [3027, 3121, 3182, 3210]
  line "LTC (60.0+0.60s)" [3258, 3321, 3364, 3417]
  line "VLTC (2m24s+1.12s)" [3294, 3344, 3433, 3478]
  line "VLTC (2m24s+1.12s)" [3294, 3344, 3433, 3478]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 28 | 310 | 50% | 3476 | 78% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3417 | 28 | 310 | 50% | 3413 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3210 | 32 | 270 | 50% | 3213 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 24 | 414 | 50% | 3433 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3364 | 26 | 382 | 51% | 3356 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3182 | 25 | 444 | 51% | 3178 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3344 | 30 | 276 | 51% | 3336 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3321 | 31 | 268 | 48% | 3336 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3121 | 33 | 252 | 51% | 3093 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3294 | 37 | 184 | 50% | 3295 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3258 | 32 | 252 | 48% | 3272 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3027 | 34 | 240 | 48% | 3039 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |