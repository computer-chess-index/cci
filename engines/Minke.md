# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3357<sub>(+294) | 3568<sub>(+211) | 3630<sub>(+223) |  |
| 6.0.0 | 2026-04-25 | 3063 | 3357 | 3407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3324<sub>(-12) | 3501<sub>(+153) | 3548<sub>(+348) |  |
| 6.0.0 | 2026-04-25 | 3336 | 3348 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-08-27 | 3374<sub>(+210) | 3533<sub>(+153) | 3538<sub>(+102) |  |
| 6.0.0 | 2026-04-25 | 3164<sub>(+23) | 3380<sub>(+52) | 3436<sub>(+39) |  |
| 5.0.0 | 2026-02-13 | 3141<sub>(+60) | 3328<sub>(+43) | 3397<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3081<sub>(+95) | 3285<sub>(+65) | 3308<sub>(+52) |  |
| 3.0.0 | 2025-10-20 | 2986 | 3220 | 3256 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Minke+<version>&body=###%20Engine%20name%0AMinke%0A%0A###%20Version%0A7.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:40:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0.0", "7.0.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3063, 3357]
  line "E1: LTC (60.0+0.60s)" [3357, 3568]
  line "E1: VLTC (2m24s+1.12s)" [3407, 3630]
  line "P1: STC (8.0+0.08s)" [3336, 3324]
  line "P1: LTC (60.0+0.60s)" [3348, 3501]
  line "P1: VLTC (2m24s+1.12s)" [3200, 3548]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 2900 --> 3600
  line "T1: STC (8.0+0.08s)" [2986, 3081, 3141, 3164, 3374]
  line "T1: LTC (60.0+0.60s)" [3220, 3285, 3328, 3380, 3533]
  line "T1: VLTC (2m24s+1.12s)" [3256, 3308, 3397, 3436, 3538]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3538 | 29 | 280 | 50% | 3541 | 87% |
|  |  | P1 | 3548 | 39 | 144 | 50% | 3549 | 92% |
|  |  | E1 | 3630 | 29 | 264 | 50% | 3629 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3533 | 30 | 260 | 51% | 3526 | 80% |
|  |  | P1 | 3501 | 35 | 184 | 48% | 3515 | 89% |
|  |  | E1 | 3568 | 29 | 276 | 49% | 3576 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3374 | 27 | 350 | 48% | 3387 | 63% |
|  |  | P1 | 3324 | 33 | 220 | 48% | 3337 | 78% |
|  |  | E1 | 3357 | 25 | 400 | 49% | 3363 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3200 | 101 | 26 | 65% | 3078 | 69% |
|  |  | E1 | 3407 | 96 | 26 | 60% | 3339 | 73% |
|  |  | T1 | 3436 | 23 | 450 | 49% | 3441 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3357 | 80 | 40 | 49% | 3359 | 68% |
|  |  | T1 | 3380 | 24 | 432 | 50% | 3380 | 71% |
|  |  | P1 | 3348 | 128 | 20 | 75% | 3069 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3063 | 70 | 58 | 55% | 2985 | 55% |
|  |  | T1 | 3164 | 27 | 382 | 49% | 3174 | 59% |
|  |  | P1 | 3336 | 166 | 8 | 44% | 3376 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3397 | 24 | 414 | 50% | 3398 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3328 | 26 | 382 | 51% | 3320 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3141 | 25 | 444 | 51% | 3137 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3308 | 30 | 276 | 51% | 3298 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3285 | 31 | 268 | 48% | 3298 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3081 | 33 | 252 | 51% | 3052 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3256 | 37 | 184 | 50% | 3258 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3220 | 32 | 252 | 48% | 3235 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2986 | 34 | 240 | 48% | 2998 | 56% |