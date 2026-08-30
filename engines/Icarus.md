# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3329<sub>(-10) | 3497<sub>(+3) | 3522<sub>(-12) |  |
| 1.1 | 2026-06-05 | 3339<sub>(+25) | 3494<sub>(+37) | 3534<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3314 | 3457 | 3503 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 15:49:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3314, 3339, 3329]
  line "STC (8.0+0.08s)" [3314, 3339, 3329]
  line "LTC (60.0+0.60s)" [3457, 3494, 3497]
  line "" [3503, 3534, 3522]
  line "VLTC (2m24s+1.12s)" [3503, 3534, 3522]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 26 | 340 | 50% | 3521 | 86% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 28 | 288 | 50% | 3497 | 84% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3329 | 31 | 260 | 49% | 3335 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 28 | 300 | 50% | 3533 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3494 | 24 | 404 | 52% | 3479 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3339 | 28 | 324 | 51% | 3335 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 27 | 334 | 50% | 3499 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 26 | 338 | 51% | 3452 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3314 | 27 | 348 | 51% | 3308 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |