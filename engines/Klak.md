# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1440<sub>(-49) | 1600<sub>(+70) | 1640<sub>(-77) |  |
| 1.2.0 | 2026-11-14 | 1489<sub>(+78) | 1530<sub>(-28) | 1717<sub>(+74) |  |
| 1.1.0 | 2026-11-08 | 1411<sub>(+12) | 1558<sub>(+76) | 1643<sub>(+35) |  |
| 1.0.0 | 2026-11-06 | 1399 | 1482 | 1608 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-11-16 | 1384<sub>(-32) | 1532<sub>(-25) | 1665<sub>(+41) |  |
| 1.2.0 | 2026-11-14 | 1416<sub>(+25) | 1557<sub>(-13) | 1624<sub>(+11) |  |
| 1.1.0 | 2026-11-08 | 1391<sub>(+142) | 1570<sub>(+88) | 1613<sub>(+46) |  |
| 1.0.0 | 2026-11-06 | 1249 | 1482 | 1567 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1249 | 1482 | 1567 |  |
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

Generated: 2026-11-27 05:39:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1200 --> 1800
  line "E1: STC (8.0+0.08s)" [1399, 1411, 1489, 1440]
  line "E1: LTC (60.0+0.60s)" [1482, 1558, 1530, 1600]
  line "E1: VLTC (2m24s+1.12s)" [1608, 1643, 1717, 1640]
  line "P1: STC (8.0+0.08s)" [1249, 1391, 1416, 1384]
  line "P1: LTC (60.0+0.60s)" [1482, 1570, 1557, 1532]
  line "P1: VLTC (2m24s+1.12s)" [1567, 1613, 1624, 1665]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1665 | 59 | 96 | 51% | 1656 | 26% |
|  |  | E1 | 1640 | 44 | 180 | 49% | 1655 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1532 | 53 | 116 | 51% | 1520 | 28% |
|  |  | E1 | 1600 | 40 | 220 | 48% | 1625 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1384 | 55 | 112 | 50% | 1389 | 26% |
|  |  | E1 | 1440 | 43 | 186 | 44% | 1505 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1624 | 83 | 50 | 55% | 1578 | 22% |
|  |  | E1 | 1717 | 83 | 50 | 48% | 1736 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1557 | 73 | 66 | 51% | 1547 | 20% |
|  |  | E1 | 1530 | 64 | 90 | 50% | 1530 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1416 | 81 | 52 | 52% | 1401 | 23% |
|  |  | E1 | 1489 | 65 | 80 | 53% | 1467 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1613 | 46 | 166 | 53% | 1575 | 19% |
|  |  | E1 | 1643 | 37 | 268 | 49% | 1655 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1570 | 42 | 192 | 53% | 1544 | 24% |
|  |  | E1 | 1558 | 35 | 284 | 49% | 1563 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1391 | 38 | 250 | 57% | 1318 | 20% |
|  |  | E1 | 1411 | 38 | 252 | 47% | 1436 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1608 | 34 | 312 | 57% | 1472 | 34% |
|  |  | P1 | 1567 | 45 | 176 | 65% | 1359 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1482 | 35 | 280 | 60% | 1335 | 41% |
|  |  | P1 | 1482 | 42 | 212 | 60% | 1341 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1249 | 42 | 196 | 65% | 1058 | 38% |
|  |  | E1 | 1399 | 34 | 304 | 60% | 1256 | 38% |