# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1654<sub>(+61) | 1948<sub>(+5) | 2021<sub>(-26) |  |
| 20 | 2025-12-15 | 1593 | 1943 | 2047 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1604<sub>(+43) | 1899<sub>(+18) | 1978<sub>(+99) |  |
| 20 | 2025-12-15 | 1561 | 1881 | 1879 |  |
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

Generated: 2026-11-15 05:41:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1500 --> 2100
  line "E1: STC (8.0+0.08s)" [1593, 1654]
  line "E1: LTC (60.0+0.60s)" [1943, 1948]
  line "E1: VLTC (2m24s+1.12s)" [2047, 2021]
  line "P1: STC (8.0+0.08s)" [1561, 1604]
  line "P1: LTC (60.0+0.60s)" [1881, 1899]
  line "P1: VLTC (2m24s+1.12s)" [1879, 1978]
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
|  |  | P1 | 1978 | 39 | 246 | 47% | 2013 | 18% |
|  |  | E1 | 2021 | 32 | 394 | 47% | 2057 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2018 | 34 | 312 | 50% | 2033 | 19% |
|  |  | P1 | 1899 | 44 | 192 | 48% | 1931 | 16% |
|  |  | E1 | 1948 | 35 | 306 | 49% | 1960 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1702 | 33 | 338 | 50% | 1698 | 16% |
|  |  | P1 | 1604 | 41 | 234 | 50% | 1616 | 12% |
|  |  | E1 | 1654 | 31 | 376 | 49% | 1665 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2047 | 66 | 84 | 46% | 2103 | 20% |
|  |  | T1 | 1989 | 25 | 566 | 48% | 2018 | 21% |
|  |  | P1 | 1879 | 70 | 84 | 51% | 1899 | 13% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1943 | 68 | 86 | 42% | 2086 | 17% |
|  |  | T1 | 1917 | 25 | 580 | 50% | 1922 | 17% |
|  |  | P1 | 1881 | 85 | 56 | 46% | 1975 | 14% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1593 | 63 | 112 | 47% | 1696 | 13% |
|  |  | T1 | 1651 | 25 | 640 | 47% | 1679 | 16% |
|  |  | P1 | 1561 | 81 | 64 | 34% | 1862 | 23% |