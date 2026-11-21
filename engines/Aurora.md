# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2411<sub>(-34) | 2805<sub>(+36) | 2888<sub>(+10) |  |
| 1.28.0 | 2026-09-21 | 2445<sub>(+109) | 2769<sub>(+124) | 2878<sub>(+213) |  |
| 1.27.0timehotfix | 2026-05-28 | 2336 | 2645 | 2665 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2407<sub>(+39) | 2772<sub>(+27) | 2828<sub>(-11) |  |
| 1.28.0 | 2026-09-21 | 2368<sub>(+68) | 2745<sub>(+273) | 2839<sub>(+242) |  |
| 1.27.0timehotfix | 2026-05-28 | 2300 | 2472 | 2597 |  |
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

Generated: 2026-11-21 05:36:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2336, 2445, 2411]
  line "E1: LTC (60.0+0.60s)" [2645, 2769, 2805]
  line "E1: VLTC (2m24s+1.12s)" [2665, 2878, 2888]
  line "P1: STC (8.0+0.08s)" [2300, 2368, 2407]
  line "P1: LTC (60.0+0.60s)" [2472, 2745, 2772]
  line "P1: VLTC (2m24s+1.12s)" [2597, 2839, 2828]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2828 | 37 | 218 | 49% | 2839 | 40% |
|  |  | E1 | 2888 | 33 | 286 | 50% | 2894 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2772 | 37 | 252 | 47% | 2805 | 30% |
|  |  | E1 | 2805 | 31 | 330 | 48% | 2820 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2407 | 43 | 188 | 48% | 2430 | 25% |
|  |  | E1 | 2411 | 35 | 276 | 51% | 2403 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2839 | 41 | 172 | 48% | 2858 | 43% |
|  |  | E1 | 2878 | 31 | 342 | 53% | 2850 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2745 | 38 | 224 | 54% | 2672 | 37% |
|  |  | E1 | 2769 | 36 | 248 | 49% | 2774 | 37% |
|  |  | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2368 | 42 | 208 | 46% | 2423 | 22% |
|  |  | E1 | 2445 | 42 | 212 | 50% | 2445 | 18% |
|  |  | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2597 | 33 | 296 | 44% | 2664 | 36% |
|  |  | E1 | 2665 | 36 | 248 | 47% | 2696 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2472 | 42 | 206 | 53% | 2449 | 24% |
|  |  | E1 | 2645 | 37 | 252 | 53% | 2579 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2300 | 44 | 192 | 45% | 2364 | 24% |
|  |  | E1 | 2336 | 39 | 236 | 49% | 2342 | 20% |