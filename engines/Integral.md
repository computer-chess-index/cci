# Engine: Integral

Author: Aron Petkovski

Home: https://github.com/aronpetko/integral

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3457<sub>(+102) | 3659<sub>(+94) | 3691<sub>(+70) |  |
| 7.0 | 2025-02-14 | 3355 | 3565 | 3621 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3445<sub>(+81) | 3586<sub>(+27) | 3615<sub>(+132) |  |
| 7.0 | 2025-02-14 | 3364 | 3559 | 3483 |  |
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

Generated: 2026-11-23 05:39:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3355, 3457]
  line "E1: LTC (60.0+0.60s)" [3565, 3659]
  line "E1: VLTC (2m24s+1.12s)" [3621, 3691]
  line "P1: STC (8.0+0.08s)" [3364, 3445]
  line "P1: LTC (60.0+0.60s)" [3559, 3586]
  line "P1: VLTC (2m24s+1.12s)" [3483, 3615]
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
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3691 | 24 | 386 | 51% | 3684 | 91% |
|  |  | T1 | 3578 | 34 | 190 | 51% | 3573 | 95% |
|  |  | P1 | 3615 | 33 | 210 | 51% | 3609 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3592 | 39 | 148 | 51% | 3583 | 91% |
|  |  | P1 | 3586 | 36 | 174 | 50% | 3587 | 86% |
|  |  | E1 | 3659 | 30 | 256 | 51% | 3654 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3475 | 27 | 316 | 52% | 3463 | 82% |
|  |  | P1 | 3445 | 30 | 266 | 47% | 3464 | 79% |
|  |  | E1 | 3457 | 25 | 394 | 46% | 3483 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3483 | 81 | 40 | 64% | 3299 | 73% |
|  |  | E1 | 3621 | 62 | 80 | 64% | 3380 | 59% |
|  |  | T1 | 3552 | 15 | 1010 | 50% | 3552 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3565 | 64 | 60 | 54% | 3522 | 75% |
|  |  | T1 | 3532 | 15 | 1012 | 50% | 3530 | 85% |
|  |  | P1 | 3559 | 117 | 24 | 63% | 3306 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3355 | 58 | 82 | 52% | 3313 | 61% |
|  |  | T1 | 3380 | 15 | 1158 | 50% | 3378 | 70% |
|  |  | P1 | 3364 | 84 | 42 | 64% | 3182 | 57% |