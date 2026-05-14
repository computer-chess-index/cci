# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3212<sub>(+30) | 3418<sub>(+52) | 3478<sub>(+44) |  |
| 5.0.0 | 2026-02-13 | 3182<sub>(+59) | 3366<sub>(+44) | 3434<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3123<sub>(+95) | 3322<sub>(+63) | 3345<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 3028<sub>(+new) | 3259<sub>(+new) | 3295<sub>(+new) |  |
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

Generated: 2026-05-14 06:26:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3028, 3123, 3182, 3212]
  line "STC (8.0+0.08s)" [3028, 3123, 3182, 3212]
  line "LTC (60.0+0.60s)" [3259, 3322, 3366, 3418]
  line "VLTC (2m24s+1.12s)" [3295, 3345, 3434, 3478]
  line "VLTC (2m24s+1.12s)" [3295, 3345, 3434, 3478]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 28 | 314 | 50% | 3478 | 78% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3418 | 28 | 310 | 50% | 3414 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3212 | 31 | 274 | 50% | 3213 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3434 | 24 | 414 | 50% | 3434 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3366 | 26 | 382 | 51% | 3357 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3182 | 25 | 444 | 51% | 3178 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3345 | 30 | 276 | 51% | 3336 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3322 | 31 | 268 | 48% | 3336 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3123 | 33 | 252 | 51% | 3094 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3295 | 37 | 184 | 50% | 3297 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3259 | 32 | 252 | 48% | 3274 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3028 | 34 | 240 | 48% | 3040 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |