# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.1 | 2026-02-25 | 3186<sub>(+55) | 3357<sub>(+4) | 3382<sub>(-32) |  |
| 6.1 | 2026-02-10 | 3131<sub>(+2) | 3353<sub>(+17) | 3414<sub>(+25) |  |
| 6 | 2026-02-07 | 3129<sub>(+10) | 3336<sub>(+6) | 3389<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3119<sub>(+new) | 3330<sub>(+new) | 3374<sub>(+new) |  |
| 5.00.01 | 2025-09-23 |  |  |  |  |
| 5 | 2025-09-22 |  |  |  |  |
| 4.04.01 | 2025-08-31 |  |  |  |  |
| 4.04 | 2025-06-16 |  |  |  |  |
| 4.01 | 2025-05-17 |  |  |  |  |
| 3.04 | 2024-12-27 |  |  |  |  |
| 2.31.04 | 2024-12-08 |  |  |  |  |
| 2.31 | 2024-11-15 |  |  |  |  |
| 2.30 | 2024-08-25 |  |  |  |  |
| 2.29.01 | 2024-05-11 |  |  |  |  |
| 2.29 | 2024-05-07 |  |  |  |  |
| 2.27.08 | 2024-03-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A6.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-10 06:31:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3119, 3129, 3131, 3186]
  line "STC (8.0+0.08s)" [3119, 3129, 3131, 3186]
  line "LTC (60.0+0.60s)" [3330, 3336, 3353, 3357]
  line "VLTC (2m24s+1.12s)" [3374, 3389, 3414, 3382]
  line "VLTC (2m24s+1.12s)" [3374, 3389, 3414, 3382]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3382 | 26 | 362 | 50% | 3383 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 26 | 360 | 50% | 3355 | 71% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3186 | 26 | 400 | 51% | 3178 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3414 | 31 | 256 | 50% | 3413 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3353 | 27 | 332 | 49% | 3357 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3131 | 32 | 276 | 51% | 3125 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3389 | 36 | 192 | 50% | 3389 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3336 | 33 | 228 | 52% | 3326 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3129 | 34 | 244 | 49% | 3135 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3374 | 27 | 356 | 54% | 3337 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3330 | 31 | 272 | 51% | 3310 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3119 | 32 | 280 | 55% | 3062 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |