# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2083<sub>(+13) | 2419<sub>(+32) | 2445<sub>(-55) |  |
| 5.1 | 2025-09-16 | 2070 | 2387 | 2500 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2086<sub>(+29) | 2306<sub>(-71) | 2477<sub>(+40) |  |
| 5.1 | 2025-09-16 | 2057 | 2377 | 2437 |  |
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

Generated: 2026-11-27 05:41:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2000 --> 2500
  line "E1: STC (8.0+0.08s)" [2070, 2083]
  line "E1: LTC (60.0+0.60s)" [2387, 2419]
  line "E1: VLTC (2m24s+1.12s)" [2500, 2445]
  line "P1: STC (8.0+0.08s)" [2057, 2086]
  line "P1: LTC (60.0+0.60s)" [2377, 2306]
  line "P1: VLTC (2m24s+1.12s)" [2437, 2477]
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
|  |  | P1 | 2477 | 37 | 274 | 49% | 2484 | 21% |
|  |  | E1 | 2445 | 33 | 306 | 49% | 2466 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2392 | 28 | 432 | 49% | 2402 | 29% |
|  |  | P1 | 2306 | 33 | 344 | 54% | 2223 | 24% |
|  |  | E1 | 2419 | 30 | 382 | 46% | 2453 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2086 | 36 | 284 | 48% | 2121 | 23% |
|  |  | E1 | 2083 | 30 | 386 | 50% | 2090 | 23% |
|  |  | T1 | 2132 | 30 | 404 | 52% | 2113 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2500 | 52 | 126 | 44% | 2573 | 31% |
|  |  | T1 | 2506 | 30 | 380 | 48% | 2537 | 26% |
|  |  | P1 | 2437 | 64 | 96 | 45% | 2458 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2387 | 50 | 150 | 52% | 2379 | 18% |
|  |  | T1 | 2430 | 28 | 416 | 49% | 2445 | 30% |
|  |  | P1 | 2377 | 59 | 112 | 47% | 2406 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2171 | 27 | 482 | 51% | 2165 | 28% |
|  |  | P1 | 2057 | 54 | 128 | 46% | 2132 | 18% |
|  |  | E1 | 2070 | 50 | 148 | 47% | 2141 | 29% |