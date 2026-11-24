# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1642<sub>(+175) | 1871<sub>(+108) | 2022<sub>(+155) |  |
| 1.9 | 2026-10-30 | 1467<sub>(+81) | 1763<sub>(+48) | 1867<sub>(+66) |  |
| 1.8 | 2026-10-23 | 1386<sub>(+27) | 1715<sub>(+7) | 1801<sub>(+3) |  |
| 1.7 | 2026-10-16 | 1359<sub>(-76) | 1708<sub>(-7) | 1798<sub>(-23) |  |
| 1.4 | 2026-10-06 | 1435 | 1715 | 1821 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1546<sub>(+120) | 1882<sub>(+43) | 1966<sub>(+80) |  |
| 1.9 | 2026-10-30 | 1426<sub>(+35) | 1839<sub>(+164) | 1886<sub>(+12) |  |
| 1.8 | 2026-10-23 | 1391<sub>(+38) | 1675<sub>(-56) | 1874<sub>(+27) |  |
| 1.7 | 2026-10-16 | 1353<sub>(-81) | 1731<sub>(+92) | 1847<sub>(-34) |  |
| 1.4 | 2026-10-06 | 1434 | 1639 | 1881 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1434 | 1639 | 1881 |  |
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

Generated: 2026-11-24 05:42:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9", "2.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "E1: STC (8.0+0.08s)" [1435, 1359, 1386, 1467, 1642]
  line "E1: LTC (60.0+0.60s)" [1715, 1708, 1715, 1763, 1871]
  line "E1: VLTC (2m24s+1.12s)" [1821, 1798, 1801, 1867, 2022]
  line "P1: STC (8.0+0.08s)" [1434, 1353, 1391, 1426, 1546]
  line "P1: LTC (60.0+0.60s)" [1639, 1731, 1675, 1839, 1882]
  line "P1: VLTC (2m24s+1.12s)" [1881, 1847, 1874, 1886, 1966]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1966 | 39 | 204 | 53% | 1933 | 38% |
|  |  | E1 | 2022 | 36 | 250 | 50% | 2025 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1882 | 44 | 164 | 50% | 1883 | 34% |
|  |  | E1 | 1871 | 32 | 296 | 51% | 1864 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1546 | 36 | 234 | 55% | 1500 | 41% |
|  |  | E1 | 1642 | 32 | 318 | 51% | 1635 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1867 | 36 | 252 | 51% | 1868 | 34% |
|  |  | P1 | 1886 | 46 | 152 | 55% | 1841 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1839 | 42 | 188 | 47% | 1872 | 34% |
|  |  | E1 | 1763 | 33 | 304 | 52% | 1746 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1426 | 42 | 190 | 56% | 1368 | 34% |
|  |  | E1 | 1467 | 36 | 260 | 50% | 1467 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1874 | 55 | 108 | 53% | 1847 | 31% |
|  |  | E1 | 1801 | 37 | 232 | 51% | 1816 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1675 | 48 | 148 | 51% | 1702 | 30% |
|  |  | E1 | 1715 | 38 | 224 | 49% | 1727 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1391 | 56 | 100 | 50% | 1389 | 32% |
|  |  | E1 | 1386 | 39 | 214 | 52% | 1370 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1847 | 53 | 120 | 43% | 1928 | 31% |
|  |  | E1 | 1798 | 39 | 214 | 49% | 1808 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1731 | 54 | 108 | 51% | 1720 | 31% |
|  |  | E1 | 1708 | 40 | 208 | 52% | 1697 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1353 | 50 | 140 | 50% | 1376 | 25% |
|  |  | E1 | 1359 | 40 | 204 | 53% | 1338 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1881 | 50 | 144 | 55% | 1821 | 26% |
|  |  | E1 | 1821 | 39 | 222 | 55% | 1769 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1639 | 59 | 120 | 69% | 1351 | 25% |
|  |  | E1 | 1715 | 41 | 210 | 57% | 1605 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1435 | 45 | 168 | 53% | 1413 | 30% |
|  |  | P1 | 1434 | 54 | 128 | 44% | 1550 | 27% |