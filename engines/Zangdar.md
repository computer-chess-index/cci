# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3299<sub>(+99) | 3456<sub>(+81) | 3492<sub>(+91) |  |
| 6.1.1 | 2026-02-25 | 3200<sub>(+56) | 3375<sub>(+5) | 3401<sub>(-29) |  |
| 6.1 | 2026-02-10 | 3144<sub>(+1) | 3370<sub>(+18) | 3430<sub>(+25) |  |
| 6 | 2026-02-07 | 3143<sub>(+12) | 3352<sub>(+5) | 3405<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3131 | 3347 | 3390 |  |
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

Generated: 2026-08-24 06:33:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3131, 3143, 3144, 3200, 3299]
  line "STC (8.0+0.08s)" [3131, 3143, 3144, 3200, 3299]
  line "LTC (60.0+0.60s)" [3347, 3352, 3370, 3375, 3456]
  line "VLTC (2m24s+1.12s)" [3390, 3405, 3430, 3401, 3492]
  line "VLTC (2m24s+1.12s)" [3390, 3405, 3430, 3401, 3492]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 38 | 168 | 49% | 3498 | 79% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3456 | 38 | 162 | 50% | 3455 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3299 | 29 | 292 | 50% | 3301 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3401 | 25 | 394 | 50% | 3398 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 26 | 364 | 51% | 3371 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3200 | 25 | 444 | 51% | 3195 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 31 | 256 | 50% | 3429 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 27 | 332 | 49% | 3374 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3144 | 32 | 276 | 51% | 3139 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 36 | 192 | 50% | 3405 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3352 | 33 | 228 | 52% | 3343 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3143 | 34 | 244 | 49% | 3148 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3390 | 27 | 356 | 54% | 3352 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3347 | 31 | 272 | 51% | 3326 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3131 | 32 | 280 | 55% | 3074 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |