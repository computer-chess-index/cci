# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1683<sub>(+153) | 1931<sub>(+113) | 2076<sub>(+158) |  |
| 1.9 | 2026-10-30 | 1530<sub>(+100) | 1818<sub>(+52) | 1918<sub>(+67) |  |
| 1.8 | 2026-10-23 | 1430<sub>(+29) | 1766<sub>(+10) | 1851<sub>(+1) |  |
| 1.7 | 2026-10-16 | 1401<sub>(-80) | 1756<sub>(-7) | 1850<sub>(-21) |  |
| 1.4 | 2026-10-06 | 1481 | 1763 | 1871 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1574<sub>(+120) | 1963<sub>(+51) | 2036<sub>(+93) |  |
| 1.9 | 2026-10-30 | 1454<sub>(+46) | 1912<sub>(+192) | 1943<sub>(+4) |  |
| 1.8 | 2026-10-23 | 1408<sub>(+44) | 1720<sub>(-63) | 1939<sub>(+21) |  |
| 1.7 | 2026-10-16 | 1364<sub>(-102) | 1783<sub>(+110) | 1918<sub>(-26) |  |
| 1.4 | 2026-10-06 | 1466 | 1673 | 1944 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1466 | 1673 | 1944 |  |
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

Generated: 2026-11-10 05:42:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9", "2.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "E1: STC (8.0+0.08s)" [1481, 1401, 1430, 1530, 1683]
  line "E1: LTC (60.0+0.60s)" [1763, 1756, 1766, 1818, 1931]
  line "E1: VLTC (2m24s+1.12s)" [1871, 1850, 1851, 1918, 2076]
  line "P1: STC (8.0+0.08s)" [1466, 1364, 1408, 1454, 1574]
  line "P1: LTC (60.0+0.60s)" [1673, 1783, 1720, 1912, 1963]
  line "P1: VLTC (2m24s+1.12s)" [1944, 1918, 1939, 1943, 2036]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2036 | 42 | 168 | 52% | 2018 | 40% |
|  |  | E1 | 2076 | 38 | 220 | 50% | 2072 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1963 | 50 | 124 | 49% | 1972 | 34% |
|  |  | E1 | 1931 | 36 | 236 | 52% | 1916 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1574 | 39 | 200 | 55% | 1530 | 39% |
|  |  | E1 | 1683 | 35 | 274 | 51% | 1681 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1943 | 52 | 116 | 53% | 1912 | 34% |
|  |  | E1 | 1918 | 39 | 212 | 51% | 1914 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1912 | 49 | 136 | 49% | 1924 | 31% |
|  |  | E1 | 1818 | 36 | 264 | 54% | 1789 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1454 | 47 | 140 | 53% | 1432 | 37% |
|  |  | E1 | 1530 | 37 | 236 | 51% | 1516 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1939 | 55 | 108 | 53% | 1913 | 31% |
|  |  | E1 | 1851 | 37 | 232 | 51% | 1867 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1720 | 48 | 148 | 51% | 1751 | 30% |
|  |  | E1 | 1766 | 38 | 224 | 49% | 1777 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1408 | 56 | 100 | 50% | 1408 | 32% |
|  |  | E1 | 1430 | 39 | 214 | 52% | 1413 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1918 | 53 | 120 | 43% | 2001 | 31% |
|  |  | E1 | 1850 | 39 | 214 | 49% | 1859 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1783 | 54 | 108 | 51% | 1771 | 31% |
|  |  | E1 | 1756 | 40 | 208 | 52% | 1744 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1364 | 50 | 140 | 50% | 1389 | 25% |
|  |  | E1 | 1401 | 40 | 204 | 53% | 1378 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1944 | 50 | 144 | 55% | 1882 | 26% |
|  |  | E1 | 1871 | 39 | 222 | 55% | 1818 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1763 | 41 | 210 | 57% | 1650 | 31% |
|  |  | P1 | 1673 | 60 | 120 | 69% | 1377 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1481 | 45 | 168 | 53% | 1459 | 30% |
|  |  | P1 | 1466 | 54 | 128 | 44% | 1589 | 27% |