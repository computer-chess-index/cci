# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2458<sub>(+320) | 2755<sub>(+244) | 2850<sub>(+300) |  |
| 1.0 | 2026-01-01 | 2138 | 2511 | 2550 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2435<sub>(+322) | 2701<sub>(+255) | 2807<sub>(+212) |  |
| 1.0 | 2026-01-01 | 2113 | 2446 | 2595 |  |
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

Generated: 2026-11-19 05:42:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2138, 2458]
  line "E1: LTC (60.0+0.60s)" [2511, 2755]
  line "E1: VLTC (2m24s+1.12s)" [2550, 2850]
  line "P1: STC (8.0+0.08s)" [2113, 2435]
  line "P1: LTC (60.0+0.60s)" [2446, 2701]
  line "P1: VLTC (2m24s+1.12s)" [2595, 2807]
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
|  |  | P1 | 2807 | 32 | 300 | 50% | 2793 | 39% |
|  |  | E1 | 2850 | 30 | 362 | 52% | 2799 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2784 | 25 | 510 | 51% | 2774 | 38% |
|  |  | P1 | 2701 | 37 | 248 | 51% | 2645 | 31% |
|  |  | E1 | 2755 | 28 | 414 | 50% | 2750 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2530 | 26 | 512 | 51% | 2526 | 29% |
|  |  | P1 | 2435 | 36 | 258 | 48% | 2446 | 30% |
|  |  | E1 | 2458 | 29 | 408 | 49% | 2458 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2570 | 27 | 450 | 46% | 2611 | 32% |
|  |  | P1 | 2595 | 77 | 52 | 41% | 2669 | 37% |
|  |  | E1 | 2550 | 62 | 94 | 48% | 2573 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2508 | 29 | 408 | 49% | 2519 | 25% |
|  |  | P1 | 2446 | 73 | 72 | 58% | 2315 | 28% |
|  |  | E1 | 2511 | 59 | 104 | 46% | 2519 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2264 | 26 | 516 | 51% | 2252 | 29% |
|  |  | P1 | 2113 | 72 | 80 | 44% | 2229 | 14% |
|  |  | E1 | 2138 | 52 | 134 | 57% | 2086 | 30% |