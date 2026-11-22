# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2415<sub>(-33) | 2808<sub>(+36) | 2892<sub>(+11) |  |
| 1.28.0 | 2026-09-21 | 2448<sub>(+111) | 2772<sub>(+123) | 2881<sub>(+213) |  |
| 1.27.0timehotfix | 2026-05-28 | 2337 | 2649 | 2668 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2402<sub>(+34) | 2772<sub>(+29) | 2830<sub>(-10) |  |
| 1.28.0 | 2026-09-21 | 2368<sub>(+70) | 2743<sub>(+271) | 2840<sub>(+241) |  |
| 1.27.0timehotfix | 2026-05-28 | 2298 | 2472 | 2599 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.0 | 2026-09-21 | 2438<sub>(+70) | 2789<sub>(+188) | 2865<sub>(+238) |  |
| 1.27.0timehotfix | 2026-05-28 | 2368 | 2601 | 2627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aurora+<version>&body=###%20Engine%20name%0AAurora%0A%0A###%20Version%0A1.28.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:36:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2337, 2448, 2415]
  line "E1: LTC (60.0+0.60s)" [2649, 2772, 2808]
  line "E1: VLTC (2m24s+1.12s)" [2668, 2881, 2892]
  line "P1: STC (8.0+0.08s)" [2298, 2368, 2402]
  line "P1: LTC (60.0+0.60s)" [2472, 2743, 2772]
  line "P1: VLTC (2m24s+1.12s)" [2599, 2840, 2830]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2368, 2438]
  line "T1: LTC (60.0+0.60s)" [2601, 2789]
  line "T1: VLTC (2m24s+1.12s)" [2627, 2865]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2830 | 37 | 218 | 49% | 2839 | 40% |
|  |  | E1 | 2892 | 32 | 292 | 50% | 2897 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2772 | 37 | 252 | 47% | 2805 | 30% |
|  |  | E1 | 2808 | 31 | 334 | 48% | 2823 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2402 | 42 | 192 | 47% | 2427 | 25% |
|  |  | E1 | 2415 | 35 | 280 | 51% | 2406 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2840 | 41 | 172 | 48% | 2858 | 43% |
|  |  | E1 | 2881 | 31 | 342 | 53% | 2853 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2743 | 38 | 224 | 54% | 2670 | 37% |
|  |  | E1 | 2772 | 36 | 248 | 49% | 2777 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2368 | 42 | 208 | 46% | 2423 | 22% |
|  |  | E1 | 2448 | 42 | 212 | 50% | 2446 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2599 | 33 | 296 | 44% | 2664 | 36% |
|  |  | E1 | 2668 | 36 | 248 | 47% | 2700 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2472 | 42 | 206 | 53% | 2448 | 24% |
|  |  | E1 | 2649 | 37 | 252 | 53% | 2581 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2298 | 44 | 192 | 45% | 2363 | 24% |
|  |  | E1 | 2337 | 39 | 236 | 49% | 2345 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |