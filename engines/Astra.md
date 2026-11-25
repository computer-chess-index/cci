# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3383<sub>(+78) | 3605<sub>(+53) | 3661<sub>(+55) |  |
| 6.1.1 | 2025-07-21 | 3305 | 3552 | 3606 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3401<sub>(+80) | 3565<sub>(+101) | 3614<sub>(+74) |  |
| 6.1.1 | 2025-07-21 | 3321 | 3464 | 3540 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3405<sub>(+111) | 3546<sub>(+59) | 3559<sub>(+34) |  |
| 6.1.1 | 2025-07-21 | 3294 | 3487 | 3525 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Astra+<version>&body=###%20Engine%20name%0AAstra%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:36:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3305, 3383]
  line "E1: LTC (60.0+0.60s)" [3552, 3605]
  line "E1: VLTC (2m24s+1.12s)" [3606, 3661]
  line "P1: STC (8.0+0.08s)" [3321, 3401]
  line "P1: LTC (60.0+0.60s)" [3464, 3565]
  line "P1: VLTC (2m24s+1.12s)" [3540, 3614]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3294, 3405]
  line "T1: LTC (60.0+0.60s)" [3487, 3546]
  line "T1: VLTC (2m24s+1.12s)" [3525, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3614 | 34 | 204 | 50% | 3588 | 82% |
|  |  | E1 | 3661 | 30 | 284 | 57% | 3536 | 73% |
|  |  | T1 | 3559 | 27 | 312 | 49% | 3567 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3565 | 38 | 174 | 58% | 3479 | 72% |
|  |  | E1 | 3605 | 30 | 296 | 58% | 3444 | 71% |
|  |  | T1 | 3546 | 28 | 294 | 50% | 3545 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3383 | 23 | 500 | 48% | 3399 | 67% |
|  |  | T1 | 3405 | 25 | 398 | 51% | 3401 | 75% |
|  |  | P1 | 3401 | 30 | 268 | 51% | 3397 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 23 | 420 | 52% | 3509 | 87% |
|  |  | P1 | 3540 | 130 | 20 | 75% | 3245 | 50% |
|  |  | E1 | 3606 | 57 | 84 | 55% | 3497 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 25 | 400 | 51% | 3475 | 81% |
|  |  | P1 | 3464 | 91 | 40 | 73% | 3231 | 50% |
|  |  | E1 | 3552 | 57 | 86 | 56% | 3456 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3294 | 23 | 514 | 51% | 3278 | 67% |
|  |  | P1 | 3321 | 62 | 68 | 51% | 3298 | 66% |
|  |  | E1 | 3305 | 48 | 122 | 51% | 3233 | 62% |