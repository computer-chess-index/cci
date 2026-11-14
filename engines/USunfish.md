# Engine: USunfish

Author: Angel Monreal

Home: https://github.com/fizban99/micropython-usunfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1087<sub>(+4) | 1472<sub>(+40) | 1555<sub>(+62) |  |
| 1.1 | 2026-05-15 | 1083 | 1432 | 1493 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-09-12 | 1075<sub>(-10) | 1419<sub>(-7) | 1548<sub>(+167) |  |
| 1.1 | 2026-05-15 | 1085 | 1426 | 1381 |  |
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

Generated: 2026-11-14 05:43:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.4"]
  y-axis "Elo Rating" 1000 --> 1600
  line "E1: STC (8.0+0.08s)" [1083, 1087]
  line "E1: LTC (60.0+0.60s)" [1432, 1472]
  line "E1: VLTC (2m24s+1.12s)" [1493, 1555]
  line "P1: STC (8.0+0.08s)" [1085, 1075]
  line "P1: LTC (60.0+0.60s)" [1426, 1419]
  line "P1: VLTC (2m24s+1.12s)" [1381, 1548]
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
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1555 | 34 | 310 | 50% | 1563 | 22% |
|  |  | T1 | 1540 | 39 | 238 | 54% | 1507 | 21% |
|  |  | P1 | 1548 | 35 | 304 | 51% | 1536 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1472 | 33 | 330 | 50% | 1463 | 19% |
|  |  | T1 | 1470 | 40 | 220 | 52% | 1449 | 20% |
|  |  | P1 | 1419 | 43 | 200 | 49% | 1436 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1087 | 31 | 366 | 49% | 1092 | 26% |
|  |  | T1 | 1088 | 36 | 282 | 49% | 1100 | 19% |
|  |  | P1 | 1075 | 38 | 236 | 49% | 1088 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1493 | 70 | 98 | 35% | 1739 | 15% |
|  |  | T1 | 1507 | 32 | 360 | 51% | 1492 | 19% |
|  |  | P1 | 1381 | 92 | 62 | 34% | 1670 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1432 | 60 | 112 | 48% | 1515 | 19% |
|  |  | T1 | 1365 | 33 | 344 | 51% | 1354 | 18% |
|  |  | P1 | 1426 | 79 | 72 | 42% | 1567 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1083 | 68 | 106 | 30% | 1462 | 17% |
|  |  | T1 | 968 | 31 | 404 | 54% | 915 | 21% |
|  |  | P1 | 1085 | 110 | 52 | 23% | 1688 | 12% |