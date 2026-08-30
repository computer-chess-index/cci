# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2531<sub>(+52) | 2842<sub>(+29) | 2904<sub>(+24) |  |
| 6.0 | 2026-03-31 | 2479<sub>(+92) | 2813<sub>(+94) | 2880<sub>(+73) |  |
| 5.3 | 2025-09-26 | 2387 | 2719 | 2807 |  |
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

Generated: 2026-08-30 13:14:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2387, 2479, 2531]
  line "STC (8.0+0.08s)" [2387, 2479, 2531]
  line "LTC (60.0+0.60s)" [2719, 2813, 2842]
  line "" [2807, 2880, 2904]
  line "VLTC (2m24s+1.12s)" [2807, 2880, 2904]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2904 | 29 | 364 | 51% | 2894 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2842 | 29 | 356 | 51% | 2834 | 45% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2531 | 31 | 356 | 48% | 2546 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2880 | 27 | 406 | 50% | 2881 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2813 | 29 | 362 | 50% | 2811 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2479 | 26 | 476 | 48% | 2499 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2807 | 31 | 312 | 48% | 2823 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2719 | 32 | 310 | 52% | 2703 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2387 | 29 | 420 | 50% | 2384 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |