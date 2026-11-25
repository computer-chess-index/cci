# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3286<sub>(+34) | 3590<sub>(+99) | 3636<sub>(+107) |  |
| 2.0 | 2025-05-21 | 3252 | 3491 | 3529 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3347<sub>(+46) | 3541<sub>(+50) | 3580<sub>(+83) |  |
| 2.0 | 2025-05-21 | 3301 | 3491 | 3497 |  |
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

Generated: 2026-11-25 05:41:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3252, 3286]
  line "E1: LTC (60.0+0.60s)" [3491, 3590]
  line "E1: VLTC (2m24s+1.12s)" [3529, 3636]
  line "P1: STC (8.0+0.08s)" [3301, 3347]
  line "P1: LTC (60.0+0.60s)" [3491, 3541]
  line "P1: VLTC (2m24s+1.12s)" [3497, 3580]
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
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3636 | 30 | 258 | 50% | 3637 | 86% |
|  |  | T1 | 3560 | 21 | 500 | 51% | 3553 | 89% |
|  |  | P1 | 3580 | 37 | 168 | 51% | 3572 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3541 | 33 | 204 | 51% | 3532 | 87% |
|  |  | T1 | 3530 | 22 | 498 | 50% | 3528 | 86% |
|  |  | E1 | 3590 | 27 | 310 | 48% | 3602 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3347 | 31 | 262 | 50% | 3347 | 72% |
|  |  | T1 | 3359 | 19 | 690 | 51% | 3355 | 70% |
|  |  | E1 | 3286 | 24 | 450 | 47% | 3308 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3529 | 60 | 80 | 56% | 3402 | 63% |
|  |  | T1 | 3525 | 26 | 340 | 50% | 3521 | 84% |
|  |  | P1 | 3497 | 88 | 52 | 78% | 2951 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3491 | 92 | 32 | 61% | 3371 | 66% |
|  |  | E1 | 3491 | 52 | 96 | 60% | 3390 | 71% |
|  |  | T1 | 3484 | 26 | 352 | 50% | 3480 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3301 | 70 | 52 | 55% | 3262 | 71% |
|  |  | E1 | 3252 | 49 | 114 | 42% | 3316 | 58% |
|  |  | T1 | 3308 | 25 | 414 | 52% | 3294 | 64% |