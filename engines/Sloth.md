# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2920<sub>(+271) | 3214<sub>(+230) | 3344<sub>(+244) |  |
| 2.4 | 2026-10-09 | 2649<sub>(+195) | 2984<sub>(+64) | 3100<sub>(+103) |  |
| 2.3 | 2026-09-22 | 2454<sub>(+69) | 2920<sub>(+111) | 2997<sub>(+65) |  |
| 2.2 | 2026-08-28 | 2385 | 2809 | 2932 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2989<sub>(+324) | 3221<sub>(+229) | 3287<sub>(+260) |  |
| 2.4 | 2026-10-09 | 2665<sub>(+80) | 2992<sub>(+27) | 3027<sub>(+2) |  |
| 2.3 | 2026-09-22 | 2585<sub>(+89) | 2965<sub>(+102) | 3025<sub>(+108) |  |
| 2.2 | 2026-08-28 | 2496 | 2863 | 2917 |  |
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

Generated: 2026-11-27 05:43:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2385, 2454, 2649, 2920]
  line "E1: LTC (60.0+0.60s)" [2809, 2920, 2984, 3214]
  line "E1: VLTC (2m24s+1.12s)" [2932, 2997, 3100, 3344]
  line "P1: STC (8.0+0.08s)" [2496, 2585, 2665, 2989]
  line "P1: LTC (60.0+0.60s)" [2863, 2965, 2992, 3221]
  line "P1: VLTC (2m24s+1.12s)" [2917, 3025, 3027, 3287]
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
|  |  | E1 | 3344 | 30 | 300 | 51% | 3336 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3221 | 34 | 236 | 51% | 3213 | 58% |
|  |  | E1 | 3214 | 28 | 348 | 51% | 3204 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2989 | 36 | 226 | 54% | 2958 | 50% |
|  |  | E1 | 2920 | 31 | 318 | 54% | 2885 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3027 | 37 | 206 | 48% | 3047 | 53% |
|  |  | E1 | 3100 | 31 | 296 | 50% | 3101 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2992 | 37 | 212 | 51% | 2989 | 49% |
|  |  | E1 | 2984 | 32 | 306 | 50% | 2977 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2665 | 35 | 248 | 51% | 2660 | 40% |
|  |  | E1 | 2649 | 32 | 308 | 51% | 2633 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3025 | 40 | 176 | 48% | 3043 | 51% |
|  |  | E1 | 2997 | 32 | 278 | 50% | 3001 | 47% |
|  |  | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2965 | 46 | 142 | 46% | 2993 | 46% |
|  |  | E1 | 2920 | 36 | 230 | 51% | 2913 | 45% |
|  |  | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2454 | 41 | 196 | 47% | 2481 | 29% |
|  |  | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
|  |  | P1 | 2585 | 50 | 134 | 48% | 2606 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2932 | 33 | 282 | 47% | 2955 | 43% |
|  |  | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2917 | 38 | 208 | 47% | 2932 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2809 | 34 | 274 | 46% | 2834 | 39% |
|  |  | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2863 | 39 | 194 | 49% | 2869 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2496 | 44 | 180 | 50% | 2495 | 26% |
|  |  | E1 | 2385 | 35 | 280 | 41% | 2473 | 29% |