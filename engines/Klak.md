# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1446<sub>(-17) | 1597<sub>(+96) | 1635<sub>(-70) |  |
| 1.2.0 | 2026-11-14 | 1463<sub>(+51) | 1501<sub>(-56) | 1705<sub>(+63) |  |
| 1.1.0 | 2026-11-08 | 1412<sub>(+13) | 1557<sub>(+72) | 1642<sub>(+34) |  |
| 1.0.0 | 2026-11-06 | 1399 | 1485 | 1608 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1397<sub>(+4) | 1497<sub>(-30) | 1665<sub>(+26) |  |
| 1.2.0 | 2026-11-14 | 1393<sub>(+2) | 1527<sub>(-36) | 1639<sub>(+31) |  |
| 1.1.0 | 2026-11-08 | 1391<sub>(+142) | 1563<sub>(+85) | 1608<sub>(+47) |  |
| 1.0.0 | 2026-11-06 | 1249 | 1478 | 1561 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1249 | 1478 | 1561 |  |
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

Generated: 2026-11-20 05:39:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1200 --> 1800
  line "E1: STC (8.0+0.08s)" [1399, 1412, 1463, 1446]
  line "E1: LTC (60.0+0.60s)" [1485, 1557, 1501, 1597]
  line "E1: VLTC (2m24s+1.12s)" [1608, 1642, 1705, 1635]
  line "P1: STC (8.0+0.08s)" [1249, 1391, 1393, 1397]
  line "P1: LTC (60.0+0.60s)" [1478, 1563, 1527, 1497]
  line "P1: VLTC (2m24s+1.12s)" [1561, 1608, 1639, 1665]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1665 | 61 | 92 | 52% | 1647 | 25% |
|  |  | E1 | 1635 | 45 | 168 | 48% | 1656 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1497 | 58 | 96 | 48% | 1517 | 31% |
|  |  | E1 | 1597 | 44 | 180 | 47% | 1632 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1397 | 68 | 72 | 51% | 1384 | 25% |
|  |  | E1 | 1446 | 45 | 170 | 44% | 1512 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1639 | 142 | 18 | 61% | 1524 | 11% |
|  |  | E1 | 1705 | 87 | 46 | 47% | 1737 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1527 | 102 | 34 | 49% | 1539 | 15% |
|  |  | E1 | 1501 | 84 | 54 | 47% | 1532 | 9% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1393 | 117 | 24 | 48% | 1415 | 21% |
|  |  | E1 | 1463 | 75 | 60 | 50% | 1466 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1608 | 46 | 166 | 53% | 1570 | 19% |
|  |  | E1 | 1642 | 37 | 268 | 49% | 1654 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1563 | 42 | 192 | 53% | 1538 | 24% |
|  |  | E1 | 1557 | 35 | 284 | 49% | 1563 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1391 | 38 | 250 | 57% | 1318 | 20% |
|  |  | E1 | 1412 | 38 | 252 | 47% | 1436 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1608 | 34 | 312 | 57% | 1472 | 34% |
|  |  | P1 | 1561 | 45 | 176 | 65% | 1354 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1485 | 35 | 280 | 60% | 1338 | 41% |
|  |  | P1 | 1478 | 41 | 212 | 60% | 1338 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1249 | 42 | 196 | 65% | 1058 | 38% |
|  |  | E1 | 1399 | 34 | 304 | 60% | 1257 | 38% |