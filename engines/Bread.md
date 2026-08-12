# Engine: Bread

Author: 

Home: https://github.com/Nonlinear2/Bread-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-07-29 |  |  |  |  |
| 3.1.0 | 2026-05-22 |  |  |  |  |
| 3.0.0 | 2026-03-15 | 3092<sub>(+108) | 3299<sub>(+106) | 3375<sub>(+132) |  |
| 2.1.1 | 2025-12-22 | 2984<sub>(+new) | 3193<sub>(+new) | 3243<sub>(+new) |  |
| 2.1.0 | 2025-12-21 |  |  |  | always disconnects |
| 2.0.0 | 2025-10-18 | 2850 | 3104 | 3140 |  |
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

Generated: 2026-08-12 06:24:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "STC (8.0+0.08s)" [2850, 2984, 3092]
  line "STC (8.0+0.08s)" [2850, 2984, 3092]
  line "LTC (60.0+0.60s)" [3104, 3193, 3299]
  line "VLTC (2m24s+1.12s)" [3140, 3243, 3375]
  line "VLTC (2m24s+1.12s)" [3140, 3243, 3375]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3375 | 23 | 452 | 50% | 3375 | 74% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3299 | 25 | 412 | 51% | 3291 | 73% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3092 | 23 | 516 | 50% | 3090 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 30 | 294 | 50% | 3240 | 61% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 28 | 348 | 50% | 3181 | 55% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2984 | 28 | 364 | 52% | 2969 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3140 | 37 | 208 | 57% | 3033 | 55% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3104 | 40 | 188 | 56% | 3021 | 53% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2850 | 38 | 208 | 51% | 2819 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |