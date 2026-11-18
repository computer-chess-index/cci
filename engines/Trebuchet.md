# Engine: Trebuchet

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2948<sub>(-30) | 3244<sub>(-8) | 3360<sub>(-11) |  |
| 1.0.0 | 2026-11-07 | 2978<sub>(-1) | 3252<sub>(-19) | 3371<sub>(+26) |  |
| 3.0.0 | 2026-10-30 | 2979<sub>(+10) | 3271<sub>(-20) | 3345<sub>(-48) |  |
| 2.0.0 | 2026-10-15 | 2969<sub>(+172) | 3291<sub>(+210) | 3393<sub>(+149) |  |
| 1.2.198 | 2026-08-01 | 2797 | 3081 | 3244 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 2963<sub>(-15) | 3271<sub>(+23) | 3330<sub>(+36) |  |
| 1.0.0 | 2026-11-07 | 2978<sub>(-4) | 3248<sub>(+16) | 3294<sub>(+4) |  |
| 3.0.0 | 2026-10-30 | 2982<sub>(+38) | 3232<sub>(-27) | 3290<sub>(-30) |  |
| 2.0.0 | 2026-10-15 | 2944<sub>(+206) | 3259<sub>(+163) | 3320<sub>(+79) |  |
| 1.2.198 | 2026-08-01 | 2738 | 3096 | 3241 |  |
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

Generated: 2026-11-18 05:44:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2797, 2969, 2979, 2978, 2948]
  line "E1: LTC (60.0+0.60s)" [3081, 3291, 3271, 3252, 3244]
  line "E1: VLTC (2m24s+1.12s)" [3244, 3393, 3345, 3371, 3360]
  line "P1: STC (8.0+0.08s)" [2738, 2944, 2982, 2978, 2963]
  line "P1: LTC (60.0+0.60s)" [3096, 3259, 3232, 3248, 3271]
  line "P1: VLTC (2m24s+1.12s)" [3241, 3320, 3290, 3294, 3330]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3330 | 38 | 174 | 48% | 3345 | 71% |
|  |  | E1 | 3360 | 32 | 252 | 49% | 3370 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3271 | 29 | 312 | 46% | 3303 | 67% |
|  |  | E1 | 3244 | 32 | 248 | 51% | 3241 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2963 | 40 | 172 | 47% | 2990 | 58% |
|  |  | E1 | 2948 | 33 | 274 | 50% | 2950 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3371 | 28 | 346 | 57% | 3114 | 63% |
|  |  | P1 | 3294 | 47 | 112 | 50% | 3297 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3252 | 30 | 288 | 48% | 3264 | 64% |
|  |  | P1 | 3248 | 48 | 108 | 51% | 3241 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2978 | 44 | 148 | 46% | 3008 | 51% |
|  |  | E1 | 2978 | 27 | 396 | 47% | 3000 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3290 | 38 | 168 | 51% | 3279 | 77% |
|  |  | E1 | 3345 | 31 | 264 | 51% | 3337 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3232 | 37 | 192 | 52% | 3213 | 62% |
|  |  | E1 | 3271 | 29 | 324 | 54% | 3243 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2982 | 42 | 148 | 48% | 2997 | 60% |
|  |  | E1 | 2979 | 37 | 218 | 50% | 2974 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3393 | 29 | 300 | 49% | 3398 | 66% |
|  |  | P1 | 3320 | 34 | 224 | 51% | 3310 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3291 | 32 | 266 | 52% | 3275 | 62% |
|  |  | P1 | 3259 | 39 | 174 | 53% | 3235 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2944 | 39 | 192 | 53% | 2913 | 44% |
|  |  | E1 | 2969 | 38 | 208 | 53% | 2939 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3241 | 33 | 252 | 44% | 3281 | 61% |
|  |  | E1 | 3244 | 29 | 326 | 41% | 3316 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3096 | 32 | 288 | 39% | 3181 | 55% |
|  |  | E1 | 3081 | 28 | 370 | 39% | 3173 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2738 | 45 | 180 | 59% | 2645 | 26% |
|  |  | E1 | 2797 | 34 | 308 | 64% | 2668 | 29% |