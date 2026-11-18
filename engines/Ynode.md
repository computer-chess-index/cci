# Engine: Ynode

Author: oozturk777

Home: https://github.com/oozturk777/ynode

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3119<sub>(+48) | 3359<sub>(-36) | 3410<sub>(+62) |  |
| 0219 | 2025-11-16 | 3071 | 3395 | 3348 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3133<sub>(+44) | 3321<sub>(+77) | 3357<sub>(-79) |  |
| 0219 | 2025-11-16 | 3089 | 3244 | 3436 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3141<sub>(-10) | 3356<sub>(+23) | 3407<sub>(+25) |  |
| 0219 | 2025-11-16 | 3151 | 3333 | 3382 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ynode+<version>&body=###%20Engine%20name%0AYnode%0A%0A###%20Version%0A0234" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:45:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3071, 3119]
  line "E1: LTC (60.0+0.60s)" [3395, 3359]
  line "E1: VLTC (2m24s+1.12s)" [3348, 3410]
  line "P1: STC (8.0+0.08s)" [3089, 3133]
  line "P1: LTC (60.0+0.60s)" [3244, 3321]
  line "P1: VLTC (2m24s+1.12s)" [3436, 3357]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3100 --> 3500
  line "T1: STC (8.0+0.08s)" [3151, 3141]
  line "T1: LTC (60.0+0.60s)" [3333, 3356]
  line "T1: VLTC (2m24s+1.12s)" [3382, 3407]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3357 | 33 | 226 | 54% | 3312 | 73% |
|  |  | E1 | 3410 | 24 | 452 | 57% | 3302 | 67% |
|  |  | T1 | 3407 | 25 | 382 | 50% | 3409 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3321 | 29 | 302 | 54% | 3275 | 70% |
|  |  | E1 | 3359 | 27 | 358 | 55% | 3291 | 67% |
|  |  | T1 | 3356 | 24 | 416 | 51% | 3347 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3133 | 33 | 250 | 49% | 3143 | 61% |
|  |  | E1 | 3119 | 25 | 458 | 47% | 3144 | 55% |
|  |  | T1 | 3141 | 23 | 524 | 50% | 3140 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0219 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3382 | 27 | 336 | 52% | 3357 | 79% |
|  |  | P1 | 3436 | 151 | 20 | 65% | 3232 | 10% |
|  |  | E1 | 3348 | 61 | 70 | 59% | 3279 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3333 | 25 | 406 | 49% | 3326 | 72% |
|  |  | P1 | 3244 | 79 | 52 | 71% | 2996 | 46% |
|  |  | E1 | 3395 | 69 | 72 | 65% | 3042 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3151 | 24 | 490 | 53% | 3105 | 57% |
|  |  | P1 | 3089 | 78 | 56 | 44% | 3036 | 41% |
|  |  | E1 | 3071 | 67 | 70 | 53% | 3033 | 46% |