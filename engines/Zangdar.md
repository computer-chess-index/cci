# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3305<sub>(+100) | 3463<sub>(+83) | 3499<sub>(+93) |  |
| 6.1.1 | 2026-02-25 | 3205<sub>(+57) | 3380<sub>(+5) | 3406<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3148<sub>(+1) | 3375<sub>(+18) | 3437<sub>(+27) |  |
| 6 | 2026-02-07 | 3147<sub>(+11) | 3357<sub>(+4) | 3410<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3136 | 3353 | 3395 |  |
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

Generated: 2026-09-12 04:43:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3136, 3147, 3148, 3205, 3305]
  line "STC (8.0+0.08s)" [3136, 3147, 3148, 3205, 3305]
  line "LTC (60.0+0.60s)" [3353, 3357, 3375, 3380, 3463]
  line "" [3395, 3410, 3437, 3406, 3499]
  line "VLTC (2m24s+1.12s)" [3395, 3410, 3437, 3406, 3499]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 36 | 188 | 49% | 3505 | 80% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 36 | 182 | 51% | 3460 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3305 | 28 | 332 | 50% | 3305 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 25 | 394 | 50% | 3405 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3380 | 26 | 364 | 51% | 3376 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3205 | 25 | 444 | 51% | 3200 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3437 | 31 | 256 | 50% | 3434 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 27 | 332 | 49% | 3379 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3148 | 32 | 276 | 51% | 3143 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3410 | 36 | 192 | 50% | 3410 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 33 | 228 | 52% | 3348 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3147 | 34 | 244 | 49% | 3154 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3395 | 27 | 356 | 54% | 3359 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3353 | 31 | 272 | 51% | 3332 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3136 | 32 | 280 | 55% | 3079 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |