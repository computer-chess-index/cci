# Engine: Oops!Mate

Author: Swoyam Pokharel

Home: https://github.com/PS-Wizard/OopsMate

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1264<sub>(+127) | 1447<sub>(+29) | 1486<sub>(+95) |  |
| 0.0.4 | 2025-11-23 | 1137 | 1418 | 1391 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1218<sub>(+68) | 1399<sub>(+69) | 1485<sub>(+167) |  |
| 0.0.4 | 2025-11-23 | 1150 | 1330 | 1318 |  |
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

Generated: 2026-11-28 05:41:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1500
  line "E1: STC (8.0+0.08s)" [1137, 1264]
  line "E1: LTC (60.0+0.60s)" [1418, 1447]
  line "E1: VLTC (2m24s+1.12s)" [1391, 1486]
  line "P1: STC (8.0+0.08s)" [1150, 1218]
  line "P1: LTC (60.0+0.60s)" [1330, 1399]
  line "P1: VLTC (2m24s+1.12s)" [1318, 1485]
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
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1486 | 31 | 348 | 49% | 1519 | 30% |
|  |  | T1 | 1499 | 27 | 468 | 54% | 1459 | 30% |
|  |  | P1 | 1485 | 41 | 192 | 50% | 1485 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1459 | 27 | 508 | 51% | 1445 | 28% |
|  |  | P1 | 1399 | 43 | 188 | 44% | 1508 | 32% |
|  |  | E1 | 1447 | 32 | 338 | 47% | 1524 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1278 | 26 | 576 | 56% | 1170 | 28% |
|  |  | P1 | 1218 | 37 | 228 | 51% | 1207 | 39% |
|  |  | E1 | 1264 | 29 | 402 | 52% | 1254 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1416 | 43 | 190 | 42% | 1561 | 34% |
|  |  | P1 | 1318 | 61 | 106 | 38% | 1530 | 26% |
|  |  | E1 | 1391 | 50 | 142 | 35% | 1624 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1366 | 41 | 200 | 45% | 1455 | 32% |
|  |  | P1 | 1330 | 56 | 120 | 43% | 1463 | 24% |
|  |  | E1 | 1418 | 49 | 158 | 41% | 1616 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1141 | 43 | 198 | 43% | 1239 | 26% |
|  |  | P1 | 1150 | 60 | 112 | 38% | 1440 | 25% |
|  |  | E1 | 1137 | 48 | 156 | 43% | 1315 | 31% |