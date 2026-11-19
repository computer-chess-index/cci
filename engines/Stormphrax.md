# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3357<sub>(+4) | 3627<sub>(+62) | 3675<sub>(+39) |  |
| 7.0.0 | 2025-06-24 | 3353 | 3565 | 3636 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3374<sub>(+76) | 3582<sub>(+18) | 3605<sub>(+154) |  |
| 7.0.0 | 2025-06-24 | 3298 | 3564 | 3451 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3413<sub>(+51) | 3557<sub>(+28) | 3587<sub>(+22) |  |
| 7.0.0 | 2025-06-24 | 3362<sub>(+53) | 3529<sub>(+42) | 3565<sub>(+47) |  |
| 6.0.0 | 2024-10-29 | 3309<sub>(+99) | 3487<sub>(+76) | 3518<sub>(+70) |  |
| 5.0.0 | 2024-06-26 | 3210 | 3411 | 3448 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:43:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3353, 3357]
  line "E1: LTC (60.0+0.60s)" [3565, 3627]
  line "E1: VLTC (2m24s+1.12s)" [3636, 3675]
  line "P1: STC (8.0+0.08s)" [3298, 3374]
  line "P1: LTC (60.0+0.60s)" [3564, 3582]
  line "P1: VLTC (2m24s+1.12s)" [3451, 3605]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3210, 3309, 3362, 3413]
  line "T1: LTC (60.0+0.60s)" [3411, 3487, 3529, 3557]
  line "T1: VLTC (2m24s+1.12s)" [3448, 3518, 3565, 3587]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3675 | 31 | 240 | 51% | 3669 | 86% |
|  |  | P1 | 3605 | 36 | 176 | 50% | 3602 | 88% |
|  |  | T1 | 3587 | 26 | 326 | 51% | 3582 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3557 | 24 | 392 | 50% | 3555 | 91% |
|  |  | E1 | 3627 | 28 | 284 | 49% | 3630 | 87% |
|  |  | P1 | 3582 | 37 | 172 | 51% | 3571 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3413 | 25 | 400 | 50% | 3411 | 71% |
|  |  | E1 | 3357 | 24 | 443 | 45% | 3391 | 66% |
|  |  | P1 | 3374 | 28 | 324 | 48% | 3387 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3565 | 18 | 722 | 51% | 3563 | 87% |
|  |  | E1 | 3636 | 74 | 52 | 63% | 3465 | 63% |
|  |  | P1 | 3451 | 96 | 32 | 70% | 3251 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3564 | 129 | 36 | 86% | 2907 | 22% |
|  |  | T1 | 3529 | 17 | 824 | 51% | 3524 | 87% |
|  |  | E1 | 3565 | 66 | 64 | 59% | 3465 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3298 | 88 | 40 | 61% | 3166 | 48% |
|  |  | T1 | 3362 | 17 | 930 | 51% | 3355 | 69% |
|  |  | E1 | 3353 | 59 | 84 | 59% | 3231 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3518 | 14 | 1184 | 50% | 3517 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 14 | 1228 | 50% | 3490 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3309 | 15 | 1188 | 50% | 3308 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3448 | 32 | 248 | 51% | 3443 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3411 | 27 | 340 | 54% | 3379 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3210 | 29 | 332 | 48% | 3227 | 57% |