# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9 | 2026-10-30 | 1473<sub>(+41) | 1821<sub>(+58) | 1898<sub>(+50) |  |
| 1.8 | 2026-10-23 | 1432<sub>(+29) | 1763<sub>(+9) | 1848<sub>(+4) |  |
| 1.7 | 2026-10-16 | 1403<sub>(-81) | 1754<sub>(-6) | 1844<sub>(-24) |  |
| 1.4 | 2026-10-06 | 1484 | 1760 | 1868 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9 | 2026-10-30 | 1438<sub>(+16) | 1913<sub>(+181) | 1945<sub>(+4) |  |
| 1.8 | 2026-10-23 | 1422<sub>(+49) | 1732<sub>(-58) | 1941<sub>(+23) |  |
| 1.7 | 2026-10-16 | 1373<sub>(-109) | 1790<sub>(+104) | 1918<sub>(-29) |  |
| 1.4 | 2026-10-06 | 1482 | 1686 | 1947 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1482 | 1686 | 1947 |  |
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

Generated: 2026-11-02 19:27:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9"]
  y-axis "Elo Rating" 1300 --> 2000
  line "E1: STC (8.0+0.08s)" [1484, 1403, 1432, 1473]
  line "E1: LTC (60.0+0.60s)" [1760, 1754, 1763, 1821]
  line "E1: VLTC (2m24s+1.12s)" [1868, 1844, 1848, 1898]
  line "P1: STC (8.0+0.08s)" [1482, 1373, 1422, 1438]
  line "P1: LTC (60.0+0.60s)" [1686, 1790, 1732, 1913]
  line "P1: VLTC (2m24s+1.12s)" [1947, 1918, 1941, 1945]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1945 | 63 | 80 | 55% | 1902 | 35% |
|  |  | E1 | 1898 | 48 | 132 | 49% | 1910 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1913 | 57 | 100 | 47% | 1937 | 30% |
|  |  | E1 | 1821 | 42 | 192 | 57% | 1763 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1438 | 65 | 72 | 53% | 1419 | 39% |
|  |  | E1 | 1473 | 50 | 128 | 47% | 1497 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1848 | 37 | 232 | 51% | 1864 | 36% |
|  |  | P1 | 1941 | 55 | 108 | 53% | 1916 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1763 | 38 | 224 | 49% | 1774 | 31% |
|  |  | P1 | 1732 | 48 | 148 | 51% | 1763 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1432 | 39 | 214 | 52% | 1416 | 31% |
|  |  | P1 | 1422 | 56 | 100 | 50% | 1422 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1918 | 53 | 120 | 43% | 2002 | 31% |
|  |  | E1 | 1844 | 39 | 214 | 49% | 1854 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1790 | 54 | 108 | 51% | 1779 | 31% |
|  |  | E1 | 1754 | 40 | 208 | 52% | 1743 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1373 | 50 | 140 | 50% | 1399 | 25% |
|  |  | E1 | 1403 | 40 | 204 | 53% | 1381 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1868 | 39 | 222 | 55% | 1817 | 32% |
|  |  | P1 | 1947 | 50 | 144 | 55% | 1885 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1686 | 60 | 120 | 69% | 1386 | 25% |
|  |  | E1 | 1760 | 41 | 210 | 57% | 1647 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1482 | 54 | 128 | 44% | 1602 | 27% |
|  |  | E1 | 1484 | 45 | 168 | 53% | 1462 | 30% |