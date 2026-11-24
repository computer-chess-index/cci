# Engine: Integral

Author: Aron Petkovski

Home: https://github.com/aronpetko/integral

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3457<sub>(+87) | 3659<sub>(+94) | 3691<sub>(+65) |  |
| 7.0 | 2025-02-14 | 3370 | 3565 | 3626 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3447<sub>(+79) | 3588<sub>(+27) | 3618<sub>(+132) |  |
| 7.0 | 2025-02-14 | 3368 | 3561 | 3486 |  |
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

Generated: 2026-11-24 05:39:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3370, 3457]
  line "E1: LTC (60.0+0.60s)" [3565, 3659]
  line "E1: VLTC (2m24s+1.12s)" [3626, 3691]
  line "P1: STC (8.0+0.08s)" [3368, 3447]
  line "P1: LTC (60.0+0.60s)" [3561, 3588]
  line "P1: VLTC (2m24s+1.12s)" [3486, 3618]
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
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3578 | 34 | 190 | 51% | 3573 | 95% |
|  |  | P1 | 3618 | 33 | 210 | 51% | 3611 | 86% |
|  |  | E1 | 3691 | 22 | 446 | 51% | 3686 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3588 | 36 | 174 | 50% | 3590 | 86% |
|  |  | E1 | 3659 | 30 | 260 | 51% | 3653 | 86% |
|  |  | T1 | 3592 | 39 | 148 | 51% | 3583 | 91% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3447 | 30 | 266 | 47% | 3467 | 79% |
|  |  | E1 | 3457 | 25 | 394 | 46% | 3482 | 72% |
|  |  | T1 | 3475 | 27 | 316 | 52% | 3463 | 82% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3626 | 58 | 88 | 64% | 3403 | 59% |
|  |  | T1 | 3552 | 15 | 1010 | 50% | 3552 | 87% |
|  |  | P1 | 3486 | 81 | 40 | 64% | 3302 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3532 | 15 | 1012 | 50% | 3530 | 85% |
|  |  | P1 | 3561 | 117 | 24 | 63% | 3309 | 50% |
|  |  | E1 | 3565 | 62 | 64 | 54% | 3525 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3368 | 84 | 42 | 64% | 3186 | 57% |
|  |  | E1 | 3370 | 52 | 100 | 54% | 3320 | 64% |
|  |  | T1 | 3380 | 15 | 1158 | 50% | 3378 | 70% |