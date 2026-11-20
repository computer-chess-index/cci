# Engine: Revolver

Author: Deshawn Mohan-Smith

Home: https://github.com/GoldenRare/Revolver

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2464<sub>(+324) | 2759<sub>(+244) | 2854<sub>(+300) |  |
| 1.0 | 2026-01-01 | 2140 | 2515 | 2554 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-05-01 | 2442<sub>(+347) | 2708<sub>(+219) | 2812<sub>(+233) |  |
| 1.0 | 2026-01-01 | 2095 | 2489 | 2579 |  |
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

Generated: 2026-11-20 05:42:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 2900
  line "E1: STC (8.0+0.08s)" [2140, 2464]
  line "E1: LTC (60.0+0.60s)" [2515, 2759]
  line "E1: VLTC (2m24s+1.12s)" [2554, 2854]
  line "P1: STC (8.0+0.08s)" [2095, 2442]
  line "P1: LTC (60.0+0.60s)" [2489, 2708]
  line "P1: VLTC (2m24s+1.12s)" [2579, 2812]
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
|  |  | P1 | 2812 | 32 | 300 | 50% | 2799 | 39% |
|  |  | E1 | 2854 | 30 | 366 | 52% | 2804 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2784 | 25 | 510 | 51% | 2774 | 38% |
|  |  | P1 | 2708 | 37 | 252 | 51% | 2650 | 31% |
|  |  | E1 | 2759 | 28 | 414 | 50% | 2755 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2530 | 26 | 512 | 51% | 2526 | 29% |
|  |  | P1 | 2442 | 36 | 266 | 49% | 2450 | 30% |
|  |  | E1 | 2464 | 29 | 416 | 49% | 2462 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2554 | 62 | 94 | 48% | 2577 | 20% |
|  |  | T1 | 2570 | 27 | 450 | 46% | 2611 | 32% |
|  |  | P1 | 2579 | 75 | 56 | 39% | 2670 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2515 | 59 | 104 | 46% | 2523 | 23% |
|  |  | T1 | 2508 | 29 | 408 | 49% | 2519 | 25% |
|  |  | P1 | 2489 | 69 | 80 | 61% | 2327 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2264 | 26 | 516 | 51% | 2252 | 29% |
|  |  | P1 | 2095 | 68 | 88 | 43% | 2222 | 16% |
|  |  | E1 | 2140 | 52 | 134 | 57% | 2087 | 30% |