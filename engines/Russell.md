# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9 | 2026-10-30 | 1527<sub>(+101) | 1810<sub>(+51) | 1913<sub>(+66) |  |
| 1.8 | 2026-10-23 | 1426<sub>(+30) | 1759<sub>(+9) | 1847<sub>(+3) |  |
| 1.7 | 2026-10-16 | 1396<sub>(-84) | 1750<sub>(-5) | 1844<sub>(-23) |  |
| 1.4 | 2026-10-06 | 1480 | 1755 | 1867 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9 | 2026-10-30 | 1488<sub>(+41) | 1949<sub>(+191) | 1967<sub>(-4) |  |
| 1.8 | 2026-10-23 | 1447<sub>(+47) | 1758<sub>(-59) | 1971<sub>(+23) |  |
| 1.7 | 2026-10-16 | 1400<sub>(-107) | 1817<sub>(+107) | 1948<sub>(-27) |  |
| 1.4 | 2026-10-06 | 1507 | 1710 | 1975 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1507 | 1710 | 1975 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Russell+<version>&body=###%20Engine%20name%0ARussell%0A%0A###%20Version%0A1.9" target="_blank">Submit new version</a>

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

Generated: 2026-11-04 15:05:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9"]
  y-axis "Elo Rating" 1300 --> 2000
  line "E1: STC (8.0+0.08s)" [1480, 1396, 1426, 1527]
  line "E1: LTC (60.0+0.60s)" [1755, 1750, 1759, 1810]
  line "E1: VLTC (2m24s+1.12s)" [1867, 1844, 1847, 1913]
  line "P1: STC (8.0+0.08s)" [1507, 1400, 1447, 1488]
  line "P1: LTC (60.0+0.60s)" [1710, 1817, 1758, 1949]
  line "P1: VLTC (2m24s+1.12s)" [1975, 1948, 1971, 1967]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1967 | 55 | 104 | 53% | 1941 | 33% |
|  |  | E1 | 1913 | 39 | 208 | 50% | 1912 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1949 | 50 | 132 | 49% | 1958 | 31% |
|  |  | E1 | 1810 | 36 | 260 | 53% | 1785 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1488 | 55 | 100 | 55% | 1451 | 41% |
|  |  | E1 | 1527 | 37 | 232 | 52% | 1512 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1847 | 37 | 232 | 51% | 1862 | 36% |
|  |  | P1 | 1971 | 55 | 108 | 53% | 1945 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1759 | 38 | 224 | 49% | 1770 | 31% |
|  |  | P1 | 1758 | 48 | 148 | 51% | 1787 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1426 | 39 | 214 | 52% | 1409 | 31% |
|  |  | P1 | 1447 | 56 | 100 | 50% | 1447 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1948 | 53 | 120 | 43% | 2030 | 31% |
|  |  | E1 | 1844 | 39 | 214 | 49% | 1852 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1817 | 54 | 108 | 51% | 1806 | 31% |
|  |  | E1 | 1750 | 40 | 208 | 52% | 1739 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1400 | 50 | 140 | 50% | 1426 | 25% |
|  |  | E1 | 1396 | 40 | 204 | 53% | 1374 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1867 | 39 | 222 | 55% | 1814 | 32% |
|  |  | P1 | 1975 | 50 | 144 | 55% | 1913 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1710 | 60 | 120 | 69% | 1409 | 25% |
|  |  | E1 | 1755 | 41 | 210 | 57% | 1643 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1507 | 54 | 128 | 44% | 1628 | 27% |
|  |  | E1 | 1480 | 45 | 168 | 53% | 1458 | 30% |