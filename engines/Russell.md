# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9 | 2026-10-30 | 1531<sub>(+100) | 1823<sub>(+60) | 1916<sub>(+65) |  |
| 1.8 | 2026-10-23 | 1431<sub>(+30) | 1763<sub>(+9) | 1851<sub>(+4) |  |
| 1.7 | 2026-10-16 | 1401<sub>(-84) | 1754<sub>(-6) | 1847<sub>(-24) |  |
| 1.4 | 2026-10-06 | 1485 | 1760 | 1871 |  |
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

Generated: 2026-11-04 05:42:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9"]
  y-axis "Elo Rating" 1400 --> 2000
  line "E1: STC (8.0+0.08s)" [1485, 1401, 1431, 1531]
  line "E1: LTC (60.0+0.60s)" [1760, 1754, 1763, 1823]
  line "E1: VLTC (2m24s+1.12s)" [1871, 1847, 1851, 1916]
  line "P1: STC (8.0+0.08s)" [1507, 1400, 1447, 1488]
  line "P1: LTC (60.0+0.60s)" [1710, 1817, 1758, 1949]
  line "P1: VLTC (2m24s+1.12s)" [1975, 1948, 1971, 1967]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1967 | 55 | 104 | 53% | 1941 | 33% |
|  |  | E1 | 1916 | 40 | 200 | 50% | 1916 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1949 | 50 | 132 | 49% | 1958 | 31% |
|  |  | E1 | 1823 | 37 | 252 | 54% | 1787 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1488 | 55 | 100 | 55% | 1451 | 41% |
|  |  | E1 | 1531 | 38 | 228 | 52% | 1516 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1851 | 37 | 232 | 51% | 1866 | 36% |
|  |  | P1 | 1971 | 55 | 108 | 53% | 1945 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1763 | 38 | 224 | 49% | 1774 | 31% |
|  |  | P1 | 1758 | 48 | 148 | 51% | 1787 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1431 | 39 | 214 | 52% | 1415 | 31% |
|  |  | P1 | 1447 | 56 | 100 | 50% | 1447 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1948 | 53 | 120 | 43% | 2030 | 31% |
|  |  | E1 | 1847 | 39 | 214 | 49% | 1856 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1817 | 54 | 108 | 51% | 1806 | 31% |
|  |  | E1 | 1754 | 40 | 208 | 52% | 1743 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1400 | 50 | 140 | 50% | 1426 | 25% |
|  |  | E1 | 1401 | 40 | 204 | 53% | 1380 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1871 | 39 | 222 | 55% | 1818 | 32% |
|  |  | P1 | 1975 | 50 | 144 | 55% | 1913 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1710 | 60 | 120 | 69% | 1409 | 25% |
|  |  | E1 | 1760 | 41 | 210 | 57% | 1647 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1507 | 54 | 128 | 44% | 1628 | 27% |
|  |  | E1 | 1485 | 45 | 168 | 53% | 1463 | 30% |