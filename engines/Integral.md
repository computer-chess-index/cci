# Engine: Integral

Author: Aron Petkovski

Home: https://github.com/aronpetko/integral

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3449<sub>(+73) | 3657<sub>(+106) | 3687<sub>(+58) |  |
| 7.0 | 2025-02-14 | 3376 | 3551 | 3629 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3430<sub>(+141) | 3572<sub>(+27) | 3599<sub>(+242) |  |
| 7.0 | 2025-02-14 | 3289 | 3545 | 3357 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3475<sub>(+95) | 3592<sub>(+60) | 3578<sub>(+26) |  |
| 7.0 | 2025-02-14 | 3380 | 3532 | 3552 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Integral+<version>&body=###%20Engine%20name%0AIntegral%0A%0A###%20Version%0A8.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:39:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3376, 3449]
  line "E1: LTC (60.0+0.60s)" [3551, 3657]
  line "E1: VLTC (2m24s+1.12s)" [3629, 3687]
  line "P1: STC (8.0+0.08s)" [3289, 3430]
  line "P1: LTC (60.0+0.60s)" [3545, 3572]
  line "P1: VLTC (2m24s+1.12s)" [3357, 3599]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3380, 3475]
  line "T1: LTC (60.0+0.60s)" [3532, 3592]
  line "T1: VLTC (2m24s+1.12s)" [3552, 3578]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3599 | 36 | 178 | 51% | 3592 | 86% |
|  |  | E1 | 3687 | 26 | 336 | 51% | 3680 | 90% |
|  |  | T1 | 3578 | 34 | 190 | 51% | 3573 | 95% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3657 | 31 | 232 | 50% | 3653 | 87% |
|  |  | T1 | 3592 | 39 | 148 | 51% | 3583 | 91% |
|  |  | P1 | 3572 | 37 | 164 | 50% | 3575 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3449 | 26 | 378 | 46% | 3478 | 72% |
|  |  | T1 | 3475 | 27 | 316 | 52% | 3463 | 82% |
|  |  | P1 | 3430 | 31 | 250 | 47% | 3449 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3552 | 15 | 1010 | 50% | 3552 | 87% |
|  |  | P1 | 3357 | 135 | 16 | 72% | 3039 | 56% |
|  |  | E1 | 3629 | 108 | 40 | 83% | 3128 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3545 | 211 | 12 | 79% | 3036 | 25% |
|  |  | E1 | 3551 | 89 | 32 | 59% | 3464 | 69% |
|  |  | T1 | 3532 | 15 | 1012 | 50% | 3530 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3289 | 106 | 28 | 70% | 3036 | 46% |
|  |  | E1 | 3376 | 81 | 44 | 59% | 3263 | 55% |
|  |  | T1 | 3380 | 15 | 1158 | 50% | 3378 | 70% |