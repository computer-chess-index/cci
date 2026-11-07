# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1686<sub>(+140) | 1936<sub>(+105) | 2083<sub>(+148) |  |
| 1.9 | 2026-10-30 | 1546<sub>(+100) | 1831<sub>(+54) | 1935<sub>(+71) |  |
| 1.8 | 2026-10-23 | 1446<sub>(+28) | 1777<sub>(+8) | 1864<sub>(+2) |  |
| 1.7 | 2026-10-16 | 1418<sub>(-81) | 1769<sub>(-5) | 1862<sub>(-23) |  |
| 1.4 | 2026-10-06 | 1499 | 1774 | 1885 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1597<sub>(+89) | 2022<sub>(+59) | 2061<sub>(+68) |  |
| 1.9 | 2026-10-30 | 1508<sub>(+45) | 1963<sub>(+192) | 1993<sub>(+4) |  |
| 1.8 | 2026-10-23 | 1463<sub>(+47) | 1771<sub>(-62) | 1989<sub>(+23) |  |
| 1.7 | 2026-10-16 | 1416<sub>(-105) | 1833<sub>(+108) | 1966<sub>(-27) |  |
| 1.4 | 2026-10-06 | 1521 | 1725 | 1993 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1521 | 1725 | 1993 |  |
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

Generated: 2026-11-07 05:42:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9", "2.0"]
  y-axis "Elo Rating" 1400 --> 2100
  line "E1: STC (8.0+0.08s)" [1499, 1418, 1446, 1546, 1686]
  line "E1: LTC (60.0+0.60s)" [1774, 1769, 1777, 1831, 1936]
  line "E1: VLTC (2m24s+1.12s)" [1885, 1862, 1864, 1935, 2083]
  line "P1: STC (8.0+0.08s)" [1521, 1416, 1463, 1508, 1597]
  line "P1: LTC (60.0+0.60s)" [1725, 1833, 1771, 1963, 2022]
  line "P1: VLTC (2m24s+1.12s)" [1993, 1966, 1989, 1993, 2061]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2061 | 53 | 108 | 50% | 2059 | 38% |
|  |  | E1 | 2083 | 42 | 186 | 49% | 2087 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2022 | 56 | 96 | 51% | 2021 | 39% |
|  |  | E1 | 1936 | 39 | 200 | 51% | 1931 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1597 | 53 | 110 | 56% | 1543 | 39% |
|  |  | E1 | 1686 | 38 | 222 | 49% | 1698 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1993 | 52 | 116 | 53% | 1962 | 34% |
|  |  | E1 | 1935 | 39 | 212 | 51% | 1932 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1963 | 49 | 136 | 49% | 1974 | 31% |
|  |  | E1 | 1831 | 36 | 264 | 54% | 1801 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1508 | 47 | 140 | 53% | 1486 | 37% |
|  |  | E1 | 1546 | 37 | 236 | 51% | 1532 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1864 | 37 | 232 | 51% | 1881 | 36% |
|  |  | P1 | 1989 | 55 | 108 | 53% | 1962 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1777 | 38 | 224 | 49% | 1787 | 31% |
|  |  | P1 | 1771 | 48 | 148 | 51% | 1802 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1463 | 56 | 100 | 50% | 1462 | 32% |
|  |  | E1 | 1446 | 39 | 214 | 52% | 1430 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1966 | 53 | 120 | 43% | 2049 | 31% |
|  |  | E1 | 1862 | 39 | 214 | 49% | 1871 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1833 | 54 | 108 | 51% | 1823 | 31% |
|  |  | E1 | 1769 | 40 | 208 | 52% | 1756 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1416 | 50 | 140 | 50% | 1440 | 25% |
|  |  | E1 | 1418 | 40 | 204 | 53% | 1395 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1993 | 50 | 144 | 55% | 1931 | 26% |
|  |  | E1 | 1885 | 39 | 222 | 55% | 1833 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1725 | 60 | 120 | 69% | 1422 | 25% |
|  |  | E1 | 1774 | 41 | 210 | 57% | 1661 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1521 | 54 | 128 | 44% | 1644 | 27% |
|  |  | E1 | 1499 | 45 | 168 | 53% | 1477 | 30% |