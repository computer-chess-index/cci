# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1677<sub>(+112) | 1964<sub>(+63) | 2033<sub>(-38) |  |
| 20 | 2025-12-15 | 1565 | 1901 | 2071 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1609<sub>(+36) | 1912<sub>(-94) | 1990<sub>(+216) |  |
| 20 | 2025-12-15 | 1573 | 2006 | 1774 |  |
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

Generated: 2026-11-13 05:41:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1500 --> 2100
  line "E1: STC (8.0+0.08s)" [1565, 1677]
  line "E1: LTC (60.0+0.60s)" [1901, 1964]
  line "E1: VLTC (2m24s+1.12s)" [2071, 2033]
  line "P1: STC (8.0+0.08s)" [1573, 1609]
  line "P1: LTC (60.0+0.60s)" [2006, 1912]
  line "P1: VLTC (2m24s+1.12s)" [1774, 1990]
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
|  |  | P1 | 1990 | 40 | 226 | 47% | 2024 | 19% |
|  |  | E1 | 2033 | 32 | 380 | 47% | 2071 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2018 | 34 | 312 | 50% | 2033 | 19% |
|  |  | P1 | 1912 | 45 | 188 | 48% | 1939 | 15% |
|  |  | E1 | 1964 | 35 | 302 | 49% | 1976 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1702 | 33 | 338 | 50% | 1698 | 16% |
|  |  | P1 | 1609 | 41 | 234 | 50% | 1621 | 12% |
|  |  | E1 | 1677 | 32 | 364 | 49% | 1683 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1774 | 113 | 36 | 33% | 2016 | 11% |
|  |  | E1 | 2071 | 117 | 28 | 39% | 2203 | 14% |
|  |  | T1 | 1989 | 25 | 566 | 48% | 2018 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1901 | 139 | 28 | 18% | 2411 | 14% |
|  |  | T1 | 1917 | 25 | 580 | 50% | 1922 | 17% |
|  |  | P1 | 2006 | 179 | 12 | 17% | 2330 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1565 | 92 | 60 | 40% | 1813 | 13% |
|  |  | T1 | 1651 | 25 | 640 | 47% | 1679 | 16% |
|  |  | P1 | 1573 | 255 | 20 | 0% | 2472 | 0% |