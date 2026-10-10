# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3414 | 3582 | 3603 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3671 | 3803 | 3821 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3494<sub>(+53) | 3568<sub>(-3) | 3592<sub>(-11) |  |
| 0.9.3 | 2026-07-26 | 3441<sub>(-4) | 3571<sub>(-9) | 3603<sub>(+24) |  |
| 0.9.2 | 2026-07-16 | 3445<sub>(+235) | 3580<sub>(+164) | 3579<sub>(+95) |  |
| 0.9.1 | 2026-07-14 | 3210 | 3416 | 3484 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coda+<version>&body=###%20Engine%20name%0ACoda%0A%0A###%20Version%0A0.9.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-10 04:37:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3200 --> 3700
  line "" [3210, 3445, 3441, 3494]
  line "STC (8.0+0.08s)" [3210, 3445, 3441, 3494]
  line "LTC (60.0+0.60s)" [3416, 3580, 3571, 3568]
  line "" [3484, 3579, 3603, 3592]
  line "VLTC (2m24s+1.12s)" [3484, 3579, 3603, 3592]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3592 | 37 | 168 | 51% | 3584 | 90% |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3821 | 51 | 84 | 52% | 3804 | 93% |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3603 | 41 | 132 | 52% | 3591 | 93% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3568 | 31 | 244 | 51% | 3564 | 83% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3803 | 43 | 122 | 52% | 3791 | 90% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3582 | 38 | 156 | 51% | 3573 | 87% |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3494 | 27 | 318 | 51% | 3488 | 85% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3671 | 37 | 168 | 47% | 3688 | 85% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3414 | 31 | 264 | 46% | 3444 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3603 | 43 | 124 | 53% | 3584 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3571 | 32 | 228 | 51% | 3563 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3441 | 30 | 276 | 50% | 3440 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 32 | 214 | 51% | 3572 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3580 | 36 | 178 | 50% | 3579 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3445 | 27 | 328 | 48% | 3459 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3484 | 39 | 166 | 55% | 3434 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 42 | 152 | 55% | 3355 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3210 | 41 | 172 | 52% | 3177 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |