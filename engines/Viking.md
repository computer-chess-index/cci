# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1856<sub>(+636) | 2153<sub>(+402) | 2240<sub>(+324) |  |
| R4 | 2026-04-22 | 1220 | 1751 | 1916 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1810<sub>(+557) | 2186<sub>(+266) | 2360<sub>(+436) |  |
| R4 | 2026-04-22 | 1253 | 1920 | 1924 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1929<sub>(+575) | 2192<sub>(+356) | 2354<sub>(+229) |  |
| R4 | 2026-04-22 | 1354 | 1836 | 2125 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Viking+<version>&body=###%20Engine%20name%0AViking%0A%0A###%20Version%0AR5" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:44:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1200 --> 2400
  line "E1: STC (8.0+0.08s)" [1220, 1856]
  line "E1: LTC (60.0+0.60s)" [1751, 2153]
  line "E1: VLTC (2m24s+1.12s)" [1916, 2240]
  line "P1: STC (8.0+0.08s)" [1253, 1810]
  line "P1: LTC (60.0+0.60s)" [1920, 2186]
  line "P1: VLTC (2m24s+1.12s)" [1924, 2360]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2400
  line "T1: STC (8.0+0.08s)" [1354, 1929]
  line "T1: LTC (60.0+0.60s)" [1836, 2192]
  line "T1: VLTC (2m24s+1.12s)" [2125, 2354]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2354 | 26 | 482 | 49% | 2367 | 33% |
|  |  | P1 | 2360 | 36 | 258 | 44% | 2430 | 30% |
|  |  | E1 | 2240 | 34 | 310 | 52% | 2238 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2186 | 41 | 208 | 46% | 2244 | 31% |
|  |  | E1 | 2153 | 34 | 306 | 46% | 2215 | 29% |
|  |  | T1 | 2192 | 28 | 450 | 51% | 2174 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1810 | 41 | 206 | 49% | 1823 | 23% |
|  |  | E1 | 1856 | 30 | 380 | 46% | 1914 | 30% |
|  |  | T1 | 1929 | 26 | 542 | 50% | 1935 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2125 | 31 | 372 | 41% | 2236 | 28% |
|  |  | P1 | 1924 | 73 | 72 | 41% | 2049 | 29% |
|  |  | E1 | 1916 | 71 | 82 | 30% | 2196 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1836 | 36 | 298 | 46% | 1906 | 23% |
|  |  | P1 | 1920 | 77 | 64 | 41% | 2017 | 16% |
|  |  | E1 | 1751 | 68 | 92 | 28% | 2037 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1354 | 38 | 288 | 47% | 1418 | 19% |
|  |  | P1 | 1253 | 85 | 72 | 24% | 1708 | 17% |
|  |  | E1 | 1220 | 55 | 128 | 46% | 1270 | 12% |