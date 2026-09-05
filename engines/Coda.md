# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3484<sub>(+54) | 3555<sub>(-6) | 3583<sub>(-11) |  |
| 0.9.3 | 2026-07-26 | 3430<sub>(-4) | 3561<sub>(-10) | 3594<sub>(+25) |  |
| 0.9.2 | 2026-07-16 | 3434<sub>(+233) | 3571<sub>(+165) | 3569<sub>(+95) |  |
| 0.9.1 | 2026-07-14 | 3201 | 3406 | 3474 |  |
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

Generated: 2026-09-05 04:34:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3201, 3434, 3430, 3484]
  line "STC (8.0+0.08s)" [3201, 3434, 3430, 3484]
  line "LTC (60.0+0.60s)" [3406, 3571, 3561, 3555]
  line "" [3474, 3569, 3594, 3583]
  line "VLTC (2m24s+1.12s)" [3474, 3569, 3594, 3583]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 41 | 132 | 52% | 3572 | 89% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 34 | 196 | 50% | 3556 | 84% |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3484 | 29 | 284 | 51% | 3476 | 85% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3594 | 43 | 124 | 53% | 3573 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3561 | 32 | 228 | 51% | 3553 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3430 | 30 | 276 | 50% | 3429 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 32 | 214 | 51% | 3563 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3571 | 36 | 178 | 50% | 3569 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3434 | 27 | 328 | 48% | 3448 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 39 | 166 | 55% | 3425 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3406 | 42 | 152 | 55% | 3345 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3201 | 41 | 172 | 52% | 3167 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |