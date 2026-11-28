# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2916<sub>(+267) | 3210<sub>(+228) | 3343<sub>(+243) |  |
| 2.4 | 2026-10-09 | 2649<sub>(+195) | 2982<sub>(+62) | 3100<sub>(+103) |  |
| 2.3 | 2026-09-22 | 2454<sub>(+70) | 2920<sub>(+111) | 2997<sub>(+66) |  |
| 2.2 | 2026-08-28 | 2384 | 2809 | 2931 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2990<sub>(+324) | 3222<sub>(+229) | 3287<sub>(+259) |  |
| 2.4 | 2026-10-09 | 2666<sub>(+81) | 2993<sub>(+22) | 3028<sub>(+1) |  |
| 2.3 | 2026-09-22 | 2585<sub>(+87) | 2971<sub>(+108) | 3027<sub>(+108) |  |
| 2.2 | 2026-08-28 | 2498 | 2863 | 2919 |  |
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

Generated: 2026-11-28 05:43:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2384, 2454, 2649, 2916]
  line "E1: LTC (60.0+0.60s)" [2809, 2920, 2982, 3210]
  line "E1: VLTC (2m24s+1.12s)" [2931, 2997, 3100, 3343]
  line "P1: STC (8.0+0.08s)" [2498, 2585, 2666, 2990]
  line "P1: LTC (60.0+0.60s)" [2863, 2971, 2993, 3222]
  line "P1: VLTC (2m24s+1.12s)" [2919, 3027, 3028, 3287]
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
|  |  | E1 | 3343 | 30 | 300 | 51% | 3335 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3222 | 34 | 236 | 51% | 3214 | 58% |
|  |  | E1 | 3210 | 28 | 352 | 51% | 3202 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2990 | 36 | 226 | 54% | 2959 | 50% |
|  |  | E1 | 2916 | 31 | 326 | 54% | 2884 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3100 | 31 | 296 | 50% | 3101 | 49% |
|  |  | P1 | 3028 | 37 | 206 | 48% | 3048 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2993 | 37 | 212 | 51% | 2990 | 49% |
|  |  | E1 | 2982 | 32 | 306 | 50% | 2975 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2666 | 35 | 248 | 51% | 2660 | 40% |
|  |  | E1 | 2649 | 32 | 308 | 51% | 2633 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  |  | P1 | 3027 | 40 | 176 | 48% | 3044 | 51% |
|  |  | E1 | 2997 | 32 | 278 | 50% | 3001 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  |  | P1 | 2971 | 43 | 156 | 47% | 2992 | 47% |
|  |  | E1 | 2920 | 35 | 240 | 51% | 2913 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
|  |  | P1 | 2585 | 50 | 134 | 48% | 2606 | 29% |
|  |  | E1 | 2454 | 41 | 196 | 47% | 2481 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2919 | 38 | 208 | 47% | 2934 | 47% |
|  |  | E1 | 2931 | 33 | 282 | 47% | 2954 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2863 | 39 | 194 | 49% | 2869 | 46% |
|  |  | E1 | 2809 | 34 | 274 | 46% | 2832 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2498 | 44 | 180 | 50% | 2496 | 26% |
|  |  | E1 | 2384 | 35 | 280 | 41% | 2472 | 29% |