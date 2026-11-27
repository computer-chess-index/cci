# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3309<sub>(-28) | 3526<sub>(-22) | 3600<sub>(+58) |  |
| 6.0 | 2024-10-24 | 3337 | 3548 | 3542 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3333<sub>(+35) | 3509<sub>(+38) | 3542<sub>(-19) |  |
| 6.0 | 2024-10-24 | 3298 | 3471 | 3561 |  |
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

Generated: 2026-11-27 05:43:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "E1: STC (8.0+0.08s)" [3337, 3309]
  line "E1: LTC (60.0+0.60s)" [3548, 3526]
  line "E1: VLTC (2m24s+1.12s)" [3542, 3600]
  line "P1: STC (8.0+0.08s)" [3298, 3333]
  line "P1: LTC (60.0+0.60s)" [3471, 3509]
  line "P1: VLTC (2m24s+1.12s)" [3561, 3542]
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
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3600 | 29 | 288 | 48% | 3614 | 79% |
|  |  | T1 | 3525 | 22 | 458 | 50% | 3525 | 87% |
|  |  | P1 | 3542 | 32 | 228 | 52% | 3533 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3505 | 22 | 456 | 50% | 3505 | 86% |
|  |  | P1 | 3509 | 39 | 154 | 51% | 3501 | 81% |
|  |  | E1 | 3526 | 29 | 296 | 51% | 3519 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3344 | 20 | 620 | 50% | 3345 | 70% |
|  |  | P1 | 3333 | 28 | 344 | 51% | 3320 | 63% |
|  |  | E1 | 3309 | 24 | 480 | 48% | 3322 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3542 | 58 | 76 | 60% | 3448 | 72% |
|  |  | T1 | 3525 | 12 | 1620 | 50% | 3525 | 85% |
|  |  | P1 | 3561 | 131 | 20 | 78% | 3252 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3497 | 12 | 1600 | 50% | 3495 | 82% |
|  |  | P1 | 3471 | 94 | 42 | 74% | 3186 | 43% |
|  |  | E1 | 3548 | 53 | 96 | 60% | 3436 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3335 | 13 | 1628 | 50% | 3337 | 68% |
|  |  | P1 | 3298 | 58 | 78 | 54% | 3259 | 64% |
|  |  | E1 | 3337 | 47 | 120 | 54% | 3294 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3447 | 32 | 236 | 51% | 3441 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3421 | 32 | 240 | 48% | 3432 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3222 | 27 | 408 | 53% | 3136 | 56% |