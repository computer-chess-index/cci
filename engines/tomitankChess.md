# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2530<sub>(+51) | 2832<sub>(+20) | 2905<sub>(+25) |  |
| 6.0 | 2026-03-31 | 2479<sub>(+92) | 2812<sub>(+94) | 2880<sub>(+75) |  |
| 5.3 | 2025-09-26 | 2387 | 2718 | 2805 |  |
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

Generated: 2026-08-28 06:37:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2387, 2479, 2530]
  line "STC (8.0+0.08s)" [2387, 2479, 2530]
  line "LTC (60.0+0.60s)" [2718, 2812, 2832]
  line "" [2805, 2880, 2905]
  line "VLTC (2m24s+1.12s)" [2805, 2880, 2905]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2905 | 29 | 360 | 51% | 2893 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2832 | 30 | 340 | 50% | 2832 | 45% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2530 | 31 | 356 | 48% | 2546 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2880 | 27 | 406 | 50% | 2881 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2812 | 29 | 362 | 50% | 2811 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2479 | 26 | 476 | 48% | 2498 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2805 | 31 | 312 | 48% | 2823 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2718 | 32 | 310 | 52% | 2701 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2387 | 29 | 420 | 50% | 2384 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |