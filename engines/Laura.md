# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-11-22 | 2329<sub>(+185) | 2727<sub>(+267) | 2826<sub>(+158) |  |
| 7.0.0 | 2026-11-14 | 2144<sub>(-36) | 2460<sub>(+129) | 2668<sub>(+161) |  |
| 6.0.0 | 2026-11-12 | 2180<sub>(+175) | 2331<sub>(+63) | 2507<sub>(+166) |  |
| 5.0.0 | 2026-11-10 | 2005<sub>(+370) | 2268<sub>(+414) | 2341<sub>(+443) |  |
| 4.0.0 | 2026-05-09 | 1635 | 1854 | 1898 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2026-11-14 | 2174<sub>(+148) | 2522<sub>(+173) | 2622<sub>(+142) |  |
| 6.0.0 | 2026-11-12 | 2026<sub>(+33) | 2349<sub>(+148) | 2480<sub>(+254) |  |
| 5.0.0 | 2026-11-10 | 1993<sub>(+346) | 2201<sub>(+486) | 2226<sub>(+348) |  |
| 4.0.0 | 2026-05-09 | 1647 | 1715 | 1878 |  |
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

Generated: 2026-11-25 05:39:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 1600 --> 2900
  line "E1: STC (8.0+0.08s)" [1635, 2005, 2180, 2144, 2329]
  line "E1: LTC (60.0+0.60s)" [1854, 2268, 2331, 2460, 2727]
  line "E1: VLTC (2m24s+1.12s)" [1898, 2341, 2507, 2668, 2826]
  line "P1: STC (8.0+0.08s)" [1647, 1993, 2026, 2174]
  line "P1: LTC (60.0+0.60s)" [1715, 2201, 2349, 2522]
  line "P1: VLTC (2m24s+1.12s)" [1878, 2226, 2480, 2622]
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
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2826 | 76 | 58 | 60% | 2727 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2727 | 83 | 52 | 47% | 2730 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2329 | 86 | 44 | 55% | 2287 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2622 | 52 | 130 | 45% | 2672 | 22% |
|  |  | E1 | 2668 | 46 | 172 | 56% | 2612 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2460 | 48 | 154 | 52% | 2441 | 20% |
|  |  | P1 | 2522 | 55 | 110 | 49% | 2527 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2144 | 53 | 128 | 50% | 2134 | 18% |
|  |  | P1 | 2174 | 70 | 68 | 52% | 2153 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2480 | 64 | 86 | 53% | 2448 | 21% |
|  |  | E1 | 2507 | 62 | 92 | 51% | 2493 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2349 | 60 | 92 | 47% | 2376 | 27% |
|  |  | E1 | 2331 | 60 | 96 | 46% | 2371 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2026 | 94 | 40 | 50% | 2026 | 15% |
|  |  | E1 | 2180 | 65 | 82 | 54% | 2129 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2226 | 69 | 72 | 49% | 2230 | 24% |
|  |  | E1 | 2341 | 54 | 120 | 48% | 2357 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2201 | 77 | 68 | 61% | 2080 | 10% |
|  |  | E1 | 2268 | 55 | 122 | 54% | 2198 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1993 | 85 | 50 | 55% | 1937 | 18% |
|  |  | E1 | 2005 | 60 | 106 | 53% | 1947 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1898 | 46 | 192 | 42% | 2044 | 16% |
|  |  | T1 | 1990 | 39 | 238 | 50% | 1995 | 19% |
|  |  | P1 | 1878 | 59 | 116 | 41% | 2024 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1854 | 49 | 168 | 49% | 1904 | 15% |
|  |  | T1 | 1890 | 38 | 268 | 48% | 1910 | 13% |
|  |  | P1 | 1715 | 67 | 100 | 38% | 1921 | 12% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1731 | 37 | 280 | 51% | 1725 | 14% |
|  |  | P1 | 1647 | 72 | 92 | 39% | 1862 | 9% |
|  |  | E1 | 1635 | 50 | 170 | 48% | 1740 | 15% |
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