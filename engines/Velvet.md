# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3255<sub>(-13) | 3482<sub>(+37) | 3559<sub>(+40) |  |
| 8.1.0 | 2024-10-28 | 3268 | 3445 | 3519 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3302<sub>(+26) | 3447<sub>(-18) | 3514<sub>(+62) |  |
| 8.1.0 | 2024-10-28 | 3276 | 3465 | 3452 |  |
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

Generated: 2026-11-28 05:44:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "E1: STC (8.0+0.08s)" [3268, 3255]
  line "E1: LTC (60.0+0.60s)" [3445, 3482]
  line "E1: VLTC (2m24s+1.12s)" [3519, 3559]
  line "P1: STC (8.0+0.08s)" [3276, 3302]
  line "P1: LTC (60.0+0.60s)" [3465, 3447]
  line "P1: VLTC (2m24s+1.12s)" [3452, 3514]
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
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3559 | 30 | 280 | 53% | 3533 | 77% |
|  |  | T1 | 3483 | 12 | 1712 | 50% | 3483 | 79% |
|  |  | P1 | 3514 | 38 | 168 | 51% | 3502 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3482 | 28 | 322 | 50% | 3482 | 73% |
|  |  | T1 | 3459 | 12 | 1776 | 51% | 3455 | 77% |
|  |  | P1 | 3447 | 31 | 254 | 54% | 3418 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3290 | 12 | 1840 | 49% | 3294 | 65% |
|  |  | P1 | 3302 | 28 | 336 | 48% | 3320 | 64% |
|  |  | E1 | 3255 | 24 | 482 | 46% | 3287 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3452 | 131 | 28 | 79% | 2853 | 29% |
|  |  | E1 | 3519 | 54 | 87 | 60% | 3451 | 71% |
|  |  | T1 | 3484 | 32 | 228 | 46% | 3511 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3445 | 38 | 178 | 56% | 3395 | 66% |
|  |  | T1 | 3453 | 38 | 172 | 51% | 3445 | 77% |
|  |  | P1 | 3465 | 82 | 46 | 65% | 3293 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3268 | 43 | 148 | 47% | 3293 | 55% |
|  |  | T1 | 3278 | 36 | 208 | 48% | 3293 | 58% |
|  |  | P1 | 3276 | 60 | 72 | 51% | 3264 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3484 | 33 | 228 | 49% | 3491 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3434 | 36 | 192 | 51% | 3426 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3252 | 29 | 308 | 50% | 3252 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |