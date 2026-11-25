# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1643<sub>(+178) | 1874<sub>(+108) | 2024<sub>(+157) |  |
| 1.9 | 2026-10-30 | 1465<sub>(+77) | 1766<sub>(+49) | 1867<sub>(+65) |  |
| 1.8 | 2026-10-23 | 1388<sub>(+27) | 1717<sub>(+8) | 1802<sub>(+2) |  |
| 1.7 | 2026-10-16 | 1361<sub>(-75) | 1709<sub>(-8) | 1800<sub>(-21) |  |
| 1.4 | 2026-10-06 | 1436 | 1717 | 1821 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1548<sub>(+125) | 1883<sub>(+40) | 1968<sub>(+78) |  |
| 1.9 | 2026-10-30 | 1423<sub>(+30) | 1843<sub>(+164) | 1890<sub>(+12) |  |
| 1.8 | 2026-10-23 | 1393<sub>(+38) | 1679<sub>(-57) | 1878<sub>(+27) |  |
| 1.7 | 2026-10-16 | 1355<sub>(-83) | 1736<sub>(+93) | 1851<sub>(-34) |  |
| 1.4 | 2026-10-06 | 1438 | 1643 | 1885 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1438 | 1643 | 1885 |  |
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

Generated: 2026-11-25 05:42:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9", "2.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "E1: STC (8.0+0.08s)" [1436, 1361, 1388, 1465, 1643]
  line "E1: LTC (60.0+0.60s)" [1717, 1709, 1717, 1766, 1874]
  line "E1: VLTC (2m24s+1.12s)" [1821, 1800, 1802, 1867, 2024]
  line "P1: STC (8.0+0.08s)" [1438, 1355, 1393, 1423, 1548]
  line "P1: LTC (60.0+0.60s)" [1643, 1736, 1679, 1843, 1883]
  line "P1: VLTC (2m24s+1.12s)" [1885, 1851, 1878, 1890, 1968]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1968 | 39 | 204 | 53% | 1937 | 38% |
|  |  | E1 | 2024 | 36 | 250 | 50% | 2026 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1883 | 44 | 164 | 50% | 1886 | 34% |
|  |  | E1 | 1874 | 32 | 300 | 52% | 1864 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1548 | 36 | 234 | 55% | 1501 | 41% |
|  |  | E1 | 1643 | 32 | 318 | 51% | 1635 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1867 | 36 | 252 | 51% | 1868 | 34% |
|  |  | P1 | 1890 | 46 | 152 | 55% | 1845 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1766 | 33 | 304 | 52% | 1748 | 31% |
|  |  | P1 | 1843 | 41 | 196 | 47% | 1878 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1465 | 35 | 268 | 49% | 1470 | 31% |
|  |  | P1 | 1423 | 41 | 202 | 55% | 1374 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1878 | 55 | 108 | 53% | 1851 | 31% |
|  |  | E1 | 1802 | 37 | 232 | 51% | 1817 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1679 | 48 | 148 | 51% | 1708 | 30% |
|  |  | E1 | 1717 | 38 | 224 | 49% | 1728 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1393 | 56 | 100 | 50% | 1392 | 32% |
|  |  | E1 | 1388 | 39 | 214 | 52% | 1372 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1851 | 53 | 120 | 43% | 1933 | 31% |
|  |  | E1 | 1800 | 39 | 214 | 49% | 1809 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1736 | 54 | 108 | 51% | 1725 | 31% |
|  |  | E1 | 1709 | 40 | 208 | 52% | 1698 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1355 | 50 | 140 | 50% | 1378 | 25% |
|  |  | E1 | 1361 | 40 | 204 | 53% | 1339 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1885 | 50 | 144 | 55% | 1825 | 26% |
|  |  | E1 | 1821 | 39 | 222 | 55% | 1769 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1643 | 59 | 120 | 69% | 1354 | 25% |
|  |  | E1 | 1717 | 41 | 210 | 57% | 1608 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1438 | 54 | 128 | 44% | 1555 | 27% |
|  |  | E1 | 1436 | 45 | 168 | 53% | 1415 | 30% |