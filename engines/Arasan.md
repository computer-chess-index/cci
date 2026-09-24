# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 26.0 | 2026-07-24 | 3256<sub>(+9) | 3447<sub>(+2) | 3480<sub>(-18) |  |
| 25.4 | 2026-04-15 | 3247<sub>(+19) | 3445<sub>(+20) | 3498<sub>(+22) |  |
| 25.4 | 2026-04-15 | 3228<sub>(-21) | 3425<sub>(-13) | 3476<sub>(-7) |  |
| 25.3 | 2025-12-28 | 3249 | 3438 | 3483 |  |
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

Generated: 2026-09-24 04:35:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4", "25.4", "26.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3249, 3247, 3228, 3256]
  line "STC (8.0+0.08s)" [3249, 3247, 3228, 3256]
  line "LTC (60.0+0.60s)" [3438, 3445, 3425, 3447]
  line "" [3483, 3498, 3476, 3480]
  line "VLTC (2m24s+1.12s)" [3483, 3498, 3476, 3480]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 26.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3480 | 28 | 304 | 50% | 3482 | 85% |
| 26.0 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 27 | 340 | 51% | 3443 | 79% |
| 26.0 | STC <sub>(8.0+0.08s)</sub> | 3256 | 26 | 376 | 49% | 3263 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3498 | 24 | 408 | 49% | 3502 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 24 | 404 | 50% | 3447 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3247 | 24 | 450 | 51% | 3231 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 24 | 408 | 49% | 3480 | 86% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 24 | 404 | 50% | 3426 | 78% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3228 | 24 | 450 | 51% | 3212 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3483 | 26 | 356 | 51% | 3478 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 26 | 360 | 51% | 3432 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3249 | 24 | 488 | 52% | 3233 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |