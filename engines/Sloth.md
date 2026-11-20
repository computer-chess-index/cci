# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2925<sub>(+276) | 3218<sub>(+229) | 3351<sub>(+246) |  |
| 2.4 | 2026-10-09 | 2649<sub>(+265) | 2989<sub>(+176) | 3105<sub>(+167) |  |
| 2.2 | 2026-08-28 | 2384 | 2813 | 2938 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2958<sub>(+315) | 3193<sub>(+230) | 3264<sub>(+264) |  |
| 2.4 | 2026-10-09 | 2643<sub>(+164) | 2963<sub>(+124) | 3000<sub>(+108) |  |
| 2.2 | 2026-08-28 | 2479 | 2839 | 2892 |  |
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

Generated: 2026-11-20 05:42:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2384, 2649, 2925]
  line "E1: LTC (60.0+0.60s)" [2813, 2989, 3218]
  line "E1: VLTC (2m24s+1.12s)" [2938, 3105, 3351]
  line "P1: STC (8.0+0.08s)" [2479, 2643, 2958]
  line "P1: LTC (60.0+0.60s)" [2839, 2963, 3193]
  line "P1: VLTC (2m24s+1.12s)" [2892, 3000, 3264]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3264 | 38 | 184 | 52% | 3249 | 65% |
|  |  | E1 | 3351 | 30 | 300 | 51% | 3343 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3218 | 29 | 324 | 52% | 3206 | 57% |
|  |  | P1 | 3193 | 35 | 224 | 51% | 3186 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2925 | 32 | 310 | 54% | 2889 | 37% |
|  |  | P1 | 2958 | 37 | 210 | 54% | 2927 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3000 | 37 | 206 | 48% | 3020 | 53% |
|  |  | E1 | 3105 | 31 | 296 | 50% | 3106 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2963 | 38 | 204 | 51% | 2959 | 48% |
|  |  | E1 | 2989 | 32 | 306 | 50% | 2981 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2643 | 36 | 240 | 51% | 2637 | 40% |
|  |  | E1 | 2649 | 32 | 308 | 51% | 2634 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2938 | 33 | 282 | 47% | 2961 | 43% |
|  |  | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2892 | 38 | 208 | 47% | 2907 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2813 | 34 | 274 | 46% | 2838 | 39% |
|  |  | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2839 | 39 | 194 | 49% | 2844 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2479 | 44 | 180 | 50% | 2477 | 26% |
|  |  | E1 | 2384 | 35 | 280 | 41% | 2472 | 29% |