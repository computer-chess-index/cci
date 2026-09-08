# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 3035<sub>(+146) | 3337<sub>(+142) | 3405<sub>(+134) |  |
| 3.1 | 2026-07-07 | 2889<sub>(+659) | 3195<sub>(+554) | 3271<sub>(+470) |  |
| 3.0 | 2026-05-25 | 2230<sub>(-241) | 2641<sub>(-191) | 2801<sub>(-100) |  |
| 2.2 | 2025-10-08 | 2471 | 2832 | 2901 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Thrawn+<version>&body=###%20Engine%20name%0AThrawn%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-08 04:43:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2200 --> 3500
  line "" [2471, 2230, 2889, 3035]
  line "STC (8.0+0.08s)" [2471, 2230, 2889, 3035]
  line "LTC (60.0+0.60s)" [2832, 2641, 3195, 3337]
  line "" [2901, 2801, 3271, 3405]
  line "VLTC (2m24s+1.12s)" [2901, 2801, 3271, 3405]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 36 | 182 | 51% | 3394 | 79% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3337 | 34 | 212 | 50% | 3337 | 72% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 3035 | 33 | 276 | 54% | 3001 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3271 | 27 | 350 | 53% | 3241 | 67% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3195 | 27 | 360 | 53% | 3168 | 62% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2889 | 29 | 364 | 50% | 2886 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2801 | 44 | 162 | 47% | 2824 | 35% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2641 | 45 | 156 | 49% | 2649 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2230 | 52 | 124 | 48% | 2252 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2901 | 24 | 510 | 47% | 2928 | 48% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2832 | 27 | 434 | 50% | 2834 | 39% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2471 | 25 | 540 | 48% | 2492 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |