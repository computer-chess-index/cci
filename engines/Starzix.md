# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3316<sub>(-28) | 3529<sub>(-24) | 3610<sub>(+74) |  |
| 6.0 | 2024-10-24 | 3344 | 3553 | 3536 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3314<sub>(+52) | 3492<sub>(+39) | 3525<sub>(-15) |  |
| 6.0 | 2024-10-24 | 3262 | 3453 | 3540 |  |
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

Generated: 2026-11-22 05:43:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3344, 3316]
  line "E1: LTC (60.0+0.60s)" [3553, 3529]
  line "E1: VLTC (2m24s+1.12s)" [3536, 3610]
  line "P1: STC (8.0+0.08s)" [3262, 3314]
  line "P1: LTC (60.0+0.60s)" [3453, 3492]
  line "P1: VLTC (2m24s+1.12s)" [3540, 3525]
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
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3525 | 32 | 228 | 52% | 3515 | 84% |
|  |  | E1 | 3610 | 29 | 288 | 48% | 3623 | 79% |
|  |  | T1 | 3525 | 22 | 458 | 50% | 3525 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3529 | 29 | 280 | 50% | 3528 | 79% |
|  |  | T1 | 3505 | 22 | 456 | 50% | 3505 | 86% |
|  |  | P1 | 3492 | 39 | 154 | 51% | 3484 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3316 | 24 | 464 | 48% | 3328 | 62% |
|  |  | T1 | 3344 | 20 | 620 | 50% | 3345 | 70% |
|  |  | P1 | 3314 | 28 | 336 | 52% | 3301 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3540 | 130 | 20 | 78% | 3232 | 45% |
|  |  | E1 | 3536 | 65 | 60 | 61% | 3428 | 75% |
|  |  | T1 | 3525 | 12 | 1620 | 50% | 3525 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3453 | 103 | 38 | 76% | 3139 | 37% |
|  |  | E1 | 3553 | 62 | 72 | 63% | 3406 | 63% |
|  |  | T1 | 3497 | 12 | 1600 | 50% | 3495 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3344 | 60 | 76 | 56% | 3274 | 62% |
|  |  | T1 | 3335 | 13 | 1628 | 50% | 3337 | 68% |
|  |  | P1 | 3262 | 65 | 62 | 52% | 3229 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3447 | 32 | 236 | 51% | 3441 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3421 | 32 | 240 | 48% | 3432 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3222 | 27 | 408 | 53% | 3136 | 56% |