# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3402<sub>(+12) | 3538<sub>(+17) | 3560<sub>(+28) |  |
| 2.1 | 2026-05-26 | 3390<sub>(+new) | 3521<sub>(+new) | 3532<sub>(+new) |  |
| 2.0 | 2026-05-25 |  |  |  |  |
| 1.0 | 2026-03-05 | 3360 | 3494 | 3507 |  |
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

Generated: 2026-08-05 06:26:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3360, 3390, 3402]
  line "STC (8.0+0.08s)" [3360, 3390, 3402]
  line "LTC (60.0+0.60s)" [3494, 3521, 3538]
  line "VLTC (2m24s+1.12s)" [3507, 3532, 3560]
  line "VLTC (2m24s+1.12s)" [3507, 3532, 3560]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 33 | 208 | 50% | 3559 | 91% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 31 | 242 | 50% | 3538 | 90% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3402 | 30 | 268 | 49% | 3409 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 31 | 232 | 51% | 3526 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 30 | 260 | 52% | 3507 | 88% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3390 | 28 | 296 | 52% | 3378 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 25 | 378 | 51% | 3498 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3494 | 26 | 350 | 51% | 3482 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3360 | 23 | 484 | 53% | 3330 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |