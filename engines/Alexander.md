# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3133<sub>(-3) | 3367<sub>(+23) | 3416<sub>(+17) |  |
| 8.2 | 2026-03-23 | 3136<sub>(-24) | 3344<sub>(-7) | 3399<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3160<sub>(+37) | 3351<sub>(-11) | 3411<sub>(+12) |  |
| 8.0 | 2026-03-10 | 3123<sub>(+new) | 3362<sub>(+new) | 3399<sub>(+new) |  |
| 7.0 | 2025-10-20 |  |  |  |  |
| 6.1 | 2025-10-07 |  |  |  |  |
| 6.0 | 2025-09-20 |  |  |  |  |
| 5.0 | 2025-02-14 |  |  |  |  |
| 4.1 | 2025-02-07 |  |  |  |  |
| 4.0 | 2025-01-17 |  |  |  |  |
| 3.1 | 2024-11-11 |  |  |  |  |
| 3.0 | 2024-10-24 |  |  |  |  |
| Santiago | 2024-10-17 |  |  |  |  |
| 2.0 | 2024-09-19 |  |  |  |  |
| 1.3 | 2024-05-03 |  |  |  |  |
| 1.2 | 2024-04-19 |  |  |  |  |
| 1.1 | 2024-04-11 |  |  |  |  |
| 1.0 | 2024-03-30 |  |  |  |  |
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

Generated: 2026-06-08 06:22:14

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3123, 3160, 3136, 3133]
  line "STC (8.0+0.08s)" [3123, 3160, 3136, 3133]
  line "LTC (60.0+0.60s)" [3362, 3351, 3344, 3367]
  line "VLTC (2m24s+1.12s)" [3399, 3411, 3399, 3416]
  line "VLTC (2m24s+1.12s)" [3399, 3411, 3399, 3416]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3416 | 25 | 398 | 49% | 3420 | 70% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 26 | 398 | 48% | 3379 | 64% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3133 | 28 | 376 | 51% | 3125 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3399 | 26 | 380 | 49% | 3406 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3344 | 31 | 284 | 50% | 3343 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3136 | 27 | 396 | 48% | 3150 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3411 | 28 | 324 | 49% | 3416 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3351 | 30 | 290 | 51% | 3345 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3160 | 31 | 302 | 49% | 3168 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3399 | 28 | 308 | 50% | 3397 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 28 | 332 | 50% | 3362 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3123 | 31 | 300 | 49% | 3128 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |