# Engine: Trebuchet

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 3023<sub>(-28) | 3326<sub>(-7) | 3447<sub>(-8) |  |
| 1.0.0 | 2026-11-07 | 3051<sub>(-5) | 3333<sub>(-22) | 3455<sub>(+25) |  |
| 3.0.0 | 2026-10-30 | 3056<sub>(+10) | 3355<sub>(-21) | 3430<sub>(-48) |  |
| 2.0.0 | 2026-10-15 | 3046<sub>(+175) | 3376<sub>(+213) | 3478<sub>(+149) |  |
| 1.2.198 | 2026-08-01 | 2871 | 3163 | 3329 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 3147<sub>(-15) | 3476<sub>(+25) | 3533<sub>(+39) |  |
| 1.0.0 | 2026-11-07 | 3162<sub>(+2) | 3451<sub>(+19) | 3494<sub>(+2) |  |
| 3.0.0 | 2026-10-30 | 3160<sub>(+46) | 3432<sub>(-27) | 3492<sub>(-29) |  |
| 2.0.0 | 2026-10-15 | 3114<sub>(+229) | 3459<sub>(+166) | 3521<sub>(+80) |  |
| 1.2.198 | 2026-08-01 | 2885 | 3293 | 3441 |  |
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

Generated: 2026-11-11 05:43:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2871, 3046, 3056, 3051, 3023]
  line "E1: LTC (60.0+0.60s)" [3163, 3376, 3355, 3333, 3326]
  line "E1: VLTC (2m24s+1.12s)" [3329, 3478, 3430, 3455, 3447]
  line "P1: STC (8.0+0.08s)" [2885, 3114, 3160, 3162, 3147]
  line "P1: LTC (60.0+0.60s)" [3293, 3459, 3432, 3451, 3476]
  line "P1: VLTC (2m24s+1.12s)" [3441, 3521, 3492, 3494, 3533]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3447 | 34 | 224 | 49% | 3456 | 69% |
|  |  | P1 | 3533 | 39 | 166 | 48% | 3546 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3326 | 33 | 232 | 50% | 3325 | 66% |
|  |  | P1 | 3476 | 30 | 292 | 46% | 3506 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3023 | 35 | 246 | 51% | 3016 | 45% |
|  |  | P1 | 3147 | 45 | 136 | 47% | 3166 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3494 | 49 | 100 | 50% | 3498 | 75% |
|  |  | E1 | 3455 | 29 | 322 | 57% | 3175 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3451 | 50 | 100 | 52% | 3441 | 71% |
|  |  | E1 | 3333 | 32 | 256 | 48% | 3348 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3162 | 47 | 128 | 47% | 3185 | 50% |
|  |  | E1 | 3051 | 29 | 360 | 46% | 3081 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3430 | 31 | 264 | 51% | 3422 | 69% |
|  |  | P1 | 3492 | 38 | 168 | 51% | 3482 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3355 | 28 | 324 | 54% | 3328 | 63% |
|  |  | P1 | 3432 | 37 | 192 | 52% | 3413 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3160 | 42 | 148 | 48% | 3175 | 60% |
|  |  | E1 | 3056 | 37 | 218 | 50% | 3052 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3521 | 34 | 224 | 51% | 3511 | 70% |
|  |  | E1 | 3478 | 29 | 300 | 49% | 3483 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3459 | 39 | 174 | 53% | 3436 | 66% |
|  |  | E1 | 3376 | 32 | 266 | 52% | 3359 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3114 | 40 | 192 | 53% | 3082 | 44% |
|  |  | E1 | 3046 | 38 | 208 | 53% | 3016 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3441 | 33 | 252 | 44% | 3482 | 61% |
|  |  | E1 | 3329 | 29 | 326 | 41% | 3401 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3163 | 28 | 370 | 39% | 3256 | 51% |
|  |  | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3293 | 32 | 288 | 39% | 3378 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2871 | 34 | 308 | 64% | 2742 | 29% |
|  |  | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2885 | 45 | 180 | 59% | 2792 | 26% |