# Engine: Casanchess

Author: Carlos Sanchez Mayordomo

Home: https://github.com/casanche/casanchess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.2 | 2026-09-06 | 2458<sub>(+8) | 2697<sub>(-83) | 2830<sub>(0) |  |
| 1.1 | 2026-08-15 | 2450<sub>(+105) | 2780<sub>(+150) | 2830<sub>(+91) |  |
| 1.0 | 2026-07-14 | 2345 | 2630 | 2739 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Casanchess+<version>&body=###%20Engine%20name%0ACasanchess%0A%0A###%20Version%0A1.1.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:36:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2345, 2450, 2458]
  line "STC (8.0+0.08s)" [2345, 2450, 2458]
  line "LTC (60.0+0.60s)" [2630, 2780, 2697]
  line "" [2739, 2830, 2830]
  line "VLTC (2m24s+1.12s)" [2739, 2830, 2830]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2830 | 39 | 198 | 50% | 2827 | 40% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2697 | 36 | 232 | 49% | 2704 | 46% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 2458 | 40 | 188 | 51% | 2456 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2830 | 34 | 256 | 51% | 2826 | 47% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2780 | 32 | 284 | 51% | 2766 | 49% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2450 | 29 | 356 | 48% | 2469 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2739 | 32 | 326 | 60% | 2502 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2630 | 32 | 338 | 58% | 2465 | 42% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2345 | 32 | 352 | 62% | 2105 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |