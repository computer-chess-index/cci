# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.3.3 | 2026-10-08 | 3428<sub>(+77) | 3617<sub>(-8) | 3675<sub>(+35) |  |
| 4.3.0 | 2026-09-05 | 3351 | 3625 | 3640 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.3.3 | 2026-10-08 | 3540<sub>(+56) | 3707<sub>(+26) | 3708<sub>(+21) |  |
| 4.3.0 | 2026-09-05 | 3484 | 3681 | 3687 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.3.0 | 2026-09-05 | 3366<sub>(+81) | 3546<sub>(+70) | 3564<sub>(+31) |  |
| 4.2.6 | 2026-08-29 | 3285<sub>(+3) | 3476<sub>(+6) | 3533<sub>(+20) |  |
| 4.2.5 | 2026-08-24 | 3282<sub>(+19) | 3470<sub>(+23) | 3513<sub>(+7) |  |
| 4.2.4 | 2026-08-23 | 3263<sub>(+12) | 3447<sub>(-23) | 3506<sub>(+1) |  |
| 4.2.3 | 2026-08-21 | 3251<sub>(-7) | 3470<sub>(+13) | 3505<sub>(+19) |  |
| 4.2.2 | 2026-08-13 | 3258<sub>(+52) | 3457<sub>(-3) | 3486<sub>(-29) |  |
| 4.2.1 | 2026-08-09 | 3206 | 3460 | 3515 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-19 04:38:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.3.0", "4.3.3"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3351, 3428]
  line "E1: LTC (60.0+0.60s)" [3625, 3617]
  line "E1: VLTC (2m24s+1.12s)" [3640, 3675]
  line "P1: STC (8.0+0.08s)" [3484, 3540]
  line "P1: LTC (60.0+0.60s)" [3681, 3707]
  line "P1: VLTC (2m24s+1.12s)" [3687, 3708]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6", "4.3.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3206, 3258, 3251, 3263, 3282, 3285, 3366]
  line "T1: LTC (60.0+0.60s)" [3460, 3457, 3470, 3447, 3470, 3476, 3546]
  line "T1: VLTC (2m24s+1.12s)" [3515, 3486, 3505, 3506, 3513, 3533, 3564]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3708 | 72 | 42 | 50% | 3710 | 90% |
|  |  | E1 | 3675 | 44 | 118 | 50% | 3677 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3707 | 64 | 54 | 50% | 3707 | 93% |
|  |  | E1 | 3617 | 49 | 92 | 49% | 3623 | 91% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3428 | 44 | 136 | 50% | 3430 | 64% |
|  |  | P1 | 3540 | 41 | 140 | 53% | 3517 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3687 | 42 | 128 | 50% | 3690 | 90% |
|  |  | E1 | 3640 | 38 | 156 | 51% | 3634 | 91% |
|  |  | T1 | 3564 | 35 | 186 | 51% | 3561 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3681 | 41 | 134 | 51% | 3677 | 88% |
|  |  | E1 | 3625 | 35 | 192 | 51% | 3615 | 83% |
|  |  | T1 | 3546 | 30 | 252 | 50% | 3548 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3484 | 37 | 190 | 51% | 3475 | 66% |
|  |  | E1 | 3351 | 29 | 304 | 48% | 3364 | 68% |
|  |  | T1 | 3366 | 31 | 266 | 49% | 3372 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3533 | 33 | 208 | 50% | 3530 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3476 | 31 | 250 | 51% | 3470 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3285 | 33 | 232 | 50% | 3282 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3513 | 28 | 300 | 51% | 3507 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3470 | 28 | 306 | 51% | 3461 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3282 | 33 | 236 | 52% | 3263 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3506 | 31 | 248 | 49% | 3513 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3447 | 33 | 226 | 51% | 3444 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3263 | 33 | 238 | 47% | 3281 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3505 | 36 | 190 | 51% | 3499 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3470 | 30 | 266 | 48% | 3483 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3251 | 35 | 212 | 49% | 3262 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3486 | 32 | 240 | 50% | 3487 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3457 | 32 | 236 | 50% | 3457 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3258 | 33 | 248 | 51% | 3255 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3515 | 56 | 88 | 59% | 3356 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3460 | 47 | 128 | 59% | 3287 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3206 | 45 | 152 | 56% | 3082 | 53% |