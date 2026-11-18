# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3308<sub>(+5) | 3561<sub>(-4) | 3627<sub>(-3) |  |
| 1.3.0 | 2026-06-17 | 3303 | 3565 | 3630 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3335<sub>(+52) | 3514<sub>(+88) | 3556<sub>(+53) |  |
| 1.3.0 | 2026-06-17 | 3283 | 3426 | 3503 |  |
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

Generated: 2026-11-18 05:42:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3303, 3308]
  line "E1: LTC (60.0+0.60s)" [3565, 3561]
  line "E1: VLTC (2m24s+1.12s)" [3630, 3627]
  line "P1: STC (8.0+0.08s)" [3283, 3335]
  line "P1: LTC (60.0+0.60s)" [3426, 3514]
  line "P1: VLTC (2m24s+1.12s)" [3503, 3556]
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
|  |  | P1 | 3556 | 37 | 186 | 55% | 3487 | 77% |
|  |  | E1 | 3627 | 31 | 256 | 54% | 3526 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3524 | 31 | 244 | 49% | 3530 | 86% |
|  |  | P1 | 3514 | 35 | 204 | 56% | 3437 | 76% |
|  |  | E1 | 3561 | 29 | 308 | 55% | 3483 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3335 | 32 | 244 | 49% | 3340 | 69% |
|  |  | E1 | 3308 | 24 | 466 | 46% | 3333 | 64% |
|  |  | T1 | 3359 | 26 | 380 | 52% | 3347 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3630 | 66 | 66 | 61% | 3357 | 67% |
|  |  | T1 | 3551 | 33 | 226 | 54% | 3511 | 81% |
|  |  | P1 | 3503 | 96 | 40 | 78% | 3090 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3525 | 31 | 260 | 53% | 3474 | 77% |
|  |  | P1 | 3426 | 124 | 24 | 79% | 3127 | 42% |
|  |  | E1 | 3565 | 66 | 64 | 63% | 3401 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3355 | 35 | 218 | 53% | 3297 | 66% |
|  |  | P1 | 3283 | 86 | 36 | 58% | 3214 | 61% |
|  |  | E1 | 3303 | 60 | 84 | 52% | 3229 | 46% |