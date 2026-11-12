# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2107<sub>(-499) | 2475<sub>(+153) | 2480<sub>(-126) |  |
| 5.1 | 2025-09-16 | 2606 | 2322 | 2606 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2171<sub>(+new) | 2406<sub>(+new) | 2606<sub>(+29) |  |
| 5.1 | 2025-09-16 |  |  | 2577 |  |
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

Generated: 2026-11-12 05:41:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2606, 2107]
  line "E1: LTC (60.0+0.60s)" [2322, 2475]
  line "E1: VLTC (2m24s+1.12s)" [2606, 2480]
  line "P1: STC (8.0+0.08s)" [2171]
  line "P1: LTC (60.0+0.60s)" [2406]
  line "P1: VLTC (2m24s+1.12s)" [2606]
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
|  |  | P1 | 2606 | 40 | 234 | 51% | 2595 | 22% |
|  |  | E1 | 2480 | 36 | 266 | 49% | 2506 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2392 | 28 | 432 | 49% | 2402 | 29% |
|  |  | P1 | 2406 | 36 | 300 | 55% | 2322 | 24% |
|  |  | E1 | 2475 | 34 | 298 | 48% | 2485 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2132 | 30 | 404 | 52% | 2113 | 22% |
|  |  | P1 | 2171 | 40 | 220 | 49% | 2209 | 23% |
|  |  | E1 | 2107 | 34 | 300 | 49% | 2129 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2506 | 30 | 380 | 48% | 2537 | 26% |
|  |  | P1 | 2577 | 262 | 4 | 0% | 2890 | 0% |
|  |  | E1 | 2606 | 262 | 4 | 0% | 2920 | 0% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2430 | 28 | 416 | 49% | 2445 | 30% |
|  |  | E1 | 2322 | 218 | 8 | 13% | 2645 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2606 | 262 | 4 | 0% | 2920 | 0% |
|  |  | T1 | 2171 | 27 | 482 | 51% | 2165 | 28% |