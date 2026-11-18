# Engine: USunfish

Author: Angel Monreal

Home: https://github.com/fizban99/micropython-usunfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1058<sub>(-25) | 1442<sub>(+15) | 1524<sub>(+40) |  |
| 1.1 | 2026-05-15 | 1083 | 1427 | 1484 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1081<sub>(-7) | 1422<sub>(-23) | 1548<sub>(+122) |  |
| 1.1 | 2026-05-15 | 1088 | 1445 | 1426 |  |
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

Generated: 2026-11-18 05:44:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 1000 --> 1600
  line "E1: STC (8.0+0.08s)" [1083, 1058]
  line "E1: LTC (60.0+0.60s)" [1427, 1442]
  line "E1: VLTC (2m24s+1.12s)" [1484, 1524]
  line "P1: STC (8.0+0.08s)" [1088, 1081]
  line "P1: LTC (60.0+0.60s)" [1445, 1422]
  line "P1: VLTC (2m24s+1.12s)" [1426, 1548]
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
|  |  | P1 | 1548 | 34 | 320 | 52% | 1534 | 16% |
|  |  | E1 | 1524 | 33 | 336 | 50% | 1531 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1470 | 40 | 220 | 52% | 1449 | 20% |
|  |  | P1 | 1422 | 42 | 214 | 50% | 1432 | 24% |
|  |  | E1 | 1442 | 32 | 358 | 51% | 1431 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1088 | 36 | 282 | 49% | 1100 | 19% |
|  |  | P1 | 1081 | 38 | 240 | 49% | 1091 | 23% |
|  |  | E1 | 1058 | 30 | 380 | 49% | 1069 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1507 | 32 | 360 | 51% | 1492 | 19% |
|  |  | P1 | 1426 | 64 | 102 | 44% | 1567 | 23% |
|  |  | E1 | 1484 | 52 | 152 | 42% | 1628 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1365 | 33 | 344 | 51% | 1354 | 18% |
|  |  | P1 | 1445 | 59 | 114 | 46% | 1523 | 22% |
|  |  | E1 | 1427 | 49 | 160 | 51% | 1466 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 968 | 31 | 404 | 54% | 915 | 21% |
|  |  | P1 | 1088 | 64 | 108 | 36% | 1392 | 17% |
|  |  | E1 | 1083 | 50 | 170 | 39% | 1301 | 18% |