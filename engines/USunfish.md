# Engine: USunfish

Author: Angel Monreal

Home: https://github.com/fizban99/micropython-usunfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1069<sub>(-25) | 1451<sub>(+12) | 1535<sub>(+41) |  |
| 1.1 | 2026-05-15 | 1094 | 1439 | 1494 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1081<sub>(-7) | 1420<sub>(-23) | 1546<sub>(+122) |  |
| 1.1 | 2026-05-15 | 1088 | 1443 | 1424 |  |
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

Generated: 2026-11-17 05:44:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 1000 --> 1600
  line "E1: STC (8.0+0.08s)" [1094, 1069]
  line "E1: LTC (60.0+0.60s)" [1439, 1451]
  line "E1: VLTC (2m24s+1.12s)" [1494, 1535]
  line "P1: STC (8.0+0.08s)" [1088, 1081]
  line "P1: LTC (60.0+0.60s)" [1443, 1420]
  line "P1: VLTC (2m24s+1.12s)" [1424, 1546]
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
|  |  | P1 | 1546 | 34 | 320 | 52% | 1532 | 16% |
|  |  | E1 | 1535 | 33 | 336 | 50% | 1542 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1470 | 40 | 220 | 52% | 1449 | 20% |
|  |  | P1 | 1420 | 41 | 214 | 50% | 1431 | 24% |
|  |  | E1 | 1451 | 32 | 354 | 50% | 1442 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1088 | 36 | 282 | 49% | 1100 | 19% |
|  |  | P1 | 1081 | 38 | 240 | 49% | 1091 | 23% |
|  |  | E1 | 1069 | 30 | 380 | 49% | 1080 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1507 | 32 | 360 | 51% | 1492 | 19% |
|  |  | P1 | 1424 | 64 | 102 | 44% | 1566 | 23% |
|  |  | E1 | 1494 | 52 | 152 | 42% | 1638 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1365 | 33 | 344 | 51% | 1354 | 18% |
|  |  | P1 | 1443 | 59 | 114 | 46% | 1521 | 22% |
|  |  | E1 | 1439 | 49 | 160 | 51% | 1477 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 968 | 31 | 404 | 54% | 915 | 21% |
|  |  | P1 | 1088 | 64 | 108 | 36% | 1391 | 17% |
|  |  | E1 | 1094 | 50 | 170 | 39% | 1311 | 18% |