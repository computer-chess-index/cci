# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2498<sub>(+54) | 2867<sub>(+13) | 2930<sub>(+17) |  |
| 6.0 | 2026-03-31 | 2444 | 2854 | 2913 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2472<sub>(+62) | 2826<sub>(+119) | 2877<sub>(+58) |  |
| 6.0 | 2026-03-31 | 2410 | 2707 | 2819 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2537<sub>(+49) | 2853<sub>(+31) | 2916<sub>(+27) |  |
| 6.0 | 2026-03-31 | 2488<sub>(+93) | 2822<sub>(+95) | 2889<sub>(+74) |  |
| 5.3 | 2025-09-26 | 2395 | 2727 | 2815 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+tomitankChess+<version>&body=###%20Engine%20name%0AtomitankChess%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:43:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "E1: STC (8.0+0.08s)" [2444, 2498]
  line "E1: LTC (60.0+0.60s)" [2854, 2867]
  line "E1: VLTC (2m24s+1.12s)" [2913, 2930]
  line "P1: STC (8.0+0.08s)" [2410, 2472]
  line "P1: LTC (60.0+0.60s)" [2707, 2826]
  line "P1: VLTC (2m24s+1.12s)" [2819, 2877]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "T1: STC (8.0+0.08s)" [2395, 2488, 2537]
  line "T1: LTC (60.0+0.60s)" [2727, 2822, 2853]
  line "T1: VLTC (2m24s+1.12s)" [2815, 2889, 2916]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2916 | 27 | 412 | 51% | 2904 | 45% |
|  |  | P1 | 2877 | 30 | 328 | 49% | 2888 | 45% |
|  |  | E1 | 2930 | 27 | 428 | 50% | 2934 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2853 | 27 | 406 | 51% | 2847 | 44% |
|  |  | P1 | 2826 | 34 | 272 | 50% | 2826 | 39% |
|  |  | E1 | 2867 | 26 | 448 | 51% | 2857 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2537 | 29 | 388 | 48% | 2554 | 27% |
|  |  | P1 | 2472 | 35 | 276 | 47% | 2508 | 30% |
|  |  | E1 | 2498 | 27 | 448 | 46% | 2541 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2819 | 64 | 74 | 46% | 2851 | 38% |
|  |  | E1 | 2913 | 66 | 88 | 53% | 2871 | 22% |
|  |  | T1 | 2889 | 27 | 406 | 50% | 2890 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2707 | 68 | 78 | 44% | 2754 | 27% |
|  |  | E1 | 2854 | 60 | 96 | 51% | 2830 | 38% |
|  |  | T1 | 2822 | 29 | 362 | 50% | 2819 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2410 | 62 | 104 | 60% | 2310 | 20% |
|  |  | E1 | 2444 | 53 | 140 | 41% | 2566 | 24% |
|  |  | T1 | 2488 | 26 | 476 | 48% | 2507 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2815 | 31 | 312 | 48% | 2832 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2727 | 32 | 310 | 52% | 2711 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2395 | 29 | 420 | 50% | 2392 | 29% |