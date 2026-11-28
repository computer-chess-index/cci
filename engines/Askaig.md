# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20261003 | 2026-10-03 | 3021<sub>(+31) | 3310<sub>(+85) | 3368<sub>(+51) |  |
| 20260811 | 2026-08-11 | 2990 | 3225 | 3317 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20261003 | 2026-10-03 | 3048<sub>(+44) | 3302<sub>(+42) | 3305<sub>(-13) |  |
| 20260811 | 2026-08-11 | 3004 | 3260 | 3318 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 3006<sub>(-21) | 3266<sub>(+48) | 3294<sub>(+28) |  |
| 20260704 | 2026-07-04 | 3027<sub>(+615) | 3218<sub>(+540) | 3266<sub>(+538) |  |
| 20260628 | 2026-06-28 | 2412<sub>(-2) | 2678<sub>(+23) | 2728<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2414 | 2655 | 2751 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260811" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:36:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260811", "20261003"]
  y-axis "Elo Rating" 2900 --> 3400
  line "E1: STC (8.0+0.08s)" [2990, 3021]
  line "E1: LTC (60.0+0.60s)" [3225, 3310]
  line "E1: VLTC (2m24s+1.12s)" [3317, 3368]
  line "P1: STC (8.0+0.08s)" [3004, 3048]
  line "P1: LTC (60.0+0.60s)" [3260, 3302]
  line "P1: VLTC (2m24s+1.12s)" [3318, 3305]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2400 --> 3300
  line "T1: STC (8.0+0.08s)" [2414, 2412, 3027, 3006]
  line "T1: LTC (60.0+0.60s)" [2655, 2678, 3218, 3266]
  line "T1: VLTC (2m24s+1.12s)" [2751, 2728, 3266, 3294]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20261003 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3305 | 33 | 272 | 51% | 3293 | 46% |
|  |  | E1 | 3368 | 26 | 440 | 51% | 3363 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3302 | 31 | 284 | 51% | 3290 | 52% |
|  |  | E1 | 3310 | 25 | 482 | 51% | 3306 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3048 | 33 | 270 | 49% | 3052 | 43% |
|  |  | E1 | 3021 | 28 | 406 | 48% | 3040 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3294 | 29 | 338 | 49% | 3299 | 54% |
|  |  | P1 | 3318 | 37 | 204 | 50% | 3320 | 51% |
|  |  | E1 | 3317 | 32 | 267 | 49% | 3325 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3266 | 28 | 376 | 48% | 3278 | 49% |
|  |  | P1 | 3260 | 34 | 248 | 48% | 3281 | 46% |
|  |  | E1 | 3225 | 28 | 380 | 48% | 3240 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3006 | 27 | 428 | 51% | 2992 | 36% |
|  |  | P1 | 3004 | 35 | 264 | 52% | 2990 | 34% |
|  |  | E1 | 2990 | 31 | 328 | 49% | 2989 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3266 | 31 | 312 | 54% | 3229 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3218 | 30 | 320 | 53% | 3190 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3027 | 32 | 312 | 53% | 2997 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2728 | 46 | 148 | 51% | 2718 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2678 | 53 | 116 | 49% | 2688 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2412 | 53 | 116 | 50% | 2411 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2751 | 47 | 144 | 51% | 2739 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2655 | 47 | 148 | 46% | 2689 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2414 | 41 | 196 | 44% | 2473 | 30% |