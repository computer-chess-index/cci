# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3123<sub>(+171) | 3501<sub>(+154) | 3556<sub>(+115) |  |
| 3.1 | 2026-10-21 | 2952<sub>(+71) | 3347<sub>(+6) | 3441<sub>(-6) |  |
| 3.0 | 2026-10-17 | 2881<sub>(+261) | 3341<sub>(+159) | 3447<sub>(+208) |  |
| 2.9.5 | 2026-10-15 | 2620<sub>(+199) | 3182<sub>(+189) | 3239<sub>(+170) |  |
| 1.6 | 2026-10-07 | 2421 | 2993 | 3069 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3283<sub>(+255) | 3590<sub>(+120) | 3652<sub>(+106) |  |
| 3.1 | 2026-10-21 | 3028<sub>(+11) | 3470<sub>(+50) | 3546<sub>(+16) |  |
| 3.0 | 2026-10-17 | 3017<sub>(+206) | 3420<sub>(+171) | 3530<sub>(+170) |  |
| 2.9.5 | 2026-10-15 | 2811<sub>(+328) | 3249<sub>(+233) | 3360<sub>(+235) |  |
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

Generated: 2026-11-10 05:37:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6"]
  y-axis "Elo Rating" 2400 --> 3700
  line "E1: STC (8.0+0.08s)" [2421, 2620, 2881, 2952, 3123]
  line "E1: LTC (60.0+0.60s)" [2993, 3182, 3341, 3347, 3501]
  line "E1: VLTC (2m24s+1.12s)" [3069, 3239, 3447, 3441, 3556]
  line "P1: STC (8.0+0.08s)" [2483, 2811, 3017, 3028, 3283]
  line "P1: LTC (60.0+0.60s)" [3016, 3249, 3420, 3470, 3590]
  line "P1: VLTC (2m24s+1.12s)" [3125, 3360, 3530, 3546, 3652]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3652 | 37 | 176 | 53% | 3632 | 76% |
|  |  | E1 | 3556 | 31 | 248 | 53% | 3534 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3501 | 28 | 306 | 53% | 3479 | 75% |
|  |  | P1 | 3590 | 40 | 156 | 51% | 3582 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3123 | 35 | 234 | 53% | 3100 | 50% |
|  |  | P1 | 3283 | 42 | 158 | 50% | 3282 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3546 | 29 | 300 | 54% | 3518 | 68% |
|  |  | E1 | 3441 | 29 | 306 | 52% | 3424 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3470 | 34 | 228 | 50% | 3471 | 62% |
|  |  | E1 | 3347 | 34 | 224 | 50% | 3352 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3028 | 51 | 112 | 49% | 3039 | 47% |
|  |  | E1 | 2952 | 34 | 276 | 49% | 2959 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3530 | 46 | 122 | 50% | 3532 | 68% |
|  |  | E1 | 3447 | 31 | 270 | 50% | 3445 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3420 | 49 | 106 | 56% | 3374 | 69% |
|  |  | E1 | 3341 | 31 | 274 | 49% | 3351 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3017 | 52 | 116 | 57% | 2958 | 38% |
|  |  | E1 | 2881 | 41 | 174 | 53% | 2851 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3239 | 34 | 244 | 50% | 3241 | 48% |
|  |  | P1 | 3360 | 37 | 196 | 52% | 3348 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3182 | 41 | 168 | 51% | 3171 | 50% |
|  |  | P1 | 3249 | 50 | 118 | 54% | 3217 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2620 | 36 | 254 | 55% | 2574 | 27% |
|  |  | P1 | 2811 | 41 | 196 | 53% | 2781 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3125 | 50 | 130 | 55% | 3056 | 40% |
|  |  | E1 | 3069 | 43 | 168 | 55% | 3000 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2993 | 40 | 218 | 57% | 2844 | 35% |
|  |  | P1 | 3016 | 57 | 116 | 63% | 2732 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2421 | 45 | 184 | 57% | 2298 | 23% |
|  |  | P1 | 2483 | 62 | 90 | 43% | 2546 | 24% |