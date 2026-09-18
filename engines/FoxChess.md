# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2534<sub>(+134) | 2835<sub>(+123) | 2946<sub>(+165) |  |
| 1.1 | 2026-04-18 | 2400<sub>(+81) | 2712<sub>(+178) | 2781<sub>(+128) |  |
| 1.0 | 2025-12-27 | 2319 | 2534 | 2653 |  |
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

Generated: 2026-09-18 04:38:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2319, 2400, 2534]
  line "STC (8.0+0.08s)" [2319, 2400, 2534]
  line "LTC (60.0+0.60s)" [2534, 2712, 2835]
  line "" [2653, 2781, 2946]
  line "VLTC (2m24s+1.12s)" [2653, 2781, 2946]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2946 | 30 | 322 | 51% | 2938 | 48% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2835 | 31 | 322 | 49% | 2846 | 35% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2534 | 31 | 352 | 50% | 2533 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2781 | 28 | 392 | 49% | 2786 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2712 | 28 | 418 | 50% | 2707 | 34% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2400 | 29 | 408 | 50% | 2396 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2653 | 28 | 396 | 49% | 2657 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2534 | 31 | 328 | 52% | 2516 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2319 | 27 | 480 | 50% | 2315 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |