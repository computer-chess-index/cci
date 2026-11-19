# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3146<sub>(+87) | 3460<sub>(+34) | 3545<sub>(+61) |  |
| 3.6 | 2026-11-01 | 3059<sub>(+166) | 3426<sub>(+150) | 3484<sub>(+114) |  |
| 3.1 | 2026-10-21 | 2893<sub>(+76) | 3276<sub>(+6) | 3370<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2817<sub>(+253) | 3270<sub>(+157) | 3375<sub>(+205) |  |
| 2.9.5 | 2026-10-15 | 2564<sub>(+192) | 3113<sub>(+182) | 3170<sub>(+165) |  |
| 1.6 | 2026-10-07 | 2372 | 2931 | 3005 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3133<sub>(+35) | 3428<sub>(+38) | 3510<sub>(+59) |  |
| 3.6 | 2026-11-01 | 3098<sub>(+229) | 3390<sub>(+124) | 3451<sub>(+110) |  |
| 3.1 | 2026-10-21 | 2869<sub>(+8) | 3266<sub>(+45) | 3341<sub>(+13) |  |
| 3.0 | 2026-10-17 | 2861<sub>(+192) | 3221<sub>(+155) | 3328<sub>(+166) |  |
| 2.9.5 | 2026-10-15 | 2669<sub>(+311) | 3066<sub>(+205) | 3162<sub>(+210) |  |
| 1.6 | 2026-10-07 | 2358 | 2861 | 2952 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2358 | 2861 | 2952 |  |
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

Generated: 2026-11-19 05:37:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6", "4.2"]
  y-axis "Elo Rating" 2300 --> 3600
  line "E1: STC (8.0+0.08s)" [2372, 2564, 2817, 2893, 3059, 3146]
  line "E1: LTC (60.0+0.60s)" [2931, 3113, 3270, 3276, 3426, 3460]
  line "E1: VLTC (2m24s+1.12s)" [3005, 3170, 3375, 3370, 3484, 3545]
  line "P1: STC (8.0+0.08s)" [2358, 2669, 2861, 2869, 3098, 3133]
  line "P1: LTC (60.0+0.60s)" [2861, 3066, 3221, 3266, 3390, 3428]
  line "P1: VLTC (2m24s+1.12s)" [2952, 3162, 3328, 3341, 3451, 3510]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3510 | 69 | 48 | 53% | 3488 | 85% |
|  |  | E1 | 3545 | 36 | 188 | 51% | 3537 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3428 | 57 | 72 | 53% | 3411 | 81% |
|  |  | E1 | 3460 | 43 | 128 | 49% | 3465 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3133 | 66 | 60 | 48% | 3143 | 60% |
|  |  | E1 | 3146 | 39 | 184 | 53% | 3123 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3451 | 36 | 184 | 52% | 3433 | 77% |
|  |  | E1 | 3484 | 30 | 276 | 53% | 3465 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3390 | 38 | 172 | 51% | 3379 | 75% |
|  |  | E1 | 3426 | 27 | 334 | 52% | 3410 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3059 | 33 | 270 | 52% | 3039 | 51% |
|  |  | P1 | 3098 | 38 | 192 | 51% | 3086 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3341 | 29 | 300 | 54% | 3314 | 68% |
|  |  | E1 | 3370 | 29 | 306 | 52% | 3352 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3266 | 34 | 232 | 50% | 3268 | 62% |
|  |  | E1 | 3276 | 34 | 224 | 50% | 3281 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2869 | 50 | 116 | 47% | 2897 | 47% |
|  |  | E1 | 2893 | 33 | 284 | 49% | 2897 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3328 | 46 | 122 | 50% | 3329 | 68% |
|  |  | E1 | 3375 | 31 | 270 | 50% | 3374 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3221 | 49 | 106 | 56% | 3175 | 69% |
|  |  | E1 | 3270 | 31 | 274 | 49% | 3281 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2861 | 52 | 116 | 57% | 2803 | 38% |
|  |  | E1 | 2817 | 41 | 174 | 53% | 2788 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3162 | 37 | 196 | 52% | 3148 | 61% |
|  |  | E1 | 3170 | 34 | 244 | 50% | 3173 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3113 | 41 | 168 | 51% | 3102 | 50% |
|  |  | P1 | 3066 | 50 | 118 | 54% | 3033 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2564 | 37 | 254 | 55% | 2518 | 27% |
|  |  | P1 | 2669 | 41 | 196 | 53% | 2639 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2952 | 50 | 130 | 55% | 2888 | 40% |
|  |  | E1 | 3005 | 43 | 168 | 55% | 2938 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2861 | 57 | 116 | 63% | 2596 | 33% |
|  |  | E1 | 2931 | 40 | 218 | 57% | 2784 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2372 | 45 | 184 | 57% | 2250 | 23% |
|  |  | P1 | 2358 | 62 | 90 | 43% | 2422 | 24% |