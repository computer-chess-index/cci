# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3294<sub>(+99) | 3451<sub>(+80) | 3487<sub>(+92) |  |
| 6.1.1 | 2026-02-25 | 3195<sub>(+55) | 3371<sub>(+5) | 3395<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3140<sub>(+1) | 3366<sub>(+18) | 3426<sub>(+25) |  |
| 6 | 2026-02-07 | 3139<sub>(+12) | 3348<sub>(+5) | 3401<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3127 | 3343 | 3386 |  |
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

Generated: 2026-08-18 06:33:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3127, 3139, 3140, 3195, 3294]
  line "STC (8.0+0.08s)" [3127, 3139, 3140, 3195, 3294]
  line "LTC (60.0+0.60s)" [3343, 3348, 3366, 3371, 3451]
  line "VLTC (2m24s+1.12s)" [3386, 3401, 3426, 3395, 3487]
  line "VLTC (2m24s+1.12s)" [3386, 3401, 3426, 3395, 3487]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3487 | 40 | 152 | 49% | 3495 | 79% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3451 | 40 | 150 | 50% | 3451 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3294 | 30 | 288 | 49% | 3297 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3395 | 25 | 394 | 50% | 3394 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 26 | 364 | 51% | 3367 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3195 | 25 | 444 | 51% | 3191 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 31 | 256 | 50% | 3425 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3366 | 27 | 332 | 49% | 3368 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3140 | 32 | 276 | 51% | 3135 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3401 | 36 | 192 | 50% | 3399 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3348 | 33 | 228 | 52% | 3337 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3139 | 34 | 244 | 49% | 3144 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3386 | 27 | 356 | 54% | 3348 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3343 | 31 | 272 | 51% | 3321 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3127 | 32 | 280 | 55% | 3070 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |