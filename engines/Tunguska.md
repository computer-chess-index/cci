# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2915<sub>(+96) | 3182<sub>(+31) | 3285<sub>(+67) |  |
| 2.1 | 2026-04-08 | 2819<sub>(+311) | 3151<sub>(+297) | 3218<sub>(+283) |  |
| 2.0 | 2026-03-18 | 2508 | 2854 | 2935 |  |
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

Generated: 2026-09-24 04:43:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1", "2.2"]
  y-axis "Elo Rating" 2500 --> 3300
  line "" [2508, 2819, 2915]
  line "STC (8.0+0.08s)" [2508, 2819, 2915]
  line "LTC (60.0+0.60s)" [2854, 3151, 3182]
  line "" [2935, 3218, 3285]
  line "VLTC (2m24s+1.12s)" [2935, 3218, 3285]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3285 | 30 | 280 | 50% | 3285 | 68% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3182 | 34 | 236 | 50% | 3183 | 61% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2915 | 34 | 248 | 50% | 2916 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3218 | 24 | 488 | 50% | 3214 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3151 | 24 | 458 | 52% | 3133 | 59% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2819 | 23 | 540 | 48% | 2836 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2935 | 30 | 356 | 51% | 2919 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2854 | 31 | 328 | 50% | 2847 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2508 | 31 | 368 | 50% | 2502 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |