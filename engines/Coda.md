# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3483<sub>(+54) | 3555<sub>(-5) | 3582<sub>(-10) |  |
| 0.9.3 | 2026-07-26 | 3429<sub>(-4) | 3560<sub>(-9) | 3592<sub>(+24) |  |
| 0.9.2 | 2026-07-16 | 3433<sub>(+233) | 3569<sub>(+164) | 3568<sub>(+94) |  |
| 0.9.1 | 2026-07-14 | 3200 | 3405 | 3474 |  |
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

Generated: 2026-08-31 04:34:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3200, 3433, 3429, 3483]
  line "STC (8.0+0.08s)" [3200, 3433, 3429, 3483]
  line "LTC (60.0+0.60s)" [3405, 3569, 3560, 3555]
  line "" [3474, 3568, 3592, 3582]
  line "VLTC (2m24s+1.12s)" [3474, 3568, 3592, 3582]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3582 | 41 | 132 | 52% | 3571 | 89% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3555 | 34 | 196 | 50% | 3555 | 84% |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3483 | 29 | 276 | 51% | 3475 | 84% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3592 | 43 | 124 | 53% | 3572 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3560 | 32 | 228 | 51% | 3552 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3429 | 30 | 276 | 50% | 3429 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3568 | 32 | 214 | 51% | 3561 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3569 | 36 | 178 | 50% | 3568 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3433 | 27 | 328 | 48% | 3447 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 39 | 166 | 55% | 3424 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3405 | 42 | 152 | 55% | 3344 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3200 | 41 | 172 | 52% | 3167 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |