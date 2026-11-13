# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3241<sub>(-10) | 3474<sub>(+145) | 3548<sub>(+172) |  |
| 8.1.0 | 2024-10-28 | 3251 | 3329 | 3376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3328<sub>(+122) | 3461<sub>(+263) | 3534<sub>(+356) |  |
| 8.1.0 | 2024-10-28 | 3206 | 3198 | 3178 |  |
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

Generated: 2026-11-13 05:44:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3251, 3241]
  line "E1: LTC (60.0+0.60s)" [3329, 3474]
  line "E1: VLTC (2m24s+1.12s)" [3376, 3548]
  line "P1: STC (8.0+0.08s)" [3206, 3328]
  line "P1: LTC (60.0+0.60s)" [3198, 3461]
  line "P1: VLTC (2m24s+1.12s)" [3178, 3534]
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
|  |  | P1 | 3534 | 38 | 164 | 51% | 3522 | 79% |
|  |  | E1 | 3548 | 30 | 272 | 53% | 3521 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3461 | 33 | 218 | 54% | 3437 | 78% |
|  |  | E1 | 3474 | 29 | 290 | 51% | 3470 | 72% |
|  |  | T1 | 3459 | 12 | 1776 | 51% | 3455 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3328 | 29 | 312 | 48% | 3341 | 64% |
|  |  | E1 | 3241 | 25 | 426 | 46% | 3272 | 61% |
|  |  | T1 | 3290 | 12 | 1840 | 49% | 3294 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3376 | 140 | 12 | 67% | 3258 | 67% |
|  |  | T1 | 3484 | 32 | 228 | 46% | 3511 | 82% |
|  |  | P1 | 3178 | 201 | 16 | 94% | 2421 | 13% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3453 | 38 | 172 | 51% | 3445 | 77% |
|  |  | P1 | 3198 | 150 | 14 | 61% | 3027 | 50% |
|  |  | E1 | 3329 | 144 | 14 | 68% | 3183 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3278 | 36 | 208 | 48% | 3293 | 58% |
|  |  | P1 | 3206 | 144 | 12 | 58% | 3131 | 50% |
|  |  | E1 | 3251 | 184 | 8 | 56% | 3202 | 13% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3484 | 33 | 228 | 49% | 3491 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3434 | 36 | 192 | 51% | 3426 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3252 | 29 | 308 | 50% | 3252 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |