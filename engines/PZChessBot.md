# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3303<sub>(+75) | 3548<sub>(-1) | 3611<sub>(-22) |  |
| 7.0 | 2026-05-07 | 3228 | 3549 | 3633 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3293<sub>(+50) | 3503<sub>(+102) | 3536<sub>(+38) |  |
| 7.0 | 2026-05-07 | 3243 | 3401 | 3498 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-17 05:41:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3228, 3303]
  line "E1: LTC (60.0+0.60s)" [3549, 3548]
  line "E1: VLTC (2m24s+1.12s)" [3633, 3611]
  line "P1: STC (8.0+0.08s)" [3243, 3293]
  line "P1: LTC (60.0+0.60s)" [3401, 3503]
  line "P1: VLTC (2m24s+1.12s)" [3498, 3536]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "T1: STC (8.0+0.08s)" [3056, 3177, 3210, 3306, 3333]
  line "T1: LTC (60.0+0.60s)" [3248, 3372, 3434, 3495, 3530]
  line "T1: VLTC (2m24s+1.12s)" [3279, 3433, 3490, 3542, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3544 | 30 | 250 | 51% | 3538 | 85% |
|  |  | P1 | 3536 | 33 | 228 | 57% | 3474 | 79% |
|  |  | E1 | 3611 | 28 | 336 | 59% | 3484 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3503 | 33 | 232 | 56% | 3421 | 77% |
|  |  | E1 | 3548 | 31 | 276 | 55% | 3448 | 72% |
|  |  | T1 | 3530 | 29 | 284 | 50% | 3532 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3293 | 31 | 272 | 50% | 3291 | 69% |
|  |  | E1 | 3303 | 24 | 442 | 46% | 3329 | 67% |
|  |  | T1 | 3333 | 26 | 362 | 50% | 3332 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3633 | 62 | 72 | 58% | 3534 | 60% |
|  |  | T1 | 3542 | 25 | 362 | 50% | 3542 | 84% |
|  |  | P1 | 3498 | 118 | 20 | 73% | 3312 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3495 | 25 | 388 | 51% | 3490 | 84% |
|  |  | P1 | 3401 | 104 | 36 | 75% | 3036 | 39% |
|  |  | E1 | 3549 | 68 | 56 | 54% | 3510 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3306 | 28 | 340 | 50% | 3308 | 66% |
|  |  | P1 | 3243 | 86 | 48 | 65% | 2939 | 42% |
|  |  | E1 | 3228 | 60 | 80 | 46% | 3206 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3490 | 21 | 520 | 50% | 3488 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3434 | 23 | 464 | 50% | 3433 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3210 | 25 | 456 | 51% | 3202 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3433 | 28 | 312 | 50% | 3429 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3372 | 31 | 268 | 50% | 3372 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3177 | 32 | 264 | 49% | 3185 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3279 | 32 | 254 | 50% | 3268 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3248 | 38 | 184 | 53% | 3202 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3056 | 35 | 236 | 55% | 2973 | 52% |