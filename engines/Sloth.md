# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2924<sub>(+275) | 3218<sub>(+229) | 3349<sub>(+244) |  |
| 2.4 | 2026-10-09 | 2649<sub>(+187) | 2989<sub>(+80) | 3105<sub>(+142) |  |
| 2.3 | 2026-09-22 | 2462<sub>(+79) | 2909<sub>(+97) | 2963<sub>(+25) |  |
| 2.2 | 2026-08-28 | 2383 | 2812 | 2938 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2969<sub>(+320) | 3205<sub>(+234) | 3268<sub>(+260) |  |
| 2.4 | 2026-10-09 | 2649<sub>(+168) | 2971<sub>(+127) | 3008<sub>(+108) |  |
| 2.2 | 2026-08-28 | 2481 | 2844 | 2900 |  |
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

Generated: 2026-11-22 05:42:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2383, 2462, 2649, 2924]
  line "E1: LTC (60.0+0.60s)" [2812, 2909, 2989, 3218]
  line "E1: VLTC (2m24s+1.12s)" [2938, 2963, 3105, 3349]
  line "P1: STC (8.0+0.08s)" [2481, 2649, 2969]
  line "P1: LTC (60.0+0.60s)" [2844, 2971, 3205]
  line "P1: VLTC (2m24s+1.12s)" [2900, 3008, 3268]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3268 | 37 | 192 | 52% | 3255 | 66% |
|  |  | E1 | 3349 | 30 | 300 | 51% | 3343 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3205 | 34 | 232 | 52% | 3194 | 58% |
|  |  | E1 | 3218 | 29 | 324 | 52% | 3206 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2969 | 36 | 218 | 54% | 2936 | 50% |
|  |  | E1 | 2924 | 32 | 310 | 54% | 2889 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3105 | 31 | 296 | 50% | 3106 | 49% |
|  |  | P1 | 3008 | 37 | 206 | 48% | 3028 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2989 | 32 | 306 | 50% | 2981 | 41% |
|  |  | P1 | 2971 | 37 | 212 | 51% | 2969 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2649 | 35 | 248 | 51% | 2643 | 40% |
|  |  | E1 | 2649 | 32 | 308 | 51% | 2634 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  |  | E1 | 2963 | 61 | 80 | 43% | 3035 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  |  | E1 | 2909 | 47 | 128 | 49% | 2919 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
|  |  | E1 | 2462 | 53 | 120 | 48% | 2488 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2900 | 38 | 208 | 47% | 2915 | 47% |
|  |  | E1 | 2938 | 33 | 282 | 47% | 2961 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2844 | 39 | 194 | 49% | 2850 | 46% |
|  |  | E1 | 2812 | 34 | 274 | 46% | 2836 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2481 | 44 | 180 | 50% | 2480 | 26% |
|  |  | E1 | 2383 | 35 | 280 | 41% | 2472 | 29% |