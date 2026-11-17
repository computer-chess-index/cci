# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2435<sub>(-44) | 2757<sub>(-66) | 2861<sub>(+7) |  |
| 25.2.1 | 2026-06-20 | 2479 | 2823 | 2854 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2442<sub>(+154) | 2677<sub>(-78) | 2780<sub>(-33) |  |
| 25.2.1 | 2026-06-20 | 2288 | 2755 | 2813 |  |
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

Generated: 2026-11-17 05:37:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2479, 2435]
  line "E1: LTC (60.0+0.60s)" [2823, 2757]
  line "E1: VLTC (2m24s+1.12s)" [2854, 2861]
  line "P1: STC (8.0+0.08s)" [2288, 2442]
  line "P1: LTC (60.0+0.60s)" [2755, 2677]
  line "P1: VLTC (2m24s+1.12s)" [2813, 2780]
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
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2780 | 34 | 276 | 47% | 2811 | 32% |
|  |  | E1 | 2861 | 30 | 374 | 49% | 2869 | 31% |
|  |  | T1 | 2858 | 27 | 424 | 49% | 2871 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2677 | 33 | 308 | 49% | 2696 | 30% |
|  |  | E1 | 2757 | 26 | 478 | 46% | 2799 | 31% |
|  |  | T1 | 2789 | 32 | 328 | 50% | 2786 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2435 | 31 | 368 | 49% | 2441 | 26% |
|  |  | T1 | 2475 | 31 | 356 | 50% | 2473 | 28% |
|  |  | P1 | 2442 | 37 | 272 | 52% | 2408 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2940 | 51 | 130 | 50% | 2943 | 28% |
|  |  | P1 | 2813 | 77 | 64 | 58% | 2711 | 25% |
|  |  | E1 | 2854 | 62 | 96 | 46% | 2876 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2786 | 56 | 112 | 49% | 2801 | 24% |
|  |  | P1 | 2755 | 104 | 56 | 67% | 2353 | 5% |
|  |  | E1 | 2823 | 61 | 96 | 56% | 2707 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2516 | 59 | 96 | 52% | 2499 | 26% |
|  |  | P1 | 2288 | 61 | 100 | 57% | 2164 | 27% |
|  |  | E1 | 2479 | 58 | 110 | 42% | 2579 | 22% |