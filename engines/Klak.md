# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1458<sub>(-4) | 1656<sub>(+155) | 1656<sub>(-46) |  |
| 1.2.0 | 2026-11-14 | 1462<sub>(+51) | 1501<sub>(-56) | 1702<sub>(+62) |  |
| 1.1.0 | 2026-11-08 | 1411<sub>(+14) | 1557<sub>(+73) | 1640<sub>(+32) |  |
| 1.0.0 | 2026-11-06 | 1397 | 1484 | 1608 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1422<sub>(+27) | 1504<sub>(-55) | 1667<sub>(+54) |  |
| 1.2.0 | 2026-11-14 | 1395<sub>(-1) | 1559<sub>(-7) | 1613<sub>(+1) |  |
| 1.1.0 | 2026-11-08 | 1396<sub>(+143) | 1566<sub>(+84) | 1612<sub>(+47) |  |
| 1.0.0 | 2026-11-06 | 1253 | 1482 | 1565 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1253 | 1482 | 1565 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Klak+<version>&body=###%20Engine%20name%0AKlak%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:39:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1200 --> 1800
  line "E1: STC (8.0+0.08s)" [1397, 1411, 1462, 1458]
  line "E1: LTC (60.0+0.60s)" [1484, 1557, 1501, 1656]
  line "E1: VLTC (2m24s+1.12s)" [1608, 1640, 1702, 1656]
  line "P1: STC (8.0+0.08s)" [1253, 1396, 1395, 1422]
  line "P1: LTC (60.0+0.60s)" [1482, 1566, 1559, 1504]
  line "P1: VLTC (2m24s+1.12s)" [1565, 1612, 1613, 1667]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1667 | 65 | 80 | 52% | 1647 | 24% |
|  |  | E1 | 1656 | 55 | 110 | 49% | 1666 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1504 | 65 | 76 | 48% | 1521 | 33% |
|  |  | E1 | 1656 | 74 | 68 | 49% | 1667 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1422 | 190 | 8 | 50% | 1422 | 25% |
|  |  | E1 | 1458 | 59 | 102 | 40% | 1562 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1702 | 87 | 46 | 47% | 1735 | 20% |
|  |  | P1 | 1613 | 161 | 14 | 61% | 1501 | 7% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1501 | 84 | 54 | 47% | 1531 | 9% |
|  |  | P1 | 1559 | 113 | 26 | 52% | 1538 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1462 | 75 | 60 | 50% | 1465 | 23% |
|  |  | P1 | 1395 | 117 | 24 | 48% | 1416 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1612 | 46 | 166 | 53% | 1574 | 19% |
|  |  | E1 | 1640 | 37 | 268 | 49% | 1654 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1566 | 42 | 192 | 53% | 1540 | 24% |
|  |  | E1 | 1557 | 35 | 284 | 49% | 1562 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1396 | 38 | 250 | 57% | 1323 | 20% |
|  |  | E1 | 1411 | 38 | 252 | 47% | 1436 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1565 | 45 | 176 | 65% | 1359 | 36% |
|  |  | E1 | 1608 | 34 | 312 | 57% | 1470 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1482 | 41 | 212 | 60% | 1341 | 31% |
|  |  | E1 | 1484 | 35 | 280 | 60% | 1337 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1253 | 42 | 196 | 65% | 1061 | 38% |
|  |  | E1 | 1397 | 34 | 304 | 60% | 1256 | 38% |