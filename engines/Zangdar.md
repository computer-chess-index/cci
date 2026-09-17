# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3308<sub>(+102) | 3468<sub>(+85) | 3502<sub>(+93) |  |
| 6.1.1 | 2026-02-25 | 3206<sub>(+55) | 3383<sub>(+5) | 3409<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3151<sub>(+1) | 3378<sub>(+18) | 3440<sub>(+27) |  |
| 6 | 2026-02-07 | 3150<sub>(+13) | 3360<sub>(+5) | 3413<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3137 | 3355 | 3398 |  |
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

Generated: 2026-09-17 04:43:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3137, 3150, 3151, 3206, 3308]
  line "STC (8.0+0.08s)" [3137, 3150, 3151, 3206, 3308]
  line "LTC (60.0+0.60s)" [3355, 3360, 3378, 3383, 3468]
  line "" [3398, 3413, 3440, 3409, 3502]
  line "VLTC (2m24s+1.12s)" [3398, 3413, 3440, 3409, 3502]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 36 | 188 | 49% | 3507 | 80% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 36 | 186 | 51% | 3463 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3308 | 27 | 340 | 50% | 3308 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3409 | 25 | 394 | 50% | 3406 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3383 | 26 | 364 | 51% | 3379 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3206 | 25 | 444 | 51% | 3202 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3440 | 31 | 256 | 50% | 3437 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3378 | 27 | 332 | 49% | 3382 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3151 | 32 | 276 | 51% | 3146 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3413 | 36 | 192 | 50% | 3413 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 33 | 228 | 52% | 3351 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3150 | 34 | 244 | 49% | 3155 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3398 | 27 | 356 | 54% | 3360 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3355 | 31 | 272 | 51% | 3333 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3137 | 32 | 280 | 55% | 3081 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |