# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2321<sub>(+131) | 2646<sub>(+138) | 2714<sub>(+110) |  |
| 4.4 | 2026-05-06 | 2190<sub>(+87) | 2508<sub>(+54) | 2604<sub>(+32) |  |
| 4.3 | 2026-01-29 | 2103<sub>(-58) | 2454<sub>(+31) | 2572<sub>(+23) |  |
| 4.2 | 2025-10-16 | 2161 | 2423 | 2549 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eubos+<version>&body=###%20Engine%20name%0AEubos%0A%0A###%20Version%0A4.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:38:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2100 --> 2800
  line "" [2161, 2103, 2190, 2321]
  line "STC (8.0+0.08s)" [2161, 2103, 2190, 2321]
  line "LTC (60.0+0.60s)" [2423, 2454, 2508, 2646]
  line "" [2549, 2572, 2604, 2714]
  line "VLTC (2m24s+1.12s)" [2549, 2572, 2604, 2714]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2714 | 29 | 378 | 50% | 2715 | 35% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2646 | 29 | 408 | 50% | 2650 | 27% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2321 | 29 | 424 | 47% | 2357 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2604 | 32 | 320 | 48% | 2623 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2508 | 32 | 334 | 49% | 2511 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2190 | 32 | 344 | 50% | 2183 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2572 | 30 | 388 | 50% | 2561 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2454 | 31 | 368 | 49% | 2461 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2103 | 28 | 452 | 50% | 2088 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2549 | 36 | 266 | 52% | 2531 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2423 | 35 | 272 | 50% | 2419 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2161 | 34 | 310 | 52% | 2133 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |