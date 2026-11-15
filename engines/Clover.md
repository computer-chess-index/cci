# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3395<sub>(+85) | 3602<sub>(+57) | 3650<sub>(+135) |  |
| 8.2.5 | 2025-07-14 | 3310 | 3545 | 3515 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3356<sub>(+92) | 3528<sub>(-41) | 3559<sub>(+219) |  |
| 8.2.5 | 2025-07-14 | 3264 | 3569 | 3340 |  |
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

Generated: 2026-11-15 05:37:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.2.5", "9.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3310, 3395]
  line "E1: LTC (60.0+0.60s)" [3545, 3602]
  line "E1: VLTC (2m24s+1.12s)" [3515, 3650]
  line "P1: STC (8.0+0.08s)" [3264, 3356]
  line "P1: LTC (60.0+0.60s)" [3569, 3528]
  line "P1: VLTC (2m24s+1.12s)" [3340, 3559]
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
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3559 | 37 | 172 | 54% | 3532 | 83% |
|  |  | E1 | 3650 | 30 | 256 | 51% | 3641 | 85% |
|  |  | T1 | 3557 | 21 | 506 | 50% | 3560 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3548 | 21 | 524 | 50% | 3548 | 89% |
|  |  | E1 | 3602 | 32 | 228 | 49% | 3607 | 82% |
|  |  | P1 | 3528 | 33 | 208 | 53% | 3505 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3399 | 18 | 736 | 51% | 3394 | 75% |
|  |  | E1 | 3395 | 24 | 420 | 48% | 3406 | 71% |
|  |  | P1 | 3356 | 32 | 248 | 51% | 3353 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3515 | 92 | 36 | 69% | 3240 | 61% |
|  |  | T1 | 3530 | 32 | 220 | 51% | 3526 | 91% |
|  |  | P1 | 3340 | 131 | 24 | 79% | 2862 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3545 | 95 | 36 | 71% | 3294 | 53% |
|  |  | T1 | 3502 | 32 | 236 | 49% | 3509 | 81% |
|  |  | P1 | 3569 | 199 | 16 | 94% | 3073 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3264 | 122 | 24 | 71% | 3023 | 33% |
|  |  | E1 | 3310 | 80 | 44 | 67% | 3166 | 57% |
|  |  | T1 | 3351 | 31 | 254 | 49% | 3359 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3526 | 14 | 1160 | 50% | 3524 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3486 | 14 | 1176 | 50% | 3487 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3353 | 15 | 1124 | 51% | 3349 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3526 | 18 | 748 | 51% | 3494 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3497 | 19 | 676 | 51% | 3488 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3348 | 20 | 680 | 55% | 3221 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |