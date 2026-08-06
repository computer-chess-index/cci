# Engine: Bread

Author: 

Home: https://github.com/Nonlinear2/Bread-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-07-29 |  |  |  |  |
| 3.1.0 | 2026-05-22 |  |  |  |  |
| 3.0.0 | 2026-03-15 | 3093<sub>(+108) | 3301<sub>(+107) | 3375<sub>(+131) |  |
| 2.1.1 | 2025-12-22 | 2985<sub>(+new) | 3194<sub>(+new) | 3244<sub>(+new) |  |
| 2.1.0 | 2025-12-21 |  |  |  | always disconnects |
| 2.0.0 | 2025-10-18 | 2851 | 3105 | 3141 |  |
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

Generated: 2026-08-06 08:24:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "STC (8.0+0.08s)" [2851, 2985, 3093]
  line "STC (8.0+0.08s)" [2851, 2985, 3093]
  line "LTC (60.0+0.60s)" [3105, 3194, 3301]
  line "VLTC (2m24s+1.12s)" [3141, 3244, 3375]
  line "VLTC (2m24s+1.12s)" [3141, 3244, 3375]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3375 | 23 | 448 | 50% | 3376 | 74% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3301 | 25 | 408 | 51% | 3293 | 73% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3093 | 23 | 508 | 50% | 3092 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 30 | 294 | 50% | 3241 | 61% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 28 | 348 | 50% | 3182 | 55% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2985 | 28 | 364 | 52% | 2970 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3141 | 37 | 208 | 57% | 3035 | 55% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3105 | 40 | 188 | 56% | 3023 | 53% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2851 | 38 | 208 | 51% | 2820 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |