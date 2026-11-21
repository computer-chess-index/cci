# Engine: Integral

Author: Aron Petkovski

Home: https://github.com/aronpetko/integral

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3455<sub>(+102) | 3656<sub>(+93) | 3688<sub>(+69) |  |
| 7.0 | 2025-02-14 | 3353 | 3563 | 3619 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3441<sub>(+84) | 3579<sub>(+27) | 3606<sub>(+130) |  |
| 7.0 | 2025-02-14 | 3357 | 3552 | 3476 |  |
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

Generated: 2026-11-21 05:39:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3353, 3455]
  line "E1: LTC (60.0+0.60s)" [3563, 3656]
  line "E1: VLTC (2m24s+1.12s)" [3619, 3688]
  line "P1: STC (8.0+0.08s)" [3357, 3441]
  line "P1: LTC (60.0+0.60s)" [3552, 3579]
  line "P1: VLTC (2m24s+1.12s)" [3476, 3606]
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
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3688 | 25 | 356 | 51% | 3681 | 91% |
|  |  | T1 | 3578 | 34 | 190 | 51% | 3573 | 95% |
|  |  | P1 | 3606 | 35 | 186 | 51% | 3600 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3656 | 30 | 252 | 50% | 3653 | 87% |
|  |  | T1 | 3592 | 39 | 148 | 51% | 3583 | 91% |
|  |  | P1 | 3579 | 37 | 170 | 50% | 3582 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3455 | 25 | 390 | 46% | 3482 | 72% |
|  |  | T1 | 3475 | 27 | 316 | 52% | 3463 | 82% |
|  |  | P1 | 3441 | 31 | 258 | 47% | 3457 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3476 | 81 | 40 | 64% | 3293 | 73% |
|  |  | E1 | 3619 | 62 | 80 | 64% | 3379 | 59% |
|  |  | T1 | 3552 | 15 | 1010 | 50% | 3552 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3552 | 117 | 24 | 63% | 3299 | 50% |
|  |  | E1 | 3563 | 64 | 60 | 54% | 3519 | 75% |
|  |  | T1 | 3532 | 15 | 1012 | 50% | 3530 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3353 | 58 | 82 | 52% | 3312 | 61% |
|  |  | T1 | 3380 | 15 | 1158 | 50% | 3378 | 70% |
|  |  | P1 | 3357 | 84 | 42 | 64% | 3175 | 57% |