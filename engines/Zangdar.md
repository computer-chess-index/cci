# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3312<sub>(+102) | 3471<sub>(+84) | 3509<sub>(+96) |  |
| 6.1.1 | 2026-02-25 | 3210<sub>(+55) | 3387<sub>(+5) | 3413<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3155<sub>(+1) | 3382<sub>(+18) | 3444<sub>(+27) |  |
| 6 | 2026-02-07 | 3154<sub>(+13) | 3364<sub>(+5) | 3417<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3141 | 3359 | 3402 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-08 04:44:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3141, 3154, 3155, 3210, 3312]
  line "STC (8.0+0.08s)" [3141, 3154, 3155, 3210, 3312]
  line "LTC (60.0+0.60s)" [3359, 3364, 3382, 3387, 3471]
  line "" [3402, 3417, 3444, 3413, 3509]
  line "VLTC (2m24s+1.12s)" [3402, 3417, 3444, 3413, 3509]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 35 | 196 | 49% | 3511 | 81% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 36 | 186 | 51% | 3467 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3312 | 27 | 352 | 50% | 3309 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3413 | 25 | 394 | 50% | 3410 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3387 | 26 | 364 | 51% | 3383 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3210 | 25 | 444 | 51% | 3206 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3444 | 31 | 256 | 50% | 3441 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 27 | 332 | 49% | 3386 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3155 | 32 | 276 | 51% | 3148 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 36 | 192 | 50% | 3417 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3364 | 33 | 228 | 52% | 3355 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3154 | 34 | 244 | 49% | 3159 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3402 | 27 | 356 | 54% | 3364 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 31 | 272 | 51% | 3337 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3141 | 32 | 280 | 55% | 3085 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |