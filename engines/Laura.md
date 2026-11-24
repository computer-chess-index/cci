# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-11-14 | 2140<sub>(-19) | 2458<sub>(+118) | 2665<sub>(+161) |  |
| 6.0.0 | 2026-11-12 | 2159<sub>(+156) | 2340<sub>(+75) | 2504<sub>(+166) |  |
| 5.0.0 | 2026-11-10 | 2003<sub>(+369) | 2265<sub>(+411) | 2338<sub>(+440) |  |
| 4.0.0 | 2026-05-09 | 1634 | 1854 | 1898 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-11-14 | 2168<sub>(+132) | 2512<sub>(+172) | 2618<sub>(+146) |  |
| 6.0.0 | 2026-11-12 | 2036<sub>(+46) | 2340<sub>(+145) | 2472<sub>(+253) |  |
| 5.0.0 | 2026-11-10 | 1990<sub>(+347) | 2195<sub>(+483) | 2219<sub>(+345) |  |
| 4.0.0 | 2026-05-09 | 1643 | 1712 | 1874 |  |
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

Generated: 2026-11-24 05:39:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 1600 --> 2700
  line "E1: STC (8.0+0.08s)" [1634, 2003, 2159, 2140]
  line "E1: LTC (60.0+0.60s)" [1854, 2265, 2340, 2458]
  line "E1: VLTC (2m24s+1.12s)" [1898, 2338, 2504, 2665]
  line "P1: STC (8.0+0.08s)" [1643, 1990, 2036, 2168]
  line "P1: LTC (60.0+0.60s)" [1712, 2195, 2340, 2512]
  line "P1: VLTC (2m24s+1.12s)" [1874, 2219, 2472, 2618]
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
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2618 | 53 | 126 | 45% | 2665 | 22% |
|  |  | E1 | 2665 | 46 | 172 | 56% | 2610 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2512 | 56 | 106 | 49% | 2518 | 26% |
|  |  | E1 | 2458 | 48 | 154 | 52% | 2441 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2168 | 70 | 68 | 52% | 2148 | 25% |
|  |  | E1 | 2140 | 53 | 128 | 50% | 2130 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2504 | 62 | 92 | 51% | 2492 | 20% |
|  |  | P1 | 2472 | 64 | 86 | 53% | 2441 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2340 | 60 | 92 | 47% | 2368 | 27% |
|  |  | E1 | 2340 | 60 | 92 | 47% | 2371 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2036 | 104 | 32 | 52% | 2022 | 16% |
|  |  | E1 | 2159 | 68 | 72 | 53% | 2121 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2219 | 69 | 72 | 49% | 2223 | 24% |
|  |  | E1 | 2338 | 54 | 120 | 48% | 2356 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2195 | 77 | 68 | 61% | 2075 | 10% |
|  |  | E1 | 2265 | 55 | 122 | 54% | 2195 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1990 | 85 | 50 | 55% | 1933 | 18% |
|  |  | E1 | 2003 | 60 | 106 | 53% | 1945 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1874 | 59 | 116 | 41% | 2018 | 16% |
|  |  | E1 | 1898 | 46 | 192 | 42% | 2043 | 16% |
|  |  | T1 | 1990 | 39 | 238 | 50% | 1995 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1712 | 67 | 100 | 38% | 1916 | 12% |
|  |  | E1 | 1854 | 49 | 168 | 49% | 1902 | 15% |
|  |  | T1 | 1890 | 38 | 268 | 48% | 1910 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1643 | 72 | 92 | 39% | 1858 | 9% |
|  |  | E1 | 1634 | 50 | 170 | 48% | 1739 | 15% |
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