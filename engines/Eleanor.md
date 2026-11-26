# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3098<sub>(+52) | 3434<sub>(+41) | 3459<sub>(+8) |  |
| 4.0 | 2026-04-18 | 3046 | 3393 | 3451 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3147<sub>(-1) | 3402<sub>(+13) | 3430<sub>(+74) |  |
| 4.0 | 2026-04-18 | 3148 | 3389 | 3356 |  |
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

Generated: 2026-11-26 05:38:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3046, 3098]
  line "E1: LTC (60.0+0.60s)" [3393, 3434]
  line "E1: VLTC (2m24s+1.12s)" [3451, 3459]
  line "P1: STC (8.0+0.08s)" [3148, 3147]
  line "P1: LTC (60.0+0.60s)" [3389, 3402]
  line "P1: VLTC (2m24s+1.12s)" [3356, 3430]
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
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3430 | 29 | 318 | 57% | 3318 | 69% |
|  |  | E1 | 3459 | 28 | 346 | 56% | 3362 | 62% |
|  |  | T1 | 3434 | 22 | 468 | 49% | 3438 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3402 | 33 | 244 | 52% | 3374 | 70% |
|  |  | E1 | 3434 | 28 | 352 | 56% | 3332 | 63% |
|  |  | T1 | 3403 | 24 | 414 | 50% | 3406 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3098 | 23 | 508 | 46% | 3128 | 55% |
|  |  | T1 | 3177 | 25 | 440 | 51% | 3166 | 60% |
|  |  | P1 | 3147 | 29 | 332 | 48% | 3167 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3409 | 29 | 284 | 50% | 3409 | 81% |
|  |  | P1 | 3356 | 91 | 36 | 56% | 3282 | 50% |
|  |  | E1 | 3451 | 51 | 98 | 52% | 3409 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3384 | 30 | 280 | 50% | 3382 | 76% |
|  |  | P1 | 3389 | 64 | 68 | 58% | 3293 | 63% |
|  |  | E1 | 3393 | 44 | 148 | 60% | 3236 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3132 | 32 | 264 | 50% | 3129 | 63% |
|  |  | P1 | 3148 | 61 | 80 | 58% | 3063 | 49% |
|  |  | E1 | 3046 | 50 | 132 | 61% | 2873 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3335 | 26 | 368 | 50% | 3336 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3264 | 27 | 358 | 52% | 3236 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3038 | 24 | 496 | 52% | 3008 | 50% |