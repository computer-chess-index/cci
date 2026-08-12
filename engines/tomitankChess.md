# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2516<sub>(+48) | 2826<sub>(+25) | 2898<sub>(+29) |  |
| 6.0 | 2026-03-31 | 2468<sub>(+92) | 2801<sub>(+93) | 2869<sub>(+73) |  |
| 5.3 | 2025-09-26 | 2376 | 2708 | 2796 |  |
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

Generated: 2026-08-12 08:22:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2376, 2468, 2516]
  line "STC (8.0+0.08s)" [2376, 2468, 2516]
  line "LTC (60.0+0.60s)" [2708, 2801, 2826]
  line "VLTC (2m24s+1.12s)" [2796, 2869, 2898]
  line "VLTC (2m24s+1.12s)" [2796, 2869, 2898]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2898 | 30 | 328 | 52% | 2880 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2826 | 31 | 308 | 50% | 2823 | 44% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2516 | 32 | 328 | 48% | 2538 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2869 | 27 | 406 | 50% | 2870 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2801 | 29 | 362 | 50% | 2800 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2468 | 26 | 476 | 48% | 2487 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2796 | 31 | 312 | 48% | 2812 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2708 | 32 | 310 | 52% | 2691 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2376 | 28 | 420 | 50% | 2373 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |