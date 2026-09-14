# Engine: Zigqueen

Author: Matthias Stier

Home: https://github.com/stierms/zigqueen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.2.0 | 2026-09-09 |  |  |  |  |
| 6.1.1 | 2026-09-03 | 3168<sub>(-26) | 3425<sub>(+80) | 3471<sub>(-15) |  |
| 6.1.0 | 2026-08-31 | 3194<sub>(+74) | 3345<sub>(-12) | 3486<sub>(+89) |  |
| 6.0.0 | 2026-08-19 | 3120<sub>(+116) | 3357<sub>(+36) | 3397<sub>(+17) |  |
| 5.8.3 | 2026-07-25 | 3004<sub>(+new) | 3321<sub>(+new) | 3380<sub>(+new) |  |
| 5.8.2 | 2026-07-24 |  |  |  |  |
| 5.8.1 | 2026-07-23 |  |  |  |  |
| 5.8.0 | 2026-07-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zigqueen+<version>&body=###%20Engine%20name%0AZigqueen%0A%0A###%20Version%0A6.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:43:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.8.3", "6.0.0", "6.1.0", "6.1.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3004, 3120, 3194, 3168]
  line "STC (8.0+0.08s)" [3004, 3120, 3194, 3168]
  line "LTC (60.0+0.60s)" [3321, 3357, 3345, 3425]
  line "" [3380, 3397, 3486, 3471]
  line "VLTC (2m24s+1.12s)" [3380, 3397, 3486, 3471]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 45 | 114 | 50% | 3468 | 85% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 35 | 196 | 47% | 3441 | 78% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3168 | 34 | 236 | 52% | 3155 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3486 | 41 | 140 | 53% | 3465 | 81% |
| 6.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3345 | 47 | 112 | 49% | 3351 | 73% |
| 6.1.0 | STC <sub>(8.0+0.08s)</sub> | 3194 | 44 | 136 | 49% | 3204 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3397 | 45 | 120 | 50% | 3394 | 73% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 39 | 160 | 50% | 3355 | 74% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3120 | 45 | 132 | 50% | 3117 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3380 | 33 | 228 | 48% | 3393 | 76% |
| 5.8.3 | LTC <sub>(60.0+0.60s)</sub> | 3321 | 40 | 160 | 51% | 3313 | 67% |
| 5.8.3 | STC <sub>(8.0+0.08s)</sub> | 3004 | 38 | 188 | 54% | 2971 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |