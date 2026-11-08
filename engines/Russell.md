# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1670<sub>(+143) | 1917<sub>(+105) | 2072<sub>(+156) |  |
| 1.9 | 2026-10-30 | 1527<sub>(+97) | 1812<sub>(+54) | 1916<sub>(+71) |  |
| 1.8 | 2026-10-23 | 1430<sub>(+29) | 1758<sub>(+10) | 1845<sub>(+2) |  |
| 1.7 | 2026-10-16 | 1401<sub>(-79) | 1748<sub>(-7) | 1843<sub>(-23) |  |
| 1.4 | 2026-10-06 | 1480 | 1755 | 1866 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1558<sub>(+99) | 1964<sub>(+50) | 2014<sub>(+70) |  |
| 1.9 | 2026-10-30 | 1459<sub>(+44) | 1914<sub>(+193) | 1944<sub>(+4) |  |
| 1.8 | 2026-10-23 | 1415<sub>(+47) | 1721<sub>(-62) | 1940<sub>(+22) |  |
| 1.7 | 2026-10-16 | 1368<sub>(-104) | 1783<sub>(+108) | 1918<sub>(-26) |  |
| 1.4 | 2026-10-06 | 1472 | 1675 | 1944 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1472 | 1675 | 1944 |  |
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

Generated: 2026-11-08 05:41:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9", "2.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "E1: STC (8.0+0.08s)" [1480, 1401, 1430, 1527, 1670]
  line "E1: LTC (60.0+0.60s)" [1755, 1748, 1758, 1812, 1917]
  line "E1: VLTC (2m24s+1.12s)" [1866, 1843, 1845, 1916, 2072]
  line "P1: STC (8.0+0.08s)" [1472, 1368, 1415, 1459, 1558]
  line "P1: LTC (60.0+0.60s)" [1675, 1783, 1721, 1914, 1964]
  line "P1: VLTC (2m24s+1.12s)" [1944, 1918, 1940, 1944, 2014]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2014 | 53 | 108 | 50% | 2012 | 38% |
|  |  | E1 | 2072 | 39 | 210 | 50% | 2067 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1964 | 54 | 104 | 49% | 1974 | 38% |
|  |  | E1 | 1917 | 38 | 212 | 51% | 1908 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1670 | 36 | 254 | 50% | 1674 | 32% |
|  |  | P1 | 1558 | 52 | 116 | 57% | 1496 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1944 | 52 | 116 | 53% | 1913 | 34% |
|  |  | E1 | 1916 | 39 | 212 | 51% | 1912 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1914 | 49 | 136 | 49% | 1926 | 31% |
|  |  | E1 | 1812 | 36 | 264 | 54% | 1782 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1459 | 47 | 140 | 53% | 1438 | 37% |
|  |  | E1 | 1527 | 37 | 236 | 51% | 1513 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1845 | 37 | 232 | 51% | 1862 | 36% |
|  |  | P1 | 1940 | 55 | 108 | 53% | 1914 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1721 | 48 | 148 | 51% | 1752 | 30% |
|  |  | E1 | 1758 | 38 | 224 | 49% | 1770 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1415 | 56 | 100 | 50% | 1413 | 32% |
|  |  | E1 | 1430 | 39 | 214 | 52% | 1413 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1918 | 53 | 120 | 43% | 2002 | 31% |
|  |  | E1 | 1843 | 39 | 214 | 49% | 1852 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1783 | 54 | 108 | 51% | 1771 | 31% |
|  |  | E1 | 1748 | 40 | 208 | 52% | 1737 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1368 | 50 | 140 | 50% | 1393 | 25% |
|  |  | E1 | 1401 | 40 | 204 | 53% | 1380 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1944 | 50 | 144 | 55% | 1882 | 26% |
|  |  | E1 | 1866 | 39 | 222 | 55% | 1813 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1675 | 60 | 120 | 69% | 1380 | 25% |
|  |  | E1 | 1755 | 41 | 210 | 57% | 1643 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1472 | 54 | 128 | 44% | 1594 | 27% |
|  |  | E1 | 1480 | 45 | 168 | 53% | 1458 | 30% |