# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2442<sub>(-43) | 2746<sub>(-67) | 2853<sub>(-4) |  |
| 25.2.1 | 2026-06-20 | 2485 | 2813 | 2857 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2473<sub>(+109) | 2716<sub>(-41) | 2811<sub>(-39) |  |
| 25.2.1 | 2026-06-20 | 2364 | 2757 | 2850 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2475<sub>(-41) | 2789<sub>(+3) | 2858<sub>(-82) |  |
| 25.2.1 | 2026-06-20 | 2516 | 2786 | 2940 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crafty+<version>&body=###%20Engine%20name%0ACrafty%0A%0A###%20Version%0A25.6.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:37:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2485, 2442]
  line "E1: LTC (60.0+0.60s)" [2813, 2746]
  line "E1: VLTC (2m24s+1.12s)" [2857, 2853]
  line "P1: STC (8.0+0.08s)" [2364, 2473]
  line "P1: LTC (60.0+0.60s)" [2757, 2716]
  line "P1: VLTC (2m24s+1.12s)" [2850, 2811]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "T1: STC (8.0+0.08s)" [2516, 2475]
  line "T1: LTC (60.0+0.60s)" [2786, 2789]
  line "T1: VLTC (2m24s+1.12s)" [2940, 2858]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2858 | 27 | 424 | 49% | 2871 | 35% |
|  |  | P1 | 2811 | 33 | 300 | 47% | 2844 | 31% |
|  |  | E1 | 2853 | 28 | 404 | 50% | 2859 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 32 | 328 | 50% | 2786 | 30% |
|  |  | P1 | 2716 | 31 | 356 | 50% | 2726 | 29% |
|  |  | E1 | 2746 | 26 | 494 | 46% | 2793 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2475 | 31 | 356 | 50% | 2473 | 28% |
|  |  | P1 | 2473 | 34 | 316 | 52% | 2441 | 24% |
|  |  | E1 | 2442 | 29 | 420 | 50% | 2438 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2940 | 51 | 130 | 50% | 2943 | 28% |
|  |  | P1 | 2850 | 66 | 84 | 56% | 2769 | 26% |
|  |  | E1 | 2857 | 52 | 132 | 48% | 2866 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2786 | 56 | 112 | 49% | 2801 | 24% |
|  |  | P1 | 2757 | 62 | 112 | 57% | 2576 | 17% |
|  |  | E1 | 2813 | 52 | 128 | 55% | 2727 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2516 | 59 | 96 | 52% | 2499 | 26% |
|  |  | P1 | 2364 | 52 | 132 | 59% | 2217 | 30% |
|  |  | E1 | 2485 | 51 | 138 | 45% | 2557 | 21% |