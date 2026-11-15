# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3298<sub>(-1) | 3557<sub>(+16) | 3622<sub>(-8) |  |
| 1.3.0 | 2026-06-17 | 3299 | 3541 | 3630 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3332<sub>(+84) | 3505<sub>(+161) | 3546<sub>(+64) |  |
| 1.3.0 | 2026-06-17 | 3248 | 3344 | 3482 |  |
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

Generated: 2026-11-15 05:41:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3299, 3298]
  line "E1: LTC (60.0+0.60s)" [3541, 3557]
  line "E1: VLTC (2m24s+1.12s)" [3630, 3622]
  line "P1: STC (8.0+0.08s)" [3248, 3332]
  line "P1: LTC (60.0+0.60s)" [3344, 3505]
  line "P1: VLTC (2m24s+1.12s)" [3482, 3546]
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
|  |  | P1 | 3546 | 37 | 186 | 55% | 3476 | 77% |
|  |  | E1 | 3622 | 32 | 244 | 54% | 3518 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3524 | 31 | 244 | 49% | 3530 | 86% |
|  |  | P1 | 3505 | 36 | 200 | 56% | 3425 | 76% |
|  |  | E1 | 3557 | 30 | 292 | 55% | 3475 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3359 | 26 | 380 | 52% | 3347 | 70% |
|  |  | P1 | 3332 | 32 | 244 | 49% | 3337 | 69% |
|  |  | E1 | 3298 | 24 | 450 | 46% | 3326 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3482 | 114 | 32 | 86% | 2978 | 28% |
|  |  | E1 | 3630 | 110 | 34 | 72% | 3102 | 38% |
|  |  | T1 | 3551 | 33 | 226 | 54% | 3511 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3344 | 166 | 16 | 88% | 2971 | 25% |
|  |  | E1 | 3541 | 97 | 36 | 71% | 3271 | 47% |
|  |  | T1 | 3525 | 31 | 260 | 53% | 3474 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3299 | 73 | 60 | 53% | 3191 | 40% |
|  |  | T1 | 3355 | 35 | 218 | 53% | 3297 | 66% |
|  |  | P1 | 3248 | 117 | 20 | 63% | 3150 | 55% |