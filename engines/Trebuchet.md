# Engine: Trebuchet

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 3004<sub>(-25) | 3314<sub>(+1) | 3445<sub>(+13) |  |
| 1.0.0 | 2026-11-07 | 3029<sub>(-6) | 3313<sub>(-20) | 3432<sub>(+25) |  |
| 3.0.0 | 2026-10-30 | 3035<sub>(+11) | 3333<sub>(-20) | 3407<sub>(-49) |  |
| 2.0.0 | 2026-10-15 | 3024<sub>(+174) | 3353<sub>(+212) | 3456<sub>(+148) |  |
| 1.2.198 | 2026-08-01 | 2850 | 3141 | 3308 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 3179<sub>(+16) | 3534<sub>(+85) | 3528<sub>(+37) |  |
| 1.0.0 | 2026-11-07 | 3163<sub>(+1) | 3449<sub>(+19) | 3491<sub>(+1) |  |
| 3.0.0 | 2026-10-30 | 3162<sub>(+48) | 3430<sub>(-27) | 3490<sub>(-29) |  |
| 2.0.0 | 2026-10-15 | 3114<sub>(+230) | 3457<sub>(+166) | 3519<sub>(+79) |  |
| 1.2.198 | 2026-08-01 | 2884 | 3291 | 3440 |  |
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

Generated: 2026-11-09 05:43:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2850, 3024, 3035, 3029, 3004]
  line "E1: LTC (60.0+0.60s)" [3141, 3353, 3333, 3313, 3314]
  line "E1: VLTC (2m24s+1.12s)" [3308, 3456, 3407, 3432, 3445]
  line "P1: STC (8.0+0.08s)" [2884, 3114, 3162, 3163, 3179]
  line "P1: LTC (60.0+0.60s)" [3291, 3457, 3430, 3449, 3534]
  line "P1: VLTC (2m24s+1.12s)" [3440, 3519, 3490, 3491, 3528]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3445 | 64 | 60 | 50% | 3444 | 73% |
|  |  | P1 | 3528 | 57 | 78 | 45% | 3563 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3314 | 63 | 64 | 54% | 3287 | 64% |
|  |  | P1 | 3534 | 69 | 54 | 49% | 3540 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3004 | 87 | 42 | 55% | 2959 | 29% |
|  |  | P1 | 3179 | 63 | 64 | 51% | 3173 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3491 | 49 | 100 | 50% | 3495 | 75% |
|  |  | E1 | 3432 | 30 | 318 | 57% | 3151 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3449 | 50 | 100 | 52% | 3440 | 71% |
|  |  | E1 | 3313 | 32 | 252 | 48% | 3326 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3163 | 47 | 128 | 47% | 3185 | 50% |
|  |  | E1 | 3029 | 29 | 360 | 46% | 3058 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3407 | 31 | 264 | 51% | 3399 | 69% |
|  |  | P1 | 3490 | 38 | 168 | 51% | 3480 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3333 | 28 | 324 | 54% | 3305 | 63% |
|  |  | P1 | 3430 | 37 | 192 | 52% | 3410 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3162 | 42 | 148 | 48% | 3175 | 60% |
|  |  | E1 | 3035 | 37 | 218 | 50% | 3029 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3519 | 34 | 224 | 51% | 3510 | 70% |
|  |  | E1 | 3456 | 29 | 300 | 49% | 3460 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3457 | 39 | 174 | 53% | 3433 | 66% |
|  |  | E1 | 3353 | 32 | 266 | 52% | 3337 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3114 | 40 | 192 | 53% | 3082 | 44% |
|  |  | E1 | 3024 | 38 | 208 | 53% | 2993 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3440 | 33 | 252 | 44% | 3480 | 61% |
|  |  | E1 | 3308 | 29 | 326 | 41% | 3379 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3141 | 28 | 370 | 39% | 3233 | 51% |
|  |  | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3291 | 32 | 288 | 39% | 3376 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2850 | 34 | 308 | 64% | 2720 | 29% |
|  |  | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2884 | 45 | 180 | 59% | 2790 | 26% |