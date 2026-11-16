# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2072<sub>(-2) | 2433<sub>(+64) | 2445<sub>(-69) |  |
| 5.1 | 2025-09-16 | 2074 | 2369 | 2514 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2064<sub>(+7) | 2282<sub>(-35) | 2442<sub>(-54) |  |
| 5.1 | 2025-09-16 | 2057 | 2317 | 2496 |  |
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

Generated: 2026-11-16 05:41:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2074, 2072]
  line "E1: LTC (60.0+0.60s)" [2369, 2433]
  line "E1: VLTC (2m24s+1.12s)" [2514, 2445]
  line "P1: STC (8.0+0.08s)" [2057, 2064]
  line "P1: LTC (60.0+0.60s)" [2317, 2282]
  line "P1: VLTC (2m24s+1.12s)" [2496, 2442]
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
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2442 | 39 | 242 | 50% | 2445 | 22% |
|  |  | E1 | 2445 | 36 | 266 | 49% | 2471 | 32% |
|  |  | T1 | 2506 | 28 | 438 | 49% | 2516 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2282 | 34 | 324 | 55% | 2191 | 24% |
|  |  | E1 | 2433 | 32 | 338 | 47% | 2456 | 29% |
|  |  | T1 | 2392 | 28 | 432 | 49% | 2402 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2072 | 32 | 334 | 49% | 2091 | 24% |
|  |  | T1 | 2132 | 30 | 404 | 52% | 2113 | 22% |
|  |  | P1 | 2064 | 40 | 224 | 50% | 2091 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2506 | 30 | 380 | 48% | 2537 | 26% |
|  |  | P1 | 2496 | 91 | 52 | 50% | 2431 | 12% |
|  |  | E1 | 2514 | 64 | 86 | 43% | 2604 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2430 | 28 | 416 | 49% | 2445 | 30% |
|  |  | P1 | 2317 | 89 | 56 | 42% | 2403 | 16% |
|  |  | E1 | 2369 | 63 | 94 | 52% | 2377 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2171 | 27 | 482 | 51% | 2165 | 28% |
|  |  | P1 | 2057 | 72 | 76 | 47% | 2140 | 16% |
|  |  | E1 | 2074 | 60 | 108 | 45% | 2182 | 26% |