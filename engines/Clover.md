# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3391<sub>(+102) | 3603<sub>(+75) | 3649<sub>(+136) |  |
| 8.2.5 | 2025-07-14 | 3289 | 3528 | 3513 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3367<sub>(+116) | 3537<sub>(+18) | 3568<sub>(+321) |  |
| 8.2.5 | 2025-07-14 | 3251 | 3519 | 3247 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3399<sub>(+48) | 3548<sub>(+46) | 3557<sub>(+27) |  |
| 8.2.5 | 2025-07-14 | 3351<sub>(-2) | 3502<sub>(+16) | 3530<sub>(+4) |  |
| 8.1 | 2024-12-03 | 3353<sub>(+5) | 3486<sub>(-11) | 3526<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3348 | 3497 | 3526 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Clover+<version>&body=###%20Engine%20name%0AClover%0A%0A###%20Version%0A9.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:37:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.2.5", "9.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3289, 3391]
  line "E1: LTC (60.0+0.60s)" [3528, 3603]
  line "E1: VLTC (2m24s+1.12s)" [3513, 3649]
  line "P1: STC (8.0+0.08s)" [3251, 3367]
  line "P1: LTC (60.0+0.60s)" [3519, 3537]
  line "P1: VLTC (2m24s+1.12s)" [3247, 3568]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3348, 3353, 3351, 3399]
  line "T1: LTC (60.0+0.60s)" [3497, 3486, 3502, 3548]
  line "T1: VLTC (2m24s+1.12s)" [3526, 3526, 3530, 3557]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3568 | 37 | 172 | 54% | 3541 | 83% |
|  |  | E1 | 3649 | 30 | 252 | 51% | 3640 | 85% |
|  |  | T1 | 3557 | 21 | 506 | 50% | 3560 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3537 | 33 | 208 | 53% | 3514 | 86% |
|  |  | T1 | 3548 | 21 | 524 | 50% | 3548 | 89% |
|  |  | E1 | 3603 | 32 | 224 | 50% | 3606 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3399 | 18 | 736 | 51% | 3394 | 75% |
|  |  | E1 | 3391 | 25 | 416 | 48% | 3403 | 71% |
|  |  | P1 | 3367 | 32 | 248 | 51% | 3363 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3247 | 172 | 16 | 81% | 2666 | 25% |
|  |  | E1 | 3513 | 111 | 28 | 75% | 3179 | 50% |
|  |  | T1 | 3530 | 32 | 220 | 51% | 3526 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3502 | 32 | 236 | 49% | 3509 | 81% |
|  |  | E1 | 3528 | 111 | 28 | 75% | 3217 | 50% |
|  |  | P1 | 3519 | 192 | 16 | 94% | 3044 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3351 | 31 | 254 | 49% | 3359 | 73% |
|  |  | E1 | 3289 | 94 | 32 | 70% | 3116 | 53% |
|  |  | P1 | 3251 | 123 | 24 | 71% | 3009 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3526 | 14 | 1160 | 50% | 3524 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3486 | 14 | 1176 | 50% | 3487 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3353 | 15 | 1124 | 51% | 3349 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3526 | 18 | 748 | 51% | 3494 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3497 | 19 | 676 | 51% | 3488 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3348 | 20 | 680 | 55% | 3221 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |