# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-11-20 | 3395<sub>(+97) | 3618<sub>(+74) | 3642<sub>(+36) |  |
| 7.1 | 2026-06-27 | 3298<sub>(+76) | 3544<sub>(-2) | 3606<sub>(-21) |  |
| 7.0 | 2026-05-07 | 3222 | 3546 | 3627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-11-20 | 3443<sub>(+140) | 3598<sub>(+91) | 3595<sub>(+54) |  |
| 7.1 | 2026-06-27 | 3303<sub>(+66) | 3507<sub>(+74) | 3541<sub>(+24) |  |
| 7.0 | 2026-05-07 | 3237 | 3433 | 3517 |  |
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

Generated: 2026-11-22 05:41:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3222, 3298, 3395]
  line "E1: LTC (60.0+0.60s)" [3546, 3544, 3618]
  line "E1: VLTC (2m24s+1.12s)" [3627, 3606, 3642]
  line "P1: STC (8.0+0.08s)" [3237, 3303, 3443]
  line "P1: LTC (60.0+0.60s)" [3433, 3507, 3598]
  line "P1: VLTC (2m24s+1.12s)" [3517, 3541, 3595]
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
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3642 | 36 | 180 | 51% | 3636 | 84% |
|  |  | P1 | 3595 | 104 | 20 | 50% | 3594 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3618 | 41 | 140 | 54% | 3594 | 84% |
|  |  | P1 | 3598 | 49 | 96 | 47% | 3617 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3443 | 99 | 24 | 50% | 3441 | 75% |
|  |  | E1 | 3395 | 36 | 188 | 51% | 3386 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3544 | 30 | 250 | 51% | 3538 | 85% |
|  |  | P1 | 3541 | 33 | 232 | 57% | 3480 | 80% |
|  |  | E1 | 3606 | 28 | 340 | 59% | 3483 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3530 | 29 | 284 | 50% | 3532 | 84% |
|  |  | P1 | 3507 | 32 | 240 | 55% | 3426 | 77% |
|  |  | E1 | 3544 | 30 | 296 | 55% | 3453 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3333 | 26 | 362 | 50% | 3332 | 71% |
|  |  | P1 | 3303 | 30 | 284 | 49% | 3306 | 69% |
|  |  | E1 | 3298 | 24 | 450 | 46% | 3326 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3542 | 25 | 362 | 50% | 3542 | 84% |
|  |  | P1 | 3517 | 118 | 20 | 73% | 3333 | 55% |
|  |  | E1 | 3627 | 62 | 72 | 58% | 3529 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3495 | 25 | 388 | 51% | 3490 | 84% |
|  |  | P1 | 3433 | 97 | 40 | 74% | 3092 | 43% |
|  |  | E1 | 3546 | 68 | 56 | 54% | 3507 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3306 | 28 | 340 | 50% | 3308 | 66% |
|  |  | P1 | 3237 | 78 | 56 | 60% | 3000 | 45% |
|  |  | E1 | 3222 | 60 | 80 | 46% | 3201 | 56% |
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