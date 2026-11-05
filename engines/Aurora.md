# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2452<sub>(-55) | 2857<sub>(+13) | 2943<sub>(+3) |  |
| 1.28.0 | 2026-09-21 | 2507<sub>(+120) | 2844<sub>(+139) | 2940<sub>(+214) |  |
| 1.27.0timehotfix | 2026-05-28 | 2387 | 2705 | 2726 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2581<sub>(+62) | 2992<sub>(+84) | 3035<sub>(-8) |  |
| 1.28.0 | 2026-09-21 | 2519<sub>(+54) | 2908<sub>(+263) | 3043<sub>(+259) |  |
| 1.27.0timehotfix | 2026-05-28 | 2465 | 2645 | 2784 |  |
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

Generated: 2026-11-05 05:36:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2387, 2507, 2452]
  line "E1: LTC (60.0+0.60s)" [2705, 2844, 2857]
  line "E1: VLTC (2m24s+1.12s)" [2726, 2940, 2943]
  line "P1: STC (8.0+0.08s)" [2465, 2519, 2581]
  line "P1: LTC (60.0+0.60s)" [2645, 2908, 2992]
  line "P1: VLTC (2m24s+1.12s)" [2784, 3043, 3035]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2943 | 38 | 212 | 50% | 2943 | 42% |
|  |  | P1 | 3035 | 40 | 186 | 51% | 3027 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2857 | 34 | 268 | 47% | 2881 | 35% |
|  |  | P1 | 2992 | 58 | 100 | 52% | 2973 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2581 | 46 | 160 | 49% | 2592 | 25% |
|  |  | E1 | 2452 | 39 | 218 | 52% | 2434 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 3043 | 43 | 162 | 48% | 3056 | 41% |
|  |  | E1 | 2940 | 32 | 302 | 54% | 2898 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2908 | 45 | 156 | 55% | 2807 | 37% |
|  |  | E1 | 2844 | 38 | 216 | 51% | 2836 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2519 | 46 | 172 | 44% | 2599 | 20% |
|  |  | E1 | 2507 | 43 | 192 | 51% | 2493 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2784 | 33 | 296 | 44% | 2850 | 36% |
|  |  | E1 | 2726 | 36 | 248 | 47% | 2758 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2705 | 37 | 252 | 53% | 2639 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2645 | 42 | 206 | 53% | 2622 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2387 | 39 | 236 | 49% | 2394 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2465 | 44 | 192 | 45% | 2531 | 24% |