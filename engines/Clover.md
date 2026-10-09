# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3329 | 3530 | 3599 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3572 | 3730 | 3775 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-09 14:10:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3348, 3353, 3351, 3399]
  line "STC (8.0+0.08s)" [3348, 3353, 3351, 3399]
  line "LTC (60.0+0.60s)" [3497, 3486, 3502, 3548]
  line "" [3526, 3526, 3530, 3557]
  line "VLTC (2m24s+1.12s)" [3526, 3526, 3530, 3557]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3775 | 43 | 128 | 55% | 3738 | 82% |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3599 | 45 | 116 | 54% | 3557 | 81% |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 21 | 506 | 50% | 3560 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 45 | 116 | 50% | 3530 | 84% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 21 | 524 | 50% | 3548 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3730 | 41 | 136 | 54% | 3706 | 84% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3329 | 30 | 272 | 47% | 3347 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3399 | 18 | 736 | 51% | 3394 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3572 | 36 | 192 | 51% | 3569 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 32 | 220 | 51% | 3526 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 32 | 236 | 49% | 3509 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3351 | 31 | 254 | 49% | 3359 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 14 | 1160 | 50% | 3524 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 14 | 1176 | 50% | 3487 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3353 | 15 | 1124 | 51% | 3349 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 18 | 748 | 51% | 3494 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 19 | 676 | 51% | 3488 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3348 | 20 | 680 | 55% | 3221 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |