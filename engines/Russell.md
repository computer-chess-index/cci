# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1708<sub>(+172) | 1928<sub>(+105) | 2105<sub>(+181) |  |
| 1.9 | 2026-10-30 | 1536<sub>(+100) | 1823<sub>(+54) | 1924<sub>(+68) |  |
| 1.8 | 2026-10-23 | 1436<sub>(+29) | 1769<sub>(+10) | 1856<sub>(+2) |  |
| 1.7 | 2026-10-16 | 1407<sub>(-82) | 1759<sub>(-5) | 1854<sub>(-24) |  |
| 1.4 | 2026-10-06 | 1489 | 1764 | 1878 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-11-05 | 1573<sub>(+61) | 2010<sub>(+46) | 2057<sub>(+62) |  |
| 1.9 | 2026-10-30 | 1512<sub>(+46) | 1964<sub>(+190) | 1995<sub>(+5) |  |
| 1.8 | 2026-10-23 | 1466<sub>(+47) | 1774<sub>(-62) | 1990<sub>(+23) |  |
| 1.7 | 2026-10-16 | 1419<sub>(-105) | 1836<sub>(+108) | 1967<sub>(-27) |  |
| 1.4 | 2026-10-06 | 1524 | 1728 | 1994 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1524 | 1728 | 1994 |  |
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

Generated: 2026-11-06 05:42:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9", "2.0"]
  y-axis "Elo Rating" 1400 --> 2200
  line "E1: STC (8.0+0.08s)" [1489, 1407, 1436, 1536, 1708]
  line "E1: LTC (60.0+0.60s)" [1764, 1759, 1769, 1823, 1928]
  line "E1: VLTC (2m24s+1.12s)" [1878, 1854, 1856, 1924, 2105]
  line "P1: STC (8.0+0.08s)" [1524, 1419, 1466, 1512, 1573]
  line "P1: LTC (60.0+0.60s)" [1728, 1836, 1774, 1964, 2010]
  line "P1: VLTC (2m24s+1.12s)" [1994, 1967, 1990, 1995, 2057]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2057 | 60 | 84 | 51% | 2053 | 37% |
|  |  | E1 | 2105 | 54 | 104 | 54% | 2066 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2010 | 63 | 76 | 49% | 2024 | 39% |
|  |  | E1 | 1928 | 56 | 96 | 54% | 1898 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1573 | 67 | 70 | 57% | 1509 | 37% |
|  |  | E1 | 1708 | 54 | 110 | 51% | 1697 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1995 | 52 | 116 | 53% | 1964 | 34% |
|  |  | E1 | 1924 | 39 | 208 | 50% | 1922 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1823 | 36 | 264 | 54% | 1793 | 28% |
|  |  | P1 | 1964 | 49 | 136 | 49% | 1976 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1536 | 37 | 232 | 52% | 1521 | 32% |
|  |  | P1 | 1512 | 47 | 140 | 53% | 1489 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1990 | 55 | 108 | 53% | 1964 | 31% |
|  |  | E1 | 1856 | 37 | 232 | 51% | 1872 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1774 | 48 | 148 | 51% | 1805 | 30% |
|  |  | E1 | 1769 | 38 | 224 | 49% | 1779 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1466 | 56 | 100 | 50% | 1466 | 32% |
|  |  | E1 | 1436 | 39 | 214 | 52% | 1420 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1967 | 53 | 120 | 43% | 2049 | 31% |
|  |  | E1 | 1854 | 39 | 214 | 49% | 1863 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1836 | 54 | 108 | 51% | 1825 | 31% |
|  |  | E1 | 1759 | 40 | 208 | 52% | 1748 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1419 | 50 | 140 | 50% | 1443 | 25% |
|  |  | E1 | 1407 | 40 | 204 | 53% | 1385 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1994 | 50 | 144 | 55% | 1932 | 26% |
|  |  | E1 | 1878 | 39 | 222 | 55% | 1825 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1728 | 60 | 120 | 69% | 1423 | 25% |
|  |  | E1 | 1764 | 41 | 210 | 57% | 1651 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1524 | 54 | 128 | 44% | 1647 | 27% |
|  |  | E1 | 1489 | 45 | 168 | 53% | 1467 | 30% |