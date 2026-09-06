# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 26.0 | 2026-07-24 | 3249<sub>(+9) | 3438<sub>(0) | 3476<sub>(-14) |  |
| 25.4 | 2026-04-15 | 3240<sub>(+12) | 3438<sub>(+13) | 3490<sub>(+14) |  |
| 25.4 | 2026-04-15 | 3228<sub>(-16) | 3425<sub>(-7) | 3476<sub>(0) |  |
| 25.3 | 2025-12-28 | 3244 | 3432 | 3476 |  |
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

Generated: 2026-09-06 06:22:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4", "25.4", "26.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3244, 3240, 3228, 3249]
  line "STC (8.0+0.08s)" [3244, 3240, 3228, 3249]
  line "LTC (60.0+0.60s)" [3432, 3438, 3425, 3438]
  line "" [3476, 3490, 3476, 3476]
  line "VLTC (2m24s+1.12s)" [3476, 3490, 3476, 3476]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 26.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 28 | 288 | 51% | 3474 | 85% |
| 26.0 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 28 | 308 | 51% | 3434 | 79% |
| 26.0 | STC <sub>(8.0+0.08s)</sub> | 3249 | 27 | 364 | 49% | 3258 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 24 | 408 | 49% | 3494 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 24 | 404 | 50% | 3440 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3240 | 24 | 450 | 51% | 3225 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 24 | 408 | 49% | 3480 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 24 | 404 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 450 | 51% | 3212 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 26 | 356 | 51% | 3470 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3432 | 26 | 360 | 51% | 3425 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3244 | 24 | 488 | 52% | 3228 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |