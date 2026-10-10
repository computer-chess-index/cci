# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3206 | 3530 | 3575 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3541 | 3725 | 3761 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-10 04:41:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3308, 3359]
  line "STC (8.0+0.08s)" [3308, 3359]
  line "LTC (60.0+0.60s)" [3484, 3530]
  line "" [3525, 3560]
  line "VLTC (2m24s+1.12s)" [3525, 3560]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 41 | 140 | 53% | 3553 | 84% |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 21 | 500 | 51% | 3553 | 89% |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3761 | 49 | 96 | 52% | 3750 | 86% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3725 | 44 | 120 | 52% | 3713 | 83% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 22 | 498 | 50% | 3528 | 86% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 40 | 136 | 50% | 3532 | 92% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3541 | 37 | 180 | 50% | 3541 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3359 | 19 | 690 | 51% | 3355 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3206 | 31 | 274 | 44% | 3251 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 26 | 340 | 50% | 3521 | 84% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 26 | 352 | 50% | 3480 | 81% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3308 | 25 | 414 | 52% | 3294 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |