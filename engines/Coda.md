# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3491<sub>(+53) | 3565<sub>(-4) | 3590<sub>(-10) |  |
| 0.9.3 | 2026-07-26 | 3438<sub>(-5) | 3569<sub>(-10) | 3600<sub>(+24) |  |
| 0.9.2 | 2026-07-16 | 3443<sub>(+235) | 3579<sub>(+165) | 3576<sub>(+94) |  |
| 0.9.1 | 2026-07-14 | 3208 | 3414 | 3482 |  |
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

Generated: 2026-09-26 04:37:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3208, 3443, 3438, 3491]
  line "STC (8.0+0.08s)" [3208, 3443, 3438, 3491]
  line "LTC (60.0+0.60s)" [3414, 3579, 3569, 3565]
  line "" [3482, 3576, 3600, 3590]
  line "VLTC (2m24s+1.12s)" [3482, 3576, 3600, 3590]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 37 | 168 | 51% | 3582 | 90% |
| 0.9.4 | LTC <sub>(60.0+0.60s)</sub> | 3565 | 31 | 236 | 50% | 3563 | 83% |
| 0.9.4 | STC <sub>(8.0+0.08s)</sub> | 3491 | 27 | 314 | 51% | 3486 | 85% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3600 | 43 | 124 | 53% | 3582 | 90% |
| 0.9.3 | LTC <sub>(60.0+0.60s)</sub> | 3569 | 32 | 228 | 51% | 3560 | 86% |
| 0.9.3 | STC <sub>(8.0+0.08s)</sub> | 3438 | 30 | 276 | 50% | 3437 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 32 | 214 | 51% | 3571 | 91% |
| 0.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3579 | 36 | 178 | 50% | 3578 | 89% |
| 0.9.2 | STC <sub>(8.0+0.08s)</sub> | 3443 | 27 | 328 | 48% | 3456 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 39 | 166 | 55% | 3432 | 73% |
| 0.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3414 | 42 | 152 | 55% | 3352 | 63% |
| 0.9.1 | STC <sub>(8.0+0.08s)</sub> | 3208 | 41 | 172 | 52% | 3174 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |