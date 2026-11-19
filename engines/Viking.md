# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1854<sub>(+640) | 2163<sub>(+424) | 2228<sub>(+329) |  |
| R4 | 2026-04-22 | 1214 | 1739 | 1899 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1814<sub>(+542) | 2201<sub>(+315) | 2369<sub>(+438) |  |
| R4 | 2026-04-22 | 1272 | 1886 | 1931 |  |
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

Generated: 2026-11-19 05:44:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1200 --> 2400
  line "E1: STC (8.0+0.08s)" [1214, 1854]
  line "E1: LTC (60.0+0.60s)" [1739, 2163]
  line "E1: VLTC (2m24s+1.12s)" [1899, 2228]
  line "P1: STC (8.0+0.08s)" [1272, 1814]
  line "P1: LTC (60.0+0.60s)" [1886, 2201]
  line "P1: VLTC (2m24s+1.12s)" [1931, 2369]
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
|  |  | P1 | 2369 | 35 | 278 | 43% | 2441 | 31% |
|  |  | E1 | 2228 | 33 | 326 | 50% | 2238 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2192 | 28 | 450 | 51% | 2174 | 29% |
|  |  | P1 | 2201 | 40 | 216 | 47% | 2256 | 32% |
|  |  | E1 | 2163 | 33 | 314 | 47% | 2215 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1929 | 26 | 542 | 50% | 1935 | 20% |
|  |  | P1 | 1814 | 40 | 218 | 48% | 1835 | 24% |
|  |  | E1 | 1854 | 30 | 388 | 47% | 1908 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1931 | 67 | 86 | 43% | 2022 | 30% |
|  |  | E1 | 1899 | 59 | 114 | 35% | 2117 | 23% |
|  |  | T1 | 2125 | 31 | 372 | 41% | 2236 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1886 | 67 | 84 | 39% | 1999 | 19% |
|  |  | E1 | 1739 | 54 | 136 | 35% | 1937 | 20% |
|  |  | T1 | 1836 | 36 | 298 | 46% | 1906 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1272 | 71 | 94 | 30% | 1620 | 16% |
|  |  | E1 | 1214 | 52 | 138 | 47% | 1256 | 14% |
|  |  | T1 | 1354 | 38 | 288 | 47% | 1418 | 19% |