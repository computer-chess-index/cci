# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3332<sub>(+27) | 3529<sub>(+35) | 3544<sub>(+3) |  |
| 7.0 | 2026-05-07 | 3305<sub>(+96) | 3494<sub>(+61) | 3541<sub>(+53) |  |
| 6.1 | 2026-02-01 | 3209<sub>(+34) | 3433<sub>(+62) | 3488<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3175<sub>(+120) | 3371<sub>(+124) | 3432<sub>(+154) |  |
| 5.0 | 2025-10-19 | 3055 | 3247 | 3278 |  |
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

Generated: 2026-10-08 04:41:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "" [3055, 3175, 3209, 3305, 3332]
  line "STC (8.0+0.08s)" [3055, 3175, 3209, 3305, 3332]
  line "LTC (60.0+0.60s)" [3247, 3371, 3433, 3494, 3529]
  line "" [3278, 3432, 3488, 3541, 3544]
  line "VLTC (2m24s+1.12s)" [3278, 3432, 3488, 3541, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 31 | 246 | 51% | 3537 | 85% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 29 | 284 | 50% | 3530 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3332 | 26 | 362 | 50% | 3330 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 25 | 362 | 50% | 3541 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3494 | 25 | 388 | 51% | 3488 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3305 | 28 | 340 | 50% | 3306 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3488 | 21 | 520 | 50% | 3487 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3433 | 23 | 464 | 50% | 3432 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3209 | 25 | 456 | 51% | 3201 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3432 | 28 | 312 | 50% | 3428 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 31 | 268 | 50% | 3371 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3175 | 32 | 264 | 49% | 3183 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3278 | 32 | 254 | 50% | 3267 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3247 | 38 | 184 | 53% | 3201 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3055 | 35 | 236 | 55% | 2971 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |