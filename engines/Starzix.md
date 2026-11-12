# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3357<sub>(+437) | 3579<sub>(+972) | 3661<sub>(+772) |  |
| 6.0 | 2024-10-24 | 2920 | 2607 | 2889 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3521<sub>(+712) | 3698<sub>(+739) | 3733<sub>(+853) |  |
| 6.0 | 2024-10-24 | 2809 | 2959 | 2880 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3344<sub>(+9) | 3505<sub>(+8) | 3525<sub>(0) |  |
| 6.0 | 2024-10-24 | 3335<sub>(+113) | 3497<sub>(+76) | 3525<sub>(+78) |  |
| 5.0 | 2024-05-23 | 3222 | 3421 | 3447 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Starzix+<version>&body=###%20Engine%20name%0AStarzix%0A%0A###%20Version%0A6.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:42:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "6.1"]
  y-axis "Elo Rating" 2600 --> 3800
  line "E1: STC (8.0+0.08s)" [2920, 3357]
  line "E1: LTC (60.0+0.60s)" [2607, 3579]
  line "E1: VLTC (2m24s+1.12s)" [2889, 3661]
  line "P1: STC (8.0+0.08s)" [2809, 3521]
  line "P1: LTC (60.0+0.60s)" [2959, 3698]
  line "P1: VLTC (2m24s+1.12s)" [2880, 3733]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3222, 3335, 3344]
  line "T1: LTC (60.0+0.60s)" [3421, 3497, 3505]
  line "T1: VLTC (2m24s+1.12s)" [3447, 3525, 3525]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 22 | 458 | 50% | 3525 | 87% |
|  |  | P1 | 3733 | 32 | 224 | 52% | 3721 | 84% |
|  |  | E1 | 3661 | 30 | 268 | 48% | 3673 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3505 | 22 | 456 | 50% | 3505 | 86% |
|  |  | P1 | 3698 | 40 | 150 | 51% | 3692 | 81% |
|  |  | E1 | 3579 | 30 | 264 | 50% | 3576 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3521 | 29 | 312 | 52% | 3507 | 63% |
|  |  | E1 | 3357 | 25 | 412 | 48% | 3375 | 61% |
|  |  | T1 | 3344 | 20 | 620 | 50% | 3345 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2880 | 208 | 4 | 63% | 2815 | 75% |
|  |  | E1 | 2889 | 198 | 4 | 50% | 2889 | 100% |
|  |  | T1 | 3525 | 12 | 1620 | 50% | 3525 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3497 | 12 | 1600 | 50% | 3495 | 82% |
|  |  | E1 | 2607 | 152 | 8 | 38% | 2687 | 75% |
|  |  | P1 | 2959 | 192 | 6 | 83% | 2761 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3335 | 13 | 1628 | 50% | 3337 | 68% |
|  |  | E1 | 2920 | 262 | 4 | 100% | 2606 | 0% |
|  |  | P1 | 2809 | 208 | 4 | 38% | 2873 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3447 | 32 | 236 | 51% | 3441 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3421 | 32 | 240 | 48% | 3432 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3222 | 27 | 408 | 53% | 3136 | 56% |