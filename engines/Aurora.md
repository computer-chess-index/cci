# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2412<sub>(-42) | 2804<sub>(+27) | 2881<sub>(+3) |  |
| 1.28.0 | 2026-09-21 | 2454<sub>(+109) | 2777<sub>(+131) | 2878<sub>(+213) |  |
| 1.27.0timehotfix | 2026-05-28 | 2345 | 2646 | 2665 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2379<sub>(+60) | 2734<sub>(+29) | 2803<sub>(-6) |  |
| 1.28.0 | 2026-09-21 | 2319<sub>(+48) | 2705<sub>(+264) | 2809<sub>(+240) |  |
| 1.27.0timehotfix | 2026-05-28 | 2271 | 2441 | 2569 |  |
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

Generated: 2026-11-14 05:36:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2345, 2454, 2412]
  line "E1: LTC (60.0+0.60s)" [2646, 2777, 2804]
  line "E1: VLTC (2m24s+1.12s)" [2665, 2878, 2881]
  line "P1: STC (8.0+0.08s)" [2271, 2319, 2379]
  line "P1: LTC (60.0+0.60s)" [2441, 2705, 2734]
  line "P1: VLTC (2m24s+1.12s)" [2569, 2809, 2803]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2803 | 39 | 198 | 50% | 2805 | 40% |
|  |  | E1 | 2881 | 34 | 252 | 49% | 2890 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2804 | 32 | 308 | 48% | 2819 | 35% |
|  |  | P1 | 2734 | 38 | 236 | 47% | 2765 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2412 | 37 | 246 | 51% | 2410 | 27% |
|  |  | P1 | 2379 | 45 | 168 | 48% | 2399 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2809 | 43 | 162 | 48% | 2823 | 41% |
|  |  | E1 | 2878 | 31 | 334 | 53% | 2844 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2705 | 43 | 172 | 54% | 2624 | 36% |
|  |  | E1 | 2777 | 36 | 236 | 50% | 2773 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2319 | 45 | 184 | 44% | 2390 | 20% |
|  |  | E1 | 2454 | 42 | 204 | 50% | 2450 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2569 | 33 | 296 | 44% | 2635 | 36% |
|  |  | E1 | 2665 | 36 | 248 | 47% | 2697 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2441 | 42 | 206 | 53% | 2419 | 24% |
|  |  | E1 | 2646 | 37 | 252 | 53% | 2581 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2271 | 43 | 192 | 45% | 2334 | 24% |
|  |  | E1 | 2345 | 39 | 236 | 49% | 2353 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |