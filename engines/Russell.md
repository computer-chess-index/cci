# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1674<sub>(+147) | 1929<sub>(+116) | 2071<sub>(+158) |  |
| 1.9 | 2026-10-30 | 1527<sub>(+103) | 1813<sub>(+54) | 1913<sub>(+68) |  |
| 1.8 | 2026-10-23 | 1424<sub>(+29) | 1759<sub>(+8) | 1845<sub>(+2) |  |
| 1.7 | 2026-10-16 | 1395<sub>(-81) | 1751<sub>(-7) | 1843<sub>(-23) |  |
| 1.4 | 2026-10-06 | 1476 | 1758 | 1866 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1584<sub>(+122) | 1971<sub>(+49) | 2045<sub>(+92) |  |
| 1.9 | 2026-10-30 | 1462<sub>(+44) | 1922<sub>(+193) | 1953<sub>(+4) |  |
| 1.8 | 2026-10-23 | 1418<sub>(+46) | 1729<sub>(-65) | 1949<sub>(+21) |  |
| 1.7 | 2026-10-16 | 1372<sub>(-102) | 1794<sub>(+112) | 1928<sub>(-27) |  |
| 1.4 | 2026-10-06 | 1474 | 1682 | 1955 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1474 | 1682 | 1955 |  |
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

Generated: 2026-11-12 05:42:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9", "2.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "E1: STC (8.0+0.08s)" [1476, 1395, 1424, 1527, 1674]
  line "E1: LTC (60.0+0.60s)" [1758, 1751, 1759, 1813, 1929]
  line "E1: VLTC (2m24s+1.12s)" [1866, 1843, 1845, 1913, 2071]
  line "P1: STC (8.0+0.08s)" [1474, 1372, 1418, 1462, 1584]
  line "P1: LTC (60.0+0.60s)" [1682, 1794, 1729, 1922, 1971]
  line "P1: VLTC (2m24s+1.12s)" [1955, 1928, 1949, 1953, 2045]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2045 | 42 | 168 | 52% | 2028 | 40% |
|  |  | E1 | 2071 | 38 | 224 | 51% | 2064 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1971 | 48 | 136 | 49% | 1985 | 35% |
|  |  | E1 | 1929 | 35 | 244 | 52% | 1913 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1584 | 39 | 200 | 55% | 1539 | 39% |
|  |  | E1 | 1674 | 34 | 286 | 49% | 1682 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1953 | 52 | 116 | 53% | 1922 | 34% |
|  |  | E1 | 1913 | 38 | 216 | 50% | 1918 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1922 | 49 | 136 | 49% | 1933 | 31% |
|  |  | E1 | 1813 | 35 | 272 | 53% | 1794 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1462 | 47 | 140 | 53% | 1440 | 37% |
|  |  | E1 | 1527 | 37 | 240 | 52% | 1512 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1949 | 55 | 108 | 53% | 1924 | 31% |
|  |  | E1 | 1845 | 37 | 232 | 51% | 1862 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1759 | 38 | 224 | 49% | 1771 | 31% |
|  |  | P1 | 1729 | 48 | 148 | 51% | 1760 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1424 | 39 | 214 | 52% | 1408 | 31% |
|  |  | P1 | 1418 | 56 | 100 | 50% | 1416 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1928 | 53 | 120 | 43% | 2012 | 31% |
|  |  | E1 | 1843 | 39 | 214 | 49% | 1852 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1794 | 54 | 108 | 51% | 1782 | 31% |
|  |  | E1 | 1751 | 40 | 208 | 52% | 1740 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1372 | 50 | 140 | 50% | 1397 | 25% |
|  |  | E1 | 1395 | 40 | 204 | 53% | 1373 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1866 | 39 | 222 | 55% | 1813 | 32% |
|  |  | P1 | 1955 | 50 | 144 | 55% | 1893 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1758 | 41 | 210 | 57% | 1644 | 31% |
|  |  | P1 | 1682 | 60 | 120 | 69% | 1386 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1474 | 54 | 128 | 44% | 1597 | 27% |
|  |  | E1 | 1476 | 45 | 168 | 53% | 1455 | 30% |