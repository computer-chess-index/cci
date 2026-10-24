# Engine: Coda

Author: Adam Twiss

Home: https://github.com/adamtwiss/coda

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.5 | 2026-10-21 | 3565<sub>(+13) | 3762<sub>(+37) | 3764<sub>(+16) |  |
| 0.9.4 | 2026-08-22 | 3552 | 3725 | 3748 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.5 | 2026-10-21 | 3672<sub>(+49) | 3783<sub>(+27) | 3827<sub>(+39) |  |
| 0.9.4 | 2026-08-22 | 3623 | 3756 | 3788 |  |
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

Generated: 2026-10-24 04:37:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.4", "0.9.5"]
  y-axis "Elo Rating" 3500 --> 3900
  line "E1: STC (8.0+0.08s)" [3552, 3565]
  line "E1: LTC (60.0+0.60s)" [3725, 3762]
  line "E1: VLTC (2m24s+1.12s)" [3748, 3764]
  line "P1: STC (8.0+0.08s)" [3623, 3672]
  line "P1: LTC (60.0+0.60s)" [3756, 3783]
  line "P1: VLTC (2m24s+1.12s)" [3788, 3827]
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
| 0.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3827 | 63 | 56 | 53% | 3810 | 91% |
|  |  | E1 | 3764 | 47 | 104 | 52% | 3752 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3762 | 37 | 168 | 54% | 3738 | 86% |
|  |  | P1 | 3783 | 59 | 62 | 52% | 3772 | 94% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3565 | 40 | 152 | 52% | 3555 | 80% |
|  |  | P1 | 3672 | 36 | 176 | 46% | 3696 | 82% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3592 | 37 | 168 | 51% | 3584 | 90% |
|  |  | P1 | 3788 | 45 | 108 | 53% | 3768 | 92% |
|  |  | E1 | 3748 | 32 | 212 | 52% | 3734 | 92% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3568 | 31 | 244 | 51% | 3564 | 83% |
|  |  | P1 | 3756 | 40 | 142 | 51% | 3746 | 92% |
|  |  | E1 | 3725 | 36 | 180 | 52% | 3711 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3494 | 27 | 318 | 51% | 3488 | 85% |
|  |  | P1 | 3623 | 35 | 192 | 48% | 3638 | 84% |
|  |  | E1 | 3552 | 28 | 316 | 47% | 3571 | 74% |
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