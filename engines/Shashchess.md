# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3588<sub>(+10) | 3704<sub>(-11) | 3715<sub>(-8) |  |
| 42 | 2026-11-05 | 3578<sub>(+30) | 3715<sub>(+24) | 3723<sub>(+9) |  |
| 41.2 | 2026-03-31 | 3548 | 3691 | 3714 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3553<sub>(-45) | 3665<sub>(+48) | 3694<sub>(+22) |  |
| 42 | 2026-11-05 | 3598<sub>(+97) | 3617<sub>(+18) | 3672<sub>(+32) |  |
| 41.2 | 2026-03-31 | 3501 | 3599 | 3640 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 41.2 | 2026-03-31 | 3514<sub>(-8) | 3605<sub>(+3) | 3621<sub>(+10) |  |
| 41 | 2026-03-05 | 3522 | 3602 | 3611 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Shashchess+<version>&body=###%20Engine%20name%0AShashchess%0A%0A###%20Version%0A41.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:42:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3500 --> 3800
  line "E1: STC (8.0+0.08s)" [3548, 3578, 3588]
  line "E1: LTC (60.0+0.60s)" [3691, 3715, 3704]
  line "E1: VLTC (2m24s+1.12s)" [3714, 3723, 3715]
  line "P1: STC (8.0+0.08s)" [3501, 3598, 3553]
  line "P1: LTC (60.0+0.60s)" [3599, 3617, 3665]
  line "P1: VLTC (2m24s+1.12s)" [3640, 3672, 3694]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41", "41.2"]
  y-axis "Elo Rating" 3500 --> 3700
  line "T1: STC (8.0+0.08s)" [3522, 3514]
  line "T1: LTC (60.0+0.60s)" [3602, 3605]
  line "T1: VLTC (2m24s+1.12s)" [3611, 3621]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3694 | 63 | 56 | 54% | 3671 | 89% |
|  |  | E1 | 3715 | 30 | 258 | 53% | 3695 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3665 | 52 | 84 | 52% | 3653 | 89% |
|  |  | E1 | 3704 | 29 | 268 | 51% | 3698 | 95% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3588 | 29 | 280 | 52% | 3571 | 79% |
|  |  | P1 | 3553 | 43 | 124 | 49% | 3557 | 84% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3672 | 60 | 60 | 52% | 3661 | 97% |
|  |  | E1 | 3723 | 41 | 140 | 54% | 3698 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3617 | 64 | 52 | 51% | 3610 | 98% |
|  |  | E1 | 3715 | 39 | 148 | 53% | 3695 | 91% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3598 | 45 | 112 | 47% | 3618 | 87% |
|  |  | E1 | 3578 | 36 | 186 | 50% | 3579 | 81% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  |  | P1 | 3640 | 42 | 158 | 64% | 3403 | 70% |
|  |  | E1 | 3714 | 32 | 252 | 60% | 3579 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  |  | P1 | 3599 | 32 | 274 | 64% | 3293 | 71% |
|  |  | E1 | 3691 | 30 | 280 | 58% | 3528 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3501 | 33 | 212 | 48% | 3510 | 82% |
|  |  | E1 | 3548 | 28 | 316 | 47% | 3565 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |