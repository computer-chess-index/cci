# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1646<sub>(+34) | 1949<sub>(+17) | 2022<sub>(0) |  |
| 20 | 2025-12-15 | 1612 | 1932 | 2022 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1607<sub>(+59) | 1905<sub>(+20) | 1980<sub>(+91) |  |
| 20 | 2025-12-15 | 1548 | 1885 | 1889 |  |
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

Generated: 2026-11-17 05:41:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1500 --> 2100
  line "E1: STC (8.0+0.08s)" [1612, 1646]
  line "E1: LTC (60.0+0.60s)" [1932, 1949]
  line "E1: VLTC (2m24s+1.12s)" [2022, 2022]
  line "P1: STC (8.0+0.08s)" [1548, 1607]
  line "P1: LTC (60.0+0.60s)" [1885, 1905]
  line "P1: VLTC (2m24s+1.12s)" [1889, 1980]
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
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2080 | 34 | 322 | 47% | 2115 | 17% |
|  |  | P1 | 1980 | 38 | 254 | 47% | 2014 | 18% |
|  |  | E1 | 2022 | 32 | 394 | 47% | 2060 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1905 | 44 | 196 | 48% | 1936 | 15% |
|  |  | E1 | 1949 | 35 | 310 | 49% | 1963 | 17% |
|  |  | T1 | 2018 | 34 | 312 | 50% | 2033 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1607 | 41 | 234 | 50% | 1619 | 12% |
|  |  | E1 | 1646 | 31 | 388 | 49% | 1659 | 17% |
|  |  | T1 | 1702 | 33 | 338 | 50% | 1698 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1989 | 25 | 566 | 48% | 2018 | 21% |
|  |  | P1 | 1889 | 62 | 104 | 51% | 1897 | 14% |
|  |  | E1 | 2022 | 56 | 116 | 45% | 2086 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1917 | 25 | 580 | 50% | 1922 | 17% |
|  |  | P1 | 1885 | 74 | 72 | 47% | 1963 | 17% |
|  |  | E1 | 1932 | 60 | 110 | 44% | 2051 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1651 | 25 | 640 | 47% | 1679 | 16% |
|  |  | P1 | 1548 | 70 | 84 | 36% | 1790 | 20% |
|  |  | E1 | 1612 | 60 | 124 | 49% | 1685 | 13% |