# Engine: Casanchess

Author: Carlos Sanchez Mayordomo

Home: https://github.com/casanche/casanchess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.2 | 2026-09-06 |  |  |  |  |
| 1.1 | 2026-08-15 | 2445<sub>(+100) | 2778<sub>(+150) | 2832<sub>(+94) |  |
| 1.0 | 2026-07-14 | 2345 | 2628 | 2738 |  |
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

Generated: 2026-09-09 04:36:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2345, 2445]
  line "STC (8.0+0.08s)" [2345, 2445]
  line "LTC (60.0+0.60s)" [2628, 2778]
  line "" [2738, 2832]
  line "VLTC (2m24s+1.12s)" [2738, 2832]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2832 | 34 | 252 | 51% | 2824 | 48% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2778 | 32 | 284 | 51% | 2765 | 49% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2445 | 29 | 352 | 48% | 2469 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2738 | 32 | 326 | 60% | 2502 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2628 | 32 | 338 | 58% | 2465 | 42% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2345 | 32 | 352 | 62% | 2105 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |