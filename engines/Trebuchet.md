# Engine: Trebuchet

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2952<sub>(-32) | 3249<sub>(-9) | 3366<sub>(-10) |  |
| 1.0.0 | 2026-11-07 | 2984<sub>(-1) | 3258<sub>(-18) | 3376<sub>(+25) |  |
| 3.0.0 | 2026-10-30 | 2985<sub>(+11) | 3276<sub>(-22) | 3351<sub>(-47) |  |
| 2.0.0 | 2026-10-15 | 2974<sub>(+171) | 3298<sub>(+212) | 3398<sub>(+149) |  |
| 1.2.198 | 2026-08-01 | 2803 | 3086 | 3249 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2958<sub>(-13) | 3264<sub>(+24) | 3324<sub>(+38) |  |
| 1.0.0 | 2026-11-07 | 2971<sub>(-4) | 3240<sub>(+15) | 3286<sub>(+3) |  |
| 3.0.0 | 2026-10-30 | 2975<sub>(+36) | 3225<sub>(-26) | 3283<sub>(-30) |  |
| 2.0.0 | 2026-10-15 | 2939<sub>(+208) | 3251<sub>(+164) | 3313<sub>(+80) |  |
| 1.2.198 | 2026-08-01 | 2731 | 3087 | 3233 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.198 | 2026-08-01 | 3067 | 3339 | 3387 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Trebuchet+<version>&body=###%20Engine%20name%0ATrebuchet%0A%0A###%20Version%0A1.2.198" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:44:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2803, 2974, 2985, 2984, 2952]
  line "E1: LTC (60.0+0.60s)" [3086, 3298, 3276, 3258, 3249]
  line "E1: VLTC (2m24s+1.12s)" [3249, 3398, 3351, 3376, 3366]
  line "P1: STC (8.0+0.08s)" [2731, 2939, 2975, 2971, 2958]
  line "P1: LTC (60.0+0.60s)" [3087, 3251, 3225, 3240, 3264]
  line "P1: VLTC (2m24s+1.12s)" [3233, 3313, 3283, 3286, 3324]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3324 | 38 | 170 | 48% | 3339 | 71% |
|  |  | E1 | 3366 | 32 | 252 | 49% | 3375 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3264 | 29 | 312 | 46% | 3297 | 67% |
|  |  | E1 | 3249 | 33 | 240 | 50% | 3247 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2958 | 40 | 172 | 47% | 2985 | 58% |
|  |  | E1 | 2952 | 33 | 274 | 50% | 2955 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3376 | 28 | 346 | 57% | 3121 | 63% |
|  |  | P1 | 3286 | 47 | 112 | 50% | 3289 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3258 | 30 | 288 | 48% | 3270 | 64% |
|  |  | P1 | 3240 | 48 | 108 | 51% | 3235 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2984 | 27 | 396 | 47% | 3005 | 45% |
|  |  | P1 | 2971 | 44 | 148 | 46% | 3001 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3283 | 38 | 168 | 51% | 3272 | 77% |
|  |  | E1 | 3351 | 31 | 264 | 51% | 3343 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3225 | 37 | 192 | 52% | 3205 | 62% |
|  |  | E1 | 3276 | 29 | 324 | 54% | 3248 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2975 | 42 | 148 | 48% | 2990 | 60% |
|  |  | E1 | 2985 | 37 | 218 | 50% | 2979 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3398 | 29 | 300 | 49% | 3403 | 66% |
|  |  | P1 | 3313 | 34 | 224 | 51% | 3302 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3298 | 32 | 266 | 52% | 3281 | 62% |
|  |  | P1 | 3251 | 39 | 174 | 53% | 3228 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2974 | 38 | 208 | 53% | 2944 | 44% |
|  |  | P1 | 2939 | 39 | 192 | 53% | 2908 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3233 | 33 | 252 | 44% | 3274 | 61% |
|  |  | E1 | 3249 | 29 | 326 | 41% | 3321 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3087 | 32 | 288 | 39% | 3173 | 55% |
|  |  | E1 | 3086 | 28 | 370 | 39% | 3179 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2731 | 45 | 180 | 59% | 2639 | 26% |
|  |  | E1 | 2803 | 34 | 308 | 64% | 2674 | 29% |