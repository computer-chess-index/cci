# Engine: USunfish

Author: Angel Monreal

Home: https://github.com/fizban99/micropython-usunfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1056<sub>(-24) | 1442<sub>(+16) | 1521<sub>(+39) |  |
| 1.1 | 2026-05-15 | 1080 | 1426 | 1482 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1075<sub>(+26) | 1400<sub>(-35) | 1544<sub>(+110) |  |
| 1.1 | 2026-05-15 | 1049 | 1435 | 1434 |  |
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

Generated: 2026-11-22 05:44:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 1000 --> 1600
  line "E1: STC (8.0+0.08s)" [1080, 1056]
  line "E1: LTC (60.0+0.60s)" [1426, 1442]
  line "E1: VLTC (2m24s+1.12s)" [1482, 1521]
  line "P1: STC (8.0+0.08s)" [1049, 1075]
  line "P1: LTC (60.0+0.60s)" [1435, 1400]
  line "P1: VLTC (2m24s+1.12s)" [1434, 1544]
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
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1544 | 34 | 324 | 52% | 1531 | 16% |
|  |  | E1 | 1521 | 33 | 336 | 50% | 1528 | 21% |
|  |  | T1 | 1540 | 39 | 238 | 54% | 1507 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1400 | 41 | 222 | 49% | 1424 | 23% |
|  |  | E1 | 1442 | 32 | 366 | 51% | 1430 | 20% |
|  |  | T1 | 1470 | 40 | 220 | 52% | 1449 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1056 | 30 | 380 | 49% | 1067 | 27% |
|  |  | T1 | 1088 | 36 | 282 | 49% | 1100 | 19% |
|  |  | P1 | 1075 | 38 | 240 | 49% | 1084 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1434 | 57 | 126 | 46% | 1538 | 22% |
|  |  | E1 | 1482 | 52 | 152 | 42% | 1627 | 20% |
|  |  | T1 | 1507 | 32 | 360 | 51% | 1492 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1435 | 53 | 138 | 46% | 1507 | 23% |
|  |  | E1 | 1426 | 49 | 160 | 51% | 1463 | 21% |
|  |  | T1 | 1365 | 33 | 344 | 51% | 1354 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1080 | 50 | 170 | 39% | 1299 | 18% |
|  |  | T1 | 968 | 31 | 404 | 54% | 915 | 21% |
|  |  | P1 | 1049 | 55 | 140 | 37% | 1312 | 17% |