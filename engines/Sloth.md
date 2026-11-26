# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2919<sub>(+270) | 3216<sub>(+232) | 3345<sub>(+245) |  |
| 2.4 | 2026-10-09 | 2649<sub>(+193) | 2984<sub>(+64) | 3100<sub>(+99) |  |
| 2.3 | 2026-09-22 | 2456<sub>(+71) | 2920<sub>(+111) | 3001<sub>(+70) |  |
| 2.2 | 2026-08-28 | 2385 | 2809 | 2931 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2988<sub>(+323) | 3220<sub>(+230) | 3286<sub>(+262) |  |
| 2.4 | 2026-10-09 | 2665<sub>(+78) | 2990<sub>(+27) | 3024<sub>(+9) |  |
| 2.3 | 2026-09-22 | 2587<sub>(+92) | 2963<sub>(+101) | 3015<sub>(+99) |  |
| 2.2 | 2026-08-28 | 2495 | 2862 | 2916 |  |
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

Generated: 2026-11-26 05:43:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2385, 2456, 2649, 2919]
  line "E1: LTC (60.0+0.60s)" [2809, 2920, 2984, 3216]
  line "E1: VLTC (2m24s+1.12s)" [2931, 3001, 3100, 3345]
  line "P1: STC (8.0+0.08s)" [2495, 2587, 2665, 2988]
  line "P1: LTC (60.0+0.60s)" [2862, 2963, 2990, 3220]
  line "P1: VLTC (2m24s+1.12s)" [2916, 3015, 3024, 3286]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3286 | 37 | 192 | 52% | 3272 | 66% |
|  |  | E1 | 3345 | 30 | 300 | 51% | 3337 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3220 | 34 | 236 | 51% | 3212 | 58% |
|  |  | E1 | 3216 | 28 | 344 | 52% | 3202 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2988 | 36 | 226 | 54% | 2957 | 50% |
|  |  | E1 | 2919 | 31 | 318 | 54% | 2884 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3024 | 37 | 206 | 48% | 3046 | 53% |
|  |  | E1 | 3100 | 31 | 296 | 50% | 3101 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2990 | 37 | 212 | 51% | 2988 | 49% |
|  |  | E1 | 2984 | 32 | 306 | 50% | 2975 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2665 | 35 | 248 | 51% | 2660 | 40% |
|  |  | E1 | 2649 | 32 | 308 | 51% | 2633 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3015 | 43 | 152 | 48% | 3029 | 49% |
|  |  | E1 | 3001 | 33 | 262 | 51% | 3001 | 48% |
|  |  | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2963 | 46 | 142 | 46% | 2992 | 46% |
|  |  | E1 | 2920 | 36 | 230 | 51% | 2913 | 45% |
|  |  | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2587 | 51 | 130 | 48% | 2604 | 29% |
|  |  | E1 | 2456 | 42 | 192 | 47% | 2483 | 29% |
|  |  | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2931 | 33 | 282 | 47% | 2955 | 43% |
|  |  | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2916 | 38 | 208 | 47% | 2931 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2809 | 34 | 274 | 46% | 2834 | 39% |
|  |  | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2862 | 39 | 194 | 49% | 2867 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2385 | 35 | 280 | 41% | 2473 | 29% |
|  |  | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2495 | 44 | 180 | 50% | 2493 | 26% |