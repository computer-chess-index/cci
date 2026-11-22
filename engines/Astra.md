# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3386<sub>(+65) | 3607<sub>(+62) | 3663<sub>(+60) |  |
| 6.1.1 | 2025-07-21 | 3321 | 3545 | 3603 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3382<sub>(+57) | 3548<sub>(+103) | 3596<sub>(+75) |  |
| 6.1.1 | 2025-07-21 | 3325 | 3445 | 3521 |  |
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

Generated: 2026-11-22 05:36:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3321, 3386]
  line "E1: LTC (60.0+0.60s)" [3545, 3607]
  line "E1: VLTC (2m24s+1.12s)" [3603, 3663]
  line "P1: STC (8.0+0.08s)" [3325, 3382]
  line "P1: LTC (60.0+0.60s)" [3445, 3548]
  line "P1: VLTC (2m24s+1.12s)" [3521, 3596]
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
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3663 | 31 | 280 | 57% | 3536 | 73% |
|  |  | T1 | 3559 | 27 | 312 | 49% | 3567 | 89% |
|  |  | P1 | 3596 | 34 | 204 | 50% | 3571 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3607 | 31 | 288 | 58% | 3441 | 72% |
|  |  | T1 | 3546 | 28 | 294 | 50% | 3545 | 86% |
|  |  | P1 | 3548 | 38 | 174 | 58% | 3461 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3386 | 23 | 496 | 48% | 3401 | 67% |
|  |  | T1 | 3405 | 25 | 398 | 51% | 3401 | 75% |
|  |  | P1 | 3382 | 30 | 264 | 51% | 3378 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 23 | 420 | 52% | 3509 | 87% |
|  |  | P1 | 3521 | 130 | 20 | 75% | 3227 | 50% |
|  |  | E1 | 3603 | 62 | 72 | 56% | 3480 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 25 | 400 | 51% | 3475 | 81% |
|  |  | P1 | 3445 | 99 | 36 | 75% | 3187 | 44% |
|  |  | E1 | 3545 | 62 | 74 | 57% | 3440 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3294 | 23 | 514 | 51% | 3278 | 67% |
|  |  | P1 | 3325 | 75 | 48 | 55% | 3264 | 60% |
|  |  | E1 | 3321 | 57 | 90 | 54% | 3204 | 57% |