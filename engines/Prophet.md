# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2075<sub>(+38) | 2426<sub>(+39) | 2433<sub>(-65) |  |
| 5.1 | 2025-09-16 | 2037 | 2387 | 2498 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2078<sub>(+39) | 2299<sub>(-89) | 2462<sub>(+27) |  |
| 5.1 | 2025-09-16 | 2039 | 2388 | 2435 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2132<sub>(-39) | 2392<sub>(-38) | 2506<sub>(0) |  |
| 5.1 | 2025-09-16 | 2171 | 2430 | 2506 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prophet+<version>&body=###%20Engine%20name%0AProphet%0A%0A###%20Version%0A5.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:41:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2000 --> 2500
  line "E1: STC (8.0+0.08s)" [2037, 2075]
  line "E1: LTC (60.0+0.60s)" [2387, 2426]
  line "E1: VLTC (2m24s+1.12s)" [2498, 2433]
  line "P1: STC (8.0+0.08s)" [2039, 2078]
  line "P1: LTC (60.0+0.60s)" [2388, 2299]
  line "P1: VLTC (2m24s+1.12s)" [2435, 2462]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2100 --> 2600
  line "T1: STC (8.0+0.08s)" [2171, 2132]
  line "T1: LTC (60.0+0.60s)" [2430, 2392]
  line "T1: VLTC (2m24s+1.12s)" [2506, 2506]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2506 | 28 | 438 | 49% | 2516 | 26% |
|  |  | P1 | 2462 | 37 | 274 | 49% | 2469 | 21% |
|  |  | E1 | 2433 | 35 | 282 | 48% | 2464 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2299 | 34 | 328 | 55% | 2207 | 24% |
|  |  | E1 | 2426 | 31 | 354 | 47% | 2450 | 29% |
|  |  | T1 | 2392 | 28 | 432 | 49% | 2402 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2078 | 38 | 248 | 49% | 2113 | 21% |
|  |  | E1 | 2075 | 32 | 358 | 50% | 2084 | 23% |
|  |  | T1 | 2132 | 30 | 404 | 52% | 2113 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2498 | 55 | 114 | 43% | 2577 | 31% |
|  |  | T1 | 2506 | 30 | 380 | 48% | 2537 | 26% |
|  |  | P1 | 2435 | 68 | 84 | 46% | 2444 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2430 | 28 | 416 | 49% | 2445 | 30% |
|  |  | P1 | 2388 | 64 | 96 | 49% | 2395 | 19% |
|  |  | E1 | 2387 | 57 | 114 | 54% | 2372 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2171 | 27 | 482 | 51% | 2165 | 28% |
|  |  | P1 | 2039 | 56 | 120 | 45% | 2124 | 18% |
|  |  | E1 | 2037 | 55 | 124 | 44% | 2155 | 29% |