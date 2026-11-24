# Engine: USunfish

Author: Angel Monreal

Home: https://github.com/fizban99/micropython-usunfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1057<sub>(-15) | 1442<sub>(+19) | 1521<sub>(+43) |  |
| 1.1 | 2026-05-15 | 1072 | 1423 | 1478 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1077<sub>(+27) | 1403<sub>(-36) | 1548<sub>(+110) |  |
| 1.1 | 2026-05-15 | 1050 | 1439 | 1438 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1088<sub>(+120) | 1470<sub>(+105) | 1540<sub>(+33) |  |
| 1.1 | 2026-05-15 | 968 | 1365 | 1507 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+USunfish+<version>&body=###%20Engine%20name%0AUSunfish%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:44:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 1000 --> 1600
  line "E1: STC (8.0+0.08s)" [1072, 1057]
  line "E1: LTC (60.0+0.60s)" [1423, 1442]
  line "E1: VLTC (2m24s+1.12s)" [1478, 1521]
  line "P1: STC (8.0+0.08s)" [1050, 1077]
  line "P1: LTC (60.0+0.60s)" [1439, 1403]
  line "P1: VLTC (2m24s+1.12s)" [1438, 1548]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 900 --> 1600
  line "T1: STC (8.0+0.08s)" [968, 1088]
  line "T1: LTC (60.0+0.60s)" [1365, 1470]
  line "T1: VLTC (2m24s+1.12s)" [1507, 1540]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1548 | 34 | 324 | 52% | 1534 | 16% |
|  |  | E1 | 1521 | 32 | 348 | 50% | 1528 | 21% |
|  |  | T1 | 1540 | 39 | 238 | 54% | 1507 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1403 | 41 | 222 | 49% | 1427 | 23% |
|  |  | E1 | 1442 | 32 | 366 | 51% | 1430 | 20% |
|  |  | T1 | 1470 | 40 | 220 | 52% | 1449 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1057 | 30 | 384 | 49% | 1068 | 27% |
|  |  | T1 | 1088 | 36 | 282 | 49% | 1100 | 19% |
|  |  | P1 | 1077 | 38 | 240 | 49% | 1085 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1438 | 57 | 126 | 46% | 1542 | 22% |
|  |  | E1 | 1478 | 51 | 156 | 42% | 1624 | 20% |
|  |  | T1 | 1507 | 32 | 360 | 51% | 1492 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1439 | 53 | 138 | 46% | 1509 | 23% |
|  |  | E1 | 1423 | 47 | 172 | 51% | 1459 | 22% |
|  |  | T1 | 1365 | 33 | 344 | 51% | 1354 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1072 | 49 | 178 | 39% | 1289 | 18% |
|  |  | T1 | 968 | 31 | 404 | 54% | 915 | 21% |
|  |  | P1 | 1050 | 55 | 140 | 37% | 1315 | 17% |