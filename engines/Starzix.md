# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3312<sub>(-29) | 3525<sub>(-26) | 3609<sub>(+76) |  |
| 6.0 | 2024-10-24 | 3341 | 3551 | 3533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3310<sub>(+66) | 3491<sub>(+31) | 3528<sub>(-5) |  |
| 6.0 | 2024-10-24 | 3244 | 3460 | 3533 |  |
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

Generated: 2026-11-18 05:43:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3341, 3312]
  line "E1: LTC (60.0+0.60s)" [3551, 3525]
  line "E1: VLTC (2m24s+1.12s)" [3533, 3609]
  line "P1: STC (8.0+0.08s)" [3244, 3310]
  line "P1: LTC (60.0+0.60s)" [3460, 3491]
  line "P1: VLTC (2m24s+1.12s)" [3533, 3528]
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
|  |  | P1 | 3528 | 32 | 224 | 52% | 3515 | 84% |
|  |  | E1 | 3609 | 29 | 280 | 48% | 3622 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3491 | 40 | 150 | 51% | 3486 | 81% |
|  |  | E1 | 3525 | 30 | 276 | 50% | 3524 | 78% |
|  |  | T1 | 3505 | 22 | 456 | 50% | 3505 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3310 | 29 | 324 | 52% | 3297 | 62% |
|  |  | E1 | 3312 | 24 | 456 | 48% | 3325 | 62% |
|  |  | T1 | 3344 | 20 | 620 | 50% | 3345 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 12 | 1620 | 50% | 3525 | 85% |
|  |  | P1 | 3533 | 130 | 20 | 78% | 3228 | 45% |
|  |  | E1 | 3533 | 65 | 60 | 61% | 3425 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3460 | 126 | 30 | 85% | 3044 | 30% |
|  |  | E1 | 3551 | 62 | 72 | 63% | 3403 | 63% |
|  |  | T1 | 3497 | 12 | 1600 | 50% | 3495 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3244 | 72 | 50 | 52% | 3212 | 68% |
|  |  | E1 | 3341 | 60 | 76 | 56% | 3272 | 62% |
|  |  | T1 | 3335 | 13 | 1628 | 50% | 3337 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3447 | 32 | 236 | 51% | 3441 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3421 | 32 | 240 | 48% | 3432 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3222 | 27 | 408 | 53% | 3136 | 56% |