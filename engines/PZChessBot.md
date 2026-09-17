# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3328<sub>(+27) | 3525<sub>(+35) | 3540<sub>(+3) |  |
| 7.0 | 2026-05-07 | 3301<sub>(+96) | 3490<sub>(+61) | 3537<sub>(+53) |  |
| 6.1 | 2026-02-01 | 3205<sub>(+34) | 3429<sub>(+62) | 3484<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3171<sub>(+120) | 3367<sub>(+124) | 3428<sub>(+154) |  |
| 5.0 | 2025-10-19 | 3051 | 3243 | 3274 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A7.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-17 04:41:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "" [3051, 3171, 3205, 3301, 3328]
  line "STC (8.0+0.08s)" [3051, 3171, 3205, 3301, 3328]
  line "LTC (60.0+0.60s)" [3243, 3367, 3429, 3490, 3525]
  line "" [3274, 3428, 3484, 3537, 3540]
  line "VLTC (2m24s+1.12s)" [3274, 3428, 3484, 3537, 3540]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 31 | 242 | 51% | 3533 | 85% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 29 | 276 | 50% | 3526 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3328 | 27 | 354 | 50% | 3326 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 25 | 362 | 50% | 3537 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 25 | 388 | 51% | 3484 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3301 | 28 | 340 | 50% | 3302 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3484 | 21 | 520 | 50% | 3483 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3429 | 23 | 464 | 50% | 3428 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3205 | 25 | 456 | 51% | 3197 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 28 | 312 | 50% | 3424 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 31 | 268 | 50% | 3367 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3171 | 32 | 264 | 49% | 3179 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3274 | 32 | 254 | 50% | 3263 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3243 | 38 | 184 | 53% | 3197 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3051 | 35 | 236 | 55% | 2967 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |