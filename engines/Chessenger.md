# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3143<sub>(+83) | 3460<sub>(+32) | 3548<sub>(+61) |  |
| 3.6 | 2026-11-01 | 3060<sub>(+166) | 3428<sub>(+150) | 3487<sub>(+115) |  |
| 3.1 | 2026-10-21 | 2894<sub>(+77) | 3278<sub>(+6) | 3372<sub>(-6) |  |
| 3.0 | 2026-10-17 | 2817<sub>(+252) | 3272<sub>(+158) | 3378<sub>(+207) |  |
| 2.9.5 | 2026-10-15 | 2565<sub>(+194) | 3114<sub>(+182) | 3171<sub>(+163) |  |
| 1.6 | 2026-10-07 | 2371 | 2932 | 3008 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3154<sub>(+37) | 3461<sub>(+58) | 3521<sub>(+60) |  |
| 3.6 | 2026-11-01 | 3117<sub>(+228) | 3403<sub>(+121) | 3461<sub>(+104) |  |
| 3.1 | 2026-10-21 | 2889<sub>(+12) | 3282<sub>(+43) | 3357<sub>(+14) |  |
| 3.0 | 2026-10-17 | 2877<sub>(+192) | 3239<sub>(+154) | 3343<sub>(+162) |  |
| 2.9.5 | 2026-10-15 | 2685<sub>(+316) | 3085<sub>(+207) | 3181<sub>(+208) |  |
| 1.6 | 2026-10-07 | 2369 | 2878 | 2973 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2369 | 2878 | 2973 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessenger+<version>&body=###%20Engine%20name%0AChessenger%0A%0A###%20Version%0A4.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:37:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6", "4.2"]
  y-axis "Elo Rating" 2300 --> 3600
  line "E1: STC (8.0+0.08s)" [2371, 2565, 2817, 2894, 3060, 3143]
  line "E1: LTC (60.0+0.60s)" [2932, 3114, 3272, 3278, 3428, 3460]
  line "E1: VLTC (2m24s+1.12s)" [3008, 3171, 3378, 3372, 3487, 3548]
  line "P1: STC (8.0+0.08s)" [2369, 2685, 2877, 2889, 3117, 3154]
  line "P1: LTC (60.0+0.60s)" [2878, 3085, 3239, 3282, 3403, 3461]
  line "P1: VLTC (2m24s+1.12s)" [2973, 3181, 3343, 3357, 3461, 3521]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3548 | 35 | 190 | 51% | 3541 | 80% |
|  |  | P1 | 3521 | 57 | 72 | 52% | 3507 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3461 | 41 | 140 | 54% | 3438 | 80% |
|  |  | E1 | 3460 | 41 | 140 | 49% | 3468 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3154 | 48 | 116 | 49% | 3162 | 59% |
|  |  | E1 | 3143 | 36 | 220 | 52% | 3128 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3461 | 36 | 184 | 52% | 3445 | 77% |
|  |  | E1 | 3487 | 30 | 276 | 53% | 3468 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3403 | 37 | 180 | 51% | 3394 | 75% |
|  |  | E1 | 3428 | 27 | 334 | 52% | 3413 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3117 | 38 | 196 | 51% | 3106 | 54% |
|  |  | E1 | 3060 | 33 | 270 | 52% | 3040 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3372 | 29 | 306 | 52% | 3355 | 61% |
|  |  | P1 | 3357 | 29 | 300 | 54% | 3329 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3278 | 34 | 224 | 50% | 3282 | 60% |
|  |  | P1 | 3282 | 34 | 232 | 50% | 3285 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2894 | 33 | 284 | 49% | 2898 | 36% |
|  |  | P1 | 2889 | 50 | 116 | 47% | 2916 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3343 | 46 | 122 | 50% | 3344 | 68% |
|  |  | E1 | 3378 | 31 | 270 | 50% | 3376 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3239 | 49 | 106 | 56% | 3193 | 69% |
|  |  | E1 | 3272 | 31 | 274 | 49% | 3282 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2877 | 52 | 116 | 57% | 2819 | 38% |
|  |  | E1 | 2817 | 41 | 174 | 53% | 2789 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3181 | 37 | 196 | 52% | 3167 | 61% |
|  |  | E1 | 3171 | 34 | 244 | 50% | 3174 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3085 | 50 | 118 | 54% | 3052 | 45% |
|  |  | E1 | 3114 | 41 | 168 | 51% | 3104 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2685 | 41 | 196 | 53% | 2655 | 34% |
|  |  | E1 | 2565 | 37 | 254 | 55% | 2519 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2973 | 50 | 130 | 55% | 2908 | 40% |
|  |  | E1 | 3008 | 43 | 168 | 55% | 2939 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2878 | 57 | 116 | 63% | 2611 | 33% |
|  |  | E1 | 2932 | 40 | 218 | 57% | 2785 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2369 | 62 | 90 | 43% | 2433 | 24% |
|  |  | E1 | 2371 | 46 | 184 | 57% | 2249 | 23% |