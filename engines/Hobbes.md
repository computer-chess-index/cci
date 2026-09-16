# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3422<sub>(+15) | 3556<sub>(+18) | 3582<sub>(+33) |  |
| 2.1 | 2026-05-26 | 3407<sub>(+29) | 3538<sub>(+27) | 3549<sub>(+24) |  |
| 1.0 | 2026-03-05 | 3378 | 3511 | 3525 |  |
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

Generated: 2026-09-16 04:38:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3378, 3407, 3422]
  line "STC (8.0+0.08s)" [3378, 3407, 3422]
  line "LTC (60.0+0.60s)" [3511, 3538, 3556]
  line "" [3525, 3549, 3582]
  line "VLTC (2m24s+1.12s)" [3525, 3549, 3582]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3582 | 29 | 274 | 51% | 3571 | 88% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3556 | 26 | 328 | 50% | 3553 | 90% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3422 | 27 | 342 | 49% | 3426 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 31 | 232 | 51% | 3544 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 30 | 260 | 52% | 3525 | 88% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3407 | 28 | 296 | 52% | 3395 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 25 | 378 | 51% | 3515 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3511 | 26 | 350 | 51% | 3501 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3378 | 23 | 484 | 53% | 3348 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |