# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2464<sub>(+322) | 2758<sub>(+242) | 2854<sub>(+298) |  |
| 1.0 | 2026-01-01 | 2142 | 2516 | 2556 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2426<sub>(+321) | 2695<sub>(+254) | 2796<sub>(+215) |  |
| 1.0 | 2026-01-01 | 2105 | 2441 | 2581 |  |
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

Generated: 2026-11-17 05:42:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2142, 2464]
  line "E1: LTC (60.0+0.60s)" [2516, 2758]
  line "E1: VLTC (2m24s+1.12s)" [2556, 2854]
  line "P1: STC (8.0+0.08s)" [2105, 2426]
  line "P1: LTC (60.0+0.60s)" [2441, 2695]
  line "P1: VLTC (2m24s+1.12s)" [2581, 2796]
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
|  |  | P1 | 2796 | 33 | 284 | 50% | 2786 | 39% |
|  |  | E1 | 2854 | 30 | 358 | 52% | 2804 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2695 | 37 | 248 | 51% | 2638 | 31% |
|  |  | E1 | 2758 | 28 | 410 | 50% | 2757 | 36% |
|  |  | T1 | 2784 | 25 | 510 | 51% | 2774 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2426 | 36 | 258 | 48% | 2438 | 30% |
|  |  | E1 | 2464 | 29 | 396 | 49% | 2465 | 28% |
|  |  | T1 | 2530 | 26 | 512 | 51% | 2526 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2570 | 27 | 450 | 46% | 2611 | 32% |
|  |  | P1 | 2581 | 77 | 52 | 41% | 2653 | 37% |
|  |  | E1 | 2556 | 62 | 94 | 48% | 2579 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2508 | 29 | 408 | 49% | 2519 | 25% |
|  |  | P1 | 2441 | 73 | 72 | 58% | 2310 | 28% |
|  |  | E1 | 2516 | 59 | 104 | 46% | 2525 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2264 | 26 | 516 | 51% | 2252 | 29% |
|  |  | P1 | 2105 | 72 | 80 | 44% | 2221 | 14% |
|  |  | E1 | 2142 | 52 | 134 | 57% | 2091 | 30% |