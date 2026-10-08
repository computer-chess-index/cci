# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3425<sub>(+14) | 3561<sub>(+19) | 3586<sub>(+33) |  |
| 2.1 | 2026-05-26 | 3411<sub>(+29) | 3542<sub>(+27) | 3553<sub>(+24) |  |
| 1.0 | 2026-03-05 | 3382 | 3515 | 3529 |  |
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

Generated: 2026-10-08 04:39:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3382, 3411, 3425]
  line "STC (8.0+0.08s)" [3382, 3411, 3425]
  line "LTC (60.0+0.60s)" [3515, 3542, 3561]
  line "" [3529, 3553, 3586]
  line "VLTC (2m24s+1.12s)" [3529, 3553, 3586]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 29 | 278 | 51% | 3575 | 88% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3561 | 26 | 346 | 51% | 3557 | 90% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3425 | 26 | 350 | 49% | 3430 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 31 | 232 | 51% | 3548 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 30 | 260 | 52% | 3529 | 88% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3411 | 28 | 296 | 52% | 3399 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 25 | 378 | 51% | 3519 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 26 | 350 | 51% | 3505 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3382 | 23 | 484 | 53% | 3352 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |