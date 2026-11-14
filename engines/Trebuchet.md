# Engine: Trebuchet

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2947<sub>(-23) | 3236<sub>(-5) | 3353<sub>(-7) |  |
| 1.0.0 | 2026-11-07 | 2970<sub>(-5) | 3241<sub>(-22) | 3360<sub>(+23) |  |
| 3.0.0 | 2026-10-30 | 2975<sub>(+10) | 3263<sub>(-20) | 3337<sub>(-46) |  |
| 2.0.0 | 2026-10-15 | 2965<sub>(+166) | 3283<sub>(+209) | 3383<sub>(+147) |  |
| 1.2.198 | 2026-08-01 | 2799 | 3074 | 3236 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2955<sub>(-12) | 3282<sub>(+26) | 3339<sub>(+42) |  |
| 1.0.0 | 2026-11-07 | 2967<sub>(-2) | 3256<sub>(+20) | 3297<sub>(-1) |  |
| 3.0.0 | 2026-10-30 | 2969<sub>(+42) | 3236<sub>(-28) | 3298<sub>(-28) |  |
| 2.0.0 | 2026-10-15 | 2927<sub>(+207) | 3264<sub>(+167) | 3326<sub>(+79) |  |
| 1.2.198 | 2026-08-01 | 2720 | 3097 | 3247 |  |
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

Generated: 2026-11-14 05:43:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2799, 2965, 2975, 2970, 2947]
  line "E1: LTC (60.0+0.60s)" [3074, 3283, 3263, 3241, 3236]
  line "E1: VLTC (2m24s+1.12s)" [3236, 3383, 3337, 3360, 3353]
  line "P1: STC (8.0+0.08s)" [2720, 2927, 2969, 2967, 2955]
  line "P1: LTC (60.0+0.60s)" [3097, 3264, 3236, 3256, 3282]
  line "P1: VLTC (2m24s+1.12s)" [3247, 3326, 3298, 3297, 3339]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3353 | 33 | 228 | 49% | 3362 | 68% |
|  |  | P1 | 3339 | 39 | 166 | 48% | 3353 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3236 | 33 | 236 | 50% | 3233 | 66% |
|  |  | P1 | 3282 | 30 | 296 | 46% | 3310 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2947 | 34 | 258 | 51% | 2944 | 45% |
|  |  | P1 | 2955 | 42 | 156 | 46% | 2981 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3297 | 48 | 104 | 49% | 3303 | 75% |
|  |  | E1 | 3360 | 29 | 326 | 57% | 3094 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3256 | 50 | 100 | 52% | 3247 | 71% |
|  |  | E1 | 3241 | 31 | 264 | 48% | 3256 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2967 | 45 | 140 | 46% | 2993 | 51% |
|  |  | E1 | 2970 | 28 | 372 | 46% | 2998 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3337 | 31 | 264 | 51% | 3329 | 69% |
|  |  | P1 | 3298 | 38 | 168 | 51% | 3287 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3263 | 28 | 324 | 54% | 3235 | 63% |
|  |  | P1 | 3236 | 37 | 192 | 52% | 3217 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2969 | 42 | 148 | 48% | 2982 | 60% |
|  |  | E1 | 2975 | 37 | 218 | 50% | 2970 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3326 | 34 | 224 | 51% | 3317 | 70% |
|  |  | E1 | 3383 | 29 | 300 | 49% | 3389 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3264 | 39 | 174 | 53% | 3241 | 66% |
|  |  | E1 | 3283 | 32 | 266 | 52% | 3267 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2927 | 39 | 192 | 53% | 2896 | 44% |
|  |  | E1 | 2965 | 38 | 208 | 53% | 2935 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3247 | 33 | 252 | 44% | 3287 | 61% |
|  |  | E1 | 3236 | 29 | 326 | 41% | 3308 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3074 | 28 | 370 | 39% | 3166 | 51% |
|  |  | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3097 | 32 | 288 | 39% | 3182 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2799 | 34 | 308 | 64% | 2669 | 29% |
|  |  | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2720 | 45 | 180 | 59% | 2628 | 26% |