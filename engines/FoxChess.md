# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2526<sub>(+127) | 2838<sub>(+129) | 2946<sub>(+168) |  |
| 1.1 | 2026-04-18 | 2399<sub>(+81) | 2709<sub>(+178) | 2778<sub>(+128) |  |
| 1.0 | 2025-12-27 | 2318 | 2531 | 2650 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+FoxChess+<version>&body=###%20Engine%20name%0AFoxChess%0A%0A###%20Version%0A1.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:24:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2318, 2399, 2526]
  line "STC (8.0+0.08s)" [2318, 2399, 2526]
  line "LTC (60.0+0.60s)" [2531, 2709, 2838]
  line "" [2650, 2778, 2946]
  line "VLTC (2m24s+1.12s)" [2650, 2778, 2946]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2946 | 31 | 312 | 51% | 2934 | 47% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2838 | 33 | 300 | 50% | 2839 | 35% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2526 | 32 | 336 | 50% | 2530 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2778 | 28 | 392 | 49% | 2784 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2709 | 28 | 418 | 50% | 2704 | 34% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2399 | 29 | 408 | 50% | 2395 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2650 | 28 | 396 | 49% | 2654 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2531 | 31 | 328 | 52% | 2514 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2318 | 27 | 480 | 50% | 2315 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |