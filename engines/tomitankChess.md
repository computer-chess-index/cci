# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2523<sub>(+50) | 2830<sub>(+23) | 2908<sub>(+34) |  |
| 6.0 | 2026-03-31 | 2473<sub>(+92) | 2807<sub>(+95) | 2874<sub>(+74) |  |
| 5.3 | 2025-09-26 | 2381 | 2712 | 2800 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+tomitankChess+<version>&body=###%20Engine%20name%0AtomitankChess%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:32:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "STC (8.0+0.08s)" [2381, 2473, 2523]
  line "STC (8.0+0.08s)" [2381, 2473, 2523]
  line "LTC (60.0+0.60s)" [2712, 2807, 2830]
  line "VLTC (2m24s+1.12s)" [2800, 2874, 2908]
  line "VLTC (2m24s+1.12s)" [2800, 2874, 2908]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2908 | 30 | 336 | 53% | 2885 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2830 | 31 | 316 | 50% | 2828 | 45% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2523 | 32 | 332 | 48% | 2542 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 27 | 406 | 50% | 2876 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 29 | 362 | 50% | 2804 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2473 | 26 | 476 | 48% | 2492 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2800 | 31 | 312 | 48% | 2817 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2712 | 32 | 310 | 52% | 2696 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2381 | 28 | 420 | 50% | 2379 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |