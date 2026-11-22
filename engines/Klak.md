# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1439<sub>(-22) | 1601<sub>(+102) | 1634<sub>(-68) |  |
| 1.2.0 | 2026-11-14 | 1461<sub>(+53) | 1499<sub>(-55) | 1702<sub>(+63) |  |
| 1.1.0 | 2026-11-08 | 1408<sub>(+13) | 1554<sub>(+73) | 1639<sub>(+34) |  |
| 1.0.0 | 2026-11-06 | 1395 | 1481 | 1605 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1386<sub>(+28) | 1517<sub>(-11) | 1666<sub>(+101) |  |
| 1.2.0 | 2026-11-14 | 1358<sub>(-26) | 1528<sub>(-35) | 1565<sub>(-42) |  |
| 1.1.0 | 2026-11-08 | 1384<sub>(+138) | 1563<sub>(+87) | 1607<sub>(+48) |  |
| 1.0.0 | 2026-11-06 | 1246 | 1476 | 1559 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1246 | 1476 | 1559 |  |
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

Generated: 2026-11-22 05:39:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1200 --> 1800
  line "E1: STC (8.0+0.08s)" [1395, 1408, 1461, 1439]
  line "E1: LTC (60.0+0.60s)" [1481, 1554, 1499, 1601]
  line "E1: VLTC (2m24s+1.12s)" [1605, 1639, 1702, 1634]
  line "P1: STC (8.0+0.08s)" [1246, 1384, 1358, 1386]
  line "P1: LTC (60.0+0.60s)" [1476, 1563, 1528, 1517]
  line "P1: VLTC (2m24s+1.12s)" [1559, 1607, 1565, 1666]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1666 | 61 | 92 | 52% | 1648 | 25% |
|  |  | E1 | 1634 | 45 | 168 | 48% | 1654 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1517 | 54 | 112 | 50% | 1513 | 29% |
|  |  | E1 | 1601 | 42 | 196 | 48% | 1625 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1386 | 63 | 84 | 51% | 1381 | 27% |
|  |  | E1 | 1439 | 45 | 174 | 43% | 1507 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1565 | 109 | 30 | 50% | 1559 | 13% |
|  |  | E1 | 1702 | 87 | 46 | 47% | 1735 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1528 | 92 | 42 | 49% | 1538 | 17% |
|  |  | E1 | 1499 | 84 | 54 | 47% | 1528 | 9% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1358 | 101 | 32 | 47% | 1393 | 25% |
|  |  | E1 | 1461 | 75 | 60 | 50% | 1462 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1639 | 37 | 268 | 49% | 1652 | 19% |
|  |  | P1 | 1607 | 46 | 166 | 53% | 1570 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1554 | 35 | 284 | 49% | 1561 | 23% |
|  |  | P1 | 1563 | 42 | 192 | 53% | 1538 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1408 | 38 | 252 | 47% | 1434 | 22% |
|  |  | P1 | 1384 | 38 | 250 | 57% | 1312 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1559 | 45 | 176 | 65% | 1353 | 36% |
|  |  | E1 | 1605 | 34 | 312 | 57% | 1469 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1476 | 41 | 212 | 60% | 1334 | 31% |
|  |  | E1 | 1481 | 35 | 280 | 60% | 1334 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1246 | 42 | 196 | 65% | 1054 | 38% |
|  |  | E1 | 1395 | 34 | 304 | 60% | 1253 | 38% |