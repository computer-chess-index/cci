# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3156<sub>(+1) | 3384<sub>(+18) | 3437<sub>(+15) |  |
| 8.2 | 2026-03-23 | 3155<sub>(-24) | 3366<sub>(-8) | 3422<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3179<sub>(+38) | 3374<sub>(-10) | 3434<sub>(+12) |  |
| 8.0 | 2026-03-10 | 3141 | 3384 | 3422 |  |
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

Generated: 2026-09-15 04:35:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3141, 3179, 3155, 3156]
  line "STC (8.0+0.08s)" [3141, 3179, 3155, 3156]
  line "LTC (60.0+0.60s)" [3384, 3374, 3366, 3384]
  line "" [3422, 3434, 3422, 3437]
  line "VLTC (2m24s+1.12s)" [3422, 3434, 3422, 3437]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3437 | 22 | 530 | 49% | 3441 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3384 | 23 | 510 | 48% | 3398 | 66% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3156 | 24 | 492 | 52% | 3143 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 26 | 380 | 49% | 3429 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3366 | 31 | 284 | 50% | 3364 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3155 | 27 | 396 | 48% | 3168 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3434 | 28 | 324 | 49% | 3438 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 30 | 290 | 51% | 3368 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3179 | 31 | 302 | 49% | 3187 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 28 | 308 | 50% | 3420 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3384 | 28 | 332 | 50% | 3383 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3141 | 31 | 300 | 49% | 3147 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |