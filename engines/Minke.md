# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3148<sub>(+23) | 3362<sub>(+52) | 3422<sub>(+43) |  |
| 5.0.0 | 2026-02-13 | 3125<sub>(+60) | 3310<sub>(+43) | 3379<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3065<sub>(+94) | 3267<sub>(+63) | 3290<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 2971 | 3204 | 3240 |  |
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

Generated: 2026-08-18 06:27:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2971, 3065, 3125, 3148]
  line "STC (8.0+0.08s)" [2971, 3065, 3125, 3148]
  line "LTC (60.0+0.60s)" [3204, 3267, 3310, 3362]
  line "VLTC (2m24s+1.12s)" [3240, 3290, 3379, 3422]
  line "VLTC (2m24s+1.12s)" [3240, 3290, 3379, 3422]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 24 | 438 | 50% | 3422 | 77% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 24 | 424 | 50% | 3362 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3148 | 27 | 382 | 49% | 3158 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3379 | 24 | 414 | 50% | 3379 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3310 | 26 | 382 | 51% | 3302 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3125 | 25 | 444 | 51% | 3121 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3290 | 30 | 276 | 51% | 3282 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3267 | 31 | 268 | 48% | 3282 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3065 | 33 | 252 | 51% | 3036 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3240 | 37 | 184 | 50% | 3241 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3204 | 32 | 252 | 48% | 3218 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2971 | 34 | 240 | 48% | 2982 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |