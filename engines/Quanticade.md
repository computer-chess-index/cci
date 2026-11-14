# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3271<sub>(-49) | 3586<sub>(+185) | 3638<sub>(+92) |  |
| 2.0 | 2025-05-21 | 3320 | 3401 | 3546 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3329<sub>(+104) | 3526<sub>(+209) | 3569<sub>(+253) |  |
| 2.0 | 2025-05-21 | 3225 | 3317 | 3316 |  |
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

Generated: 2026-11-14 05:41:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3320, 3271]
  line "E1: LTC (60.0+0.60s)" [3401, 3586]
  line "E1: VLTC (2m24s+1.12s)" [3546, 3638]
  line "P1: STC (8.0+0.08s)" [3225, 3329]
  line "P1: LTC (60.0+0.60s)" [3317, 3526]
  line "P1: VLTC (2m24s+1.12s)" [3316, 3569]
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
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3638 | 32 | 222 | 51% | 3632 | 86% |
|  |  | T1 | 3560 | 21 | 500 | 51% | 3553 | 89% |
|  |  | P1 | 3569 | 39 | 152 | 52% | 3553 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3526 | 34 | 200 | 52% | 3515 | 87% |
|  |  | E1 | 3586 | 29 | 266 | 49% | 3594 | 88% |
|  |  | T1 | 3530 | 22 | 498 | 50% | 3528 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3329 | 32 | 250 | 50% | 3330 | 72% |
|  |  | E1 | 3271 | 25 | 418 | 46% | 3301 | 63% |
|  |  | T1 | 3359 | 19 | 690 | 51% | 3355 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3546 | 123 | 28 | 77% | 3114 | 39% |
|  |  | T1 | 3525 | 26 | 340 | 50% | 3521 | 84% |
|  |  | P1 | 3316 | 170 | 28 | 93% | 2477 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3484 | 26 | 352 | 50% | 3480 | 81% |
|  |  | E1 | 3401 | 112 | 24 | 73% | 3160 | 54% |
|  |  | P1 | 3317 | 148 | 12 | 71% | 3101 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3225 | 102 | 24 | 58% | 3162 | 67% |
|  |  | T1 | 3308 | 25 | 414 | 52% | 3294 | 64% |
|  |  | E1 | 3320 | 98 | 30 | 47% | 3343 | 47% |