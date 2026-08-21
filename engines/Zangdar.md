# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3297<sub>(+99) | 3453<sub>(+79) | 3491<sub>(+93) |  |
| 6.1.1 | 2026-02-25 | 3198<sub>(+57) | 3374<sub>(+7) | 3398<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3141<sub>(0) | 3367<sub>(+16) | 3429<sub>(+27) |  |
| 6 | 2026-02-07 | 3141<sub>(+12) | 3351<sub>(+6) | 3402<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3129 | 3345 | 3387 |  |
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

Generated: 2026-08-21 06:33:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3129, 3141, 3141, 3198, 3297]
  line "STC (8.0+0.08s)" [3129, 3141, 3141, 3198, 3297]
  line "LTC (60.0+0.60s)" [3345, 3351, 3367, 3374, 3453]
  line "VLTC (2m24s+1.12s)" [3387, 3402, 3429, 3398, 3491]
  line "VLTC (2m24s+1.12s)" [3387, 3402, 3429, 3398, 3491]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 39 | 156 | 49% | 3497 | 78% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3453 | 40 | 150 | 50% | 3452 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3297 | 30 | 288 | 49% | 3299 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3398 | 25 | 394 | 50% | 3397 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 26 | 364 | 51% | 3368 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3198 | 25 | 444 | 51% | 3193 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3429 | 31 | 256 | 50% | 3426 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 27 | 332 | 49% | 3371 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3141 | 32 | 276 | 51% | 3136 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3402 | 36 | 192 | 50% | 3402 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3351 | 33 | 228 | 52% | 3340 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3141 | 34 | 244 | 49% | 3147 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 27 | 356 | 54% | 3351 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3345 | 31 | 272 | 51% | 3324 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3129 | 32 | 280 | 55% | 3073 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |