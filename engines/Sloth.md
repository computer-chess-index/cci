# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2921<sub>(+276) | 3214<sub>(+230) | 3343<sub>(+242) |  |
| 2.4 | 2026-10-09 | 2645<sub>(+265) | 2984<sub>(+175) | 3101<sub>(+167) |  |
| 2.2 | 2026-08-28 | 2380 | 2809 | 2934 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2952<sub>(+313) | 3186<sub>(+228) | 3255<sub>(+257) |  |
| 2.4 | 2026-10-09 | 2639<sub>(+164) | 2958<sub>(+124) | 2998<sub>(+112) |  |
| 2.2 | 2026-08-28 | 2475 | 2834 | 2886 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3 | 2026-09-22 | 2579<sub>(+36) | 2962<sub>(+81) | 3021<sub>(+39) |  |
| 2.2 | 2026-08-28 | 2543 | 2881 | 2982 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sloth+<version>&body=###%20Engine%20name%0ASloth%0A%0A###%20Version%0A2.3" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:43:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2380, 2645, 2921]
  line "E1: LTC (60.0+0.60s)" [2809, 2984, 3214]
  line "E1: VLTC (2m24s+1.12s)" [2934, 3101, 3343]
  line "P1: STC (8.0+0.08s)" [2475, 2639, 2952]
  line "P1: LTC (60.0+0.60s)" [2834, 2958, 3186]
  line "P1: VLTC (2m24s+1.12s)" [2886, 2998, 3255]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3"]
  y-axis "Elo Rating" 2500 --> 3100
  line "T1: STC (8.0+0.08s)" [2543, 2579]
  line "T1: LTC (60.0+0.60s)" [2881, 2962]
  line "T1: VLTC (2m24s+1.12s)" [2982, 3021]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3255 | 38 | 180 | 51% | 3244 | 66% |
|  |  | E1 | 3343 | 30 | 292 | 50% | 3337 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3186 | 35 | 220 | 51% | 3182 | 59% |
|  |  | E1 | 3214 | 29 | 324 | 52% | 3202 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2952 | 37 | 210 | 54% | 2923 | 49% |
|  |  | E1 | 2921 | 33 | 298 | 54% | 2884 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2998 | 37 | 202 | 48% | 3016 | 53% |
|  |  | E1 | 3101 | 31 | 296 | 50% | 3102 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2958 | 38 | 204 | 51% | 2954 | 48% |
|  |  | E1 | 2984 | 32 | 306 | 50% | 2977 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2645 | 32 | 308 | 51% | 2628 | 34% |
|  |  | P1 | 2639 | 36 | 240 | 51% | 2633 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2886 | 38 | 208 | 47% | 2901 | 47% |
|  |  | E1 | 2934 | 33 | 282 | 47% | 2957 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2834 | 39 | 194 | 49% | 2838 | 46% |
|  |  | E1 | 2809 | 34 | 274 | 46% | 2834 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2475 | 44 | 180 | 50% | 2473 | 26% |
|  |  | E1 | 2380 | 35 | 280 | 41% | 2469 | 29% |