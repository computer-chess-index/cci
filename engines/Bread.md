# Engine: Bread

Author: 

Home: https://github.com/Nonlinear2/Bread-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-07-29 |  |  |  |  |
| 3.1.0 | 2026-05-22 |  |  |  |  |
| 3.0.0 | 2026-03-15 | 3106<sub>(+108) | 3316<sub>(+107) | 3389<sub>(+130) |  |
| 2.1.1 | 2025-12-22 | 2998<sub>(+new) | 3209<sub>(+new) | 3259<sub>(+new) |  |
| 2.1.0 | 2025-12-21 |  |  |  | always disconnects |
| 2.0.0 | 2025-10-18 | 2865 | 3119 | 3155 |  |
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

Generated: 2026-09-13 04:36:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "" [2865, 2998, 3106]
  line "STC (8.0+0.08s)" [2865, 2998, 3106]
  line "LTC (60.0+0.60s)" [3119, 3209, 3316]
  line "" [3155, 3259, 3389]
  line "VLTC (2m24s+1.12s)" [3155, 3259, 3389]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3389 | 23 | 484 | 50% | 3393 | 74% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3316 | 24 | 428 | 51% | 3309 | 72% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3106 | 22 | 580 | 50% | 3106 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 30 | 294 | 50% | 3256 | 61% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3209 | 28 | 348 | 50% | 3197 | 55% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2998 | 28 | 364 | 52% | 2984 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3155 | 37 | 208 | 57% | 3048 | 55% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3119 | 40 | 188 | 56% | 3036 | 53% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2865 | 38 | 208 | 51% | 2834 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |