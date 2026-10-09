# Engine: Bread

Author: 

Home: https://github.com/Nonlinear2/Bread-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-07-29 |  |  |  |  |
| 3.1.0 | 2026-05-22 |  |  |  |  |
| 3.0.0 | 2026-03-15 | 3114<sub>(+109) | 3321<sub>(+107) | 3397<sub>(+131) |  |
| 2.1.1 | 2025-12-22 | 3005<sub>(+new) | 3214<sub>(+new) | 3266<sub>(+new) |  |
| 2.1.0 | 2025-12-21 |  |  |  | always disconnects |
| 2.0.0 | 2025-10-18 | 2870 | 3125 | 3162 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bread+<version>&body=###%20Engine%20name%0ABread%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:36:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "" [2870, 3005, 3114]
  line "STC (8.0+0.08s)" [2870, 3005, 3114]
  line "LTC (60.0+0.60s)" [3125, 3214, 3321]
  line "" [3162, 3266, 3397]
  line "VLTC (2m24s+1.12s)" [3162, 3266, 3397]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3397 | 22 | 500 | 50% | 3399 | 75% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3321 | 24 | 436 | 51% | 3314 | 72% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3114 | 22 | 588 | 50% | 3112 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 30 | 294 | 50% | 3263 | 61% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3214 | 28 | 348 | 50% | 3204 | 55% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 3005 | 28 | 364 | 52% | 2989 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 37 | 208 | 57% | 3055 | 55% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3125 | 40 | 188 | 56% | 3042 | 53% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2870 | 38 | 208 | 51% | 2839 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |