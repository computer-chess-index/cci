# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 26.0 | 2026-07-24 | 3251<sub>(+10) | 3441<sub>(+1) | 3478<sub>(-13) |  |
| 25.4 | 2026-04-15 | 3241<sub>(+13) | 3440<sub>(+15) | 3491<sub>(+15) |  |
| 25.4 | 2026-04-15 | 3228<sub>(-17) | 3425<sub>(-8) | 3476<sub>(-2) |  |
| 25.3 | 2025-12-28 | 3245 | 3433 | 3478 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arasan+<version>&body=###%20Engine%20name%0AArasan%0A%0A###%20Version%0A26.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-12 04:35:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4", "25.4", "26.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3245, 3241, 3228, 3251]
  line "STC (8.0+0.08s)" [3245, 3241, 3228, 3251]
  line "LTC (60.0+0.60s)" [3433, 3440, 3425, 3441]
  line "" [3478, 3491, 3476, 3478]
  line "VLTC (2m24s+1.12s)" [3478, 3491, 3476, 3478]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 26.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 28 | 288 | 51% | 3476 | 85% |
| 26.0 | LTC <sub>(60.0+0.60s)</sub> | 3441 | 28 | 308 | 51% | 3436 | 79% |
| 26.0 | STC <sub>(8.0+0.08s)</sub> | 3251 | 27 | 368 | 49% | 3258 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 24 | 408 | 49% | 3497 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3440 | 24 | 404 | 50% | 3441 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3241 | 24 | 450 | 51% | 3225 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 24 | 408 | 49% | 3480 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 24 | 404 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 450 | 51% | 3212 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 26 | 356 | 51% | 3472 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3433 | 26 | 360 | 51% | 3426 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3245 | 24 | 488 | 52% | 3229 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |