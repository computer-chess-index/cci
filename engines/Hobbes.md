# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3417<sub>(+12) | 3555<sub>(+18) | 3580<sub>(+34) |  |
| 2.1 | 2026-05-26 | 3405<sub>(+30) | 3537<sub>(+28) | 3546<sub>(+24) |  |
| 1.0 | 2026-03-05 | 3375 | 3509 | 3522 |  |
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

Generated: 2026-09-09 04:39:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3375, 3405, 3417]
  line "STC (8.0+0.08s)" [3375, 3405, 3417]
  line "LTC (60.0+0.60s)" [3509, 3537, 3555]
  line "" [3522, 3546, 3580]
  line "VLTC (2m24s+1.12s)" [3522, 3546, 3580]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 29 | 264 | 52% | 3569 | 88% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 27 | 314 | 50% | 3551 | 89% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3417 | 27 | 326 | 49% | 3425 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 31 | 232 | 51% | 3541 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3537 | 30 | 260 | 52% | 3524 | 88% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3405 | 28 | 296 | 52% | 3393 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 25 | 378 | 51% | 3514 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 26 | 350 | 51% | 3498 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3375 | 23 | 484 | 53% | 3345 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |