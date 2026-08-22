# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3146<sub>(-2) | 3379<sub>(+20) | 3425<sub>(+11) |  |
| 8.2 | 2026-03-23 | 3148<sub>(-25) | 3359<sub>(-7) | 3414<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3173<sub>(+38) | 3366<sub>(-10) | 3426<sub>(+12) |  |
| 8.0 | 2026-03-10 | 3135 | 3376 | 3414 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexander+<version>&body=###%20Engine%20name%0AAlexander%0A%0A###%20Version%0A8.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:22:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3135, 3173, 3148, 3146]
  line "STC (8.0+0.08s)" [3135, 3173, 3148, 3146]
  line "LTC (60.0+0.60s)" [3376, 3366, 3359, 3379]
  line "VLTC (2m24s+1.12s)" [3414, 3426, 3414, 3425]
  line "VLTC (2m24s+1.12s)" [3414, 3426, 3414, 3425]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 22 | 514 | 49% | 3432 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3379 | 23 | 486 | 49% | 3391 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3146 | 25 | 460 | 51% | 3136 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3414 | 26 | 380 | 49% | 3421 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 31 | 284 | 50% | 3357 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3148 | 27 | 396 | 48% | 3162 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 28 | 324 | 49% | 3430 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3366 | 30 | 290 | 51% | 3360 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3173 | 31 | 302 | 49% | 3181 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3414 | 28 | 308 | 50% | 3411 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3376 | 28 | 332 | 50% | 3375 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3135 | 31 | 300 | 49% | 3140 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |