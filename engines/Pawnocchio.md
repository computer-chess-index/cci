# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3486<sub>(+133) | 3650<sub>(+83) | 3677<sub>(+12) |  |
| 1.9.2 | 2026-01-15 | 3353 | 3567 | 3665 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3482<sub>(+92) | 3611<sub>(+25) | 3650<sub>(+24) |  |
| 1.9.2 | 2026-01-15 | 3390 | 3586 | 3626 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3480<sub>(+94) | 3569<sub>(+17) | 3600<sub>(+37) |  |
| 1.9.2 | 2026-01-15 | 3386<sub>(+10) | 3552<sub>(+8) | 3563<sub>(+10) |  |
| 1.9.1 | 2026-01-12 | 3376<sub>(-11) | 3544<sub>(+16) | 3553<sub>(-10) |  |
| 1.9 | 2026-01-03 | 3387 | 3528 | 3563 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnocchio+<version>&body=###%20Engine%20name%0APawnocchio%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:41:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3353, 3486]
  line "E1: LTC (60.0+0.60s)" [3567, 3650]
  line "E1: VLTC (2m24s+1.12s)" [3665, 3677]
  line "P1: STC (8.0+0.08s)" [3390, 3482]
  line "P1: LTC (60.0+0.60s)" [3586, 3611]
  line "P1: VLTC (2m24s+1.12s)" [3626, 3650]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3387, 3376, 3386, 3480]
  line "T1: LTC (60.0+0.60s)" [3528, 3544, 3552, 3569]
  line "T1: VLTC (2m24s+1.12s)" [3563, 3553, 3563, 3600]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3600 | 27 | 306 | 53% | 3583 | 90% |
|  |  | P1 | 3650 | 37 | 160 | 52% | 3637 | 93% |
|  |  | E1 | 3677 | 25 | 356 | 50% | 3679 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3569 | 25 | 360 | 50% | 3567 | 90% |
|  |  | P1 | 3611 | 36 | 172 | 51% | 3607 | 90% |
|  |  | E1 | 3650 | 29 | 264 | 50% | 3652 | 90% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3480 | 24 | 428 | 51% | 3472 | 79% |
|  |  | P1 | 3482 | 35 | 188 | 49% | 3486 | 86% |
|  |  | E1 | 3486 | 26 | 368 | 47% | 3507 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 25 | 380 | 51% | 3559 | 88% |
|  |  | P1 | 3626 | 127 | 24 | 81% | 3259 | 38% |
|  |  | E1 | 3665 | 51 | 100 | 57% | 3545 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3552 | 25 | 372 | 51% | 3548 | 88% |
|  |  | P1 | 3586 | 74 | 58 | 66% | 3324 | 52% |
|  |  | E1 | 3567 | 58 | 76 | 55% | 3524 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3386 | 22 | 518 | 49% | 3391 | 79% |
|  |  | P1 | 3390 | 75 | 56 | 68% | 3186 | 50% |
|  |  | E1 | 3353 | 48 | 112 | 52% | 3328 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3553 | 35 | 188 | 49% | 3563 | 91% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3544 | 35 | 186 | 51% | 3537 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3376 | 35 | 208 | 51% | 3366 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 35 | 192 | 53% | 3533 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3528 | 33 | 224 | 53% | 3487 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3387 | 34 | 224 | 54% | 3341 | 71% |