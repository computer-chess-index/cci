# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-11-12 | 2206<sub>(+192) | 2406<sub>(+146) | 2477<sub>(+137) |  |
| 5.0.0 | 2026-11-10 | 2014<sub>(+364) | 2260<sub>(+400) | 2340<sub>(+438) |  |
| 4.0.0 | 2026-05-09 | 1650 | 1860 | 1902 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-11-12 | 2028<sub>(+21) | 2279<sub>(+124) | 2519<sub>(+328) |  |
| 5.0.0 | 2026-11-10 | 2007<sub>(+373) | 2155<sub>(+461) | 2191<sub>(+337) |  |
| 4.0.0 | 2026-05-09 | 1634 | 1694 | 1854 |  |
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

Generated: 2026-11-15 05:39:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 1600 --> 2600
  line "E1: STC (8.0+0.08s)" [1650, 2014, 2206]
  line "E1: LTC (60.0+0.60s)" [1860, 2260, 2406]
  line "E1: VLTC (2m24s+1.12s)" [1902, 2340, 2477]
  line "P1: STC (8.0+0.08s)" [1634, 2007, 2028]
  line "P1: LTC (60.0+0.60s)" [1694, 2155, 2279]
  line "P1: VLTC (2m24s+1.12s)" [1854, 2191, 2519]
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
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2519 | 211 | 8 | 88% | 2217 | 25% |
|  |  | E1 | 2477 | 98 | 32 | 52% | 2464 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2279 | 159 | 12 | 54% | 2257 | 25% |
|  |  | E1 | 2406 | 92 | 40 | 56% | 2354 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2028 | 110 | 28 | 52% | 2009 | 18% |
|  |  | E1 | 2206 | 103 | 32 | 58% | 2126 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2191 | 69 | 72 | 49% | 2195 | 24% |
|  |  | E1 | 2340 | 54 | 120 | 48% | 2357 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2260 | 57 | 116 | 54% | 2188 | 22% |
|  |  | P1 | 2155 | 85 | 56 | 62% | 2032 | 9% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2014 | 60 | 106 | 53% | 1955 | 17% |
|  |  | P1 | 2007 | 89 | 46 | 59% | 1916 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1990 | 39 | 238 | 50% | 1995 | 19% |
|  |  | P1 | 1854 | 59 | 116 | 41% | 1998 | 16% |
|  |  | E1 | 1902 | 46 | 192 | 42% | 2045 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1890 | 38 | 268 | 48% | 1910 | 13% |
|  |  | P1 | 1694 | 67 | 100 | 38% | 1898 | 12% |
|  |  | E1 | 1860 | 49 | 168 | 49% | 1909 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1731 | 37 | 280 | 51% | 1725 | 14% |
|  |  | P1 | 1634 | 71 | 92 | 39% | 1847 | 9% |
|  |  | E1 | 1650 | 50 | 170 | 48% | 1752 | 15% |
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