# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3137<sub>(+164) | 3519<sub>(+153) | 3563<sub>(+103) |  |
| 3.1 | 2026-10-21 | 2973<sub>(+75) | 3366<sub>(+6) | 3460<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2898<sub>(+260) | 3360<sub>(+159) | 3465<sub>(+207) |  |
| 2.9.5 | 2026-10-15 | 2638<sub>(+201) | 3201<sub>(+189) | 3258<sub>(+171) |  |
| 1.6 | 2026-10-07 | 2437 | 3012 | 3087 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3345<sub>(+270) | 3641<sub>(+126) | 3702<sub>(+110) |  |
| 3.1 | 2026-10-21 | 3075<sub>(+10) | 3515<sub>(+47) | 3592<sub>(+14) |  |
| 3.0 | 2026-10-17 | 3065<sub>(+207) | 3468<sub>(+170) | 3578<sub>(+169) |  |
| 2.9.5 | 2026-10-15 | 2858<sub>(+328) | 3298<sub>(+235) | 3409<sub>(+235) |  |
| 1.6 | 2026-10-07 | 2530 | 3063 | 3174 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2530 | 3063 | 3174 |  |
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

Generated: 2026-11-07 05:37:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6"]
  y-axis "Elo Rating" 2400 --> 3800
  line "E1: STC (8.0+0.08s)" [2437, 2638, 2898, 2973, 3137]
  line "E1: LTC (60.0+0.60s)" [3012, 3201, 3360, 3366, 3519]
  line "E1: VLTC (2m24s+1.12s)" [3087, 3258, 3465, 3460, 3563]
  line "P1: STC (8.0+0.08s)" [2530, 2858, 3065, 3075, 3345]
  line "P1: LTC (60.0+0.60s)" [3063, 3298, 3468, 3515, 3641]
  line "P1: VLTC (2m24s+1.12s)" [3174, 3409, 3578, 3592, 3702]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3702 | 38 | 168 | 53% | 3681 | 76% |
|  |  | E1 | 3563 | 34 | 208 | 53% | 3545 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3641 | 42 | 136 | 52% | 3625 | 76% |
|  |  | E1 | 3519 | 29 | 288 | 53% | 3495 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3345 | 47 | 122 | 52% | 3329 | 61% |
|  |  | E1 | 3137 | 37 | 214 | 53% | 3116 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3592 | 29 | 300 | 54% | 3565 | 68% |
|  |  | E1 | 3460 | 29 | 306 | 52% | 3443 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3515 | 34 | 228 | 50% | 3518 | 62% |
|  |  | E1 | 3366 | 34 | 224 | 50% | 3370 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3075 | 51 | 112 | 49% | 3085 | 47% |
|  |  | E1 | 2973 | 34 | 276 | 49% | 2978 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3578 | 46 | 122 | 50% | 3579 | 68% |
|  |  | E1 | 3465 | 31 | 270 | 50% | 3464 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3360 | 31 | 274 | 49% | 3370 | 64% |
|  |  | P1 | 3468 | 49 | 106 | 56% | 3422 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2898 | 41 | 174 | 53% | 2870 | 45% |
|  |  | P1 | 3065 | 52 | 116 | 57% | 3005 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3409 | 37 | 196 | 52% | 3395 | 61% |
|  |  | E1 | 3258 | 34 | 244 | 50% | 3259 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3298 | 50 | 118 | 54% | 3266 | 45% |
|  |  | E1 | 3201 | 41 | 168 | 51% | 3190 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2858 | 41 | 196 | 53% | 2828 | 34% |
|  |  | E1 | 2638 | 36 | 254 | 55% | 2592 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3174 | 50 | 130 | 55% | 3106 | 40% |
|  |  | E1 | 3087 | 43 | 168 | 55% | 3019 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3063 | 57 | 116 | 63% | 2780 | 33% |
|  |  | E1 | 3012 | 40 | 218 | 57% | 2863 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2530 | 62 | 90 | 43% | 2593 | 24% |
|  |  | E1 | 2437 | 46 | 184 | 57% | 2314 | 23% |