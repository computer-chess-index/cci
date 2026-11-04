# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2441<sub>(-66) | 2855<sub>(+13) | 2943<sub>(+4) |  |
| 1.28.0 | 2026-09-21 | 2507<sub>(+122) | 2842<sub>(+137) | 2939<sub>(+213) |  |
| 1.27.0timehotfix | 2026-05-28 | 2385 | 2705 | 2726 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2550<sub>(+62) | 2946<sub>(+69) | 3001<sub>(-8) |  |
| 1.28.0 | 2026-09-21 | 2488<sub>(+54) | 2877<sub>(+265) | 3009<sub>(+258) |  |
| 1.27.0timehotfix | 2026-05-28 | 2434 | 2612 | 2751 |  |
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

Generated: 2026-11-04 05:36:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2385, 2507, 2441]
  line "E1: LTC (60.0+0.60s)" [2705, 2842, 2855]
  line "E1: VLTC (2m24s+1.12s)" [2726, 2939, 2943]
  line "P1: STC (8.0+0.08s)" [2434, 2488, 2550]
  line "P1: LTC (60.0+0.60s)" [2612, 2877, 2946]
  line "P1: VLTC (2m24s+1.12s)" [2751, 3009, 3001]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2943 | 39 | 196 | 50% | 2942 | 41% |
|  |  | P1 | 3001 | 40 | 184 | 51% | 2994 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2855 | 34 | 268 | 47% | 2880 | 35% |
|  |  | P1 | 2946 | 59 | 96 | 51% | 2940 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2550 | 46 | 160 | 49% | 2561 | 25% |
|  |  | E1 | 2441 | 40 | 206 | 51% | 2434 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 3009 | 43 | 162 | 48% | 3023 | 41% |
|  |  | E1 | 2939 | 32 | 302 | 54% | 2897 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2877 | 45 | 156 | 55% | 2776 | 37% |
|  |  | E1 | 2842 | 38 | 216 | 51% | 2834 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2488 | 46 | 172 | 44% | 2568 | 20% |
|  |  | E1 | 2507 | 43 | 192 | 51% | 2493 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2751 | 33 | 296 | 44% | 2819 | 36% |
|  |  | E1 | 2726 | 36 | 248 | 47% | 2757 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2705 | 37 | 252 | 53% | 2638 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2612 | 42 | 206 | 53% | 2589 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2385 | 39 | 236 | 49% | 2392 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2434 | 44 | 192 | 45% | 2500 | 24% |