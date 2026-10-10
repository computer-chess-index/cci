# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1484 | 1786 | 1877 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1760 | 1823 | 1989 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1731<sub>(+154) | 1890<sub>(+186) | 1990<sub>(+173) |  |
| 3.0.0 | 2026-04-29 | 1577<sub>(+213) | 1704<sub>(+33) | 1817<sub>(+121) |  |
| 2.0.0 | 2026-04-23 | 1364<sub>(+61) | 1671<sub>(+187) | 1696<sub>(+283) |  |
| 1.1.0 | 2026-01-26 | 1303 | 1484 | 1413 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Laura+<version>&body=###%20Engine%20name%0ALaura%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:39:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1300 --> 2000
  line "" [1303, 1364, 1577, 1731]
  line "STC (8.0+0.08s)" [1303, 1364, 1577, 1731]
  line "LTC (60.0+0.60s)" [1484, 1671, 1704, 1890]
  line "" [1413, 1696, 1817, 1990]
  line "VLTC (2m24s+1.12s)" [1413, 1696, 1817, 1990]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1877 | 67 | 92 | 43% | 2020 | 14% |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1990 | 39 | 238 | 50% | 1995 | 19% |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1989 | 87 | 60 | 33% | 2269 | 17% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1786 | 71 | 84 | 43% | 1926 | 15% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1890 | 38 | 268 | 48% | 1910 | 13% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1823 | 109 | 48 | 22% | 2318 | 10% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1484 | 101 | 42 | 49% | 1534 | 12% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1731 | 37 | 280 | 51% | 1725 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1760 | 118 | 40 | 26% | 2242 | 8% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1817 | 51 | 152 | 50% | 1797 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1704 | 53 | 136 | 50% | 1712 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1577 | 54 | 126 | 49% | 1585 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1696 | 56 | 98 | 53% | 1675 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1671 | 55 | 104 | 48% | 1698 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1364 | 56 | 108 | 55% | 1293 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1413 | 52 | 132 | 43% | 1589 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1484 | 51 | 134 | 43% | 1611 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1303 | 62 | 134 | 47% | 1347 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |