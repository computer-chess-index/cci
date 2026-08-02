# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3406<sub>(+15) | 3541<sub>(+19) | 3563<sub>(+30) |  |
| 2.1 | 2026-05-26 | 3391<sub>(+new) | 3522<sub>(+new) | 3533<sub>(+new) |  |
| 2.0 | 2026-05-25 |  |  |  |  |
| 1.0 | 2026-03-05 | 3362 | 3494 | 3509 |  |
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

Generated: 2026-08-02 06:25:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3362, 3391, 3406]
  line "STC (8.0+0.08s)" [3362, 3391, 3406]
  line "LTC (60.0+0.60s)" [3494, 3522, 3541]
  line "VLTC (2m24s+1.12s)" [3509, 3533, 3563]
  line "VLTC (2m24s+1.12s)" [3509, 3533, 3563]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 34 | 196 | 50% | 3561 | 90% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 31 | 230 | 50% | 3541 | 90% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3406 | 31 | 248 | 49% | 3411 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 31 | 232 | 51% | 3528 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 30 | 260 | 52% | 3509 | 88% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3391 | 28 | 296 | 52% | 3379 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 25 | 378 | 51% | 3499 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3494 | 26 | 350 | 51% | 3483 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3362 | 23 | 484 | 53% | 3332 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |