# Engine: Trebuchet

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2958<sub>(-24) | 3248<sub>(-4) | 3355<sub>(-19) |  |
| 1.0.0 | 2026-11-07 | 2982<sub>(-4) | 3252<sub>(-22) | 3374<sub>(+25) |  |
| 3.0.0 | 2026-10-30 | 2986<sub>(+9) | 3274<sub>(-21) | 3349<sub>(-46) |  |
| 2.0.0 | 2026-10-15 | 2977<sub>(+174) | 3295<sub>(+213) | 3395<sub>(+150) |  |
| 1.2.198 | 2026-08-01 | 2803 | 3082 | 3245 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2982<sub>(-31) | 3297<sub>(+18) | 3359<sub>(+43) |  |
| 1.0.0 | 2026-11-07 | 3013<sub>(+2) | 3279<sub>(+20) | 3316<sub>(0) |  |
| 3.0.0 | 2026-10-30 | 3011<sub>(+36) | 3259<sub>(-26) | 3316<sub>(-27) |  |
| 2.0.0 | 2026-10-15 | 2975<sub>(+207) | 3285<sub>(+162) | 3343<sub>(+76) |  |
| 1.2.198 | 2026-08-01 | 2768 | 3123 | 3267 |  |
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

Generated: 2026-11-25 05:44:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2803, 2977, 2986, 2982, 2958]
  line "E1: LTC (60.0+0.60s)" [3082, 3295, 3274, 3252, 3248]
  line "E1: VLTC (2m24s+1.12s)" [3245, 3395, 3349, 3374, 3355]
  line "P1: STC (8.0+0.08s)" [2768, 2975, 3011, 3013, 2982]
  line "P1: LTC (60.0+0.60s)" [3123, 3285, 3259, 3279, 3297]
  line "P1: VLTC (2m24s+1.12s)" [3267, 3343, 3316, 3316, 3359]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3359 | 37 | 186 | 49% | 3368 | 72% |
|  |  | E1 | 3355 | 29 | 296 | 48% | 3370 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3297 | 27 | 348 | 46% | 3325 | 66% |
|  |  | E1 | 3248 | 30 | 280 | 51% | 3244 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2982 | 33 | 248 | 47% | 3006 | 58% |
|  |  | E1 | 2958 | 31 | 312 | 50% | 2958 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3316 | 47 | 112 | 50% | 3318 | 74% |
|  |  | E1 | 3374 | 28 | 346 | 57% | 3117 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3279 | 45 | 124 | 51% | 3271 | 70% |
|  |  | E1 | 3252 | 30 | 300 | 48% | 3267 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3013 | 41 | 172 | 47% | 3032 | 51% |
|  |  | E1 | 2982 | 27 | 396 | 47% | 3004 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3316 | 38 | 168 | 51% | 3305 | 77% |
|  |  | E1 | 3349 | 31 | 264 | 51% | 3341 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3259 | 37 | 192 | 52% | 3240 | 62% |
|  |  | E1 | 3274 | 29 | 324 | 54% | 3247 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3011 | 42 | 148 | 48% | 3025 | 60% |
|  |  | E1 | 2986 | 37 | 218 | 50% | 2981 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3343 | 34 | 224 | 51% | 3333 | 70% |
|  |  | E1 | 3395 | 29 | 300 | 49% | 3401 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3285 | 39 | 174 | 53% | 3262 | 66% |
|  |  | E1 | 3295 | 32 | 266 | 52% | 3278 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2975 | 39 | 192 | 53% | 2944 | 44% |
|  |  | E1 | 2977 | 38 | 208 | 53% | 2946 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3267 | 33 | 252 | 44% | 3306 | 61% |
|  |  | E1 | 3245 | 29 | 326 | 41% | 3318 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3123 | 32 | 288 | 39% | 3208 | 55% |
|  |  | E1 | 3082 | 28 | 370 | 39% | 3175 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2768 | 45 | 180 | 59% | 2674 | 26% |
|  |  | E1 | 2803 | 34 | 308 | 64% | 2673 | 29% |
|  |  | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |