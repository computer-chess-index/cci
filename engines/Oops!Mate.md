# Engine: Oops!Mate

Author: Swoyam Pokharel

Home: https://github.com/PS-Wizard/OopsMate

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1276<sub>(+124) | 1462<sub>(+47) | 1504<sub>(+45) |  |
| 0.0.4 | 2025-11-23 | 1152 | 1415 | 1459 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1212<sub>(+101) | 1409<sub>(+85) | 1474<sub>(+155) |  |
| 0.0.4 | 2025-11-23 | 1111 | 1324 | 1319 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1278<sub>(+137) | 1459<sub>(+93) | 1499<sub>(+83) |  |
| 0.0.4 | 2025-11-23 | 1141 | 1366 | 1416 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Oops!Mate+<version>&body=###%20Engine%20name%0AOops!Mate%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:40:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1600
  line "E1: STC (8.0+0.08s)" [1152, 1276]
  line "E1: LTC (60.0+0.60s)" [1415, 1462]
  line "E1: VLTC (2m24s+1.12s)" [1459, 1504]
  line "P1: STC (8.0+0.08s)" [1111, 1212]
  line "P1: LTC (60.0+0.60s)" [1324, 1409]
  line "P1: VLTC (2m24s+1.12s)" [1319, 1474]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1500
  line "T1: STC (8.0+0.08s)" [1141, 1278]
  line "T1: LTC (60.0+0.60s)" [1366, 1459]
  line "T1: VLTC (2m24s+1.12s)" [1416, 1499]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1499 | 27 | 468 | 54% | 1459 | 30% |
|  |  | P1 | 1474 | 42 | 188 | 49% | 1484 | 34% |
|  |  | E1 | 1504 | 33 | 324 | 49% | 1534 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1459 | 27 | 508 | 51% | 1445 | 28% |
|  |  | P1 | 1409 | 45 | 172 | 45% | 1508 | 31% |
|  |  | E1 | 1462 | 33 | 316 | 47% | 1542 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1278 | 26 | 576 | 56% | 1170 | 28% |
|  |  | P1 | 1212 | 38 | 218 | 50% | 1206 | 38% |
|  |  | E1 | 1276 | 30 | 390 | 52% | 1269 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1319 | 75 | 78 | 33% | 1605 | 21% |
|  |  | E1 | 1459 | 63 | 98 | 35% | 1728 | 34% |
|  |  | T1 | 1416 | 43 | 190 | 42% | 1561 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1415 | 56 | 124 | 36% | 1685 | 29% |
|  |  | T1 | 1366 | 41 | 200 | 45% | 1455 | 32% |
|  |  | P1 | 1324 | 71 | 80 | 39% | 1524 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1152 | 53 | 132 | 42% | 1357 | 29% |
|  |  | T1 | 1141 | 43 | 198 | 43% | 1239 | 26% |
|  |  | P1 | 1111 | 83 | 72 | 26% | 1611 | 21% |