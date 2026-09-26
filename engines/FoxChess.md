# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2538<sub>(+135) | 2836<sub>(+121) | 2948<sub>(+166) |  |
| 1.1 | 2026-04-18 | 2403<sub>(+81) | 2715<sub>(+178) | 2782<sub>(+127) |  |
| 1.0 | 2025-12-27 | 2322 | 2537 | 2655 |  |
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

Generated: 2026-09-26 04:38:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2322, 2403, 2538]
  line "STC (8.0+0.08s)" [2322, 2403, 2538]
  line "LTC (60.0+0.60s)" [2537, 2715, 2836]
  line "" [2655, 2782, 2948]
  line "VLTC (2m24s+1.12s)" [2655, 2782, 2948]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2948 | 30 | 322 | 51% | 2940 | 48% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2836 | 31 | 330 | 49% | 2849 | 35% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2538 | 31 | 356 | 51% | 2534 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2782 | 28 | 392 | 49% | 2789 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2715 | 28 | 418 | 50% | 2709 | 34% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2403 | 29 | 408 | 50% | 2399 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2655 | 28 | 396 | 49% | 2660 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2537 | 31 | 328 | 52% | 2519 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2322 | 27 | 480 | 50% | 2318 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |