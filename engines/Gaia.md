# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.1 | 2026-10-19 | 3479<sub>(+4) | 3686<sub>(+23) | 3730<sub>(+15) |  |
| 4.3.3 | 2026-10-08 | 3475<sub>(+80) | 3663<sub>(-9) | 3715<sub>(+29) |  |
| 4.3.0 | 2026-09-05 | 3395 | 3672 | 3686 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.1 | 2026-10-19 | 3560<sub>(-3) | 3765<sub>(+31) | 3746<sub>(+11) |  |
| 4.3.3 | 2026-10-08 | 3563<sub>(+53) | 3734<sub>(+26) | 3735<sub>(+22) |  |
| 4.3.0 | 2026-09-05 | 3510 | 3708 | 3713 |  |
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

Generated: 2026-10-23 04:38:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.3.0", "4.3.3", "4.4.1"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3395, 3475, 3479]
  line "E1: LTC (60.0+0.60s)" [3672, 3663, 3686]
  line "E1: VLTC (2m24s+1.12s)" [3686, 3715, 3730]
  line "P1: STC (8.0+0.08s)" [3510, 3563, 3560]
  line "P1: LTC (60.0+0.60s)" [3708, 3734, 3765]
  line "P1: VLTC (2m24s+1.12s)" [3713, 3735, 3746]
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
| 4.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3746 | 64 | 54 | 51% | 3741 | 87% |
|  |  | E1 | 3730 | 37 | 168 | 52% | 3717 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3765 | 63 | 56 | 50% | 3765 | 86% |
|  |  | E1 | 3686 | 46 | 104 | 49% | 3695 | 93% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3560 | 95 | 24 | 50% | 3560 | 92% |
|  |  | E1 | 3479 | 41 | 152 | 51% | 3470 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3735 | 72 | 42 | 50% | 3737 | 90% |
|  |  | E1 | 3715 | 41 | 134 | 50% | 3718 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3734 | 64 | 54 | 50% | 3734 | 93% |
|  |  | E1 | 3663 | 46 | 108 | 49% | 3669 | 89% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3563 | 38 | 160 | 53% | 3542 | 81% |
|  |  | E1 | 3475 | 42 | 144 | 50% | 3476 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3564 | 35 | 186 | 51% | 3561 | 91% |
|  |  | P1 | 3713 | 42 | 128 | 50% | 3715 | 90% |
|  |  | E1 | 3686 | 38 | 156 | 51% | 3681 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3546 | 30 | 252 | 50% | 3548 | 86% |
|  |  | P1 | 3708 | 41 | 134 | 51% | 3703 | 88% |
|  |  | E1 | 3672 | 35 | 192 | 51% | 3663 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3510 | 37 | 190 | 51% | 3502 | 66% |
|  |  | E1 | 3395 | 29 | 304 | 48% | 3410 | 68% |
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