# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2921<sub>(+275) | 3216<sub>(+230) | 3348<sub>(+246) |  |
| 2.4 | 2026-10-09 | 2646<sub>(+207) | 2986<sub>(+71) | 3102<sub>(+109) |  |
| 2.3 | 2026-09-22 | 2439<sub>(+58) | 2915<sub>(+104) | 2993<sub>(+58) |  |
| 2.2 | 2026-08-28 | 2381 | 2811 | 2935 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2975<sub>(+320) | 3212<sub>(+234) | 3276<sub>(+263) |  |
| 2.4 | 2026-10-09 | 2655<sub>(+71) | 2978<sub>(+36) | 3013<sub>(+36) |  |
| 2.3 | 2026-09-22 | 2584<sub>(+99) | 2942<sub>(+92) | 2977<sub>(+72) |  |
| 2.2 | 2026-08-28 | 2485 | 2850 | 2905 |  |
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

Generated: 2026-11-23 05:43:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2381, 2439, 2646, 2921]
  line "E1: LTC (60.0+0.60s)" [2811, 2915, 2986, 3216]
  line "E1: VLTC (2m24s+1.12s)" [2935, 2993, 3102, 3348]
  line "P1: STC (8.0+0.08s)" [2485, 2584, 2655, 2975]
  line "P1: LTC (60.0+0.60s)" [2850, 2942, 2978, 3212]
  line "P1: VLTC (2m24s+1.12s)" [2905, 2977, 3013, 3276]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3276 | 37 | 192 | 52% | 3262 | 66% |
|  |  | E1 | 3348 | 30 | 300 | 51% | 3340 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3212 | 34 | 232 | 52% | 3201 | 58% |
|  |  | E1 | 3216 | 29 | 324 | 52% | 3204 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2975 | 36 | 222 | 54% | 2944 | 50% |
|  |  | E1 | 2921 | 32 | 310 | 54% | 2886 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3013 | 37 | 206 | 48% | 3035 | 53% |
|  |  | E1 | 3102 | 31 | 296 | 50% | 3104 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2986 | 32 | 306 | 50% | 2978 | 41% |
|  |  | P1 | 2978 | 37 | 212 | 51% | 2975 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2646 | 32 | 308 | 51% | 2631 | 34% |
|  |  | P1 | 2655 | 35 | 248 | 51% | 2649 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2993 | 38 | 198 | 50% | 3001 | 47% |
|  |  | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  |  | P1 | 2977 | 72 | 58 | 41% | 3054 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  |  | P1 | 2942 | 66 | 64 | 41% | 3009 | 55% |
|  |  | E1 | 2915 | 42 | 172 | 50% | 2913 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
|  |  | P1 | 2584 | 58 | 102 | 49% | 2597 | 27% |
|  |  | E1 | 2439 | 49 | 144 | 45% | 2483 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2905 | 38 | 208 | 47% | 2920 | 47% |
|  |  | E1 | 2935 | 33 | 282 | 47% | 2958 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2850 | 39 | 194 | 49% | 2855 | 46% |
|  |  | E1 | 2811 | 34 | 274 | 46% | 2835 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2485 | 44 | 180 | 50% | 2484 | 26% |
|  |  | E1 | 2381 | 35 | 280 | 41% | 2469 | 29% |