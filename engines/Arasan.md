# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 26.0 | 2026-07-24 | 3259<sub>(+11) | 3449<sub>(+1) | 3483<sub>(-18) |  |
| 25.4 | 2026-04-15 | 3248<sub>(+20) | 3448<sub>(+23) | 3501<sub>(+25) |  |
| 25.4 | 2026-04-15 | 3228<sub>(-24) | 3425<sub>(-16) | 3476<sub>(-10) |  |
| 25.3 | 2025-12-28 | 3252 | 3441 | 3486 |  |
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

Generated: 2026-10-09 04:35:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4", "25.4", "26.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3252, 3248, 3228, 3259]
  line "STC (8.0+0.08s)" [3252, 3248, 3228, 3259]
  line "LTC (60.0+0.60s)" [3441, 3448, 3425, 3449]
  line "" [3486, 3501, 3476, 3483]
  line "VLTC (2m24s+1.12s)" [3486, 3501, 3476, 3483]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 26.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3483 | 27 | 308 | 50% | 3484 | 85% |
| 26.0 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 26 | 348 | 50% | 3447 | 80% |
| 26.0 | STC <sub>(8.0+0.08s)</sub> | 3259 | 26 | 384 | 49% | 3264 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 24 | 408 | 49% | 3505 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 24 | 404 | 50% | 3449 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3248 | 24 | 450 | 51% | 3233 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 24 | 408 | 49% | 3480 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 24 | 404 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 450 | 51% | 3212 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3486 | 26 | 356 | 51% | 3480 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3441 | 26 | 360 | 51% | 3434 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3252 | 24 | 488 | 52% | 3236 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |