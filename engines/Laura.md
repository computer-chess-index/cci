# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-11-22 | 2334<sub>(+187) | 2711<sub>(+242) | 2817<sub>(+152) |  |
| 7.0.0 | 2026-11-14 | 2147<sub>(-35) | 2469<sub>(+136) | 2665<sub>(+159) |  |
| 6.0.0 | 2026-11-12 | 2182<sub>(+176) | 2333<sub>(+62) | 2506<sub>(+164) |  |
| 5.0.0 | 2026-11-10 | 2006<sub>(+370) | 2271<sub>(+416) | 2342<sub>(+441) |  |
| 4.0.0 | 2026-05-09 | 1636 | 1855 | 1901 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-11-22 | 2329<sub>(+168) | 2553<sub>(+33) | 2796<sub>(+173) |  |
| 7.0.0 | 2026-11-14 | 2161<sub>(+135) | 2520<sub>(+170) | 2623<sub>(+144) |  |
| 6.0.0 | 2026-11-12 | 2026<sub>(+33) | 2350<sub>(+148) | 2479<sub>(+253) |  |
| 5.0.0 | 2026-11-10 | 1993<sub>(+345) | 2202<sub>(+486) | 2226<sub>(+348) |  |
| 4.0.0 | 2026-05-09 | 1648 | 1716 | 1878 |  |
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

Generated: 2026-11-26 05:39:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 1600 --> 2900
  line "E1: STC (8.0+0.08s)" [1636, 2006, 2182, 2147, 2334]
  line "E1: LTC (60.0+0.60s)" [1855, 2271, 2333, 2469, 2711]
  line "E1: VLTC (2m24s+1.12s)" [1901, 2342, 2506, 2665, 2817]
  line "P1: STC (8.0+0.08s)" [1648, 1993, 2026, 2161, 2329]
  line "P1: LTC (60.0+0.60s)" [1716, 2202, 2350, 2520, 2553]
  line "P1: VLTC (2m24s+1.12s)" [1878, 2226, 2479, 2623, 2796]
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
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2796 | 91 | 40 | 56% | 2739 | 28% |
|  |  | E1 | 2817 | 59 | 94 | 56% | 2757 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2553 | 107 | 28 | 41% | 2637 | 32% |
|  |  | E1 | 2711 | 55 | 118 | 47% | 2738 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2329 | 71 | 70 | 49% | 2334 | 19% |
|  |  | E1 | 2334 | 87 | 44 | 55% | 2294 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2665 | 46 | 172 | 56% | 2611 | 19% |
|  |  | P1 | 2623 | 52 | 130 | 45% | 2672 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2469 | 47 | 158 | 53% | 2442 | 20% |
|  |  | P1 | 2520 | 55 | 110 | 49% | 2525 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2161 | 69 | 72 | 51% | 2155 | 24% |
|  |  | E1 | 2147 | 53 | 128 | 50% | 2136 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2479 | 64 | 86 | 53% | 2448 | 21% |
|  |  | E1 | 2506 | 62 | 92 | 51% | 2493 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2350 | 60 | 92 | 47% | 2377 | 27% |
|  |  | E1 | 2333 | 60 | 96 | 46% | 2372 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2026 | 94 | 40 | 50% | 2026 | 15% |
|  |  | E1 | 2182 | 65 | 82 | 54% | 2130 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2226 | 69 | 72 | 49% | 2232 | 24% |
|  |  | E1 | 2342 | 54 | 120 | 48% | 2358 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2271 | 55 | 122 | 54% | 2199 | 23% |
|  |  | P1 | 2202 | 77 | 68 | 61% | 2082 | 10% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2006 | 60 | 106 | 53% | 1948 | 17% |
|  |  | P1 | 1993 | 85 | 50 | 55% | 1937 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1990 | 39 | 238 | 50% | 1995 | 19% |
|  |  | P1 | 1878 | 59 | 116 | 41% | 2022 | 16% |
|  |  | E1 | 1901 | 46 | 192 | 42% | 2045 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1890 | 38 | 268 | 48% | 1910 | 13% |
|  |  | P1 | 1716 | 67 | 100 | 38% | 1920 | 12% |
|  |  | E1 | 1855 | 49 | 168 | 49% | 1905 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1731 | 37 | 280 | 51% | 1725 | 14% |
|  |  | P1 | 1648 | 72 | 92 | 39% | 1863 | 9% |
|  |  | E1 | 1636 | 50 | 170 | 48% | 1740 | 15% |
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