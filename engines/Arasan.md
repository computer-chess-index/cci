# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 26.0 | 2026-07-24 | 3252<sub>(+9) | 3444<sub>(+3) | 3479<sub>(-15) |  |
| 25.4 | 2026-04-15 | 3243<sub>(+15) | 3441<sub>(+16) | 3494<sub>(+18) |  |
| 25.4 | 2026-04-15 | 3228<sub>(-19) | 3425<sub>(-9) | 3476<sub>(-3) |  |
| 25.3 | 2025-12-28 | 3247 | 3434 | 3479 |  |
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

Generated: 2026-09-15 04:35:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4", "25.4", "26.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3247, 3243, 3228, 3252]
  line "STC (8.0+0.08s)" [3247, 3243, 3228, 3252]
  line "LTC (60.0+0.60s)" [3434, 3441, 3425, 3444]
  line "" [3479, 3494, 3476, 3479]
  line "VLTC (2m24s+1.12s)" [3479, 3494, 3476, 3479]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 26.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 28 | 296 | 50% | 3478 | 85% |
| 26.0 | LTC <sub>(60.0+0.60s)</sub> | 3444 | 27 | 332 | 51% | 3438 | 80% |
| 26.0 | STC <sub>(8.0+0.08s)</sub> | 3252 | 26 | 372 | 49% | 3259 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 24 | 408 | 49% | 3498 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3441 | 24 | 404 | 50% | 3444 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3243 | 24 | 450 | 51% | 3227 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 24 | 408 | 49% | 3480 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 24 | 404 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 450 | 51% | 3212 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 26 | 356 | 51% | 3474 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 26 | 360 | 51% | 3429 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3247 | 24 | 488 | 52% | 3231 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |