# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2857<sub>(-68) | 3221<sub>(-6) | 3328<sub>(+29) |  |
| 2.3.0 | 2026-11-08 | 2925<sub>(+49) | 3227<sub>(-1) | 3299<sub>(+1) |  |
| 2.2.0 | 2026-11-07 | 2876<sub>(+5) | 3228<sub>(+16) | 3298<sub>(-30) |  |
| 2.1.0 | 2026-10-31 | 2871<sub>(-22) | 3212<sub>(-43) | 3328<sub>(+45) |  |
| 1.0.0 | 2026-10-15 | 2893<sub>(+82) | 3255<sub>(+81) | 3283<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2811 | 3174 | 3276 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2936<sub>(-27) | 3355<sub>(+45) | 3394<sub>(-8) |  |
| 2.3.0 | 2026-11-08 | 2963<sub>(+13) | 3310<sub>(-31) | 3402<sub>(+13) |  |
| 2.2.0 | 2026-11-07 | 2950<sub>(-11) | 3341<sub>(0) | 3389<sub>(-8) |  |
| 2.1.0 | 2026-10-31 | 2961<sub>(-35) | 3341<sub>(+19) | 3397<sub>(-19) |  |
| 1.0.0 | 2026-10-15 | 2996<sub>(+73) | 3322<sub>(-13) | 3416<sub>(+69) |  |
| 0.13.593 | 2026-06-30 | 2923 | 3335 | 3347 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.13.593 | 2026-06-30 | 2831 | 3125 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnstar+<version>&body=###%20Engine%20name%0APawnstar%0A%0A###%20Version%0A0.13.593" target="_blank">Submit new version</a>

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

Generated: 2026-11-11 05:40:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2811, 2893, 2871, 2876, 2925, 2857]
  line "E1: LTC (60.0+0.60s)" [3174, 3255, 3212, 3228, 3227, 3221]
  line "E1: VLTC (2m24s+1.12s)" [3276, 3283, 3328, 3298, 3299, 3328]
  line "P1: STC (8.0+0.08s)" [2923, 2996, 2961, 2950, 2963, 2936]
  line "P1: LTC (60.0+0.60s)" [3335, 3322, 3341, 3341, 3310, 3355]
  line "P1: VLTC (2m24s+1.12s)" [3347, 3416, 3397, 3389, 3402, 3394]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3328 | 30 | 288 | 51% | 3318 | 65% |
|  |  | P1 | 3394 | 39 | 176 | 50% | 3394 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3221 | 32 | 268 | 52% | 3201 | 56% |
|  |  | P1 | 3355 | 44 | 136 | 49% | 3362 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2857 | 33 | 282 | 47% | 2882 | 38% |
|  |  | P1 | 2936 | 54 | 108 | 51% | 2923 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3402 | 44 | 136 | 50% | 3405 | 60% |
|  |  | E1 | 3299 | 37 | 196 | 49% | 3305 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3310 | 38 | 182 | 52% | 3295 | 59% |
|  |  | E1 | 3227 | 33 | 244 | 46% | 3254 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2963 | 35 | 246 | 45% | 3005 | 39% |
|  |  | E1 | 2925 | 32 | 292 | 46% | 2955 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3389 | 38 | 178 | 53% | 3368 | 63% |
|  |  | E1 | 3298 | 32 | 262 | 51% | 3294 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3341 | 48 | 116 | 48% | 3356 | 60% |
|  |  | E1 | 3228 | 32 | 280 | 53% | 3206 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2950 | 50 | 126 | 51% | 2938 | 36% |
|  |  | E1 | 2876 | 32 | 292 | 53% | 2849 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3397 | 34 | 232 | 47% | 3416 | 64% |
|  |  | E1 | 3328 | 28 | 340 | 53% | 3305 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3341 | 41 | 152 | 49% | 3347 | 63% |
|  |  | E1 | 3212 | 29 | 344 | 54% | 3182 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2871 | 37 | 228 | 49% | 2880 | 40% |
|  |  | P1 | 2961 | 38 | 212 | 45% | 3005 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3416 | 40 | 160 | 50% | 3418 | 66% |
|  |  | E1 | 3283 | 34 | 232 | 50% | 3282 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3322 | 39 | 180 | 50% | 3320 | 58% |
|  |  | E1 | 3255 | 32 | 276 | 51% | 3248 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2996 | 39 | 198 | 52% | 2978 | 45% |
|  |  | E1 | 2893 | 28 | 394 | 47% | 2919 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3347 | 35 | 220 | 46% | 3378 | 56% |
|  |  | E1 | 3276 | 30 | 312 | 47% | 3297 | 51% |
|  |  | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3335 | 34 | 248 | 52% | 3316 | 49% |
|  |  | E1 | 3174 | 31 | 300 | 48% | 3193 | 53% |
|  |  | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2923 | 41 | 192 | 46% | 2961 | 35% |
|  |  | E1 | 2811 | 30 | 382 | 46% | 2849 | 31% |
|  |  | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |