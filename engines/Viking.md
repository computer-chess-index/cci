# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1851<sub>(+656) | 2174<sub>(+439) | 2228<sub>(+338) |  |
| R4 | 2026-04-22 | 1195 | 1735 | 1890 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1823<sub>(+551) | 2211<sub>(+320) | 2377<sub>(+422) |  |
| R4 | 2026-04-22 | 1272 | 1891 | 1955 |  |
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

Generated: 2026-11-24 05:44:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1100 --> 2400
  line "E1: STC (8.0+0.08s)" [1195, 1851]
  line "E1: LTC (60.0+0.60s)" [1735, 2174]
  line "E1: VLTC (2m24s+1.12s)" [1890, 2228]
  line "P1: STC (8.0+0.08s)" [1272, 1823]
  line "P1: LTC (60.0+0.60s)" [1891, 2211]
  line "P1: VLTC (2m24s+1.12s)" [1955, 2377]
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
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2377 | 34 | 286 | 43% | 2452 | 31% |
|  |  | E1 | 2228 | 33 | 326 | 50% | 2238 | 26% |
|  |  | T1 | 2354 | 26 | 482 | 49% | 2367 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2174 | 32 | 334 | 48% | 2213 | 29% |
|  |  | T1 | 2192 | 28 | 450 | 51% | 2174 | 29% |
|  |  | P1 | 2211 | 39 | 220 | 46% | 2268 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1851 | 30 | 396 | 46% | 1906 | 29% |
|  |  | T1 | 1929 | 26 | 542 | 50% | 1935 | 20% |
|  |  | P1 | 1823 | 39 | 222 | 48% | 1843 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2125 | 31 | 372 | 41% | 2236 | 28% |
|  |  | P1 | 1955 | 61 | 102 | 46% | 2014 | 30% |
|  |  | E1 | 1890 | 56 | 122 | 35% | 2103 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1836 | 36 | 298 | 46% | 1906 | 23% |
|  |  | P1 | 1891 | 58 | 108 | 41% | 1985 | 23% |
|  |  | E1 | 1735 | 52 | 150 | 36% | 1920 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1354 | 38 | 288 | 47% | 1418 | 19% |
|  |  | P1 | 1272 | 63 | 118 | 36% | 1534 | 13% |
|  |  | E1 | 1195 | 50 | 150 | 46% | 1249 | 15% |