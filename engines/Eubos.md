# Engine: Eubos

Author: Chris Bolt

Home: https://github.com/cjbolt/EubosChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 2026-06-09 | 2325<sub>(+133) | 2649<sub>(+138) | 2716<sub>(+109) |  |
| 4.4 | 2026-05-06 | 2192<sub>(+87) | 2511<sub>(+54) | 2607<sub>(+33) |  |
| 4.3 | 2026-01-29 | 2105<sub>(-59) | 2457<sub>(+31) | 2574<sub>(+22) |  |
| 4.2 | 2025-10-16 | 2164 | 2426 | 2552 |  |
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

Generated: 2026-09-24 04:38:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4", "4.5"]
  y-axis "Elo Rating" 2100 --> 2800
  line "" [2164, 2105, 2192, 2325]
  line "STC (8.0+0.08s)" [2164, 2105, 2192, 2325]
  line "LTC (60.0+0.60s)" [2426, 2457, 2511, 2649]
  line "" [2552, 2574, 2607, 2716]
  line "VLTC (2m24s+1.12s)" [2552, 2574, 2607, 2716]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2716 | 29 | 378 | 50% | 2718 | 35% |
| 4.5 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 29 | 408 | 50% | 2653 | 27% |
| 4.5 | STC <sub>(8.0+0.08s)</sub> | 2325 | 29 | 426 | 47% | 2358 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2607 | 32 | 320 | 48% | 2626 | 30% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2511 | 32 | 334 | 49% | 2514 | 27% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 2192 | 32 | 344 | 50% | 2186 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2574 | 30 | 388 | 50% | 2564 | 27% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 2457 | 31 | 368 | 49% | 2464 | 24% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 2105 | 28 | 452 | 50% | 2091 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2552 | 36 | 266 | 52% | 2534 | 24% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 2426 | 35 | 272 | 50% | 2422 | 26% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 2164 | 34 | 310 | 52% | 2136 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |