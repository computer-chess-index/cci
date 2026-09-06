# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3416<sub>(+13) | 3552<sub>(+18) | 3578<sub>(+33) |  |
| 2.1 | 2026-05-26 | 3403<sub>(+29) | 3534<sub>(+27) | 3545<sub>(+24) |  |
| 1.0 | 2026-03-05 | 3374 | 3507 | 3521 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Hobbes+<version>&body=###%20Engine%20name%0AHobbes%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:25:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3374, 3403, 3416]
  line "STC (8.0+0.08s)" [3374, 3403, 3416]
  line "LTC (60.0+0.60s)" [3507, 3534, 3552]
  line "" [3521, 3545, 3578]
  line "VLTC (2m24s+1.12s)" [3521, 3545, 3578]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 30 | 260 | 51% | 3568 | 88% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3552 | 27 | 306 | 50% | 3549 | 89% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3416 | 28 | 318 | 49% | 3422 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 31 | 232 | 51% | 3540 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 30 | 260 | 52% | 3521 | 88% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3403 | 28 | 296 | 52% | 3391 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 25 | 378 | 51% | 3511 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3507 | 26 | 350 | 51% | 3495 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3374 | 23 | 484 | 53% | 3344 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |