# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2925<sub>(+275) | 3221<sub>(+231) | 3351<sub>(+246) |  |
| 2.4 | 2026-10-09 | 2650<sub>(+197) | 2990<sub>(+65) | 3105<sub>(+97) |  |
| 2.3 | 2026-09-22 | 2453<sub>(+68) | 2925<sub>(+110) | 3008<sub>(+70) |  |
| 2.2 | 2026-08-28 | 2385 | 2815 | 2938 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2988<sub>(+323) | 3221<sub>(+231) | 3287<sub>(+262) |  |
| 2.4 | 2026-10-09 | 2665<sub>(+81) | 2990<sub>(+35) | 3025<sub>(+9) |  |
| 2.3 | 2026-09-22 | 2584<sub>(+88) | 2955<sub>(+93) | 3016<sub>(+99) |  |
| 2.2 | 2026-08-28 | 2496 | 2862 | 2917 |  |
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

Generated: 2026-11-25 05:43:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2385, 2453, 2650, 2925]
  line "E1: LTC (60.0+0.60s)" [2815, 2925, 2990, 3221]
  line "E1: VLTC (2m24s+1.12s)" [2938, 3008, 3105, 3351]
  line "P1: STC (8.0+0.08s)" [2496, 2584, 2665, 2988]
  line "P1: LTC (60.0+0.60s)" [2862, 2955, 2990, 3221]
  line "P1: VLTC (2m24s+1.12s)" [2917, 3016, 3025, 3287]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3287 | 37 | 192 | 52% | 3274 | 66% |
|  |  | E1 | 3351 | 30 | 300 | 51% | 3343 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3221 | 34 | 236 | 51% | 3213 | 58% |
|  |  | E1 | 3221 | 28 | 340 | 52% | 3208 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2988 | 36 | 226 | 54% | 2957 | 50% |
|  |  | E1 | 2925 | 32 | 310 | 54% | 2889 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3105 | 31 | 296 | 50% | 3106 | 49% |
|  |  | P1 | 3025 | 37 | 206 | 48% | 3047 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2990 | 37 | 212 | 51% | 2988 | 49% |
|  |  | E1 | 2990 | 32 | 306 | 50% | 2982 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2665 | 35 | 248 | 51% | 2660 | 40% |
|  |  | E1 | 2650 | 32 | 308 | 51% | 2635 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  |  | P1 | 3016 | 43 | 152 | 48% | 3029 | 49% |
|  |  | E1 | 3008 | 33 | 262 | 51% | 3008 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  |  | P1 | 2955 | 48 | 126 | 45% | 2997 | 47% |
|  |  | E1 | 2925 | 36 | 224 | 51% | 2919 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
|  |  | P1 | 2584 | 52 | 122 | 48% | 2606 | 30% |
|  |  | E1 | 2453 | 43 | 184 | 47% | 2484 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2917 | 38 | 208 | 47% | 2932 | 47% |
|  |  | E1 | 2938 | 33 | 282 | 47% | 2961 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2862 | 39 | 194 | 49% | 2867 | 46% |
|  |  | E1 | 2815 | 34 | 274 | 46% | 2838 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2496 | 44 | 180 | 50% | 2495 | 26% |
|  |  | E1 | 2385 | 35 | 280 | 41% | 2473 | 29% |