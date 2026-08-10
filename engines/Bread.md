# Engine: Bread

Author: 

Home: https://github.com/Nonlinear2/Bread-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-07-29 |  |  |  |  |
| 3.1.0 | 2026-05-22 |  |  |  |  |
| 3.0.0 | 2026-03-15 | 3096<sub>(+110) | 3302<sub>(+107) | 3378<sub>(+133) |  |
| 2.1.1 | 2025-12-22 | 2986<sub>(+new) | 3195<sub>(+new) | 3245<sub>(+new) |  |
| 2.1.0 | 2025-12-21 |  |  |  | always disconnects |
| 2.0.0 | 2025-10-18 | 2853 | 3106 | 3143 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bread+<version>&body=###%20Engine%20name%0ABread%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-10 07:48:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "STC (8.0+0.08s)" [2853, 2986, 3096]
  line "STC (8.0+0.08s)" [2853, 2986, 3096]
  line "LTC (60.0+0.60s)" [3106, 3195, 3302]
  line "VLTC (2m24s+1.12s)" [3143, 3245, 3378]
  line "VLTC (2m24s+1.12s)" [3143, 3245, 3378]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3378 | 23 | 452 | 50% | 3378 | 74% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3302 | 25 | 412 | 51% | 3294 | 73% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3096 | 23 | 516 | 50% | 3094 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3245 | 30 | 294 | 50% | 3243 | 61% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3195 | 28 | 348 | 50% | 3183 | 55% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2986 | 28 | 364 | 52% | 2971 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3143 | 37 | 208 | 57% | 3038 | 55% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3106 | 40 | 188 | 56% | 3024 | 53% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2853 | 38 | 208 | 51% | 2822 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |