# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3486<sub>(+52) | 3560<sub>(-5) | 3586<sub>(-10) |  |
| 0.9.3 | 2026-07-26 | 3434<sub>(-4) | 3565<sub>(-10) | 3596<sub>(+24) |  |
| 0.9.2 | 2026-07-16 | 3438<sub>(+234) | 3575<sub>(+165) | 3572<sub>(+94) |  |
| 0.9.1 | 2026-07-14 | 3204 | 3410 | 3478 |  |
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

Generated: 2026-09-15 04:37:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3204, 3438, 3434, 3486]
  line "STC (8.0+0.08s)" [3204, 3438, 3434, 3486]
  line "LTC (60.0+0.60s)" [3410, 3575, 3565, 3560]
  line "" [3478, 3572, 3596, 3586]
  line "VLTC (2m24s+1.12s)" [3478, 3572, 3596, 3586]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3586 | 38 | 156 | 51% | 3579 | 90% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3560 | 32 | 232 | 50% | 3560 | 83% |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3486 | 28 | 302 | 51% | 3480 | 84% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3596 | 43 | 124 | 53% | 3578 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3565 | 32 | 228 | 51% | 3556 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3434 | 30 | 276 | 50% | 3433 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 32 | 214 | 51% | 3567 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3575 | 36 | 178 | 50% | 3573 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3438 | 27 | 328 | 48% | 3452 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 39 | 166 | 55% | 3428 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3410 | 42 | 152 | 55% | 3349 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3204 | 41 | 172 | 52% | 3170 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |