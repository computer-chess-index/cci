# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1640<sub>(+173) | 1867<sub>(+104) | 2022<sub>(+156) |  |
| 1.9 | 2026-10-30 | 1467<sub>(+82) | 1763<sub>(+50) | 1866<sub>(+68) |  |
| 1.8 | 2026-10-23 | 1385<sub>(+27) | 1713<sub>(+7) | 1798<sub>(+2) |  |
| 1.7 | 2026-10-16 | 1358<sub>(-76) | 1706<sub>(-7) | 1796<sub>(-22) |  |
| 1.4 | 2026-10-06 | 1434 | 1713 | 1818 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1544<sub>(+120) | 1879<sub>(+43) | 1963<sub>(+80) |  |
| 1.9 | 2026-10-30 | 1424<sub>(+36) | 1836<sub>(+162) | 1883<sub>(+11) |  |
| 1.8 | 2026-10-23 | 1388<sub>(+37) | 1674<sub>(-54) | 1872<sub>(+28) |  |
| 1.7 | 2026-10-16 | 1351<sub>(-81) | 1728<sub>(+90) | 1844<sub>(-35) |  |
| 1.4 | 2026-10-06 | 1432 | 1638 | 1879 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1432 | 1638 | 1879 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Russell+<version>&body=###%20Engine%20name%0ARussell%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:42:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9", "2.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "E1: STC (8.0+0.08s)" [1434, 1358, 1385, 1467, 1640]
  line "E1: LTC (60.0+0.60s)" [1713, 1706, 1713, 1763, 1867]
  line "E1: VLTC (2m24s+1.12s)" [1818, 1796, 1798, 1866, 2022]
  line "P1: STC (8.0+0.08s)" [1432, 1351, 1388, 1424, 1544]
  line "P1: LTC (60.0+0.60s)" [1638, 1728, 1674, 1836, 1879]
  line "P1: VLTC (2m24s+1.12s)" [1879, 1844, 1872, 1883, 1963]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1963 | 39 | 204 | 53% | 1932 | 38% |
|  |  | E1 | 2022 | 36 | 246 | 50% | 2025 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1879 | 44 | 164 | 50% | 1882 | 34% |
|  |  | E1 | 1867 | 32 | 292 | 51% | 1862 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1544 | 36 | 234 | 55% | 1499 | 41% |
|  |  | E1 | 1640 | 32 | 318 | 51% | 1634 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1883 | 46 | 152 | 55% | 1839 | 32% |
|  |  | E1 | 1866 | 36 | 252 | 51% | 1867 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1836 | 42 | 188 | 47% | 1870 | 34% |
|  |  | E1 | 1763 | 34 | 300 | 53% | 1743 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1424 | 42 | 190 | 56% | 1368 | 34% |
|  |  | E1 | 1467 | 35 | 260 | 50% | 1467 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1872 | 55 | 108 | 53% | 1845 | 31% |
|  |  | E1 | 1798 | 37 | 232 | 51% | 1814 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1674 | 48 | 148 | 51% | 1701 | 30% |
|  |  | E1 | 1713 | 38 | 224 | 49% | 1724 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1388 | 56 | 100 | 50% | 1388 | 32% |
|  |  | E1 | 1385 | 39 | 214 | 52% | 1369 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1796 | 39 | 214 | 49% | 1806 | 29% |
|  |  | P1 | 1844 | 53 | 120 | 43% | 1926 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1706 | 40 | 208 | 52% | 1696 | 29% |
|  |  | P1 | 1728 | 54 | 108 | 51% | 1719 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1351 | 50 | 140 | 50% | 1373 | 25% |
|  |  | E1 | 1358 | 40 | 204 | 53% | 1337 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1879 | 50 | 144 | 55% | 1818 | 26% |
|  |  | E1 | 1818 | 39 | 222 | 55% | 1766 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1638 | 59 | 120 | 69% | 1350 | 25% |
|  |  | E1 | 1713 | 41 | 210 | 57% | 1604 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1432 | 54 | 128 | 44% | 1548 | 27% |
|  |  | E1 | 1434 | 45 | 168 | 53% | 1413 | 30% |