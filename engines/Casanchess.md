# Engine: Casanchess

Author: Carlos Sanchez Mayordomo

Home: https://github.com/casanche/casanchess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-15 | 2446<sub>(+102) | 2778<sub>(+151) | 2831<sub>(+95) |  |
| 1.0 | 2026-07-14 | 2344 | 2627 | 2736 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Casanchess+<version>&body=###%20Engine%20name%0ACasanchess%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:22:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2344, 2446]
  line "STC (8.0+0.08s)" [2344, 2446]
  line "LTC (60.0+0.60s)" [2627, 2778]
  line "" [2736, 2831]
  line "VLTC (2m24s+1.12s)" [2736, 2831]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2831 | 34 | 252 | 51% | 2823 | 48% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2778 | 32 | 284 | 51% | 2763 | 49% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2446 | 30 | 344 | 48% | 2461 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2736 | 32 | 326 | 60% | 2500 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2627 | 32 | 338 | 58% | 2464 | 42% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2344 | 32 | 352 | 62% | 2103 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |