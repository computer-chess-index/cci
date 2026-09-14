# Engine: Tunguska

Author: Fernando Tenorio

Home: https://github.com/fernandotenorio/Tunguska

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-09-07 | 2915<sub>(+100) | 3170<sub>(+23) | 3278<sub>(+64) |  |
| 2.1 | 2026-04-08 | 2815<sub>(+309) | 3147<sub>(+296) | 3214<sub>(+283) |  |
| 2.0 | 2026-03-18 | 2506 | 2851 | 2931 |  |
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

Generated: 2026-09-14 04:43:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1", "2.2"]
  y-axis "Elo Rating" 2500 --> 3300
  line "" [2506, 2815, 2915]
  line "STC (8.0+0.08s)" [2506, 2815, 2915]
  line "LTC (60.0+0.60s)" [2851, 3147, 3170]
  line "" [2931, 3214, 3278]
  line "VLTC (2m24s+1.12s)" [2931, 3214, 3278]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3278 | 32 | 244 | 50% | 3279 | 68% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3170 | 37 | 200 | 49% | 3179 | 60% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2915 | 35 | 228 | 50% | 2915 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3214 | 24 | 488 | 50% | 3212 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3147 | 24 | 458 | 52% | 3129 | 59% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2815 | 23 | 540 | 48% | 2832 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2931 | 30 | 356 | 51% | 2916 | 37% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2851 | 31 | 328 | 50% | 2843 | 36% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2506 | 31 | 368 | 50% | 2499 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |