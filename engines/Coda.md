# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.5 | 2026-10-21 | 3519<sub>(+24) | 3688<sub>(+20) | 3699<sub>(+9) |  |
| 0.9.4 | 2026-08-22 | 3495 | 3668 | 3690 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.5 | 2026-10-21 | 3521<sub>(+50) | 3638<sub>(+29) | 3659<sub>(+26) |  |
| 0.9.4 | 2026-08-22 | 3471 | 3609 | 3633 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.4 | 2026-08-22 | 3494<sub>(+53) | 3568<sub>(-3) | 3592<sub>(-11) |  |
| 0.9.3 | 2026-07-26 | 3441<sub>(-4) | 3571<sub>(-9) | 3603<sub>(+24) |  |
| 0.9.2 | 2026-07-16 | 3445<sub>(+235) | 3580<sub>(+164) | 3579<sub>(+95) |  |
| 0.9.1 | 2026-07-14 | 3210 | 3416 | 3484 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coda+<version>&body=###%20Engine%20name%0ACoda%0A%0A###%20Version%0A0.9.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:37:33

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.4", "0.9.5"]
  y-axis "Elo Rating" 3400 --> 3700
  line "E1: STC (8.0+0.08s)" [3495, 3519]
  line "E1: LTC (60.0+0.60s)" [3668, 3688]
  line "E1: VLTC (2m24s+1.12s)" [3690, 3699]
  line "P1: STC (8.0+0.08s)" [3471, 3521]
  line "P1: LTC (60.0+0.60s)" [3609, 3638]
  line "P1: VLTC (2m24s+1.12s)" [3633, 3659]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.1", "0.9.2", "0.9.3", "0.9.4"]
  y-axis "Elo Rating" 3200 --> 3700
  line "T1: STC (8.0+0.08s)" [3210, 3445, 3441, 3494]
  line "T1: LTC (60.0+0.60s)" [3416, 3580, 3571, 3568]
  line "T1: VLTC (2m24s+1.12s)" [3484, 3579, 3603, 3592]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3659 | 43 | 120 | 51% | 3652 | 92% |
|  |  | E1 | 3699 | 22 | 456 | 50% | 3699 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3638 | 42 | 126 | 51% | 3633 | 92% |
|  |  | E1 | 3688 | 24 | 384 | 50% | 3690 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3521 | 33 | 216 | 47% | 3541 | 84% |
|  |  | E1 | 3519 | 30 | 268 | 51% | 3511 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3633 | 44 | 116 | 53% | 3617 | 91% |
|  |  | E1 | 3690 | 32 | 216 | 52% | 3676 | 92% |
|  |  | T1 | 3592 | 37 | 168 | 51% | 3584 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3609 | 38 | 154 | 52% | 3598 | 92% |
|  |  | E1 | 3668 | 34 | 200 | 52% | 3654 | 87% |
|  |  | T1 | 3568 | 31 | 244 | 51% | 3564 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3495 | 27 | 328 | 47% | 3515 | 74% |
|  |  | T1 | 3494 | 27 | 318 | 51% | 3488 | 85% |
|  |  | P1 | 3471 | 34 | 196 | 48% | 3484 | 84% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3603 | 43 | 124 | 53% | 3584 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3571 | 32 | 228 | 51% | 3563 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3441 | 30 | 276 | 50% | 3440 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3579 | 32 | 214 | 51% | 3572 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3580 | 36 | 178 | 50% | 3579 | 89% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3445 | 27 | 328 | 48% | 3459 | 77% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3484 | 39 | 166 | 55% | 3434 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3416 | 42 | 152 | 55% | 3355 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3210 | 41 | 172 | 52% | 3177 | 53% |