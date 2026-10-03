# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2534<sub>(+49) | 2850<sub>(+30) | 2913<sub>(+27) |  |
| 6.0 | 2026-03-31 | 2485<sub>(+93) | 2820<sub>(+94) | 2886<sub>(+73) |  |
| 5.3 | 2025-09-26 | 2392 | 2726 | 2813 |  |
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

Generated: 2026-10-03 04:43:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2392, 2485, 2534]
  line "STC (8.0+0.08s)" [2392, 2485, 2534]
  line "LTC (60.0+0.60s)" [2726, 2820, 2850]
  line "" [2813, 2886, 2913]
  line "VLTC (2m24s+1.12s)" [2813, 2886, 2913]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2913 | 27 | 412 | 51% | 2903 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2850 | 27 | 406 | 51% | 2844 | 44% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2534 | 29 | 388 | 48% | 2553 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2886 | 27 | 406 | 50% | 2888 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2820 | 29 | 362 | 50% | 2817 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2485 | 26 | 476 | 48% | 2504 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2813 | 31 | 312 | 48% | 2830 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2726 | 32 | 310 | 52% | 2709 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2392 | 29 | 420 | 50% | 2391 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |