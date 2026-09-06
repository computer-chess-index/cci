# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2530<sub>(+49) | 2838<sub>(+23) | 2907<sub>(+26) |  |
| 6.0 | 2026-03-31 | 2481<sub>(+93) | 2815<sub>(+95) | 2881<sub>(+73) |  |
| 5.3 | 2025-09-26 | 2388 | 2720 | 2808 |  |
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

Generated: 2026-09-06 04:39:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2388, 2481, 2530]
  line "STC (8.0+0.08s)" [2388, 2481, 2530]
  line "LTC (60.0+0.60s)" [2720, 2815, 2838]
  line "" [2808, 2881, 2907]
  line "VLTC (2m24s+1.12s)" [2808, 2881, 2907]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2907 | 28 | 368 | 51% | 2896 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2838 | 29 | 364 | 50% | 2835 | 45% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2530 | 30 | 368 | 48% | 2549 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2881 | 27 | 406 | 50% | 2882 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2815 | 29 | 362 | 50% | 2812 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2481 | 26 | 476 | 48% | 2500 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2808 | 31 | 312 | 48% | 2826 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2720 | 32 | 310 | 52% | 2704 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2388 | 29 | 420 | 50% | 2387 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |