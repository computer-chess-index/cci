# Engine: Aspen

Author: A. Theofanis

Home: https://github.com/ATheofanis/aspen-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-05-22 | 2603<sub>(+22) | 3008<sub>(+56) | 3079<sub>(+31) |  |
| 2.1.0 | 2026-05-21 | 2581 | 2952 | 3048 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-05-22 | 2685<sub>(-3) | 3029<sub>(+59) | 3085<sub>(+7) |  |
| 2.1.0 | 2026-05-21 | 2688 | 2970 | 3078 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-05-22 | 2712<sub>(+20) | 3086<sub>(+89) | 3124<sub>(+39) |  |
| 2.1.0 | 2026-05-21 | 2692<sub>(+325) | 2997<sub>(+289) | 3085<sub>(+234) |  |
| 1.3.0 | 2026-05-20 | 2367<sub>(+169) | 2708<sub>(+53) | 2851<sub>(+155) |  |
| 1.2.3 | 2026-05-20 | 2198 | 2655 | 2696 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aspen+<version>&body=###%20Engine%20name%0AAspen%0A%0A###%20Version%0A2.2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:36:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2500 --> 3100
  line "E1: STC (8.0+0.08s)" [2581, 2603]
  line "E1: LTC (60.0+0.60s)" [2952, 3008]
  line "E1: VLTC (2m24s+1.12s)" [3048, 3079]
  line "P1: STC (8.0+0.08s)" [2688, 2685]
  line "P1: LTC (60.0+0.60s)" [2970, 3029]
  line "P1: VLTC (2m24s+1.12s)" [3078, 3085]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.2.3", "2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2100 --> 3200
  line "T1: STC (8.0+0.08s)" [2367, 2198, 2692, 2712]
  line "T1: LTC (60.0+0.60s)" [2708, 2655, 2997, 3086]
  line "T1: VLTC (2m24s+1.12s)" [2851, 2696, 3085, 3124]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3124 | 31 | 278 | 49% | 3129 | 56% |
|  |  | P1 | 3085 | 34 | 258 | 48% | 3100 | 48% |
|  |  | E1 | 3079 | 28 | 388 | 51% | 3046 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3086 | 31 | 278 | 49% | 3092 | 59% |
|  |  | P1 | 3029 | 27 | 400 | 46% | 3056 | 49% |
|  |  | E1 | 3008 | 24 | 534 | 53% | 2966 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2712 | 29 | 374 | 51% | 2709 | 40% |
|  |  | P1 | 2685 | 35 | 270 | 47% | 2712 | 36% |
|  |  | E1 | 2603 | 27 | 454 | 46% | 2624 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3078 | 59 | 88 | 47% | 3065 | 51% |
|  |  | E1 | 3048 | 47 | 140 | 59% | 2974 | 44% |
|  |  | T1 | 3085 | 31 | 318 | 52% | 3071 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2952 | 42 | 178 | 50% | 2959 | 39% |
|  |  | T1 | 2997 | 28 | 382 | 51% | 2989 | 47% |
|  |  | P1 | 2970 | 52 | 104 | 51% | 2961 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2581 | 43 | 170 | 49% | 2574 | 35% |
|  |  | T1 | 2692 | 32 | 304 | 54% | 2654 | 38% |
|  |  | P1 | 2688 | 53 | 108 | 47% | 2715 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2851 | 59 | 92 | 54% | 2812 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2708 | 48 | 140 | 53% | 2678 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2367 | 47 | 158 | 45% | 2417 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2696 | 111 | 28 | 55% | 2642 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2655 | 101 | 36 | 67% | 2499 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2198 | 84 | 48 | 50% | 2203 | 25% |