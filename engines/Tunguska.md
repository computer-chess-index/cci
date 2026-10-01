# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2916<sub>(+99) | 3182<sub>(+31) | 3286<sub>(+68) |  |
| 2.1 | 2026-04-08 | 2817<sub>(+309) | 3151<sub>(+297) | 3218<sub>(+284) |  |
| 2.0 | 2026-03-18 | 2508 | 2854 | 2934 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tunguska+<version>&body=###%20Engine%20name%0ATunguska%0A%0A###%20Version%0A2.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-01 04:43:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1", "2.2"]
  y-axis "Elo Rating" 2500 --> 3300
  line "" [2508, 2817, 2916]
  line "STC (8.0+0.08s)" [2508, 2817, 2916]
  line "LTC (60.0+0.60s)" [2854, 3151, 3182]
  line "" [2934, 3218, 3286]
  line "VLTC (2m24s+1.12s)" [2934, 3218, 3286]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3286 | 30 | 284 | 50% | 3283 | 68% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3182 | 33 | 240 | 50% | 3183 | 61% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2916 | 34 | 252 | 50% | 2916 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3218 | 24 | 488 | 50% | 3214 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3151 | 24 | 458 | 52% | 3133 | 59% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2817 | 23 | 540 | 48% | 2835 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2934 | 30 | 356 | 51% | 2919 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2854 | 31 | 328 | 50% | 2846 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2508 | 31 | 368 | 50% | 2502 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |