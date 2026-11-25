# Engine: USunfish

Author: Angel Monreal

Home: https://github.com/fizban99/micropython-usunfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1057<sub>(-24) | 1445<sub>(+11) | 1519<sub>(+41) |  |
| 1.1 | 2026-05-15 | 1081 | 1434 | 1478 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1073<sub>(+21) | 1411<sub>(-27) | 1551<sub>(+111) |  |
| 1.1 | 2026-05-15 | 1052 | 1438 | 1440 |  |
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

Generated: 2026-11-25 05:44:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 1000 --> 1600
  line "E1: STC (8.0+0.08s)" [1081, 1057]
  line "E1: LTC (60.0+0.60s)" [1434, 1445]
  line "E1: VLTC (2m24s+1.12s)" [1478, 1519]
  line "P1: STC (8.0+0.08s)" [1052, 1073]
  line "P1: LTC (60.0+0.60s)" [1438, 1411]
  line "P1: VLTC (2m24s+1.12s)" [1440, 1551]
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
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1540 | 39 | 238 | 54% | 1507 | 21% |
|  |  | P1 | 1551 | 34 | 324 | 52% | 1538 | 16% |
|  |  | E1 | 1519 | 32 | 352 | 50% | 1531 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1411 | 41 | 226 | 49% | 1430 | 23% |
|  |  | E1 | 1445 | 32 | 366 | 51% | 1431 | 20% |
|  |  | T1 | 1470 | 40 | 220 | 52% | 1449 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1073 | 38 | 248 | 49% | 1087 | 23% |
|  |  | E1 | 1057 | 30 | 384 | 49% | 1068 | 27% |
|  |  | T1 | 1088 | 36 | 282 | 49% | 1100 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1507 | 32 | 360 | 51% | 1492 | 19% |
|  |  | P1 | 1440 | 56 | 130 | 46% | 1544 | 22% |
|  |  | E1 | 1478 | 51 | 156 | 42% | 1624 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1438 | 51 | 150 | 46% | 1508 | 22% |
|  |  | E1 | 1434 | 45 | 186 | 51% | 1458 | 21% |
|  |  | T1 | 1365 | 33 | 344 | 51% | 1354 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1052 | 55 | 140 | 37% | 1318 | 17% |
|  |  | E1 | 1081 | 47 | 190 | 40% | 1276 | 18% |
|  |  | T1 | 968 | 31 | 404 | 54% | 915 | 21% |