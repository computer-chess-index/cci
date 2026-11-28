# Engine: Ynode

Author: oozturk777

Home: https://github.com/oozturk777/ynode

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3116<sub>(+53) | 3352<sub>(-26) | 3409<sub>(+57) |  |
| 0219 | 2025-11-16 | 3063 | 3378 | 3352 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3154<sub>(+48) | 3348<sub>(+58) | 3380<sub>(-85) |  |
| 0219 | 2025-11-16 | 3106 | 3290 | 3465 |  |
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

Generated: 2026-11-28 05:44:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3063, 3116]
  line "E1: LTC (60.0+0.60s)" [3378, 3352]
  line "E1: VLTC (2m24s+1.12s)" [3352, 3409]
  line "P1: STC (8.0+0.08s)" [3106, 3154]
  line "P1: LTC (60.0+0.60s)" [3290, 3348]
  line "P1: VLTC (2m24s+1.12s)" [3465, 3380]
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
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3409 | 24 | 476 | 57% | 3303 | 68% |
|  |  | T1 | 3407 | 25 | 382 | 50% | 3409 | 81% |
|  |  | P1 | 3380 | 33 | 234 | 54% | 3336 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3352 | 26 | 390 | 54% | 3293 | 68% |
|  |  | T1 | 3356 | 24 | 416 | 51% | 3347 | 74% |
|  |  | P1 | 3348 | 28 | 326 | 54% | 3303 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3141 | 23 | 524 | 50% | 3140 | 57% |
|  |  | P1 | 3154 | 31 | 270 | 48% | 3170 | 61% |
|  |  | E1 | 3116 | 24 | 498 | 47% | 3144 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0219 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3382 | 27 | 336 | 52% | 3357 | 79% |
|  |  | P1 | 3465 | 136 | 22 | 64% | 3283 | 18% |
|  |  | E1 | 3352 | 52 | 98 | 58% | 3294 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3333 | 25 | 406 | 49% | 3326 | 72% |
|  |  | P1 | 3290 | 59 | 84 | 65% | 3123 | 56% |
|  |  | E1 | 3378 | 47 | 132 | 56% | 3200 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3151 | 24 | 490 | 53% | 3105 | 57% |
|  |  | P1 | 3106 | 55 | 104 | 46% | 3081 | 46% |
|  |  | E1 | 3063 | 43 | 150 | 51% | 3047 | 56% |