# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3305<sub>(+100) | 3464<sub>(+82) | 3499<sub>(+93) |  |
| 6.1.1 | 2026-02-25 | 3205<sub>(+55) | 3382<sub>(+7) | 3406<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3150<sub>(+2) | 3375<sub>(+16) | 3437<sub>(+26) |  |
| 6 | 2026-02-07 | 3148<sub>(+12) | 3359<sub>(+6) | 3411<sub>(+16) |  |
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

Generated: 2026-09-10 04:44:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3136, 3148, 3150, 3205, 3305]
  line "STC (8.0+0.08s)" [3136, 3148, 3150, 3205, 3305]
  line "LTC (60.0+0.60s)" [3353, 3359, 3375, 3382, 3464]
  line "" [3395, 3411, 3437, 3406, 3499]
  line "VLTC (2m24s+1.12s)" [3395, 3411, 3437, 3406, 3499]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 36 | 188 | 49% | 3505 | 80% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 36 | 182 | 51% | 3460 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3305 | 28 | 328 | 50% | 3306 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 25 | 394 | 50% | 3405 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 26 | 364 | 51% | 3378 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3205 | 25 | 444 | 51% | 3201 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3437 | 31 | 256 | 50% | 3436 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 27 | 332 | 49% | 3379 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3150 | 32 | 276 | 51% | 3144 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3411 | 36 | 192 | 50% | 3410 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 33 | 228 | 52% | 3348 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3148 | 34 | 244 | 49% | 3154 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3395 | 27 | 356 | 54% | 3359 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3353 | 31 | 272 | 51% | 3332 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3136 | 32 | 280 | 55% | 3079 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |