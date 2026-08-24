# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2523<sub>(+46) | 2831<sub>(+20) | 2907<sub>(+29) |  |
| 6.0 | 2026-03-31 | 2477<sub>(+92) | 2811<sub>(+95) | 2878<sub>(+74) |  |
| 5.3 | 2025-09-26 | 2385 | 2716 | 2804 |  |
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

Generated: 2026-08-24 06:30:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "STC (8.0+0.08s)" [2385, 2477, 2523]
  line "STC (8.0+0.08s)" [2385, 2477, 2523]
  line "LTC (60.0+0.60s)" [2716, 2811, 2831]
  line "VLTC (2m24s+1.12s)" [2804, 2878, 2907]
  line "VLTC (2m24s+1.12s)" [2804, 2878, 2907]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2907 | 29 | 352 | 52% | 2890 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2831 | 30 | 324 | 50% | 2830 | 44% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2523 | 31 | 344 | 48% | 2545 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2878 | 27 | 406 | 50% | 2880 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2811 | 29 | 362 | 50% | 2808 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2477 | 26 | 476 | 48% | 2496 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2804 | 31 | 312 | 48% | 2822 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2716 | 32 | 310 | 52% | 2700 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2385 | 29 | 420 | 50% | 2383 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |