# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-11-12 | 2167<sub>(+162) | 2340<sub>(+76) | 2504<sub>(+164) |  |
| 5.0.0 | 2026-11-10 | 2005<sub>(+369) | 2264<sub>(+410) | 2340<sub>(+442) |  |
| 4.0.0 | 2026-05-09 | 1636 | 1854 | 1898 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-11-12 | 2026<sub>(+44) | 2329<sub>(+146) | 2456<sub>(+247) |  |
| 5.0.0 | 2026-11-10 | 1982<sub>(+343) | 2183<sub>(+478) | 2209<sub>(+346) |  |
| 4.0.0 | 2026-05-09 | 1639 | 1705 | 1863 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1731<sub>(+154) | 1890<sub>(+186) | 1990<sub>(+173) |  |
| 3.0.0 | 2026-04-29 | 1577<sub>(+213) | 1704<sub>(+33) | 1817<sub>(+121) |  |
| 2.0.0 | 2026-04-23 | 1364<sub>(+61) | 1671<sub>(+187) | 1696<sub>(+283) |  |
| 1.1.0 | 2026-01-26 | 1303 | 1484 | 1413 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Laura+<version>&body=###%20Engine%20name%0ALaura%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:39:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 1600 --> 2600
  line "E1: STC (8.0+0.08s)" [1636, 2005, 2167]
  line "E1: LTC (60.0+0.60s)" [1854, 2264, 2340]
  line "E1: VLTC (2m24s+1.12s)" [1898, 2340, 2504]
  line "P1: STC (8.0+0.08s)" [1639, 1982, 2026]
  line "P1: LTC (60.0+0.60s)" [1705, 2183, 2329]
  line "P1: VLTC (2m24s+1.12s)" [1863, 2209, 2456]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1300 --> 2000
  line "T1: STC (8.0+0.08s)" [1303, 1364, 1577, 1731]
  line "T1: LTC (60.0+0.60s)" [1484, 1671, 1704, 1890]
  line "T1: VLTC (2m24s+1.12s)" [1413, 1696, 1817, 1990]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2504 | 64 | 88 | 52% | 2485 | 19% |
|  |  | P1 | 2456 | 66 | 80 | 54% | 2423 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2329 | 61 | 88 | 47% | 2357 | 28% |
|  |  | E1 | 2340 | 60 | 92 | 47% | 2371 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2026 | 110 | 28 | 52% | 2010 | 18% |
|  |  | E1 | 2167 | 70 | 68 | 54% | 2121 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2209 | 69 | 72 | 49% | 2213 | 24% |
|  |  | E1 | 2340 | 54 | 120 | 48% | 2356 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2183 | 77 | 68 | 61% | 2063 | 10% |
|  |  | E1 | 2264 | 55 | 122 | 54% | 2194 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1982 | 85 | 50 | 55% | 1926 | 18% |
|  |  | E1 | 2005 | 60 | 106 | 53% | 1947 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1863 | 59 | 116 | 41% | 2007 | 16% |
|  |  | E1 | 1898 | 46 | 192 | 42% | 2043 | 16% |
|  |  | T1 | 1990 | 39 | 238 | 50% | 1995 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1705 | 67 | 100 | 38% | 1909 | 12% |
|  |  | E1 | 1854 | 49 | 168 | 49% | 1902 | 15% |
|  |  | T1 | 1890 | 38 | 268 | 48% | 1910 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1639 | 72 | 92 | 39% | 1852 | 9% |
|  |  | E1 | 1636 | 50 | 170 | 48% | 1740 | 15% |
|  |  | T1 | 1731 | 37 | 280 | 51% | 1725 | 14% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1817 | 51 | 152 | 50% | 1797 | 13% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1704 | 53 | 136 | 50% | 1712 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1577 | 54 | 126 | 49% | 1585 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1696 | 56 | 98 | 53% | 1675 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1671 | 55 | 104 | 48% | 1698 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1364 | 56 | 108 | 55% | 1293 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1413 | 52 | 132 | 43% | 1589 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1484 | 51 | 134 | 43% | 1611 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1303 | 62 | 134 | 47% | 1347 | 25% |