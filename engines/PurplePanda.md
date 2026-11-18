# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1635<sub>(+34) | 1940<sub>(+16) | 2016<sub>(0) |  |
| 20 | 2025-12-15 | 1601 | 1924 | 2016 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1608<sub>(+57) | 1908<sub>(+18) | 1986<sub>(+92) |  |
| 20 | 2025-12-15 | 1551 | 1890 | 1894 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1702<sub>(+51) | 2018<sub>(+101) | 2080<sub>(+91) |  |
| 20 | 2025-12-15 | 1651 | 1917 | 1989 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PurplePanda+<version>&body=###%20Engine%20name%0APurplePanda%0A%0A###%20Version%0A21" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:42:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1500 --> 2100
  line "E1: STC (8.0+0.08s)" [1601, 1635]
  line "E1: LTC (60.0+0.60s)" [1924, 1940]
  line "E1: VLTC (2m24s+1.12s)" [2016, 2016]
  line "P1: STC (8.0+0.08s)" [1551, 1608]
  line "P1: LTC (60.0+0.60s)" [1890, 1908]
  line "P1: VLTC (2m24s+1.12s)" [1894, 1986]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1600 --> 2100
  line "T1: STC (8.0+0.08s)" [1651, 1702]
  line "T1: LTC (60.0+0.60s)" [1917, 2018]
  line "T1: VLTC (2m24s+1.12s)" [1989, 2080]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1986 | 38 | 254 | 47% | 2018 | 18% |
|  |  | E1 | 2016 | 32 | 394 | 47% | 2053 | 14% |
|  |  | T1 | 2080 | 34 | 322 | 47% | 2115 | 17% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1908 | 43 | 200 | 48% | 1940 | 17% |
|  |  | E1 | 1940 | 35 | 310 | 49% | 1955 | 17% |
|  |  | T1 | 2018 | 34 | 312 | 50% | 2033 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1608 | 41 | 234 | 50% | 1620 | 12% |
|  |  | E1 | 1635 | 31 | 388 | 49% | 1648 | 17% |
|  |  | T1 | 1702 | 33 | 338 | 50% | 1698 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1989 | 25 | 566 | 48% | 2018 | 21% |
|  |  | P1 | 1894 | 62 | 104 | 51% | 1902 | 14% |
|  |  | E1 | 2016 | 56 | 116 | 45% | 2079 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1917 | 25 | 580 | 50% | 1922 | 17% |
|  |  | P1 | 1890 | 74 | 72 | 47% | 1968 | 17% |
|  |  | E1 | 1924 | 60 | 110 | 44% | 2043 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1651 | 25 | 640 | 47% | 1679 | 16% |
|  |  | P1 | 1551 | 70 | 84 | 36% | 1796 | 20% |
|  |  | E1 | 1601 | 60 | 124 | 49% | 1675 | 13% |