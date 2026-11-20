# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3309<sub>(+1) | 3561<sub>(-6) | 3627<sub>(-3) |  |
| 1.3.0 | 2026-06-17 | 3308 | 3567 | 3630 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3335<sub>(+50) | 3513<sub>(+85) | 3552<sub>(+47) |  |
| 1.3.0 | 2026-06-17 | 3285 | 3428 | 3505 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3359<sub>(+4) | 3524<sub>(-1) | 3549<sub>(-2) |  |
| 1.3.0 | 2026-06-17 | 3355 | 3525 | 3551 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Renegade+<version>&body=###%20Engine%20name%0ARenegade%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:41:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3308, 3309]
  line "E1: LTC (60.0+0.60s)" [3567, 3561]
  line "E1: VLTC (2m24s+1.12s)" [3630, 3627]
  line "P1: STC (8.0+0.08s)" [3285, 3335]
  line "P1: LTC (60.0+0.60s)" [3428, 3513]
  line "P1: VLTC (2m24s+1.12s)" [3505, 3552]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3355, 3359]
  line "T1: LTC (60.0+0.60s)" [3525, 3524]
  line "T1: VLTC (2m24s+1.12s)" [3551, 3549]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3549 | 33 | 206 | 50% | 3553 | 88% |
|  |  | P1 | 3552 | 37 | 186 | 55% | 3482 | 77% |
|  |  | E1 | 3627 | 31 | 268 | 53% | 3533 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3524 | 31 | 244 | 49% | 3530 | 86% |
|  |  | P1 | 3513 | 35 | 208 | 56% | 3437 | 75% |
|  |  | E1 | 3561 | 29 | 316 | 55% | 3488 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3359 | 26 | 380 | 52% | 3347 | 70% |
|  |  | P1 | 3335 | 32 | 248 | 49% | 3340 | 70% |
|  |  | E1 | 3309 | 24 | 470 | 46% | 3336 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3505 | 96 | 40 | 78% | 3090 | 40% |
|  |  | E1 | 3630 | 66 | 66 | 61% | 3357 | 67% |
|  |  | T1 | 3551 | 33 | 226 | 54% | 3511 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3567 | 66 | 64 | 63% | 3403 | 66% |
|  |  | T1 | 3525 | 31 | 260 | 53% | 3474 | 77% |
|  |  | P1 | 3428 | 124 | 24 | 79% | 3128 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3308 | 60 | 84 | 52% | 3232 | 46% |
|  |  | T1 | 3355 | 35 | 218 | 53% | 3297 | 66% |
|  |  | P1 | 3285 | 86 | 36 | 58% | 3217 | 61% |