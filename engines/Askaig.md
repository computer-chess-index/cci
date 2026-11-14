# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20261003 | 2026-10-03 | 3029<sub>(+44) | 3317<sub>(+101) | 3364<sub>(+52) |  |
| 20260811 | 2026-08-11 | 2985 | 3216 | 3312 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20261003 | 2026-10-03 | 3001<sub>(+36) | 3270<sub>(+30) | 3287<sub>(-16) |  |
| 20260811 | 2026-08-11 | 2965 | 3240 | 3303 |  |
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

Generated: 2026-11-14 05:36:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260811", "20261003"]
  y-axis "Elo Rating" 2900 --> 3400
  line "E1: STC (8.0+0.08s)" [2985, 3029]
  line "E1: LTC (60.0+0.60s)" [3216, 3317]
  line "E1: VLTC (2m24s+1.12s)" [3312, 3364]
  line "P1: STC (8.0+0.08s)" [2965, 3001]
  line "P1: LTC (60.0+0.60s)" [3240, 3270]
  line "P1: VLTC (2m24s+1.12s)" [3303, 3287]
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
| 20261003 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3287 | 34 | 252 | 52% | 3271 | 45% |
|  |  | E1 | 3364 | 27 | 402 | 51% | 3359 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3270 | 34 | 240 | 50% | 3271 | 53% |
|  |  | E1 | 3317 | 27 | 406 | 52% | 3297 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3001 | 36 | 222 | 50% | 3002 | 45% |
|  |  | E1 | 3029 | 33 | 296 | 50% | 3025 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3303 | 38 | 192 | 50% | 3302 | 51% |
|  |  | E1 | 3312 | 32 | 263 | 49% | 3321 | 54% |
|  |  | T1 | 3294 | 29 | 338 | 49% | 3299 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3240 | 37 | 220 | 47% | 3263 | 45% |
|  |  | E1 | 3216 | 30 | 336 | 47% | 3236 | 43% |
|  |  | T1 | 3266 | 28 | 376 | 48% | 3278 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2965 | 37 | 236 | 54% | 2932 | 36% |
|  |  | E1 | 2985 | 33 | 300 | 49% | 2986 | 35% |
|  |  | T1 | 3006 | 27 | 428 | 51% | 2992 | 36% |
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