# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3312<sub>(-8) | 3603<sub>(-38) | 3638<sub>(-14) |  |
| 5.0 | 2026-02-07 | 3320 | 3641 | 3652 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3341<sub>(+32) | 3526<sub>(+93) | 3573<sub>(+52) |  |
| 5.0 | 2026-02-07 | 3309 | 3433 | 3521 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3366<sub>(-9) | 3545<sub>(+5) | 3571<sub>(+8) |  |
| 5.0 | 2026-02-07 | 3375<sub>(+111) | 3540<sub>(+95) | 3563<sub>(+71) |  |
| 4.0 | 2025-08-23 | 3264 | 3445 | 3492 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tarnished+<version>&body=###%20Engine%20name%0ATarnished%0A%0A###%20Version%0A6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:44:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3320, 3312]
  line "E1: LTC (60.0+0.60s)" [3641, 3603]
  line "E1: VLTC (2m24s+1.12s)" [3652, 3638]
  line "P1: STC (8.0+0.08s)" [3309, 3341]
  line "P1: LTC (60.0+0.60s)" [3433, 3526]
  line "P1: VLTC (2m24s+1.12s)" [3521, 3573]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3264, 3375, 3366]
  line "T1: LTC (60.0+0.60s)" [3445, 3540, 3545]
  line "T1: VLTC (2m24s+1.12s)" [3492, 3563, 3571]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3638 | 32 | 248 | 57% | 3532 | 73% |
|  |  | T1 | 3571 | 25 | 372 | 51% | 3565 | 87% |
|  |  | P1 | 3573 | 39 | 176 | 61% | 3399 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3545 | 24 | 390 | 49% | 3552 | 86% |
|  |  | P1 | 3526 | 35 | 208 | 57% | 3416 | 76% |
|  |  | E1 | 3603 | 32 | 264 | 57% | 3474 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3366 | 24 | 444 | 49% | 3372 | 72% |
|  |  | P1 | 3341 | 30 | 272 | 49% | 3349 | 74% |
|  |  | E1 | 3312 | 26 | 392 | 46% | 3344 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 23 | 442 | 50% | 3563 | 86% |
|  |  | P1 | 3521 | 147 | 20 | 83% | 3101 | 25% |
|  |  | E1 | 3652 | 62 | 64 | 52% | 3627 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3540 | 23 | 442 | 51% | 3533 | 85% |
|  |  | P1 | 3433 | 115 | 28 | 77% | 3101 | 39% |
|  |  | E1 | 3641 | 62 | 72 | 58% | 3532 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3375 | 23 | 474 | 50% | 3374 | 72% |
|  |  | P1 | 3309 | 90 | 40 | 66% | 3124 | 48% |
|  |  | E1 | 3320 | 58 | 96 | 60% | 3105 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3492 | 29 | 282 | 51% | 3484 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3445 | 34 | 220 | 51% | 3426 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3264 | 29 | 316 | 54% | 3227 | 68% |