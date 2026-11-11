# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1694<sub>(+154) | 1944<sub>(+112) | 2093<sub>(+160) |  |
| 1.9 | 2026-10-30 | 1540<sub>(+100) | 1832<sub>(+54) | 1933<sub>(+69) |  |
| 1.8 | 2026-10-23 | 1440<sub>(+29) | 1778<sub>(+9) | 1864<sub>(+1) |  |
| 1.7 | 2026-10-16 | 1411<sub>(-81) | 1769<sub>(-6) | 1863<sub>(-22) |  |
| 1.4 | 2026-10-06 | 1492 | 1775 | 1885 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1574<sub>(+120) | 1964<sub>(+51) | 2036<sub>(+92) |  |
| 1.9 | 2026-10-30 | 1454<sub>(+46) | 1913<sub>(+193) | 1944<sub>(+4) |  |
| 1.8 | 2026-10-23 | 1408<sub>(+44) | 1720<sub>(-63) | 1940<sub>(+22) |  |
| 1.7 | 2026-10-16 | 1364<sub>(-102) | 1783<sub>(+109) | 1918<sub>(-27) |  |
| 1.4 | 2026-10-06 | 1466 | 1674 | 1945 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1466 | 1674 | 1945 |  |
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

Generated: 2026-11-11 05:42:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9", "2.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "E1: STC (8.0+0.08s)" [1492, 1411, 1440, 1540, 1694]
  line "E1: LTC (60.0+0.60s)" [1775, 1769, 1778, 1832, 1944]
  line "E1: VLTC (2m24s+1.12s)" [1885, 1863, 1864, 1933, 2093]
  line "P1: STC (8.0+0.08s)" [1466, 1364, 1408, 1454, 1574]
  line "P1: LTC (60.0+0.60s)" [1674, 1783, 1720, 1913, 1964]
  line "P1: VLTC (2m24s+1.12s)" [1945, 1918, 1940, 1944, 2036]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2036 | 42 | 168 | 52% | 2020 | 40% |
|  |  | E1 | 2093 | 38 | 220 | 50% | 2087 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1964 | 50 | 124 | 49% | 1974 | 34% |
|  |  | E1 | 1944 | 36 | 240 | 52% | 1931 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1574 | 39 | 200 | 55% | 1531 | 39% |
|  |  | E1 | 1694 | 34 | 278 | 50% | 1692 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1944 | 52 | 116 | 53% | 1913 | 34% |
|  |  | E1 | 1933 | 39 | 212 | 51% | 1929 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1913 | 49 | 136 | 49% | 1924 | 31% |
|  |  | E1 | 1832 | 36 | 264 | 54% | 1802 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1454 | 47 | 140 | 53% | 1432 | 37% |
|  |  | E1 | 1540 | 37 | 236 | 51% | 1528 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1940 | 55 | 108 | 53% | 1913 | 31% |
|  |  | E1 | 1864 | 37 | 232 | 51% | 1881 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1720 | 48 | 148 | 51% | 1751 | 30% |
|  |  | E1 | 1778 | 38 | 224 | 49% | 1789 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1440 | 39 | 214 | 52% | 1424 | 31% |
|  |  | P1 | 1408 | 56 | 100 | 50% | 1408 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1918 | 53 | 120 | 43% | 2002 | 31% |
|  |  | E1 | 1863 | 39 | 214 | 49% | 1872 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1783 | 54 | 108 | 51% | 1773 | 31% |
|  |  | E1 | 1769 | 40 | 208 | 52% | 1758 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1364 | 50 | 140 | 50% | 1389 | 25% |
|  |  | E1 | 1411 | 40 | 204 | 53% | 1388 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1885 | 39 | 222 | 55% | 1832 | 32% |
|  |  | P1 | 1945 | 50 | 144 | 55% | 1883 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1775 | 41 | 210 | 57% | 1662 | 31% |
|  |  | P1 | 1674 | 60 | 120 | 69% | 1378 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1492 | 45 | 168 | 53% | 1472 | 30% |
|  |  | P1 | 1466 | 54 | 128 | 44% | 1590 | 27% |