# Engine: USunfish

Author: Angel Monreal

Home: https://github.com/fizban99/micropython-usunfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1060<sub>(-24) | 1446<sub>(+18) | 1524<sub>(+39) |  |
| 1.1 | 2026-05-15 | 1084 | 1428 | 1485 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1080<sub>(-8) | 1420<sub>(-22) | 1546<sub>(+120) |  |
| 1.1 | 2026-05-15 | 1088 | 1442 | 1426 |  |
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

Generated: 2026-11-19 05:44:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 1000 --> 1600
  line "E1: STC (8.0+0.08s)" [1084, 1060]
  line "E1: LTC (60.0+0.60s)" [1428, 1446]
  line "E1: VLTC (2m24s+1.12s)" [1485, 1524]
  line "P1: STC (8.0+0.08s)" [1088, 1080]
  line "P1: LTC (60.0+0.60s)" [1442, 1420]
  line "P1: VLTC (2m24s+1.12s)" [1426, 1546]
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
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1546 | 34 | 320 | 52% | 1532 | 16% |
|  |  | E1 | 1524 | 33 | 336 | 50% | 1532 | 21% |
|  |  | T1 | 1540 | 39 | 238 | 54% | 1507 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1420 | 42 | 214 | 50% | 1431 | 24% |
|  |  | E1 | 1446 | 32 | 362 | 51% | 1432 | 19% |
|  |  | T1 | 1470 | 40 | 220 | 52% | 1449 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1060 | 30 | 380 | 49% | 1071 | 27% |
|  |  | T1 | 1088 | 36 | 282 | 49% | 1100 | 19% |
|  |  | P1 | 1080 | 38 | 240 | 49% | 1089 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1426 | 64 | 102 | 44% | 1567 | 23% |
|  |  | E1 | 1485 | 52 | 152 | 42% | 1628 | 20% |
|  |  | T1 | 1507 | 32 | 360 | 51% | 1492 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1442 | 59 | 114 | 46% | 1521 | 22% |
|  |  | E1 | 1428 | 49 | 160 | 51% | 1467 | 21% |
|  |  | T1 | 1365 | 33 | 344 | 51% | 1354 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1084 | 50 | 170 | 39% | 1301 | 18% |
|  |  | T1 | 968 | 31 | 404 | 54% | 915 | 21% |
|  |  | P1 | 1088 | 64 | 108 | 36% | 1392 | 17% |