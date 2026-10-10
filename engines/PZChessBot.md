# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3229 | 3461 | 3511 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3511 | 3717 | 3733 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3333<sub>(+27) | 3530<sub>(+35) | 3544<sub>(+2) |  |
| 7.0 | 2026-05-07 | 3306<sub>(+96) | 3495<sub>(+61) | 3542<sub>(+52) |  |
| 6.1 | 2026-02-01 | 3210<sub>(+33) | 3434<sub>(+62) | 3490<sub>(+57) |  |
| 6.0 | 2026-01-01 | 3177<sub>(+121) | 3372<sub>(+124) | 3433<sub>(+154) |  |
| 5.0 | 2025-10-19 | 3056 | 3248 | 3279 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A7.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:41:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "" [3056, 3177, 3210, 3306, 3333]
  line "STC (8.0+0.08s)" [3056, 3177, 3210, 3306, 3333]
  line "LTC (60.0+0.60s)" [3248, 3372, 3434, 3495, 3530]
  line "" [3279, 3433, 3490, 3542, 3544]
  line "VLTC (2m24s+1.12s)" [3279, 3433, 3490, 3542, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 40 | 182 | 64% | 3301 | 69% |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 30 | 250 | 51% | 3538 | 85% |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3733 | 46 | 124 | 61% | 3637 | 73% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3461 | 38 | 188 | 58% | 3320 | 68% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 29 | 284 | 50% | 3532 | 84% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3717 | 41 | 152 | 59% | 3586 | 70% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3229 | 31 | 266 | 45% | 3262 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3333 | 26 | 362 | 50% | 3332 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3511 | 37 | 180 | 50% | 3511 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 25 | 362 | 50% | 3542 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 25 | 388 | 51% | 3490 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3306 | 28 | 340 | 50% | 3308 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 21 | 520 | 50% | 3488 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 23 | 464 | 50% | 3433 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3210 | 25 | 456 | 51% | 3202 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 28 | 312 | 50% | 3429 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3372 | 31 | 268 | 50% | 3372 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3177 | 32 | 264 | 49% | 3185 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3279 | 32 | 254 | 50% | 3268 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3248 | 38 | 184 | 53% | 3202 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3056 | 35 | 236 | 55% | 2973 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |