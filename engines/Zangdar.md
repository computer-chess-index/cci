# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3298<sub>(+96) | 3457<sub>(+79) | 3494<sub>(+92) |  |
| 6.1.1 | 2026-02-25 | 3202<sub>(+56) | 3378<sub>(+7) | 3402<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3146<sub>(0) | 3371<sub>(+16) | 3433<sub>(+27) |  |
| 6 | 2026-02-07 | 3146<sub>(+13) | 3355<sub>(+6) | 3406<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3133 | 3349 | 3391 |  |
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

Generated: 2026-08-27 06:38:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3133, 3146, 3146, 3202, 3298]
  line "STC (8.0+0.08s)" [3133, 3146, 3146, 3202, 3298]
  line "LTC (60.0+0.60s)" [3349, 3355, 3371, 3378, 3457]
  line "VLTC (2m24s+1.12s)" [3391, 3406, 3433, 3402, 3494]
  line "VLTC (2m24s+1.12s)" [3391, 3406, 3433, 3402, 3494]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 36 | 180 | 49% | 3499 | 79% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 38 | 166 | 50% | 3457 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3298 | 29 | 296 | 49% | 3303 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3402 | 25 | 394 | 50% | 3401 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3378 | 26 | 364 | 51% | 3374 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3202 | 25 | 444 | 51% | 3197 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 31 | 256 | 50% | 3430 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 27 | 332 | 49% | 3375 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3146 | 32 | 276 | 51% | 3140 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3406 | 36 | 192 | 50% | 3406 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3355 | 33 | 228 | 52% | 3344 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3146 | 34 | 244 | 49% | 3151 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3391 | 27 | 356 | 54% | 3355 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3349 | 31 | 272 | 51% | 3328 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3133 | 32 | 280 | 55% | 3077 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |