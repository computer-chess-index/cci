# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3484<sub>(+51) | 3559<sub>(-4) | 3584<sub>(-11) |  |
| 0.9.3 | 2026-07-26 | 3433<sub>(-4) | 3563<sub>(-10) | 3595<sub>(+24) |  |
| 0.9.2 | 2026-07-16 | 3437<sub>(+235) | 3573<sub>(+164) | 3571<sub>(+95) |  |
| 0.9.1 | 2026-07-14 | 3202 | 3409 | 3476 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coda+<version>&body=###%20Engine%20name%0ACoda%0A%0A###%20Version%0A0.9.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-12 04:37:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3202, 3437, 3433, 3484]
  line "STC (8.0+0.08s)" [3202, 3437, 3433, 3484]
  line "LTC (60.0+0.60s)" [3409, 3573, 3563, 3559]
  line "" [3476, 3571, 3595, 3584]
  line "VLTC (2m24s+1.12s)" [3476, 3571, 3595, 3584]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3584 | 39 | 148 | 51% | 3578 | 90% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 33 | 220 | 50% | 3557 | 83% |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3484 | 28 | 290 | 51% | 3479 | 84% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3595 | 43 | 124 | 53% | 3576 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3563 | 32 | 228 | 51% | 3555 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3433 | 30 | 276 | 50% | 3432 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 32 | 214 | 51% | 3564 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3573 | 36 | 178 | 50% | 3572 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3437 | 27 | 328 | 48% | 3451 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 39 | 166 | 55% | 3426 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 42 | 152 | 55% | 3347 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3202 | 41 | 172 | 52% | 3168 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |