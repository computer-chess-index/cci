# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1636<sub>(+38) | 1947<sub>(+25) | 2017<sub>(+1) |  |
| 20 | 2025-12-15 | 1598 | 1922 | 2016 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1608<sub>(+23) | 1909<sub>(+28) | 1989<sub>(+73) |  |
| 20 | 2025-12-15 | 1585 | 1881 | 1916 |  |
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

Generated: 2026-11-22 05:41:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1500 --> 2100
  line "E1: STC (8.0+0.08s)" [1598, 1636]
  line "E1: LTC (60.0+0.60s)" [1922, 1947]
  line "E1: VLTC (2m24s+1.12s)" [2016, 2017]
  line "P1: STC (8.0+0.08s)" [1585, 1608]
  line "P1: LTC (60.0+0.60s)" [1881, 1909]
  line "P1: VLTC (2m24s+1.12s)" [1916, 1989]
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
|  |  | P1 | 1989 | 38 | 254 | 47% | 2021 | 18% |
|  |  | E1 | 2017 | 32 | 394 | 47% | 2053 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2018 | 34 | 312 | 50% | 2033 | 19% |
|  |  | P1 | 1909 | 42 | 212 | 48% | 1941 | 17% |
|  |  | E1 | 1947 | 34 | 318 | 49% | 1953 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1702 | 33 | 338 | 50% | 1698 | 16% |
|  |  | P1 | 1608 | 41 | 238 | 50% | 1616 | 13% |
|  |  | E1 | 1636 | 30 | 400 | 49% | 1647 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1989 | 25 | 566 | 48% | 2018 | 21% |
|  |  | P1 | 1916 | 58 | 120 | 53% | 1889 | 15% |
|  |  | E1 | 2016 | 56 | 116 | 45% | 2080 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1917 | 25 | 580 | 50% | 1922 | 17% |
|  |  | P1 | 1881 | 64 | 92 | 47% | 1955 | 20% |
|  |  | E1 | 1922 | 60 | 110 | 44% | 2041 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1651 | 25 | 640 | 47% | 1679 | 16% |
|  |  | P1 | 1585 | 63 | 104 | 42% | 1754 | 16% |
|  |  | E1 | 1598 | 60 | 124 | 49% | 1673 | 13% |