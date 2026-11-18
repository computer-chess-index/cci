# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3128<sub>(+68) | 3463<sub>(+35) | 3553<sub>(+66) |  |
| 3.6 | 2026-11-01 | 3060<sub>(+167) | 3428<sub>(+150) | 3487<sub>(+116) |  |
| 3.1 | 2026-10-21 | 2893<sub>(+76) | 3278<sub>(+6) | 3371<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2817<sub>(+253) | 3272<sub>(+158) | 3376<sub>(+205) |  |
| 2.9.5 | 2026-10-15 | 2564<sub>(+195) | 3114<sub>(+183) | 3171<sub>(+165) |  |
| 1.6 | 2026-10-07 | 2369 | 2931 | 3006 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3137<sub>(+36) | 3397<sub>(+3) | 3453<sub>(-2) |  |
| 3.6 | 2026-11-01 | 3101<sub>(+232) | 3394<sub>(+124) | 3455<sub>(+110) |  |
| 3.1 | 2026-10-21 | 2869<sub>(+10) | 3270<sub>(+46) | 3345<sub>(+13) |  |
| 3.0 | 2026-10-17 | 2859<sub>(+191) | 3224<sub>(+157) | 3332<sub>(+168) |  |
| 2.9.5 | 2026-10-15 | 2668<sub>(+312) | 3067<sub>(+208) | 3164<sub>(+212) |  |
| 1.6 | 2026-10-07 | 2356 | 2859 | 2952 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2356 | 2859 | 2952 |  |
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

Generated: 2026-11-18 05:37:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6", "4.2"]
  y-axis "Elo Rating" 2300 --> 3600
  line "E1: STC (8.0+0.08s)" [2369, 2564, 2817, 2893, 3060, 3128]
  line "E1: LTC (60.0+0.60s)" [2931, 3114, 3272, 3278, 3428, 3463]
  line "E1: VLTC (2m24s+1.12s)" [3006, 3171, 3376, 3371, 3487, 3553]
  line "P1: STC (8.0+0.08s)" [2356, 2668, 2859, 2869, 3101, 3137]
  line "P1: LTC (60.0+0.60s)" [2859, 3067, 3224, 3270, 3394, 3397]
  line "P1: VLTC (2m24s+1.12s)" [2952, 3164, 3332, 3345, 3455, 3453]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3553 | 37 | 176 | 52% | 3540 | 80% |
|  |  | P1 | 3453 | 155 | 8 | 50% | 3453 | 100% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3463 | 43 | 128 | 49% | 3468 | 78% |
|  |  | P1 | 3397 | 129 | 12 | 50% | 3397 | 100% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3137 | 69 | 56 | 48% | 3147 | 57% |
|  |  | E1 | 3128 | 45 | 140 | 51% | 3120 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3455 | 36 | 184 | 52% | 3438 | 77% |
|  |  | E1 | 3487 | 30 | 276 | 53% | 3468 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3394 | 38 | 172 | 51% | 3384 | 75% |
|  |  | E1 | 3428 | 27 | 334 | 52% | 3413 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3101 | 38 | 192 | 51% | 3089 | 54% |
|  |  | E1 | 3060 | 33 | 270 | 52% | 3040 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3345 | 29 | 300 | 54% | 3318 | 68% |
|  |  | E1 | 3371 | 29 | 306 | 52% | 3355 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3278 | 34 | 224 | 50% | 3282 | 60% |
|  |  | P1 | 3270 | 34 | 232 | 50% | 3271 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2893 | 33 | 284 | 49% | 2897 | 36% |
|  |  | P1 | 2869 | 50 | 116 | 47% | 2896 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3332 | 46 | 122 | 50% | 3333 | 68% |
|  |  | E1 | 3376 | 31 | 270 | 50% | 3375 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3224 | 49 | 106 | 56% | 3178 | 69% |
|  |  | E1 | 3272 | 31 | 274 | 49% | 3282 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2859 | 52 | 116 | 57% | 2801 | 38% |
|  |  | E1 | 2817 | 41 | 174 | 53% | 2789 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3164 | 37 | 196 | 52% | 3151 | 61% |
|  |  | E1 | 3171 | 34 | 244 | 50% | 3174 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3067 | 50 | 118 | 54% | 3035 | 45% |
|  |  | E1 | 3114 | 41 | 168 | 51% | 3104 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2668 | 41 | 196 | 53% | 2638 | 34% |
|  |  | E1 | 2564 | 37 | 254 | 55% | 2518 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2952 | 50 | 130 | 55% | 2889 | 40% |
|  |  | E1 | 3006 | 43 | 168 | 55% | 2939 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2859 | 57 | 116 | 63% | 2596 | 33% |
|  |  | E1 | 2931 | 40 | 218 | 57% | 2785 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2356 | 62 | 90 | 43% | 2419 | 24% |
|  |  | E1 | 2369 | 45 | 184 | 57% | 2249 | 23% |