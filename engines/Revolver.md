# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2453<sub>(+312) | 2750<sub>(+180) | 2846<sub>(+305) |  |
| 1.0 | 2026-01-01 | 2141 | 2570 | 2541 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2418<sub>(+300) | 2685<sub>(+327) | 2781<sub>(+139) |  |
| 1.0 | 2026-01-01 | 2118 | 2358 | 2642 |  |
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

Generated: 2026-11-15 05:42:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2141, 2453]
  line "E1: LTC (60.0+0.60s)" [2570, 2750]
  line "E1: VLTC (2m24s+1.12s)" [2541, 2846]
  line "P1: STC (8.0+0.08s)" [2118, 2418]
  line "P1: LTC (60.0+0.60s)" [2358, 2685]
  line "P1: VLTC (2m24s+1.12s)" [2642, 2781]
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
|  |  | P1 | 2781 | 34 | 276 | 50% | 2769 | 38% |
|  |  | E1 | 2846 | 30 | 358 | 52% | 2797 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2784 | 25 | 510 | 51% | 2774 | 38% |
|  |  | P1 | 2685 | 38 | 240 | 52% | 2623 | 32% |
|  |  | E1 | 2750 | 28 | 406 | 50% | 2749 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2530 | 26 | 512 | 51% | 2526 | 29% |
|  |  | P1 | 2418 | 36 | 254 | 49% | 2429 | 30% |
|  |  | E1 | 2453 | 30 | 380 | 48% | 2460 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2541 | 72 | 74 | 47% | 2577 | 16% |
|  |  | T1 | 2570 | 27 | 450 | 46% | 2611 | 32% |
|  |  | P1 | 2642 | 91 | 36 | 49% | 2649 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2570 | 74 | 68 | 52% | 2504 | 22% |
|  |  | T1 | 2508 | 29 | 408 | 49% | 2519 | 25% |
|  |  | P1 | 2358 | 92 | 48 | 54% | 2295 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2141 | 59 | 106 | 58% | 2075 | 32% |
|  |  | T1 | 2264 | 26 | 516 | 51% | 2252 | 29% |
|  |  | P1 | 2118 | 84 | 60 | 46% | 2234 | 15% |