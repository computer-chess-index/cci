# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3154<sub>(+23) | 3367<sub>(+53) | 3425<sub>(+41) |  |
| 5.0.0 | 2026-02-13 | 3131<sub>(+62) | 3314<sub>(+43) | 3384<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3069<sub>(+94) | 3271<sub>(+63) | 3295<sub>(+51) |  |
| 3.0.0 | 2025-10-20 | 2975 | 3208 | 3244 |  |
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

Generated: 2026-08-25 06:27:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2975, 3069, 3131, 3154]
  line "STC (8.0+0.08s)" [2975, 3069, 3131, 3154]
  line "LTC (60.0+0.60s)" [3208, 3271, 3314, 3367]
  line "VLTC (2m24s+1.12s)" [3244, 3295, 3384, 3425]
  line "VLTC (2m24s+1.12s)" [3244, 3295, 3384, 3425]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 23 | 446 | 50% | 3428 | 77% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 24 | 432 | 50% | 3367 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3154 | 27 | 382 | 49% | 3163 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3384 | 24 | 414 | 50% | 3384 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3314 | 26 | 382 | 51% | 3308 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3131 | 25 | 444 | 51% | 3127 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3295 | 30 | 276 | 51% | 3286 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3271 | 31 | 268 | 48% | 3286 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3069 | 33 | 252 | 51% | 3040 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 37 | 184 | 50% | 3245 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3208 | 32 | 252 | 48% | 3222 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2975 | 34 | 240 | 48% | 2986 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |