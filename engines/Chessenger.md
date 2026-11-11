# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3140<sub>(+171) | 3515<sub>(+152) | 3571<sub>(+115) |  |
| 3.1 | 2026-10-21 | 2969<sub>(+73) | 3363<sub>(+7) | 3456<sub>(-7) |  |
| 3.0 | 2026-10-17 | 2896<sub>(+261) | 3356<sub>(+158) | 3463<sub>(+208) |  |
| 2.9.5 | 2026-10-15 | 2635<sub>(+198) | 3198<sub>(+189) | 3255<sub>(+169) |  |
| 1.6 | 2026-10-07 | 2437 | 3009 | 3086 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3276<sub>(+249) | 3591<sub>(+120) | 3652<sub>(+106) |  |
| 3.1 | 2026-10-21 | 3027<sub>(+10) | 3471<sub>(+50) | 3546<sub>(+14) |  |
| 3.0 | 2026-10-17 | 3017<sub>(+205) | 3421<sub>(+172) | 3532<sub>(+170) |  |
| 2.9.5 | 2026-10-15 | 2812<sub>(+329) | 3249<sub>(+233) | 3362<sub>(+237) |  |
| 1.6 | 2026-10-07 | 2483 | 3016 | 3125 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2483 | 3016 | 3125 |  |
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

Generated: 2026-11-11 05:37:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6"]
  y-axis "Elo Rating" 2400 --> 3700
  line "E1: STC (8.0+0.08s)" [2437, 2635, 2896, 2969, 3140]
  line "E1: LTC (60.0+0.60s)" [3009, 3198, 3356, 3363, 3515]
  line "E1: VLTC (2m24s+1.12s)" [3086, 3255, 3463, 3456, 3571]
  line "P1: STC (8.0+0.08s)" [2483, 2812, 3017, 3027, 3276]
  line "P1: LTC (60.0+0.60s)" [3016, 3249, 3421, 3471, 3591]
  line "P1: VLTC (2m24s+1.12s)" [3125, 3362, 3532, 3546, 3652]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3571 | 31 | 252 | 53% | 3551 | 75% |
|  |  | P1 | 3652 | 37 | 180 | 53% | 3633 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3515 | 28 | 306 | 53% | 3494 | 75% |
|  |  | P1 | 3591 | 40 | 156 | 51% | 3583 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3140 | 35 | 238 | 53% | 3116 | 50% |
|  |  | P1 | 3276 | 39 | 180 | 49% | 3281 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3546 | 29 | 300 | 54% | 3519 | 68% |
|  |  | E1 | 3456 | 29 | 306 | 52% | 3440 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3471 | 34 | 228 | 50% | 3474 | 62% |
|  |  | E1 | 3363 | 34 | 224 | 50% | 3367 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3027 | 51 | 112 | 49% | 3038 | 47% |
|  |  | E1 | 2969 | 34 | 276 | 49% | 2975 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3532 | 46 | 122 | 50% | 3533 | 68% |
|  |  | E1 | 3463 | 31 | 270 | 50% | 3461 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3421 | 49 | 106 | 56% | 3375 | 69% |
|  |  | E1 | 3356 | 31 | 274 | 49% | 3367 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3017 | 52 | 116 | 57% | 2959 | 38% |
|  |  | E1 | 2896 | 41 | 174 | 53% | 2867 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3255 | 34 | 244 | 50% | 3258 | 48% |
|  |  | P1 | 3362 | 37 | 196 | 52% | 3348 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3198 | 41 | 168 | 51% | 3187 | 50% |
|  |  | P1 | 3249 | 50 | 118 | 54% | 3217 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2812 | 41 | 196 | 53% | 2782 | 34% |
|  |  | E1 | 2635 | 36 | 254 | 55% | 2589 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3086 | 43 | 168 | 55% | 3016 | 43% |
|  |  | P1 | 3125 | 50 | 130 | 55% | 3056 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3009 | 40 | 218 | 57% | 2861 | 35% |
|  |  | P1 | 3016 | 57 | 116 | 63% | 2732 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2437 | 46 | 184 | 57% | 2314 | 23% |
|  |  | P1 | 2483 | 62 | 90 | 43% | 2547 | 24% |