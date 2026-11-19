# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3380<sub>(+63) | 3602<sub>(+62) | 3659<sub>(+60) |  |
| 6.1.1 | 2025-07-21 | 3317 | 3540 | 3599 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3375<sub>(+51) | 3544<sub>(+128) | 3599<sub>(+98) |  |
| 6.1.1 | 2025-07-21 | 3324 | 3416 | 3501 |  |
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

Generated: 2026-11-19 05:36:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3317, 3380]
  line "E1: LTC (60.0+0.60s)" [3540, 3602]
  line "E1: VLTC (2m24s+1.12s)" [3599, 3659]
  line "P1: STC (8.0+0.08s)" [3324, 3375]
  line "P1: LTC (60.0+0.60s)" [3416, 3544]
  line "P1: VLTC (2m24s+1.12s)" [3501, 3599]
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
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3659 | 31 | 272 | 57% | 3529 | 72% |
|  |  | T1 | 3559 | 27 | 312 | 49% | 3567 | 89% |
|  |  | P1 | 3599 | 35 | 192 | 50% | 3567 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3602 | 31 | 280 | 59% | 3430 | 71% |
|  |  | T1 | 3546 | 28 | 294 | 50% | 3545 | 86% |
|  |  | P1 | 3544 | 39 | 174 | 58% | 3457 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3380 | 23 | 492 | 48% | 3395 | 67% |
|  |  | T1 | 3405 | 25 | 398 | 51% | 3401 | 75% |
|  |  | P1 | 3375 | 31 | 260 | 51% | 3371 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 23 | 420 | 52% | 3509 | 87% |
|  |  | P1 | 3501 | 130 | 20 | 75% | 3206 | 50% |
|  |  | E1 | 3599 | 62 | 72 | 56% | 3476 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 25 | 400 | 51% | 3475 | 81% |
|  |  | P1 | 3416 | 120 | 28 | 80% | 3108 | 32% |
|  |  | E1 | 3540 | 62 | 74 | 57% | 3434 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3294 | 23 | 514 | 51% | 3278 | 67% |
|  |  | P1 | 3324 | 84 | 40 | 58% | 3243 | 55% |
|  |  | E1 | 3317 | 57 | 90 | 54% | 3198 | 57% |