# Engine: Casanchess

Author: Carlos Sanchez Mayordomo

Home: https://github.com/casanche/casanchess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-24 |  |  |  |  |
| 1.1.2 | 2026-09-06 | 2472<sub>(+19) | 2708<sub>(-76) | 2830<sub>(-2) |  |
| 1.1 | 2026-08-15 | 2453<sub>(+105) | 2784<sub>(+151) | 2832<sub>(+90) |  |
| 1.0 | 2026-07-14 | 2348 | 2633 | 2742 |  |
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

Generated: 2026-10-06 04:36:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2348, 2453, 2472]
  line "STC (8.0+0.08s)" [2348, 2453, 2472]
  line "LTC (60.0+0.60s)" [2633, 2784, 2708]
  line "" [2742, 2832, 2830]
  line "VLTC (2m24s+1.12s)" [2742, 2832, 2830]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2830 | 37 | 226 | 50% | 2832 | 39% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2708 | 34 | 252 | 50% | 2708 | 46% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 2472 | 36 | 236 | 51% | 2466 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2832 | 34 | 256 | 51% | 2830 | 47% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2784 | 32 | 284 | 51% | 2769 | 49% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2453 | 29 | 356 | 48% | 2472 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2742 | 32 | 326 | 60% | 2506 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2633 | 32 | 338 | 58% | 2469 | 42% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2348 | 32 | 352 | 62% | 2107 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |