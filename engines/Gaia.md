# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.2 | 2026-10-24 | 3537<sub>(+23) | 3740<sub>(+29) | 3753<sub>(-3) |  |
| 4.4.1 | 2026-10-19 | 3514<sub>(+9) | 3711<sub>(+21) | 3756<sub>(+15) |  |
| 4.3.3 | 2026-10-08 | 3505<sub>(+80) | 3690<sub>(-8) | 3741<sub>(+28) |  |
| 4.3.0 | 2026-09-05 | 3425 | 3698 | 3713 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.2 | 2026-10-24 | 3704<sub>(+98) | 3794<sub>(+2) | 3826<sub>(+35) |  |
| 4.4.1 | 2026-10-19 | 3606<sub>(+3) | 3792<sub>(+20) | 3791<sub>(+16) |  |
| 4.3.3 | 2026-10-08 | 3603<sub>(+52) | 3772<sub>(+27) | 3775<sub>(+26) |  |
| 4.3.0 | 2026-09-05 | 3551 | 3745 | 3749 |  |
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

Generated: 2026-11-02 05:38:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.3.0", "4.3.3", "4.4.1", "4.4.2"]
  y-axis "Elo Rating" 3400 --> 3900
  line "E1: STC (8.0+0.08s)" [3425, 3505, 3514, 3537]
  line "E1: LTC (60.0+0.60s)" [3698, 3690, 3711, 3740]
  line "E1: VLTC (2m24s+1.12s)" [3713, 3741, 3756, 3753]
  line "P1: STC (8.0+0.08s)" [3551, 3603, 3606, 3704]
  line "P1: LTC (60.0+0.60s)" [3745, 3772, 3792, 3794]
  line "P1: VLTC (2m24s+1.12s)" [3749, 3775, 3791, 3826]
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
| 4.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3826 | 82 | 32 | 52% | 3815 | 91% |
|  |  | E1 | 3753 | 61 | 60 | 51% | 3748 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3794 | 163 | 8 | 50% | 3794 | 75% |
|  |  | E1 | 3740 | 71 | 44 | 51% | 3730 | 89% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3704 | 75 | 44 | 50% | 3706 | 68% |
|  |  | E1 | 3537 | 69 | 48 | 49% | 3544 | 81% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3756 | 33 | 204 | 52% | 3741 | 90% |
|  |  | P1 | 3791 | 56 | 70 | 51% | 3783 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3711 | 40 | 136 | 49% | 3719 | 92% |
|  |  | P1 | 3792 | 52 | 84 | 49% | 3796 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3606 | 50 | 96 | 51% | 3598 | 75% |
|  |  | E1 | 3514 | 38 | 176 | 52% | 3498 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3775 | 72 | 42 | 50% | 3775 | 90% |
|  |  | E1 | 3741 | 41 | 134 | 50% | 3744 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3772 | 64 | 54 | 50% | 3773 | 93% |
|  |  | E1 | 3690 | 46 | 108 | 49% | 3695 | 89% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3603 | 38 | 160 | 53% | 3583 | 81% |
|  |  | E1 | 3505 | 42 | 144 | 50% | 3506 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3564 | 35 | 186 | 51% | 3561 | 91% |
|  |  | P1 | 3749 | 42 | 128 | 50% | 3752 | 90% |
|  |  | E1 | 3713 | 38 | 156 | 51% | 3707 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3546 | 30 | 252 | 50% | 3548 | 86% |
|  |  | P1 | 3745 | 41 | 134 | 51% | 3740 | 88% |
|  |  | E1 | 3698 | 35 | 192 | 51% | 3688 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3366 | 31 | 266 | 49% | 3372 | 70% |
|  |  | P1 | 3551 | 37 | 190 | 51% | 3541 | 66% |
|  |  | E1 | 3425 | 29 | 304 | 48% | 3440 | 68% |
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