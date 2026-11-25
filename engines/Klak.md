# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1440<sub>(-49) | 1604<sub>(+81) | 1640<sub>(-76) |  |
| 1.2.0 | 2026-11-14 | 1489<sub>(+78) | 1523<sub>(-35) | 1716<sub>(+74) |  |
| 1.1.0 | 2026-11-08 | 1411<sub>(+12) | 1558<sub>(+76) | 1642<sub>(+34) |  |
| 1.0.0 | 2026-11-06 | 1399 | 1482 | 1608 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1384<sub>(-32) | 1523<sub>(-34) | 1665<sub>(+41) |  |
| 1.2.0 | 2026-11-14 | 1416<sub>(+27) | 1557<sub>(-12) | 1624<sub>(+11) |  |
| 1.1.0 | 2026-11-08 | 1389<sub>(+140) | 1569<sub>(+88) | 1613<sub>(+47) |  |
| 1.0.0 | 2026-11-06 | 1249 | 1481 | 1566 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1249 | 1481 | 1566 |  |
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

Generated: 2026-11-25 05:39:30

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1200 --> 1800
  line "E1: STC (8.0+0.08s)" [1399, 1411, 1489, 1440]
  line "E1: LTC (60.0+0.60s)" [1482, 1558, 1523, 1604]
  line "E1: VLTC (2m24s+1.12s)" [1608, 1642, 1716, 1640]
  line "P1: STC (8.0+0.08s)" [1249, 1389, 1416, 1384]
  line "P1: LTC (60.0+0.60s)" [1481, 1569, 1557, 1523]
  line "P1: VLTC (2m24s+1.12s)" [1566, 1613, 1624, 1665]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1665 | 59 | 96 | 51% | 1656 | 26% |
|  |  | E1 | 1640 | 44 | 176 | 49% | 1655 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1523 | 54 | 112 | 50% | 1519 | 29% |
|  |  | E1 | 1604 | 40 | 216 | 48% | 1627 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1384 | 58 | 100 | 50% | 1389 | 27% |
|  |  | E1 | 1440 | 43 | 186 | 44% | 1505 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1624 | 83 | 50 | 55% | 1577 | 22% |
|  |  | E1 | 1716 | 83 | 50 | 48% | 1736 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1557 | 73 | 66 | 51% | 1546 | 20% |
|  |  | E1 | 1523 | 72 | 70 | 50% | 1524 | 14% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1416 | 81 | 52 | 52% | 1400 | 23% |
|  |  | E1 | 1489 | 65 | 80 | 53% | 1467 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1613 | 46 | 166 | 53% | 1575 | 19% |
|  |  | E1 | 1642 | 37 | 268 | 49% | 1654 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1569 | 42 | 192 | 53% | 1543 | 24% |
|  |  | E1 | 1558 | 35 | 284 | 49% | 1563 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1411 | 38 | 252 | 47% | 1436 | 22% |
|  |  | P1 | 1389 | 38 | 250 | 57% | 1318 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1566 | 45 | 176 | 65% | 1359 | 36% |
|  |  | E1 | 1608 | 34 | 312 | 57% | 1470 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1481 | 42 | 212 | 60% | 1339 | 31% |
|  |  | E1 | 1482 | 35 | 280 | 60% | 1335 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1249 | 42 | 196 | 65% | 1058 | 38% |
|  |  | E1 | 1399 | 34 | 304 | 60% | 1256 | 38% |