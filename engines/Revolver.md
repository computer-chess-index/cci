# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2465<sub>(+328) | 2754<sub>(+239) | 2851<sub>(+297) |  |
| 1.0 | 2026-01-01 | 2137 | 2515 | 2554 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2446<sub>(+345) | 2712<sub>(+258) | 2817<sub>(+230) |  |
| 1.0 | 2026-01-01 | 2101 | 2454 | 2587 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2530<sub>(+266) | 2784<sub>(+276) | 2836<sub>(+266) |  |
| 1.0 | 2026-01-01 | 2264 | 2508 | 2570 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Revolver+<version>&body=###%20Engine%20name%0ARevolver%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:42:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2137, 2465]
  line "E1: LTC (60.0+0.60s)" [2515, 2754]
  line "E1: VLTC (2m24s+1.12s)" [2554, 2851]
  line "P1: STC (8.0+0.08s)" [2101, 2446]
  line "P1: LTC (60.0+0.60s)" [2454, 2712]
  line "P1: VLTC (2m24s+1.12s)" [2587, 2817]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2200 --> 2900
  line "T1: STC (8.0+0.08s)" [2264, 2530]
  line "T1: LTC (60.0+0.60s)" [2508, 2784]
  line "T1: VLTC (2m24s+1.12s)" [2570, 2836]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2836 | 25 | 508 | 52% | 2819 | 39% |
|  |  | P1 | 2817 | 32 | 300 | 50% | 2805 | 39% |
|  |  | E1 | 2851 | 30 | 366 | 52% | 2801 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2784 | 25 | 510 | 51% | 2774 | 38% |
|  |  | P1 | 2712 | 36 | 256 | 51% | 2657 | 30% |
|  |  | E1 | 2754 | 28 | 418 | 50% | 2754 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2530 | 26 | 512 | 51% | 2526 | 29% |
|  |  | P1 | 2446 | 35 | 270 | 49% | 2454 | 30% |
|  |  | E1 | 2465 | 28 | 444 | 50% | 2461 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2570 | 27 | 450 | 46% | 2611 | 32% |
|  |  | P1 | 2587 | 71 | 64 | 41% | 2666 | 34% |
|  |  | E1 | 2554 | 62 | 94 | 48% | 2576 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2508 | 29 | 408 | 49% | 2519 | 25% |
|  |  | P1 | 2454 | 62 | 96 | 56% | 2352 | 28% |
|  |  | E1 | 2515 | 59 | 104 | 46% | 2523 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2264 | 26 | 516 | 51% | 2252 | 29% |
|  |  | P1 | 2101 | 61 | 106 | 45% | 2202 | 18% |
|  |  | E1 | 2137 | 52 | 134 | 57% | 2086 | 30% |