# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3035<sub>(+164) | 3411<sub>(+153) | 3470<sub>(+118) |  |
| 3.1 | 2026-10-21 | 2871<sub>(+71) | 3258<sub>(+6) | 3352<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2800<sub>(+244) | 3252<sub>(+159) | 3357<sub>(+206) |  |
| 2.9.5 | 2026-10-15 | 2556<sub>(+187) | 3093<sub>(+185) | 3151<sub>(+166) |  |
| 1.6 | 2026-10-07 | 2369 | 2908 | 2985 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3133<sub>(+259) | 3437<sub>(+123) | 3497<sub>(+106) |  |
| 3.1 | 2026-10-21 | 2874<sub>(+13) | 3314<sub>(+50) | 3391<sub>(+16) |  |
| 3.0 | 2026-10-17 | 2861<sub>(+197) | 3264<sub>(+170) | 3375<sub>(+170) |  |
| 2.9.5 | 2026-10-15 | 2664<sub>(+316) | 3094<sub>(+233) | 3205<sub>(+235) |  |
| 1.6 | 2026-10-07 | 2348 | 2861 | 2970 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2348 | 2861 | 2970 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessenger+<version>&body=###%20Engine%20name%0AChessenger%0A%0A###%20Version%0A3.6" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:37:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6"]
  y-axis "Elo Rating" 2300 --> 3500
  line "E1: STC (8.0+0.08s)" [2369, 2556, 2800, 2871, 3035]
  line "E1: LTC (60.0+0.60s)" [2908, 3093, 3252, 3258, 3411]
  line "E1: VLTC (2m24s+1.12s)" [2985, 3151, 3357, 3352, 3470]
  line "P1: STC (8.0+0.08s)" [2348, 2664, 2861, 2874, 3133]
  line "P1: LTC (60.0+0.60s)" [2861, 3094, 3264, 3314, 3437]
  line "P1: VLTC (2m24s+1.12s)" [2970, 3205, 3375, 3391, 3497]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3497 | 37 | 180 | 53% | 3476 | 77% |
|  |  | E1 | 3470 | 30 | 264 | 53% | 3448 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3437 | 38 | 172 | 51% | 3426 | 75% |
|  |  | E1 | 3411 | 28 | 310 | 53% | 3390 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3133 | 38 | 188 | 51% | 3124 | 54% |
|  |  | E1 | 3035 | 33 | 254 | 52% | 3017 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3391 | 29 | 300 | 54% | 3363 | 68% |
|  |  | E1 | 3352 | 29 | 306 | 52% | 3335 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3314 | 34 | 232 | 50% | 3317 | 62% |
|  |  | E1 | 3258 | 34 | 224 | 50% | 3263 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2874 | 50 | 116 | 47% | 2898 | 47% |
|  |  | E1 | 2871 | 33 | 284 | 49% | 2876 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3375 | 46 | 122 | 50% | 3376 | 68% |
|  |  | E1 | 3357 | 31 | 270 | 50% | 3356 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3252 | 31 | 274 | 49% | 3262 | 64% |
|  |  | P1 | 3264 | 49 | 106 | 56% | 3218 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2800 | 41 | 174 | 53% | 2770 | 45% |
|  |  | P1 | 2861 | 52 | 116 | 57% | 2803 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3205 | 37 | 196 | 52% | 3191 | 61% |
|  |  | E1 | 3151 | 34 | 244 | 50% | 3154 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3094 | 50 | 118 | 54% | 3062 | 45% |
|  |  | E1 | 3093 | 41 | 168 | 51% | 3082 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2664 | 41 | 196 | 53% | 2633 | 34% |
|  |  | E1 | 2556 | 36 | 254 | 55% | 2510 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2970 | 50 | 130 | 55% | 2904 | 40% |
|  |  | E1 | 2985 | 43 | 168 | 55% | 2919 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2861 | 57 | 116 | 63% | 2596 | 33% |
|  |  | E1 | 2908 | 40 | 218 | 57% | 2768 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2348 | 62 | 90 | 43% | 2411 | 24% |
|  |  | E1 | 2369 | 45 | 184 | 57% | 2252 | 23% |