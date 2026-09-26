# Engine: Bread

Author: 

Home: https://github.com/Nonlinear2/Bread-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-07-29 |  |  |  |  |
| 3.1.0 | 2026-05-22 |  |  |  |  |
| 3.0.0 | 2026-03-15 | 3113<sub>(+111) | 3320<sub>(+107) | 3394<sub>(+131) |  |
| 2.1.1 | 2025-12-22 | 3002<sub>(+new) | 3213<sub>(+new) | 3263<sub>(+new) |  |
| 2.1.0 | 2025-12-21 |  |  |  | always disconnects |
| 2.0.0 | 2025-10-18 | 2869 | 3123 | 3159 |  |
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

Generated: 2026-09-26 04:36:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "" [2869, 3002, 3113]
  line "STC (8.0+0.08s)" [2869, 3002, 3113]
  line "LTC (60.0+0.60s)" [3123, 3213, 3320]
  line "" [3159, 3263, 3394]
  line "VLTC (2m24s+1.12s)" [3159, 3263, 3394]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3394 | 22 | 496 | 50% | 3397 | 75% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3320 | 24 | 436 | 51% | 3313 | 72% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3113 | 22 | 588 | 50% | 3110 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3263 | 30 | 294 | 50% | 3260 | 61% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3213 | 28 | 348 | 50% | 3201 | 55% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 3002 | 28 | 364 | 52% | 2988 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3159 | 37 | 208 | 57% | 3054 | 55% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3123 | 40 | 188 | 56% | 3040 | 53% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2869 | 38 | 208 | 51% | 2838 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |