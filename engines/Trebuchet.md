# Engine: Trebuchet

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 3006<sub>(-29) | 3310<sub>(-7) | 3430<sub>(-10) |  |
| 1.0.0 | 2026-11-07 | 3035<sub>(-7) | 3317<sub>(-23) | 3440<sub>(+26) |  |
| 3.0.0 | 2026-10-30 | 3042<sub>(+11) | 3340<sub>(-20) | 3414<sub>(-49) |  |
| 2.0.0 | 2026-10-15 | 3031<sub>(+174) | 3360<sub>(+213) | 3463<sub>(+150) |  |
| 1.2.198 | 2026-08-01 | 2857 | 3147 | 3313 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 3174<sub>(+12) | 3474<sub>(+25) | 3530<sub>(+38) |  |
| 1.0.0 | 2026-11-07 | 3162<sub>(+2) | 3449<sub>(+19) | 3492<sub>(+1) |  |
| 3.0.0 | 2026-10-30 | 3160<sub>(+47) | 3430<sub>(-27) | 3491<sub>(-28) |  |
| 2.0.0 | 2026-10-15 | 3113<sub>(+228) | 3457<sub>(+166) | 3519<sub>(+79) |  |
| 1.2.198 | 2026-08-01 | 2885 | 3291 | 3440 |  |
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

Generated: 2026-11-10 05:43:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0", "1.0.0", "1.1.0"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2857, 3031, 3042, 3035, 3006]
  line "E1: LTC (60.0+0.60s)" [3147, 3360, 3340, 3317, 3310]
  line "E1: VLTC (2m24s+1.12s)" [3313, 3463, 3414, 3440, 3430]
  line "P1: STC (8.0+0.08s)" [2885, 3113, 3160, 3162, 3174]
  line "P1: LTC (60.0+0.60s)" [3291, 3457, 3430, 3449, 3474]
  line "P1: VLTC (2m24s+1.12s)" [3440, 3519, 3491, 3492, 3530]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3530 | 40 | 158 | 48% | 3545 | 70% |
|  |  | E1 | 3430 | 34 | 224 | 49% | 3441 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3310 | 34 | 220 | 50% | 3308 | 65% |
|  |  | P1 | 3474 | 31 | 276 | 45% | 3506 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3006 | 35 | 246 | 51% | 3000 | 45% |
|  |  | P1 | 3174 | 53 | 92 | 50% | 3174 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3492 | 49 | 100 | 50% | 3497 | 75% |
|  |  | E1 | 3440 | 29 | 322 | 57% | 3160 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3449 | 50 | 100 | 52% | 3440 | 71% |
|  |  | E1 | 3317 | 32 | 256 | 48% | 3333 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3162 | 47 | 128 | 47% | 3185 | 50% |
|  |  | E1 | 3035 | 29 | 360 | 46% | 3065 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3414 | 31 | 264 | 51% | 3406 | 69% |
|  |  | P1 | 3491 | 38 | 168 | 51% | 3480 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3340 | 28 | 324 | 54% | 3312 | 63% |
|  |  | P1 | 3430 | 37 | 192 | 52% | 3410 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3042 | 37 | 218 | 50% | 3036 | 43% |
|  |  | P1 | 3160 | 42 | 148 | 48% | 3175 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3519 | 34 | 224 | 51% | 3510 | 70% |
|  |  | E1 | 3463 | 29 | 300 | 49% | 3467 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3457 | 39 | 174 | 53% | 3434 | 66% |
|  |  | E1 | 3360 | 32 | 266 | 52% | 3344 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3113 | 40 | 192 | 53% | 3082 | 44% |
|  |  | E1 | 3031 | 38 | 208 | 53% | 3000 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3440 | 33 | 252 | 44% | 3480 | 61% |
|  |  | E1 | 3313 | 29 | 326 | 41% | 3386 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3291 | 32 | 288 | 39% | 3376 | 55% |
|  |  | E1 | 3147 | 28 | 370 | 39% | 3240 | 51% |
|  |  | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2857 | 34 | 308 | 64% | 2727 | 29% |
|  |  | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2885 | 45 | 180 | 59% | 2792 | 26% |