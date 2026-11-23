# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3383<sub>(+63) | 3603<sub>(+59) | 3661<sub>(+61) |  |
| 6.1.1 | 2025-07-21 | 3320 | 3544 | 3600 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3389<sub>(+57) | 3555<sub>(+103) | 3603<sub>(+75) |  |
| 6.1.1 | 2025-07-21 | 3332 | 3452 | 3528 |  |
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

Generated: 2026-11-23 05:36:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3320, 3383]
  line "E1: LTC (60.0+0.60s)" [3544, 3603]
  line "E1: VLTC (2m24s+1.12s)" [3600, 3661]
  line "P1: STC (8.0+0.08s)" [3332, 3389]
  line "P1: LTC (60.0+0.60s)" [3452, 3555]
  line "P1: VLTC (2m24s+1.12s)" [3528, 3603]
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
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3559 | 27 | 312 | 49% | 3567 | 89% |
|  |  | P1 | 3603 | 34 | 204 | 50% | 3576 | 82% |
|  |  | E1 | 3661 | 31 | 280 | 57% | 3533 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3546 | 28 | 294 | 50% | 3545 | 86% |
|  |  | P1 | 3555 | 38 | 174 | 58% | 3468 | 72% |
|  |  | E1 | 3603 | 30 | 292 | 58% | 3441 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3389 | 30 | 264 | 51% | 3384 | 75% |
|  |  | E1 | 3383 | 23 | 496 | 48% | 3398 | 67% |
|  |  | T1 | 3405 | 25 | 398 | 51% | 3401 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3600 | 62 | 72 | 56% | 3478 | 64% |
|  |  | T1 | 3525 | 23 | 420 | 52% | 3509 | 87% |
|  |  | P1 | 3528 | 130 | 20 | 75% | 3232 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3544 | 62 | 74 | 57% | 3437 | 59% |
|  |  | T1 | 3487 | 25 | 400 | 51% | 3475 | 81% |
|  |  | P1 | 3452 | 99 | 36 | 75% | 3193 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3294 | 23 | 514 | 51% | 3278 | 67% |
|  |  | P1 | 3332 | 75 | 48 | 55% | 3271 | 60% |
|  |  | E1 | 3320 | 57 | 90 | 54% | 3202 | 57% |