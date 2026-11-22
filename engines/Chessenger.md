# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3146<sub>(+83) | 3461<sub>(+31) | 3551<sub>(+61) |  |
| 3.6 | 2026-11-01 | 3063<sub>(+166) | 3430<sub>(+149) | 3490<sub>(+115) |  |
| 3.1 | 2026-10-21 | 2897<sub>(+75) | 3281<sub>(+6) | 3375<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2822<sub>(+254) | 3275<sub>(+158) | 3380<sub>(+206) |  |
| 2.9.5 | 2026-10-15 | 2568<sub>(+196) | 3117<sub>(+182) | 3174<sub>(+165) |  |
| 1.6 | 2026-10-07 | 2372 | 2935 | 3009 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3147<sub>(+38) | 3456<sub>(+59) | 3514<sub>(+59) |  |
| 3.6 | 2026-11-01 | 3109<sub>(+225) | 3397<sub>(+122) | 3455<sub>(+106) |  |
| 3.1 | 2026-10-21 | 2884<sub>(+13) | 3275<sub>(+43) | 3349<sub>(+13) |  |
| 3.0 | 2026-10-17 | 2871<sub>(+191) | 3232<sub>(+154) | 3336<sub>(+163) |  |
| 2.9.5 | 2026-10-15 | 2680<sub>(+315) | 3078<sub>(+205) | 3173<sub>(+207) |  |
| 1.6 | 2026-10-07 | 2365 | 2873 | 2966 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2365 | 2873 | 2966 |  |
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

Generated: 2026-11-22 05:37:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6", "4.2"]
  y-axis "Elo Rating" 2300 --> 3600
  line "E1: STC (8.0+0.08s)" [2372, 2568, 2822, 2897, 3063, 3146]
  line "E1: LTC (60.0+0.60s)" [2935, 3117, 3275, 3281, 3430, 3461]
  line "E1: VLTC (2m24s+1.12s)" [3009, 3174, 3380, 3375, 3490, 3551]
  line "P1: STC (8.0+0.08s)" [2365, 2680, 2871, 2884, 3109, 3147]
  line "P1: LTC (60.0+0.60s)" [2873, 3078, 3232, 3275, 3397, 3456]
  line "P1: VLTC (2m24s+1.12s)" [2966, 3173, 3336, 3349, 3455, 3514]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3514 | 57 | 72 | 52% | 3501 | 82% |
|  |  | E1 | 3551 | 35 | 190 | 51% | 3542 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3456 | 42 | 136 | 54% | 3432 | 79% |
|  |  | E1 | 3461 | 41 | 140 | 49% | 3470 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3147 | 49 | 112 | 49% | 3155 | 58% |
|  |  | E1 | 3146 | 36 | 218 | 52% | 3131 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3455 | 36 | 184 | 52% | 3438 | 77% |
|  |  | E1 | 3490 | 30 | 276 | 53% | 3471 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3397 | 37 | 180 | 51% | 3387 | 75% |
|  |  | E1 | 3430 | 27 | 334 | 52% | 3416 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3063 | 33 | 270 | 52% | 3043 | 51% |
|  |  | P1 | 3109 | 38 | 196 | 51% | 3098 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3349 | 29 | 300 | 54% | 3322 | 68% |
|  |  | E1 | 3375 | 29 | 306 | 52% | 3357 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3275 | 34 | 232 | 50% | 3276 | 62% |
|  |  | E1 | 3281 | 34 | 224 | 50% | 3285 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2884 | 50 | 116 | 47% | 2911 | 47% |
|  |  | E1 | 2897 | 33 | 284 | 49% | 2901 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3336 | 46 | 122 | 50% | 3337 | 68% |
|  |  | E1 | 3380 | 31 | 270 | 50% | 3379 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3232 | 49 | 106 | 56% | 3186 | 69% |
|  |  | E1 | 3275 | 31 | 274 | 49% | 3285 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2871 | 52 | 116 | 57% | 2813 | 38% |
|  |  | E1 | 2822 | 41 | 174 | 53% | 2792 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3173 | 37 | 196 | 52% | 3160 | 61% |
|  |  | E1 | 3174 | 34 | 244 | 50% | 3177 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3117 | 41 | 168 | 51% | 3106 | 50% |
|  |  | P1 | 3078 | 50 | 118 | 54% | 3046 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2568 | 37 | 254 | 55% | 2522 | 27% |
|  |  | P1 | 2680 | 41 | 196 | 53% | 2649 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2966 | 50 | 130 | 55% | 2901 | 40% |
|  |  | E1 | 3009 | 43 | 168 | 55% | 2942 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2873 | 57 | 116 | 63% | 2607 | 33% |
|  |  | E1 | 2935 | 40 | 218 | 57% | 2788 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2372 | 46 | 184 | 57% | 2252 | 23% |
|  |  | P1 | 2365 | 62 | 90 | 43% | 2429 | 24% |