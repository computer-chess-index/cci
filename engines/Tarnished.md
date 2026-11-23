# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3312<sub>(-9) | 3606<sub>(-36) | 3638<sub>(-15) |  |
| 5.0 | 2026-02-07 | 3321 | 3642 | 3653 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3356<sub>(+8) | 3536<sub>(+61) | 3583<sub>(+46) |  |
| 5.0 | 2026-02-07 | 3348 | 3475 | 3537 |  |
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

Generated: 2026-11-23 05:43:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3321, 3312]
  line "E1: LTC (60.0+0.60s)" [3642, 3606]
  line "E1: VLTC (2m24s+1.12s)" [3653, 3638]
  line "P1: STC (8.0+0.08s)" [3348, 3356]
  line "P1: LTC (60.0+0.60s)" [3475, 3536]
  line "P1: VLTC (2m24s+1.12s)" [3537, 3583]
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
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3583 | 38 | 182 | 61% | 3414 | 71% |
|  |  | E1 | 3638 | 31 | 268 | 56% | 3541 | 75% |
|  |  | T1 | 3571 | 25 | 372 | 51% | 3565 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3606 | 31 | 280 | 56% | 3484 | 73% |
|  |  | T1 | 3545 | 24 | 390 | 49% | 3552 | 86% |
|  |  | P1 | 3536 | 35 | 208 | 57% | 3426 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3312 | 26 | 400 | 45% | 3345 | 63% |
|  |  | T1 | 3366 | 24 | 444 | 49% | 3372 | 72% |
|  |  | P1 | 3356 | 30 | 272 | 49% | 3364 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3653 | 62 | 64 | 52% | 3629 | 73% |
|  |  | T1 | 3563 | 23 | 442 | 50% | 3563 | 86% |
|  |  | P1 | 3537 | 126 | 24 | 77% | 3179 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3642 | 62 | 72 | 58% | 3533 | 64% |
|  |  | T1 | 3540 | 23 | 442 | 51% | 3533 | 85% |
|  |  | P1 | 3475 | 82 | 44 | 68% | 3244 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3321 | 58 | 96 | 60% | 3106 | 47% |
|  |  | T1 | 3375 | 23 | 474 | 50% | 3374 | 72% |
|  |  | P1 | 3348 | 77 | 52 | 64% | 3183 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3492 | 29 | 282 | 51% | 3484 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3445 | 34 | 220 | 51% | 3426 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3264 | 29 | 316 | 54% | 3227 | 68% |