# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3313<sub>(+537) | 3545<sub>(+857) | 3618<sub>(+420) |  |
| 8.1.0 | 2024-10-28 | 2776 | 2688 | 3198 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3495<sub>(+688) | 3629<sub>(+814) | 3702<sub>(+745) |  |
| 8.1.0 | 2024-10-28 | 2807 | 2815 | 2957 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3290<sub>(+12) | 3459<sub>(+6) | 3483<sub>(-1) |  |
| 8.1.0 | 2024-10-28 | 3278<sub>(+26) | 3453<sub>(+19) | 3484<sub>(0) |  |
| 8.0.0 | 2024-08-17 | 3252 | 3434 | 3484 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Velvet+<version>&body=###%20Engine%20name%0AVelvet%0A%0A###%20Version%0A8.1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:43:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.1.0", "8.1.1"]
  y-axis "Elo Rating" 2600 --> 3800
  line "E1: STC (8.0+0.08s)" [2776, 3313]
  line "E1: LTC (60.0+0.60s)" [2688, 3545]
  line "E1: VLTC (2m24s+1.12s)" [3198, 3618]
  line "P1: STC (8.0+0.08s)" [2807, 3495]
  line "P1: LTC (60.0+0.60s)" [2815, 3629]
  line "P1: VLTC (2m24s+1.12s)" [2957, 3702]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "T1: STC (8.0+0.08s)" [3252, 3278, 3290]
  line "T1: LTC (60.0+0.60s)" [3434, 3453, 3459]
  line "T1: VLTC (2m24s+1.12s)" [3484, 3484, 3483]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3483 | 12 | 1712 | 50% | 3483 | 79% |
|  |  | P1 | 3702 | 38 | 164 | 51% | 3690 | 79% |
|  |  | E1 | 3618 | 30 | 272 | 53% | 3592 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3629 | 33 | 218 | 54% | 3605 | 78% |
|  |  | E1 | 3545 | 29 | 290 | 51% | 3540 | 72% |
|  |  | T1 | 3459 | 12 | 1776 | 51% | 3455 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3495 | 29 | 312 | 48% | 3509 | 64% |
|  |  | E1 | 3313 | 25 | 422 | 46% | 3341 | 62% |
|  |  | T1 | 3290 | 12 | 1840 | 49% | 3294 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3198 | 246 | 4 | 88% | 2965 | 25% |
|  |  | T1 | 3484 | 32 | 228 | 46% | 3511 | 82% |
|  |  | P1 | 2957 | 194 | 8 | 88% | 2662 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3453 | 38 | 172 | 51% | 3445 | 77% |
|  |  | E1 | 2688 | 160 | 8 | 56% | 2650 | 63% |
|  |  | P1 | 2815 | 151 | 8 | 38% | 2878 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2807 | 155 | 8 | 44% | 2842 | 63% |
|  |  | T1 | 3278 | 36 | 208 | 48% | 3293 | 58% |
|  |  | E1 | 2776 | 232 | 4 | 50% | 2776 | 0% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3484 | 33 | 228 | 49% | 3491 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3434 | 36 | 192 | 51% | 3426 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3252 | 29 | 308 | 50% | 3252 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |