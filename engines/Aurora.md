# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2406<sub>(-38) | 2805<sub>(+36) | 2892<sub>(+14) |  |
| 1.28.0 | 2026-09-21 | 2444<sub>(+110) | 2769<sub>(+126) | 2878<sub>(+214) |  |
| 1.27.0timehotfix | 2026-05-28 | 2334 | 2643 | 2664 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2399<sub>(+46) | 2759<sub>(+28) | 2815<sub>(-12) |  |
| 1.28.0 | 2026-09-21 | 2353<sub>(+61) | 2731<sub>(+269) | 2827<sub>(+240) |  |
| 1.27.0timehotfix | 2026-05-28 | 2292 | 2462 | 2587 |  |
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

Generated: 2026-11-18 05:36:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2334, 2444, 2406]
  line "E1: LTC (60.0+0.60s)" [2643, 2769, 2805]
  line "E1: VLTC (2m24s+1.12s)" [2664, 2878, 2892]
  line "P1: STC (8.0+0.08s)" [2292, 2353, 2399]
  line "P1: LTC (60.0+0.60s)" [2462, 2731, 2759]
  line "P1: VLTC (2m24s+1.12s)" [2587, 2827, 2815]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2815 | 38 | 210 | 49% | 2828 | 40% |
|  |  | E1 | 2892 | 33 | 276 | 50% | 2894 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2759 | 37 | 248 | 46% | 2796 | 30% |
|  |  | E1 | 2805 | 32 | 312 | 48% | 2822 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2399 | 44 | 180 | 48% | 2421 | 24% |
|  |  | E1 | 2406 | 36 | 266 | 51% | 2402 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2827 | 42 | 170 | 48% | 2844 | 42% |
|  |  | E1 | 2878 | 31 | 342 | 53% | 2850 | 35% |
|  |  | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2731 | 40 | 208 | 55% | 2654 | 35% |
|  |  | E1 | 2769 | 36 | 248 | 49% | 2774 | 37% |
|  |  | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2444 | 42 | 212 | 50% | 2444 | 18% |
|  |  | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2353 | 43 | 204 | 45% | 2414 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2587 | 33 | 296 | 44% | 2651 | 36% |
|  |  | E1 | 2664 | 36 | 248 | 47% | 2696 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2462 | 42 | 206 | 53% | 2439 | 24% |
|  |  | E1 | 2643 | 37 | 252 | 53% | 2577 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2292 | 44 | 192 | 45% | 2356 | 24% |
|  |  | E1 | 2334 | 39 | 236 | 49% | 2341 | 20% |