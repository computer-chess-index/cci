# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3124<sub>(+162) | 3510<sub>(+154) | 3553<sub>(+102) |  |
| 3.1 | 2026-10-21 | 2962<sub>(+73) | 3356<sub>(+5) | 3451<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2889<sub>(+259) | 3351<sub>(+160) | 3456<sub>(+208) |  |
| 2.9.5 | 2026-10-15 | 2630<sub>(+200) | 3191<sub>(+190) | 3248<sub>(+170) |  |
| 1.6 | 2026-10-07 | 2430 | 3001 | 3078 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3348<sub>(+273) | 3637<sub>(+122) | 3704<sub>(+112) |  |
| 3.1 | 2026-10-21 | 3075<sub>(+10) | 3515<sub>(+48) | 3592<sub>(+14) |  |
| 3.0 | 2026-10-17 | 3065<sub>(+207) | 3467<sub>(+169) | 3578<sub>(+169) |  |
| 2.9.5 | 2026-10-15 | 2858<sub>(+327) | 3298<sub>(+235) | 3409<sub>(+234) |  |
| 1.6 | 2026-10-07 | 2531 | 3063 | 3175 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2531 | 3063 | 3175 |  |
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

Generated: 2026-11-06 05:37:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6"]
  y-axis "Elo Rating" 2400 --> 3800
  line "E1: STC (8.0+0.08s)" [2430, 2630, 2889, 2962, 3124]
  line "E1: LTC (60.0+0.60s)" [3001, 3191, 3351, 3356, 3510]
  line "E1: VLTC (2m24s+1.12s)" [3078, 3248, 3456, 3451, 3553]
  line "P1: STC (8.0+0.08s)" [2531, 2858, 3065, 3075, 3348]
  line "P1: LTC (60.0+0.60s)" [3063, 3298, 3467, 3515, 3637]
  line "P1: VLTC (2m24s+1.12s)" [3175, 3409, 3578, 3592, 3704]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3704 | 39 | 160 | 54% | 3677 | 76% |
|  |  | E1 | 3553 | 35 | 200 | 53% | 3536 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3637 | 43 | 128 | 52% | 3621 | 77% |
|  |  | E1 | 3510 | 29 | 288 | 53% | 3486 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3348 | 48 | 114 | 52% | 3326 | 61% |
|  |  | E1 | 3124 | 38 | 204 | 52% | 3106 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3451 | 29 | 306 | 52% | 3433 | 61% |
|  |  | P1 | 3592 | 29 | 300 | 54% | 3565 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3515 | 34 | 228 | 50% | 3517 | 62% |
|  |  | E1 | 3356 | 34 | 224 | 50% | 3360 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3075 | 51 | 112 | 49% | 3086 | 47% |
|  |  | E1 | 2962 | 34 | 276 | 49% | 2967 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3578 | 46 | 122 | 50% | 3579 | 68% |
|  |  | E1 | 3456 | 31 | 270 | 50% | 3455 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3467 | 49 | 106 | 56% | 3421 | 69% |
|  |  | E1 | 3351 | 31 | 274 | 49% | 3360 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3065 | 52 | 116 | 57% | 3006 | 38% |
|  |  | E1 | 2889 | 41 | 174 | 53% | 2861 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3409 | 37 | 196 | 52% | 3395 | 61% |
|  |  | E1 | 3248 | 34 | 244 | 50% | 3249 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3298 | 50 | 118 | 54% | 3266 | 45% |
|  |  | E1 | 3191 | 41 | 168 | 51% | 3181 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2858 | 41 | 196 | 53% | 2828 | 34% |
|  |  | E1 | 2630 | 36 | 254 | 55% | 2584 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3175 | 50 | 130 | 55% | 3106 | 40% |
|  |  | E1 | 3078 | 43 | 168 | 55% | 3008 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3063 | 57 | 116 | 63% | 2780 | 33% |
|  |  | E1 | 3001 | 40 | 218 | 57% | 2853 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2531 | 62 | 90 | 43% | 2595 | 24% |
|  |  | E1 | 2430 | 46 | 184 | 57% | 2307 | 23% |