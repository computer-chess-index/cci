# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3140<sub>(+1) | 3368<sub>(+19) | 3417<sub>(+12) |  |
| 8.2 | 2026-03-23 | 3139<sub>(-25) | 3349<sub>(-7) | 3405<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3164<sub>(+39) | 3356<sub>(-11) | 3417<sub>(+12) |  |
| 8.0 | 2026-03-10 | 3125 | 3367 | 3405 |  |
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

Generated: 2026-08-12 06:22:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3125, 3164, 3139, 3140]
  line "STC (8.0+0.08s)" [3125, 3164, 3139, 3140]
  line "LTC (60.0+0.60s)" [3367, 3356, 3349, 3368]
  line "VLTC (2m24s+1.12s)" [3405, 3417, 3405, 3417]
  line "VLTC (2m24s+1.12s)" [3405, 3417, 3405, 3417]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 23 | 498 | 49% | 3422 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 23 | 470 | 48% | 3382 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3140 | 25 | 448 | 51% | 3127 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 26 | 380 | 49% | 3411 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3349 | 31 | 284 | 50% | 3347 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3139 | 27 | 396 | 48% | 3152 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 28 | 324 | 49% | 3421 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3356 | 30 | 290 | 51% | 3351 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3164 | 31 | 302 | 49% | 3171 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 28 | 308 | 50% | 3402 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 28 | 332 | 50% | 3366 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3125 | 31 | 300 | 49% | 3131 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |