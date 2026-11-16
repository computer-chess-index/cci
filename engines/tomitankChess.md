# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2506<sub>(+31) | 2876<sub>(+3) | 2931<sub>(+39) |  |
| 6.0 | 2026-03-31 | 2475 | 2873 | 2892 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2458<sub>(+175) | 2799<sub>(+44) | 2846<sub>(+29) |  |
| 6.0 | 2026-03-31 | 2283 | 2755 | 2817 |  |
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

Generated: 2026-11-16 05:43:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 2200 --> 3000
  line "E1: STC (8.0+0.08s)" [2475, 2506]
  line "E1: LTC (60.0+0.60s)" [2873, 2876]
  line "E1: VLTC (2m24s+1.12s)" [2892, 2931]
  line "P1: STC (8.0+0.08s)" [2283, 2458]
  line "P1: LTC (60.0+0.60s)" [2755, 2799]
  line "P1: VLTC (2m24s+1.12s)" [2817, 2846]
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
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2931 | 27 | 408 | 50% | 2934 | 44% |
|  |  | T1 | 2916 | 27 | 412 | 51% | 2904 | 45% |
|  |  | P1 | 2846 | 31 | 308 | 49% | 2862 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2876 | 27 | 416 | 51% | 2858 | 39% |
|  |  | T1 | 2853 | 27 | 406 | 51% | 2847 | 44% |
|  |  | P1 | 2799 | 35 | 260 | 50% | 2801 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2506 | 29 | 404 | 47% | 2545 | 31% |
|  |  | T1 | 2537 | 29 | 388 | 48% | 2554 | 27% |
|  |  | P1 | 2458 | 36 | 248 | 48% | 2491 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2889 | 27 | 406 | 50% | 2890 | 43% |
|  |  | P1 | 2817 | 84 | 42 | 46% | 2842 | 40% |
|  |  | E1 | 2892 | 71 | 76 | 51% | 2865 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2822 | 29 | 362 | 50% | 2819 | 38% |
|  |  | P1 | 2755 | 94 | 46 | 49% | 2747 | 20% |
|  |  | E1 | 2873 | 65 | 84 | 53% | 2827 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2488 | 26 | 476 | 48% | 2507 | 35% |
|  |  | P1 | 2283 | 82 | 60 | 54% | 2260 | 18% |
|  |  | E1 | 2475 | 60 | 112 | 42% | 2596 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2815 | 31 | 312 | 48% | 2832 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2727 | 32 | 310 | 52% | 2711 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2395 | 29 | 420 | 50% | 2392 | 29% |