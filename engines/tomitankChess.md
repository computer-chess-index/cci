# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2499<sub>(+60) | 2867<sub>(+16) | 2923<sub>(+12) |  |
| 6.0 | 2026-03-31 | 2439 | 2851 | 2911 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2466<sub>(+121) | 2813<sub>(+99) | 2863<sub>(+25) |  |
| 6.0 | 2026-03-31 | 2345 | 2714 | 2838 |  |
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

Generated: 2026-11-19 05:44:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2439, 2499]
  line "E1: LTC (60.0+0.60s)" [2851, 2867]
  line "E1: VLTC (2m24s+1.12s)" [2911, 2923]
  line "P1: STC (8.0+0.08s)" [2345, 2466]
  line "P1: LTC (60.0+0.60s)" [2714, 2813]
  line "P1: VLTC (2m24s+1.12s)" [2838, 2863]
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
|  |  | P1 | 2863 | 31 | 316 | 49% | 2876 | 44% |
|  |  | E1 | 2923 | 27 | 420 | 50% | 2930 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2853 | 27 | 406 | 51% | 2847 | 44% |
|  |  | P1 | 2813 | 34 | 264 | 50% | 2812 | 39% |
|  |  | E1 | 2867 | 27 | 436 | 51% | 2854 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2537 | 29 | 388 | 48% | 2554 | 27% |
|  |  | P1 | 2466 | 35 | 264 | 47% | 2502 | 30% |
|  |  | E1 | 2499 | 28 | 420 | 47% | 2538 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2838 | 73 | 58 | 48% | 2847 | 34% |
|  |  | E1 | 2911 | 66 | 88 | 53% | 2867 | 22% |
|  |  | T1 | 2889 | 27 | 406 | 50% | 2890 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2714 | 81 | 58 | 44% | 2761 | 26% |
|  |  | E1 | 2851 | 60 | 96 | 51% | 2828 | 38% |
|  |  | T1 | 2822 | 29 | 362 | 50% | 2819 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2345 | 73 | 76 | 57% | 2282 | 17% |
|  |  | E1 | 2439 | 53 | 140 | 41% | 2564 | 24% |
|  |  | T1 | 2488 | 26 | 476 | 48% | 2507 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2815 | 31 | 312 | 48% | 2832 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2727 | 32 | 310 | 52% | 2711 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2395 | 29 | 420 | 50% | 2392 | 29% |