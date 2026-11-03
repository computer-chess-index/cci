# Engine: Russell

Author: Dominic Fuentes

Home: https://github.com/stup1d1y-0bv10us/russell

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9 | 2026-10-30 | 1531<sub>(+97) | 1821<sub>(+58) | 1921<sub>(+71) |  |
| 1.8 | 2026-10-23 | 1434<sub>(+30) | 1763<sub>(+8) | 1850<sub>(+3) |  |
| 1.7 | 2026-10-16 | 1404<sub>(-82) | 1755<sub>(-5) | 1847<sub>(-23) |  |
| 1.4 | 2026-10-06 | 1486 | 1760 | 1870 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9 | 2026-10-30 | 1445<sub>(+22) | 1928<sub>(+192) | 1947<sub>(0) |  |
| 1.8 | 2026-10-23 | 1423<sub>(+47) | 1736<sub>(-58) | 1947<sub>(+25) |  |
| 1.7 | 2026-10-16 | 1376<sub>(-108) | 1794<sub>(+105) | 1922<sub>(-27) |  |
| 1.4 | 2026-10-06 | 1484 | 1689 | 1949 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-06 | 1484 | 1689 | 1949 |  |
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

Generated: 2026-11-03 05:42:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.7", "1.8", "1.9"]
  y-axis "Elo Rating" 1300 --> 2000
  line "E1: STC (8.0+0.08s)" [1486, 1404, 1434, 1531]
  line "E1: LTC (60.0+0.60s)" [1760, 1755, 1763, 1821]
  line "E1: VLTC (2m24s+1.12s)" [1870, 1847, 1850, 1921]
  line "P1: STC (8.0+0.08s)" [1484, 1376, 1423, 1445]
  line "P1: LTC (60.0+0.60s)" [1689, 1794, 1736, 1928]
  line "P1: VLTC (2m24s+1.12s)" [1949, 1922, 1947, 1947]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1947 | 57 | 96 | 54% | 1914 | 34% |
|  |  | E1 | 1921 | 41 | 188 | 51% | 1920 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1928 | 52 | 120 | 49% | 1937 | 29% |
|  |  | E1 | 1821 | 39 | 224 | 55% | 1778 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1531 | 38 | 220 | 52% | 1516 | 32% |
|  |  | P1 | 1445 | 60 | 84 | 53% | 1423 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1947 | 55 | 108 | 53% | 1920 | 31% |
|  |  | E1 | 1850 | 37 | 232 | 51% | 1866 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1736 | 48 | 148 | 51% | 1766 | 30% |
|  |  | E1 | 1763 | 38 | 224 | 49% | 1774 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1423 | 56 | 100 | 50% | 1423 | 32% |
|  |  | E1 | 1434 | 39 | 214 | 52% | 1418 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1847 | 39 | 214 | 49% | 1856 | 29% |
|  |  | P1 | 1922 | 53 | 120 | 43% | 2006 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1794 | 54 | 108 | 51% | 1783 | 31% |
|  |  | E1 | 1755 | 40 | 208 | 52% | 1743 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1376 | 50 | 140 | 50% | 1400 | 25% |
|  |  | E1 | 1404 | 40 | 204 | 53% | 1382 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1949 | 50 | 144 | 55% | 1889 | 26% |
|  |  | E1 | 1870 | 39 | 222 | 55% | 1818 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1689 | 60 | 120 | 69% | 1389 | 25% |
|  |  | E1 | 1760 | 41 | 210 | 57% | 1648 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1484 | 54 | 128 | 44% | 1605 | 27% |
|  |  | E1 | 1486 | 45 | 168 | 53% | 1465 | 30% |