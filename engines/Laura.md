# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-11-14 | 2138<sub>(-21) | 2456<sub>(+118) | 2664<sub>(+161) |  |
| 6.0.0 | 2026-11-12 | 2159<sub>(+158) | 2338<sub>(+74) | 2503<sub>(+166) |  |
| 5.0.0 | 2026-11-10 | 2001<sub>(+369) | 2264<sub>(+413) | 2337<sub>(+442) |  |
| 4.0.0 | 2026-05-09 | 1632 | 1851 | 1895 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-11-14 | 2165<sub>(+132) | 2508<sub>(+171) | 2615<sub>(+146) |  |
| 6.0.0 | 2026-11-12 | 2033<sub>(+46) | 2337<sub>(+143) | 2469<sub>(+252) |  |
| 5.0.0 | 2026-11-10 | 1987<sub>(+347) | 2194<sub>(+485) | 2217<sub>(+346) |  |
| 4.0.0 | 2026-05-09 | 1640 | 1709 | 1871 |  |
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

Generated: 2026-11-23 05:39:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 1600 --> 2700
  line "E1: STC (8.0+0.08s)" [1632, 2001, 2159, 2138]
  line "E1: LTC (60.0+0.60s)" [1851, 2264, 2338, 2456]
  line "E1: VLTC (2m24s+1.12s)" [1895, 2337, 2503, 2664]
  line "P1: STC (8.0+0.08s)" [1640, 1987, 2033, 2165]
  line "P1: LTC (60.0+0.60s)" [1709, 2194, 2337, 2508]
  line "P1: VLTC (2m24s+1.12s)" [1871, 2217, 2469, 2615]
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
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2615 | 53 | 126 | 45% | 2662 | 22% |
|  |  | E1 | 2664 | 46 | 172 | 56% | 2608 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2508 | 58 | 98 | 49% | 2514 | 27% |
|  |  | E1 | 2456 | 49 | 150 | 52% | 2438 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2165 | 70 | 68 | 52% | 2145 | 25% |
|  |  | E1 | 2138 | 55 | 124 | 50% | 2129 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2469 | 64 | 86 | 53% | 2438 | 21% |
|  |  | E1 | 2503 | 62 | 92 | 51% | 2489 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2337 | 60 | 92 | 47% | 2365 | 27% |
|  |  | E1 | 2338 | 60 | 92 | 47% | 2368 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2033 | 104 | 32 | 52% | 2020 | 16% |
|  |  | E1 | 2159 | 68 | 72 | 53% | 2121 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2217 | 69 | 72 | 49% | 2221 | 24% |
|  |  | E1 | 2337 | 54 | 120 | 48% | 2354 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2194 | 77 | 68 | 61% | 2072 | 10% |
|  |  | E1 | 2264 | 55 | 122 | 54% | 2192 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1987 | 85 | 50 | 55% | 1932 | 18% |
|  |  | E1 | 2001 | 60 | 106 | 53% | 1943 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1990 | 39 | 238 | 50% | 1995 | 19% |
|  |  | P1 | 1871 | 59 | 116 | 41% | 2016 | 16% |
|  |  | E1 | 1895 | 46 | 192 | 42% | 2040 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1890 | 38 | 268 | 48% | 1910 | 13% |
|  |  | P1 | 1709 | 67 | 100 | 38% | 1914 | 12% |
|  |  | E1 | 1851 | 49 | 168 | 49% | 1901 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1731 | 37 | 280 | 51% | 1725 | 14% |
|  |  | P1 | 1640 | 72 | 92 | 39% | 1856 | 9% |
|  |  | E1 | 1632 | 50 | 170 | 48% | 1737 | 15% |
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