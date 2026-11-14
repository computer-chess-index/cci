# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2079<sub>(+45) | 2433<sub>(+107) | 2446<sub>(-53) |  |
| 5.1 | 2025-09-16 | 2034 | 2326 | 2499 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2061<sub>(+66) | 2268<sub>(-203) | 2437<sub>(-110) |  |
| 5.1 | 2025-09-16 | 1995 | 2471 | 2547 |  |
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

Generated: 2026-11-14 05:41:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 1900 --> 2600
  line "E1: STC (8.0+0.08s)" [2034, 2079]
  line "E1: LTC (60.0+0.60s)" [2326, 2433]
  line "E1: VLTC (2m24s+1.12s)" [2499, 2446]
  line "P1: STC (8.0+0.08s)" [1995, 2061]
  line "P1: LTC (60.0+0.60s)" [2471, 2268]
  line "P1: VLTC (2m24s+1.12s)" [2547, 2437]
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
|  |  | P1 | 2437 | 39 | 242 | 50% | 2441 | 22% |
|  |  | E1 | 2446 | 36 | 266 | 49% | 2471 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2392 | 28 | 432 | 49% | 2402 | 29% |
|  |  | P1 | 2268 | 36 | 304 | 55% | 2178 | 24% |
|  |  | E1 | 2433 | 32 | 330 | 47% | 2460 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2132 | 30 | 404 | 52% | 2113 | 22% |
|  |  | P1 | 2061 | 40 | 224 | 50% | 2090 | 22% |
|  |  | E1 | 2079 | 33 | 320 | 49% | 2101 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2506 | 30 | 380 | 48% | 2537 | 26% |
|  |  | P1 | 2547 | 120 | 32 | 56% | 2388 | 13% |
|  |  | E1 | 2499 | 87 | 50 | 36% | 2668 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2471 | 125 | 32 | 56% | 2376 | 19% |
|  |  | E1 | 2326 | 85 | 54 | 47% | 2400 | 13% |
|  |  | T1 | 2430 | 28 | 416 | 49% | 2445 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1995 | 100 | 44 | 35% | 2237 | 11% |
|  |  | E1 | 2034 | 89 | 60 | 37% | 2268 | 17% |
|  |  | T1 | 2171 | 27 | 482 | 51% | 2165 | 28% |