# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2531<sub>(+48) | 2846<sub>(+29) | 2912<sub>(+27) |  |
| 6.0 | 2026-03-31 | 2483<sub>(+92) | 2817<sub>(+94) | 2885<sub>(+74) |  |
| 5.3 | 2025-09-26 | 2391 | 2723 | 2811 |  |
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

Generated: 2026-09-17 04:43:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2391, 2483, 2531]
  line "STC (8.0+0.08s)" [2391, 2483, 2531]
  line "LTC (60.0+0.60s)" [2723, 2817, 2846]
  line "" [2811, 2885, 2912]
  line "VLTC (2m24s+1.12s)" [2811, 2885, 2912]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2912 | 27 | 408 | 52% | 2900 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2846 | 27 | 396 | 50% | 2842 | 45% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2531 | 30 | 380 | 48% | 2552 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2885 | 27 | 406 | 50% | 2885 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2817 | 29 | 362 | 50% | 2815 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2483 | 26 | 476 | 48% | 2503 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2811 | 31 | 312 | 48% | 2828 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2723 | 32 | 310 | 52% | 2707 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2391 | 29 | 420 | 50% | 2388 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |