# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3324<sub>(+25) | 3526<sub>(+39) | 3537<sub>(+3) |  |
| 7.0 | 2026-05-07 | 3299<sub>(+95) | 3487<sub>(+61) | 3534<sub>(+52) |  |
| 6.1 | 2026-02-01 | 3204<sub>(+34) | 3426<sub>(+62) | 3482<sub>(+57) |  |
| 6.0 | 2026-01-01 | 3170<sub>(+122) | 3364<sub>(+123) | 3425<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3048 | 3241 | 3272 |  |
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

Generated: 2026-09-11 04:41:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "" [3048, 3170, 3204, 3299, 3324]
  line "STC (8.0+0.08s)" [3048, 3170, 3204, 3299, 3324]
  line "LTC (60.0+0.60s)" [3241, 3364, 3426, 3487, 3526]
  line "" [3272, 3425, 3482, 3534, 3537]
  line "VLTC (2m24s+1.12s)" [3272, 3425, 3482, 3534, 3537]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 31 | 242 | 51% | 3530 | 85% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 30 | 260 | 50% | 3524 | 85% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3324 | 27 | 342 | 50% | 3324 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 25 | 362 | 50% | 3534 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 25 | 388 | 51% | 3482 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3299 | 28 | 340 | 50% | 3299 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 21 | 520 | 50% | 3480 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3426 | 23 | 464 | 50% | 3425 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3204 | 25 | 456 | 51% | 3195 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 28 | 312 | 50% | 3421 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3364 | 31 | 268 | 50% | 3364 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3170 | 32 | 264 | 49% | 3178 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3272 | 32 | 254 | 50% | 3262 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3241 | 38 | 184 | 53% | 3195 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3048 | 35 | 236 | 55% | 2965 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |