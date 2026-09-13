# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3306<sub>(+101) | 3465<sub>(+83) | 3501<sub>(+94) |  |
| 6.1.1 | 2026-02-25 | 3205<sub>(+55) | 3382<sub>(+6) | 3407<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3150<sub>(+2) | 3376<sub>(+17) | 3438<sub>(+27) |  |
| 6 | 2026-02-07 | 3148<sub>(+11) | 3359<sub>(+6) | 3411<sub>(+14) |  |
| 5.00.02 | 2025-09-24 | 3137 | 3353 | 3397 |  |
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

Generated: 2026-09-13 04:43:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3137, 3148, 3150, 3205, 3306]
  line "STC (8.0+0.08s)" [3137, 3148, 3150, 3205, 3306]
  line "LTC (60.0+0.60s)" [3353, 3359, 3376, 3382, 3465]
  line "" [3397, 3411, 3438, 3407, 3501]
  line "VLTC (2m24s+1.12s)" [3397, 3411, 3438, 3407, 3501]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 36 | 188 | 49% | 3506 | 80% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 36 | 186 | 51% | 3461 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3306 | 28 | 336 | 50% | 3306 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3407 | 25 | 394 | 50% | 3405 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 26 | 364 | 51% | 3378 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3205 | 25 | 444 | 51% | 3201 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3438 | 31 | 256 | 50% | 3436 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3376 | 27 | 332 | 49% | 3379 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3150 | 32 | 276 | 51% | 3144 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3411 | 36 | 192 | 50% | 3411 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 33 | 228 | 52% | 3349 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3148 | 34 | 244 | 49% | 3154 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3397 | 27 | 356 | 54% | 3359 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3353 | 31 | 272 | 51% | 3332 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3137 | 32 | 280 | 55% | 3079 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |