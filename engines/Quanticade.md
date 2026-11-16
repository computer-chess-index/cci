# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3289<sub>(-5) | 3596<sub>(+124) | 3650<sub>(+120) |  |
| 2.0 | 2025-05-21 | 3294 | 3472 | 3530 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3316<sub>(+84) | 3517<sub>(+126) | 3561<sub>(+151) |  |
| 2.0 | 2025-05-21 | 3232 | 3391 | 3410 |  |
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

Generated: 2026-11-16 05:41:33

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3294, 3289]
  line "E1: LTC (60.0+0.60s)" [3472, 3596]
  line "E1: VLTC (2m24s+1.12s)" [3530, 3650]
  line "P1: STC (8.0+0.08s)" [3232, 3316]
  line "P1: LTC (60.0+0.60s)" [3391, 3517]
  line "P1: VLTC (2m24s+1.12s)" [3410, 3561]
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
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3650 | 32 | 222 | 51% | 3644 | 86% |
|  |  | T1 | 3560 | 21 | 500 | 51% | 3553 | 89% |
|  |  | P1 | 3561 | 39 | 152 | 52% | 3545 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3517 | 34 | 200 | 52% | 3506 | 87% |
|  |  | E1 | 3596 | 29 | 274 | 48% | 3606 | 88% |
|  |  | T1 | 3530 | 22 | 498 | 50% | 3528 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3316 | 32 | 250 | 50% | 3317 | 72% |
|  |  | E1 | 3289 | 25 | 430 | 47% | 3312 | 63% |
|  |  | T1 | 3359 | 19 | 690 | 51% | 3355 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3530 | 70 | 60 | 59% | 3353 | 62% |
|  |  | T1 | 3525 | 26 | 340 | 50% | 3521 | 84% |
|  |  | P1 | 3410 | 128 | 36 | 88% | 2681 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3391 | 114 | 20 | 60% | 3263 | 70% |
|  |  | T1 | 3484 | 26 | 352 | 50% | 3480 | 81% |
|  |  | E1 | 3472 | 67 | 60 | 63% | 3339 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3232 | 90 | 32 | 55% | 3193 | 66% |
|  |  | T1 | 3308 | 25 | 414 | 52% | 3294 | 64% |
|  |  | E1 | 3294 | 68 | 60 | 43% | 3353 | 55% |