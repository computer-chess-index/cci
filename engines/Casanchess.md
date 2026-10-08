# Engine: Casanchess

Author: Carlos Sanchez Mayordomo

Home: https://github.com/casanche/casanchess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-24 |  |  |  |  |
| 1.1.2 | 2026-09-06 | 2473<sub>(+20) | 2709<sub>(-75) | 2828<sub>(-6) |  |
| 1.1 | 2026-08-15 | 2453<sub>(+104) | 2784<sub>(+150) | 2834<sub>(+91) |  |
| 1.0 | 2026-07-14 | 2349 | 2634 | 2743 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Casanchess+<version>&body=###%20Engine%20name%0ACasanchess%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-08 04:36:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2349, 2453, 2473]
  line "STC (8.0+0.08s)" [2349, 2453, 2473]
  line "LTC (60.0+0.60s)" [2634, 2784, 2709]
  line "" [2743, 2834, 2828]
  line "VLTC (2m24s+1.12s)" [2743, 2834, 2828]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2828 | 36 | 230 | 50% | 2832 | 40% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2709 | 34 | 252 | 50% | 2709 | 46% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 2473 | 36 | 236 | 51% | 2468 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2834 | 34 | 256 | 51% | 2830 | 47% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2784 | 32 | 284 | 51% | 2770 | 49% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2453 | 29 | 356 | 48% | 2472 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2743 | 32 | 326 | 60% | 2506 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2634 | 32 | 338 | 58% | 2469 | 42% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2349 | 32 | 352 | 62% | 2107 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |