# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3332<sub>(+644) | 3645<sub>(+718) | 3695<sub>(+869) |  |
| 2.0 | 2025-05-21 | 2688 | 2927 | 2826 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3534<sub>(+733) | 3730<sub>(+new) | 3775<sub>(+1691) |  |
| 2.0 | 2025-05-21 | 2801 |  | 2084 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3359<sub>(+51) | 3530<sub>(+46) | 3560<sub>(+35) |  |
| 2.0 | 2025-05-21 | 3308 | 3484 | 3525 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quanticade+<version>&body=###%20Engine%20name%0AQuanticade%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:41:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 2600 --> 3800
  line "E1: STC (8.0+0.08s)" [2688, 3332]
  line "E1: LTC (60.0+0.60s)" [2927, 3645]
  line "E1: VLTC (2m24s+1.12s)" [2826, 3695]
  line "P1: STC (8.0+0.08s)" [3534]
  line "P1: LTC (60.0+0.60s)" [3730]
  line "P1: VLTC (2m24s+1.12s)" [3775]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3308, 3359]
  line "T1: LTC (60.0+0.60s)" [3484, 3530]
  line "T1: VLTC (2m24s+1.12s)" [3525, 3560]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3695 | 32 | 222 | 51% | 3688 | 86% |
|  |  | T1 | 3560 | 21 | 500 | 51% | 3553 | 89% |
|  |  | P1 | 3775 | 39 | 152 | 52% | 3758 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3645 | 29 | 266 | 49% | 3652 | 88% |
|  |  | T1 | 3530 | 22 | 498 | 50% | 3528 | 86% |
|  |  | P1 | 3730 | 34 | 200 | 52% | 3721 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3332 | 25 | 414 | 46% | 3360 | 64% |
|  |  | T1 | 3359 | 19 | 690 | 51% | 3355 | 70% |
|  |  | P1 | 3534 | 32 | 250 | 50% | 3536 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2084 | 294 | 4 | 100% | 1719 | 0% |
|  |  | E1 | 2826 | 262 | 4 | 100% | 2512 | 0% |
|  |  | T1 | 3525 | 26 | 340 | 50% | 3521 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3484 | 26 | 352 | 50% | 3480 | 81% |
|  |  | E1 | 2927 | 159 | 8 | 69% | 2812 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3308 | 25 | 414 | 52% | 3294 | 64% |
|  |  | E1 | 2688 | 211 | 4 | 25% | 2809 | 50% |
|  |  | P1 | 2801 | 198 | 4 | 38% | 2859 | 75% |