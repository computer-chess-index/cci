# Engine: Casanchess

Author: Carlos Sanchez Mayordomo

Home: https://github.com/casanche/casanchess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-24 |  |  |  |  |
| 1.1.2 | 2026-09-06 | 2475<sub>(+21) | 2711<sub>(-74) | 2830<sub>(-5) |  |
| 1.1 | 2026-08-15 | 2454<sub>(+104) | 2785<sub>(+151) | 2835<sub>(+90) |  |
| 1.0 | 2026-07-14 | 2350 | 2634 | 2745 |  |
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

Generated: 2026-10-09 04:36:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2350, 2454, 2475]
  line "STC (8.0+0.08s)" [2350, 2454, 2475]
  line "LTC (60.0+0.60s)" [2634, 2785, 2711]
  line "" [2745, 2835, 2830]
  line "VLTC (2m24s+1.12s)" [2745, 2835, 2830]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2830 | 36 | 230 | 50% | 2834 | 40% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2711 | 34 | 252 | 50% | 2709 | 46% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 2475 | 36 | 236 | 51% | 2469 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2835 | 34 | 256 | 51% | 2831 | 47% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2785 | 32 | 284 | 51% | 2772 | 49% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2454 | 29 | 356 | 48% | 2475 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 32 | 326 | 60% | 2507 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2634 | 32 | 338 | 58% | 2471 | 42% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2350 | 32 | 352 | 62% | 2109 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |