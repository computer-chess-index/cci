# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3313<sub>(-28) | 3528<sub>(-24) | 3607<sub>(+74) |  |
| 6.0 | 2024-10-24 | 3341 | 3552 | 3533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3322<sub>(+54) | 3498<sub>(+38) | 3532<sub>(-14) |  |
| 6.0 | 2024-10-24 | 3268 | 3460 | 3546 |  |
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

Generated: 2026-11-23 05:43:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3341, 3313]
  line "E1: LTC (60.0+0.60s)" [3552, 3528]
  line "E1: VLTC (2m24s+1.12s)" [3533, 3607]
  line "P1: STC (8.0+0.08s)" [3268, 3322]
  line "P1: LTC (60.0+0.60s)" [3460, 3498]
  line "P1: VLTC (2m24s+1.12s)" [3546, 3532]
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
|  |  | P1 | 3532 | 32 | 228 | 52% | 3522 | 84% |
|  |  | E1 | 3607 | 29 | 288 | 48% | 3621 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3498 | 39 | 154 | 51% | 3491 | 81% |
|  |  | E1 | 3528 | 29 | 280 | 50% | 3525 | 79% |
|  |  | T1 | 3505 | 22 | 456 | 50% | 3505 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3322 | 28 | 336 | 52% | 3309 | 63% |
|  |  | E1 | 3313 | 24 | 468 | 48% | 3325 | 62% |
|  |  | T1 | 3344 | 20 | 620 | 50% | 3345 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 12 | 1620 | 50% | 3525 | 85% |
|  |  | P1 | 3546 | 130 | 20 | 78% | 3239 | 45% |
|  |  | E1 | 3533 | 65 | 60 | 61% | 3425 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3460 | 103 | 38 | 76% | 3146 | 37% |
|  |  | E1 | 3552 | 62 | 72 | 63% | 3405 | 63% |
|  |  | T1 | 3497 | 12 | 1600 | 50% | 3495 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3268 | 65 | 62 | 52% | 3237 | 66% |
|  |  | E1 | 3341 | 60 | 76 | 56% | 3272 | 62% |
|  |  | T1 | 3335 | 13 | 1628 | 50% | 3337 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3447 | 32 | 236 | 51% | 3441 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3421 | 32 | 240 | 48% | 3432 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3222 | 27 | 408 | 53% | 3136 | 56% |