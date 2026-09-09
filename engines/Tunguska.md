# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2925<sub>(+112) | 3177<sub>(+31) | 3281<sub>(+68) |  |
| 2.1 | 2026-04-08 | 2813<sub>(+309) | 3146<sub>(+296) | 3213<sub>(+283) |  |
| 2.0 | 2026-03-18 | 2504 | 2850 | 2930 |  |
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

Generated: 2026-09-09 04:44:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1", "2.2"]
  y-axis "Elo Rating" 2500 --> 3300
  line "" [2504, 2813, 2925]
  line "STC (8.0+0.08s)" [2504, 2813, 2925]
  line "LTC (60.0+0.60s)" [2850, 3146, 3177]
  line "" [2930, 3213, 3281]
  line "VLTC (2m24s+1.12s)" [2930, 3213, 3281]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 44 | 136 | 50% | 3279 | 65% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3177 | 65 | 64 | 48% | 3193 | 58% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2925 | 62 | 76 | 53% | 2903 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3213 | 24 | 488 | 50% | 3210 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3146 | 24 | 458 | 52% | 3129 | 59% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2813 | 23 | 540 | 48% | 2831 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2930 | 30 | 356 | 51% | 2913 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2850 | 31 | 328 | 50% | 2843 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2504 | 31 | 368 | 50% | 2498 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |