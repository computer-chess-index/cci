# Engine: Oops!Mate

Author: Swoyam Pokharel

Home: https://github.com/PS-Wizard/OopsMate

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1261<sub>(+127) | 1447<sub>(+47) | 1489<sub>(+71) |  |
| 0.0.4 | 2025-11-23 | 1134 | 1400 | 1418 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1218<sub>(+129) | 1401<sub>(+59) | 1474<sub>(+139) |  |
| 0.0.4 | 2025-11-23 | 1089 | 1342 | 1335 |  |
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

Generated: 2026-11-18 05:41:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1000 --> 1500
  line "E1: STC (8.0+0.08s)" [1134, 1261]
  line "E1: LTC (60.0+0.60s)" [1400, 1447]
  line "E1: VLTC (2m24s+1.12s)" [1418, 1489]
  line "P1: STC (8.0+0.08s)" [1089, 1218]
  line "P1: LTC (60.0+0.60s)" [1342, 1401]
  line "P1: VLTC (2m24s+1.12s)" [1335, 1474]
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
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1474 | 42 | 188 | 49% | 1484 | 34% |
|  |  | E1 | 1489 | 32 | 336 | 49% | 1520 | 30% |
|  |  | T1 | 1499 | 27 | 468 | 54% | 1459 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1401 | 44 | 180 | 44% | 1512 | 31% |
|  |  | E1 | 1447 | 33 | 328 | 47% | 1526 | 30% |
|  |  | T1 | 1459 | 27 | 508 | 51% | 1445 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1261 | 30 | 394 | 51% | 1254 | 29% |
|  |  | T1 | 1278 | 26 | 576 | 56% | 1170 | 28% |
|  |  | P1 | 1218 | 38 | 220 | 51% | 1208 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1416 | 43 | 190 | 42% | 1561 | 34% |
|  |  | P1 | 1335 | 69 | 86 | 36% | 1581 | 23% |
|  |  | E1 | 1418 | 57 | 114 | 35% | 1675 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1366 | 41 | 200 | 45% | 1455 | 32% |
|  |  | P1 | 1342 | 64 | 96 | 42% | 1494 | 22% |
|  |  | E1 | 1400 | 54 | 128 | 37% | 1665 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1141 | 43 | 198 | 43% | 1239 | 26% |
|  |  | P1 | 1089 | 73 | 84 | 27% | 1546 | 25% |
|  |  | E1 | 1134 | 53 | 136 | 42% | 1339 | 29% |