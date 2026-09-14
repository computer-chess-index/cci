# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3308<sub>(+102) | 3467<sub>(+84) | 3501<sub>(+94) |  |
| 6.1.1 | 2026-02-25 | 3206<sub>(+56) | 3383<sub>(+7) | 3407<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3150<sub>(0) | 3376<sub>(+16) | 3438<sub>(+25) |  |
| 6 | 2026-02-07 | 3150<sub>(+13) | 3360<sub>(+5) | 3413<sub>(+16) |  |
| 5.00.02 | 2025-09-24 | 3137 | 3355 | 3397 |  |
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

Generated: 2026-09-14 04:43:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3137, 3150, 3150, 3206, 3308]
  line "STC (8.0+0.08s)" [3137, 3150, 3150, 3206, 3308]
  line "LTC (60.0+0.60s)" [3355, 3360, 3376, 3383, 3467]
  line "" [3397, 3413, 3438, 3407, 3501]
  line "VLTC (2m24s+1.12s)" [3397, 3413, 3438, 3407, 3501]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 36 | 188 | 49% | 3506 | 80% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 36 | 186 | 51% | 3461 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3308 | 27 | 340 | 50% | 3306 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3407 | 25 | 394 | 50% | 3406 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3383 | 26 | 364 | 51% | 3379 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3206 | 25 | 444 | 51% | 3202 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3438 | 31 | 256 | 50% | 3436 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3376 | 27 | 332 | 49% | 3380 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3150 | 32 | 276 | 51% | 3144 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3413 | 36 | 192 | 50% | 3411 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 33 | 228 | 52% | 3349 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3150 | 34 | 244 | 49% | 3155 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3397 | 27 | 356 | 54% | 3360 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3355 | 31 | 272 | 51% | 3333 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3137 | 32 | 280 | 55% | 3081 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |