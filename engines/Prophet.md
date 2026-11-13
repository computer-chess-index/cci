# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2084<sub>(-7) | 2419<sub>(+152) | 2434<sub>(-62) |  |
| 5.1 | 2025-09-16 | 2091 | 2267 | 2496 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2064<sub>(-24) | 2276<sub>(-204) | 2452<sub>(-110) |  |
| 5.1 | 2025-09-16 | 2088 | 2480 | 2562 |  |
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

Generated: 2026-11-13 05:41:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2091, 2084]
  line "E1: LTC (60.0+0.60s)" [2267, 2419]
  line "E1: VLTC (2m24s+1.12s)" [2496, 2434]
  line "P1: STC (8.0+0.08s)" [2088, 2064]
  line "P1: LTC (60.0+0.60s)" [2480, 2276]
  line "P1: VLTC (2m24s+1.12s)" [2562, 2452]
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
|  |  | P1 | 2452 | 40 | 238 | 50% | 2453 | 21% |
|  |  | E1 | 2434 | 36 | 266 | 49% | 2458 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2392 | 28 | 432 | 49% | 2402 | 29% |
|  |  | P1 | 2276 | 36 | 304 | 55% | 2187 | 24% |
|  |  | E1 | 2419 | 33 | 322 | 46% | 2449 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2132 | 30 | 404 | 52% | 2113 | 22% |
|  |  | P1 | 2064 | 40 | 220 | 49% | 2101 | 23% |
|  |  | E1 | 2084 | 33 | 316 | 49% | 2099 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2562 | 160 | 20 | 58% | 2414 | 5% |
|  |  | E1 | 2496 | 113 | 28 | 39% | 2624 | 21% |
|  |  | T1 | 2506 | 30 | 380 | 48% | 2537 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2267 | 118 | 30 | 38% | 2449 | 10% |
|  |  | T1 | 2430 | 28 | 416 | 49% | 2445 | 30% |
|  |  | P1 | 2480 | 157 | 24 | 58% | 2334 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2091 | 167 | 28 | 20% | 2584 | 4% |
|  |  | T1 | 2171 | 27 | 482 | 51% | 2165 | 28% |
|  |  | P1 | 2088 | 139 | 24 | 33% | 2381 | 17% |