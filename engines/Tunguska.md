# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2919<sub>(+99) | 3183<sub>(+31) | 3289<sub>(+68) |  |
| 2.1 | 2026-04-08 | 2820<sub>(+309) | 3152<sub>(+297) | 3221<sub>(+285) |  |
| 2.0 | 2026-03-18 | 2511 | 2855 | 2936 |  |
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

Generated: 2026-10-09 04:44:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1", "2.2"]
  y-axis "Elo Rating" 2500 --> 3300
  line "" [2511, 2820, 2919]
  line "STC (8.0+0.08s)" [2511, 2820, 2919]
  line "LTC (60.0+0.60s)" [2855, 3152, 3183]
  line "" [2936, 3221, 3289]
  line "VLTC (2m24s+1.12s)" [2936, 3221, 3289]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3289 | 30 | 284 | 50% | 3286 | 68% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3183 | 33 | 244 | 49% | 3186 | 61% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2919 | 34 | 252 | 50% | 2919 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3221 | 24 | 488 | 50% | 3217 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3152 | 24 | 458 | 52% | 3135 | 59% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2820 | 23 | 540 | 48% | 2838 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2936 | 30 | 356 | 51% | 2920 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2855 | 31 | 328 | 50% | 2849 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2511 | 31 | 368 | 50% | 2504 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |