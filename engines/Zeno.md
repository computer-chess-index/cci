# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2076<sub>(+206) | 2310<sub>(+246) | 2431<sub>(+262) |  |
| 2.0 | 2026-03-08 | 1870 | 2064 | 2169 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2037<sub>(+214) | 2319<sub>(+352) | 2348<sub>(+203) |  |
| 2.0 | 2026-03-08 | 1823 | 1967 | 2145 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2133<sub>(+227) | 2388<sub>(+227) | 2421<sub>(+162) |  |
| 2.0 | 2026-03-08 | 1906 | 2161 | 2259 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeno+<version>&body=###%20Engine%20name%0AZeno%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:45:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "E1: STC (8.0+0.08s)" [1870, 2076]
  line "E1: LTC (60.0+0.60s)" [2064, 2310]
  line "E1: VLTC (2m24s+1.12s)" [2169, 2431]
  line "P1: STC (8.0+0.08s)" [1823, 2037]
  line "P1: LTC (60.0+0.60s)" [1967, 2319]
  line "P1: VLTC (2m24s+1.12s)" [2145, 2348]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1900 --> 2500
  line "T1: STC (8.0+0.08s)" [1906, 2133]
  line "T1: LTC (60.0+0.60s)" [2161, 2388]
  line "T1: VLTC (2m24s+1.12s)" [2259, 2421]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2421 | 34 | 296 | 51% | 2408 | 27% |
|  |  | P1 | 2348 | 34 | 304 | 46% | 2417 | 28% |
|  |  | E1 | 2431 | 33 | 336 | 50% | 2429 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2388 | 34 | 304 | 51% | 2381 | 20% |
|  |  | P1 | 2319 | 35 | 300 | 45% | 2384 | 20% |
|  |  | E1 | 2310 | 31 | 372 | 48% | 2333 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2133 | 36 | 280 | 53% | 2101 | 22% |
|  |  | P1 | 2037 | 39 | 242 | 50% | 2051 | 20% |
|  |  | E1 | 2076 | 34 | 316 | 47% | 2113 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2259 | 30 | 384 | 49% | 2279 | 24% |
|  |  | P1 | 2145 | 69 | 90 | 50% | 2110 | 13% |
|  |  | E1 | 2169 | 57 | 122 | 53% | 2141 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2161 | 28 | 460 | 49% | 2168 | 21% |
|  |  | P1 | 1967 | 65 | 92 | 43% | 2048 | 13% |
|  |  | E1 | 2064 | 53 | 126 | 50% | 2078 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1906 | 27 | 482 | 48% | 1925 | 20% |
|  |  | P1 | 1823 | 72 | 82 | 41% | 1970 | 13% |
|  |  | E1 | 1870 | 58 | 122 | 45% | 2009 | 17% |