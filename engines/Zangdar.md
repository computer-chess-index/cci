# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3299<sub>(+95) | 3457<sub>(+78) | 3497<sub>(+94) |  |
| 6.1.1 | 2026-02-25 | 3204<sub>(+57) | 3379<sub>(+5) | 3403<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3147<sub>(0) | 3374<sub>(+18) | 3434<sub>(+25) |  |
| 6 | 2026-02-07 | 3147<sub>(+12) | 3356<sub>(+5) | 3409<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3135 | 3351 | 3394 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-04 04:40:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3135, 3147, 3147, 3204, 3299]
  line "STC (8.0+0.08s)" [3135, 3147, 3147, 3204, 3299]
  line "LTC (60.0+0.60s)" [3351, 3356, 3374, 3379, 3457]
  line "" [3394, 3409, 3434, 3403, 3497]
  line "VLTC (2m24s+1.12s)" [3394, 3409, 3434, 3403, 3497]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 36 | 188 | 49% | 3502 | 80% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 37 | 174 | 50% | 3459 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3299 | 28 | 316 | 49% | 3305 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3403 | 25 | 394 | 50% | 3402 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3379 | 26 | 364 | 51% | 3375 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3204 | 25 | 444 | 51% | 3198 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3434 | 31 | 256 | 50% | 3433 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 27 | 332 | 49% | 3376 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3147 | 32 | 276 | 51% | 3141 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3409 | 36 | 192 | 50% | 3407 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3356 | 33 | 228 | 52% | 3345 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3147 | 34 | 244 | 49% | 3152 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3394 | 27 | 356 | 54% | 3356 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3351 | 31 | 272 | 51% | 3329 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3135 | 32 | 280 | 55% | 3078 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |