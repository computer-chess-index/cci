# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3156<sub>(+1) | 3386<sub>(+19) | 3437<sub>(+15) |  |
| 8.2 | 2026-03-23 | 3155<sub>(-26) | 3367<sub>(-7) | 3422<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3181<sub>(+38) | 3374<sub>(-12) | 3434<sub>(+10) |  |
| 8.0 | 2026-03-10 | 3143 | 3386 | 3424 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexander+<version>&body=###%20Engine%20name%0AAlexander%0A%0A###%20Version%0A8.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:35:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3143, 3181, 3155, 3156]
  line "STC (8.0+0.08s)" [3143, 3181, 3155, 3156]
  line "LTC (60.0+0.60s)" [3386, 3374, 3367, 3386]
  line "" [3424, 3434, 3422, 3437]
  line "VLTC (2m24s+1.12s)" [3424, 3434, 3422, 3437]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3437 | 22 | 530 | 49% | 3441 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3386 | 23 | 510 | 48% | 3398 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3156 | 24 | 492 | 52% | 3143 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 26 | 380 | 49% | 3430 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 31 | 284 | 50% | 3366 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3155 | 27 | 396 | 48% | 3168 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3434 | 28 | 324 | 49% | 3440 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 30 | 290 | 51% | 3368 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3181 | 31 | 302 | 49% | 3189 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3424 | 28 | 308 | 50% | 3421 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3386 | 28 | 332 | 50% | 3384 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3143 | 31 | 300 | 49% | 3148 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |