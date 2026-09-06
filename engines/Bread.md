# Engine: Bread

Author: 

Home: https://github.com/Nonlinear2/Bread-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-07-29 |  |  |  |  |
| 3.1.0 | 2026-05-22 |  |  |  |  |
| 3.0.0 | 2026-03-15 | 3105<sub>(+108) | 3314<sub>(+108) | 3387<sub>(+129) |  |
| 2.1.1 | 2025-12-22 | 2997<sub>(+new) | 3206<sub>(+new) | 3258<sub>(+new) |  |
| 2.1.0 | 2025-12-21 |  |  |  | always disconnects |
| 2.0.0 | 2025-10-18 | 2863 | 3117 | 3154 |  |
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

Generated: 2026-09-06 06:22:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "" [2863, 2997, 3105]
  line "STC (8.0+0.08s)" [2863, 2997, 3105]
  line "LTC (60.0+0.60s)" [3117, 3206, 3314]
  line "" [3154, 3258, 3387]
  line "VLTC (2m24s+1.12s)" [3154, 3258, 3387]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 23 | 476 | 50% | 3390 | 75% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3314 | 24 | 420 | 51% | 3306 | 73% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3105 | 22 | 572 | 50% | 3105 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3258 | 30 | 294 | 50% | 3255 | 61% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3206 | 28 | 348 | 50% | 3194 | 55% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2997 | 28 | 364 | 52% | 2981 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 37 | 208 | 57% | 3047 | 55% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3117 | 40 | 188 | 56% | 3033 | 53% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2863 | 38 | 208 | 51% | 2832 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |