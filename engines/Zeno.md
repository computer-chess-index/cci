# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2080<sub>(+217) | 2311<sub>(+248) | 2429<sub>(+238) |  |
| 2.0 | 2026-03-08 | 1863 | 2063 | 2191 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2034<sub>(+220) | 2319<sub>(+329) | 2333<sub>(+193) |  |
| 2.0 | 2026-03-08 | 1814 | 1990 | 2140 |  |
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

Generated: 2026-11-15 05:44:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "E1: STC (8.0+0.08s)" [1863, 2080]
  line "E1: LTC (60.0+0.60s)" [2063, 2311]
  line "E1: VLTC (2m24s+1.12s)" [2191, 2429]
  line "P1: STC (8.0+0.08s)" [1814, 2034]
  line "P1: LTC (60.0+0.60s)" [1990, 2319]
  line "P1: VLTC (2m24s+1.12s)" [2140, 2333]
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
|  |  | P1 | 2333 | 35 | 288 | 45% | 2406 | 28% |
|  |  | E1 | 2429 | 33 | 332 | 49% | 2429 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2388 | 34 | 304 | 51% | 2381 | 20% |
|  |  | P1 | 2319 | 37 | 280 | 46% | 2376 | 20% |
|  |  | E1 | 2311 | 31 | 368 | 48% | 2336 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2133 | 36 | 280 | 53% | 2101 | 22% |
|  |  | P1 | 2034 | 40 | 238 | 51% | 2040 | 21% |
|  |  | E1 | 2080 | 35 | 304 | 48% | 2113 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2191 | 66 | 94 | 57% | 2126 | 16% |
|  |  | T1 | 2259 | 30 | 384 | 49% | 2279 | 24% |
|  |  | P1 | 2140 | 84 | 66 | 52% | 2072 | 12% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2063 | 56 | 112 | 50% | 2083 | 26% |
|  |  | T1 | 2161 | 28 | 460 | 49% | 2168 | 21% |
|  |  | P1 | 1990 | 71 | 76 | 45% | 2056 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1863 | 63 | 102 | 42% | 2044 | 18% |
|  |  | T1 | 1906 | 27 | 482 | 48% | 1925 | 20% |
|  |  | P1 | 1814 | 74 | 78 | 40% | 1966 | 14% |