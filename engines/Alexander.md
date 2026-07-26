# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3146<sub>(+5) | 3375<sub>(+24) | 3418<sub>(+12) |  |
| 8.2 | 2026-03-23 | 3141<sub>(-25) | 3351<sub>(-6) | 3406<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3166<sub>(+38) | 3357<sub>(-11) | 3418<sub>(+12) |  |
| 8.0 | 2026-03-10 | 3128<sub>(+new) | 3368<sub>(+new) | 3406<sub>(+new) |  |
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

Generated: 2026-07-26 06:22:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3128, 3166, 3141, 3146]
  line "STC (8.0+0.08s)" [3128, 3166, 3141, 3146]
  line "LTC (60.0+0.60s)" [3368, 3357, 3351, 3375]
  line "VLTC (2m24s+1.12s)" [3406, 3418, 3406, 3418]
  line "VLTC (2m24s+1.12s)" [3406, 3418, 3406, 3418]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 23 | 470 | 49% | 3425 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 24 | 450 | 49% | 3384 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3146 | 27 | 412 | 52% | 3131 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 26 | 380 | 49% | 3413 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3351 | 31 | 284 | 50% | 3349 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3141 | 27 | 396 | 48% | 3155 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 28 | 324 | 49% | 3422 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 30 | 290 | 51% | 3352 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3166 | 31 | 302 | 49% | 3174 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 28 | 308 | 50% | 3403 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 28 | 332 | 50% | 3367 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3128 | 31 | 300 | 49% | 3133 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |