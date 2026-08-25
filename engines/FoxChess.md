# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2516<sub>(+121) | 2838<sub>(+133) | 2936<sub>(+162) |  |
| 1.1 | 2026-04-18 | 2395<sub>(+80) | 2705<sub>(+176) | 2774<sub>(+128) |  |
| 1.0 | 2025-12-27 | 2315 | 2529 | 2646 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+FoxChess+<version>&body=###%20Engine%20name%0AFoxChess%0A%0A###%20Version%0A1.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:25:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "STC (8.0+0.08s)" [2315, 2395, 2516]
  line "STC (8.0+0.08s)" [2315, 2395, 2516]
  line "LTC (60.0+0.60s)" [2529, 2705, 2838]
  line "VLTC (2m24s+1.12s)" [2646, 2774, 2936]
  line "VLTC (2m24s+1.12s)" [2646, 2774, 2936]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2936 | 32 | 292 | 51% | 2928 | 47% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2838 | 33 | 284 | 51% | 2836 | 35% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2516 | 32 | 324 | 49% | 2526 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2774 | 28 | 392 | 49% | 2780 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2705 | 28 | 418 | 50% | 2700 | 34% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2395 | 29 | 408 | 50% | 2391 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2646 | 28 | 396 | 49% | 2650 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2529 | 31 | 328 | 52% | 2510 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2315 | 27 | 480 | 50% | 2311 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |