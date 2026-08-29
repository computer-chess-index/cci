# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 26.0 | 2026-07-24 | 3247<sub>(+8) | 3436<sub>(0) | 3474<sub>(-14) |  |
| 25.4 | 2026-04-15 | 3239<sub>(0) | 3436<sub>(0) | 3488<sub>(0) |  |
| 25.4 | 2026-04-15 | 3239<sub>(-4) | 3436<sub>(+6) | 3488<sub>(+14) |  |
| 25.3 | 2025-12-28 | 3243 | 3430 | 3474 |  |
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

Generated: 2026-08-29 06:22:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4", "25.4", "26.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3243, 3239, 3239, 3247]
  line "STC (8.0+0.08s)" [3243, 3239, 3239, 3247]
  line "LTC (60.0+0.60s)" [3430, 3436, 3436, 3436]
  line "" [3474, 3488, 3488, 3474]
  line "VLTC (2m24s+1.12s)" [3474, 3488, 3488, 3474]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 26.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 29 | 272 | 50% | 3472 | 85% |
| 26.0 | LTC <sub>(60.0+0.60s)</sub> | 3436 | 28 | 296 | 51% | 3432 | 80% |
| 26.0 | STC <sub>(8.0+0.08s)</sub> | 3247 | 27 | 360 | 49% | 3256 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3488 | 24 | 408 | 49% | 3492 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3436 | 24 | 404 | 50% | 3438 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3239 | 24 | 450 | 51% | 3222 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 24 | 408 | 49% | 3480 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 24 | 404 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 450 | 51% | 3212 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 26 | 356 | 51% | 3468 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3430 | 26 | 360 | 51% | 3424 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3243 | 24 | 488 | 52% | 3227 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |