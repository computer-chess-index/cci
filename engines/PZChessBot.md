# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3321<sub>(+24) | 3521<sub>(+37) | 3530<sub>(-2) |  |
| 7.0 | 2026-05-07 | 3297<sub>(+96) | 3484<sub>(+62) | 3532<sub>(+54) |  |
| 6.1 | 2026-02-01 | 3201<sub>(+34) | 3422<sub>(+60) | 3478<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3167<sub>(+121) | 3362<sub>(+123) | 3422<sub>(+152) |  |
| 5.0 | 2025-10-19 | 3046 | 3239 | 3270 |  |
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

Generated: 2026-08-29 06:28:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "" [3046, 3167, 3201, 3297, 3321]
  line "STC (8.0+0.08s)" [3046, 3167, 3201, 3297, 3321]
  line "LTC (60.0+0.60s)" [3239, 3362, 3422, 3484, 3521]
  line "" [3270, 3422, 3478, 3532, 3530]
  line "VLTC (2m24s+1.12s)" [3270, 3422, 3478, 3532, 3530]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 32 | 230 | 51% | 3526 | 86% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 31 | 248 | 50% | 3519 | 84% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3321 | 28 | 318 | 50% | 3321 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 25 | 362 | 50% | 3530 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 25 | 388 | 51% | 3478 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3297 | 28 | 340 | 50% | 3297 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 21 | 520 | 50% | 3476 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3422 | 23 | 464 | 50% | 3421 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3201 | 25 | 456 | 51% | 3193 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 28 | 312 | 50% | 3418 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 31 | 268 | 50% | 3362 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3167 | 32 | 264 | 49% | 3175 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 32 | 254 | 50% | 3259 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3239 | 38 | 184 | 53% | 3193 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3046 | 35 | 236 | 55% | 2963 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |