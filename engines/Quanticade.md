# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3285<sub>(-2) | 3590<sub>(+119) | 3637<sub>(+108) |  |
| 2.0 | 2025-05-21 | 3287 | 3471 | 3529 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3335<sub>(+50) | 3532<sub>(+83) | 3571<sub>(+101) |  |
| 2.0 | 2025-05-21 | 3285 | 3449 | 3470 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3359<sub>(+51) | 3530<sub>(+46) | 3560<sub>(+35) |  |
| 2.0 | 2025-05-21 | 3308 | 3484 | 3525 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quanticade+<version>&body=###%20Engine%20name%0AQuanticade%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:41:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3287, 3285]
  line "E1: LTC (60.0+0.60s)" [3471, 3590]
  line "E1: VLTC (2m24s+1.12s)" [3529, 3637]
  line "P1: STC (8.0+0.08s)" [3285, 3335]
  line "P1: LTC (60.0+0.60s)" [3449, 3532]
  line "P1: VLTC (2m24s+1.12s)" [3470, 3571]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3308, 3359]
  line "T1: LTC (60.0+0.60s)" [3484, 3530]
  line "T1: VLTC (2m24s+1.12s)" [3525, 3560]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3571 | 37 | 168 | 51% | 3561 | 87% |
|  |  | E1 | 3637 | 31 | 246 | 50% | 3637 | 86% |
|  |  | T1 | 3560 | 21 | 500 | 51% | 3553 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3530 | 22 | 498 | 50% | 3528 | 86% |
|  |  | E1 | 3590 | 28 | 302 | 48% | 3603 | 87% |
|  |  | P1 | 3532 | 33 | 204 | 51% | 3521 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3359 | 19 | 690 | 51% | 3355 | 70% |
|  |  | E1 | 3285 | 25 | 442 | 47% | 3306 | 63% |
|  |  | P1 | 3335 | 31 | 258 | 50% | 3335 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3470 | 103 | 44 | 82% | 2843 | 36% |
|  |  | E1 | 3529 | 65 | 68 | 58% | 3375 | 60% |
|  |  | T1 | 3525 | 26 | 340 | 50% | 3521 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3449 | 98 | 28 | 61% | 3329 | 64% |
|  |  | E1 | 3471 | 60 | 72 | 61% | 3359 | 69% |
|  |  | T1 | 3484 | 26 | 352 | 50% | 3480 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3287 | 61 | 74 | 44% | 3336 | 55% |
|  |  | T1 | 3308 | 25 | 414 | 52% | 3294 | 64% |
|  |  | P1 | 3285 | 73 | 48 | 55% | 3244 | 69% |