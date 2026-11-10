# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-11-08 | 2909<sub>(+50) | 3216<sub>(+4) | 3285<sub>(+3) |  |
| 2.2.0 | 2026-11-07 | 2859<sub>(+2) | 3212<sub>(+17) | 3282<sub>(-30) |  |
| 2.1.0 | 2026-10-31 | 2857<sub>(-21) | 3195<sub>(-44) | 3312<sub>(+45) |  |
| 1.0.0 | 2026-10-15 | 2878<sub>(+82) | 3239<sub>(+81) | 3267<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2796 | 3158 | 3260 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-11-08 | 2962<sub>(+12) | 3312<sub>(-29) | 3399<sub>(+12) |  |
| 2.2.0 | 2026-11-07 | 2950<sub>(-9) | 3341<sub>(0) | 3387<sub>(-7) |  |
| 2.1.0 | 2026-10-31 | 2959<sub>(-37) | 3341<sub>(+19) | 3394<sub>(-20) |  |
| 1.0.0 | 2026-10-15 | 2996<sub>(+73) | 3322<sub>(-13) | 3414<sub>(+67) |  |
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

Generated: 2026-11-10 05:40:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2796, 2878, 2857, 2859, 2909]
  line "E1: LTC (60.0+0.60s)" [3158, 3239, 3195, 3212, 3216]
  line "E1: VLTC (2m24s+1.12s)" [3260, 3267, 3312, 3282, 3285]
  line "P1: STC (8.0+0.08s)" [2923, 2996, 2959, 2950, 2962]
  line "P1: LTC (60.0+0.60s)" [3335, 3322, 3341, 3341, 3312]
  line "P1: VLTC (2m24s+1.12s)" [3347, 3414, 3394, 3387, 3399]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3399 | 44 | 136 | 50% | 3403 | 60% |
|  |  | E1 | 3285 | 37 | 188 | 49% | 3289 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3312 | 39 | 178 | 52% | 3294 | 58% |
|  |  | E1 | 3216 | 34 | 232 | 47% | 3240 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2962 | 35 | 246 | 45% | 3004 | 39% |
|  |  | E1 | 2909 | 32 | 292 | 46% | 2939 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3387 | 38 | 178 | 53% | 3367 | 63% |
|  |  | E1 | 3282 | 32 | 262 | 51% | 3278 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3341 | 48 | 116 | 48% | 3356 | 60% |
|  |  | E1 | 3212 | 32 | 280 | 53% | 3190 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2950 | 50 | 126 | 51% | 2939 | 36% |
|  |  | E1 | 2859 | 32 | 292 | 53% | 2832 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3394 | 34 | 232 | 47% | 3414 | 64% |
|  |  | E1 | 3312 | 28 | 340 | 53% | 3289 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3341 | 41 | 152 | 49% | 3347 | 63% |
|  |  | E1 | 3195 | 29 | 344 | 54% | 3166 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2959 | 38 | 212 | 45% | 3005 | 40% |
|  |  | E1 | 2857 | 37 | 228 | 49% | 2865 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3414 | 40 | 160 | 50% | 3417 | 66% |
|  |  | E1 | 3267 | 34 | 232 | 50% | 3266 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3322 | 39 | 180 | 50% | 3318 | 58% |
|  |  | E1 | 3239 | 32 | 276 | 51% | 3231 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2996 | 39 | 198 | 52% | 2977 | 45% |
|  |  | E1 | 2878 | 28 | 394 | 47% | 2903 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3347 | 35 | 220 | 46% | 3376 | 56% |
|  |  | E1 | 3260 | 30 | 312 | 47% | 3281 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3335 | 34 | 248 | 52% | 3316 | 49% |
|  |  | E1 | 3158 | 31 | 300 | 48% | 3177 | 53% |
|  |  | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2923 | 41 | 192 | 46% | 2961 | 35% |
|  |  | E1 | 2796 | 30 | 382 | 46% | 2834 | 31% |
|  |  | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |