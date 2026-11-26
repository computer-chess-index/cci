# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1639<sub>(+43) | 1948<sub>(+8) | 2016<sub>(+17) |  |
| 20 | 2025-12-15 | 1596 | 1940 | 1999 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1627<sub>(+16) | 1916<sub>(+22) | 1989<sub>(+50) |  |
| 20 | 2025-12-15 | 1611 | 1894 | 1939 |  |
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

Generated: 2026-11-26 05:42:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1500 --> 2100
  line "E1: STC (8.0+0.08s)" [1596, 1639]
  line "E1: LTC (60.0+0.60s)" [1940, 1948]
  line "E1: VLTC (2m24s+1.12s)" [1999, 2016]
  line "P1: STC (8.0+0.08s)" [1611, 1627]
  line "P1: LTC (60.0+0.60s)" [1894, 1916]
  line "P1: VLTC (2m24s+1.12s)" [1939, 1989]
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
|  |  | P1 | 1989 | 37 | 266 | 47% | 2030 | 18% |
|  |  | E1 | 2016 | 32 | 398 | 47% | 2056 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2018 | 34 | 312 | 50% | 2033 | 19% |
|  |  | P1 | 1916 | 41 | 220 | 48% | 1951 | 17% |
|  |  | E1 | 1948 | 34 | 326 | 49% | 1960 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1702 | 33 | 338 | 50% | 1698 | 16% |
|  |  | P1 | 1627 | 40 | 246 | 51% | 1624 | 13% |
|  |  | E1 | 1639 | 30 | 404 | 49% | 1650 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1999 | 51 | 144 | 44% | 2064 | 19% |
|  |  | T1 | 1989 | 25 | 566 | 48% | 2018 | 21% |
|  |  | P1 | 1939 | 55 | 132 | 54% | 1901 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1940 | 50 | 154 | 46% | 2014 | 15% |
|  |  | T1 | 1917 | 25 | 580 | 50% | 1922 | 17% |
|  |  | P1 | 1894 | 60 | 104 | 48% | 1953 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1596 | 53 | 152 | 49% | 1661 | 11% |
|  |  | T1 | 1651 | 25 | 640 | 47% | 1679 | 16% |
|  |  | P1 | 1611 | 59 | 120 | 44% | 1742 | 15% |