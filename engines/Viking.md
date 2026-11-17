# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1860<sub>(+637) | 2161<sub>(+405) | 2238<sub>(+333) |  |
| R4 | 2026-04-22 | 1223 | 1756 | 1905 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1809<sub>(+537) | 2202<sub>(+320) | 2369<sub>(+444) |  |
| R4 | 2026-04-22 | 1272 | 1882 | 1925 |  |
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

Generated: 2026-11-17 05:44:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1200 --> 2400
  line "E1: STC (8.0+0.08s)" [1223, 1860]
  line "E1: LTC (60.0+0.60s)" [1756, 2161]
  line "E1: VLTC (2m24s+1.12s)" [1905, 2238]
  line "P1: STC (8.0+0.08s)" [1272, 1809]
  line "P1: LTC (60.0+0.60s)" [1882, 2202]
  line "P1: VLTC (2m24s+1.12s)" [1925, 2369]
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
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2369 | 36 | 266 | 44% | 2437 | 30% |
|  |  | E1 | 2238 | 34 | 322 | 51% | 2244 | 27% |
|  |  | T1 | 2354 | 26 | 482 | 49% | 2367 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2161 | 33 | 310 | 46% | 2221 | 30% |
|  |  | T1 | 2192 | 28 | 450 | 51% | 2174 | 29% |
|  |  | P1 | 2202 | 40 | 212 | 47% | 2252 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1860 | 30 | 388 | 47% | 1914 | 30% |
|  |  | T1 | 1929 | 26 | 542 | 50% | 1935 | 20% |
|  |  | P1 | 1809 | 40 | 218 | 48% | 1829 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2125 | 31 | 372 | 41% | 2236 | 28% |
|  |  | P1 | 1925 | 67 | 86 | 43% | 2018 | 30% |
|  |  | E1 | 1905 | 59 | 114 | 35% | 2124 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1836 | 36 | 298 | 46% | 1906 | 23% |
|  |  | P1 | 1882 | 67 | 84 | 39% | 1994 | 19% |
|  |  | E1 | 1756 | 54 | 136 | 35% | 1949 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1354 | 38 | 288 | 47% | 1418 | 19% |
|  |  | P1 | 1272 | 71 | 94 | 30% | 1619 | 16% |
|  |  | E1 | 1223 | 52 | 138 | 47% | 1266 | 14% |