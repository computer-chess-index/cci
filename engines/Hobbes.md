# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3410<sub>(+13) | 3542<sub>(+16) | 3572<sub>(+34) |  |
| 2.1 | 2026-05-26 | 3397<sub>(+30) | 3526<sub>(+27) | 3538<sub>(+24) |  |
| 1.0 | 2026-03-05 | 3367 | 3499 | 3514 |  |
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

Generated: 2026-08-20 06:25:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3367, 3397, 3410]
  line "STC (8.0+0.08s)" [3367, 3397, 3410]
  line "LTC (60.0+0.60s)" [3499, 3526, 3542]
  line "VLTC (2m24s+1.12s)" [3514, 3538, 3572]
  line "VLTC (2m24s+1.12s)" [3514, 3538, 3572]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 31 | 232 | 51% | 3563 | 89% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 29 | 266 | 50% | 3545 | 89% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3410 | 29 | 290 | 49% | 3416 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 31 | 232 | 51% | 3532 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 30 | 260 | 52% | 3513 | 88% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3397 | 28 | 296 | 52% | 3383 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 25 | 378 | 51% | 3505 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3499 | 26 | 350 | 51% | 3488 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3367 | 23 | 484 | 53% | 3336 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |