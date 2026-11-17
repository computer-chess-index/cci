# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3114<sub>(+76) | 3445<sub>(+73) | 3467<sub>(-7) |  |
| 4.0 | 2026-04-18 | 3038 | 3372 | 3474 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3112<sub>(-8) | 3380<sub>(+72) | 3402<sub>(+66) |  |
| 4.0 | 2026-04-18 | 3120 | 3308 | 3336 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3177<sub>(+45) | 3403<sub>(+19) | 3434<sub>(+25) |  |
| 4.0 | 2026-04-18 | 3132<sub>(+94) | 3384<sub>(+120) | 3409<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3038 | 3264 | 3335 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eleanor+<version>&body=###%20Engine%20name%0AEleanor%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:38:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3038, 3114]
  line "E1: LTC (60.0+0.60s)" [3372, 3445]
  line "E1: VLTC (2m24s+1.12s)" [3474, 3467]
  line "P1: STC (8.0+0.08s)" [3120, 3112]
  line "P1: LTC (60.0+0.60s)" [3308, 3380]
  line "P1: VLTC (2m24s+1.12s)" [3336, 3402]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "T1: STC (8.0+0.08s)" [3038, 3132, 3177]
  line "T1: LTC (60.0+0.60s)" [3264, 3384, 3403]
  line "T1: VLTC (2m24s+1.12s)" [3335, 3409, 3434]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3467 | 29 | 342 | 56% | 3370 | 62% |
|  |  | T1 | 3434 | 22 | 468 | 49% | 3438 | 82% |
|  |  | P1 | 3402 | 29 | 314 | 57% | 3289 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3445 | 30 | 320 | 57% | 3330 | 63% |
|  |  | T1 | 3403 | 24 | 414 | 50% | 3406 | 77% |
|  |  | P1 | 3380 | 34 | 220 | 53% | 3344 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3177 | 25 | 440 | 51% | 3166 | 60% |
|  |  | P1 | 3112 | 30 | 308 | 48% | 3133 | 60% |
|  |  | E1 | 3114 | 25 | 464 | 47% | 3137 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3409 | 29 | 284 | 50% | 3409 | 81% |
|  |  | P1 | 3336 | 104 | 28 | 61% | 3212 | 50% |
|  |  | E1 | 3474 | 66 | 62 | 55% | 3395 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3384 | 30 | 280 | 50% | 3382 | 76% |
|  |  | P1 | 3308 | 84 | 40 | 56% | 3205 | 63% |
|  |  | E1 | 3372 | 55 | 96 | 61% | 3171 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3132 | 32 | 264 | 50% | 3129 | 63% |
|  |  | P1 | 3120 | 75 | 56 | 63% | 2993 | 43% |
|  |  | E1 | 3038 | 62 | 92 | 64% | 2805 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3335 | 26 | 368 | 50% | 3336 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3264 | 27 | 358 | 52% | 3236 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3038 | 24 | 496 | 52% | 3008 | 50% |