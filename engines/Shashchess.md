# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3587<sub>(+8) | 3704<sub>(-11) | 3719<sub>(-6) |  |
| 42 | 2026-11-05 | 3579<sub>(+30) | 3715<sub>(+24) | 3725<sub>(+11) |  |
| 41.2 | 2026-03-31 | 3549 | 3691 | 3714 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3555<sub>(-44) | 3673<sub>(+54) | 3694<sub>(+18) |  |
| 42 | 2026-11-05 | 3599<sub>(+98) | 3619<sub>(+17) | 3676<sub>(+34) |  |
| 41.2 | 2026-03-31 | 3501 | 3602 | 3642 |  |
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

Generated: 2026-11-22 05:42:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3500 --> 3800
  line "E1: STC (8.0+0.08s)" [3549, 3579, 3587]
  line "E1: LTC (60.0+0.60s)" [3691, 3715, 3704]
  line "E1: VLTC (2m24s+1.12s)" [3714, 3725, 3719]
  line "P1: STC (8.0+0.08s)" [3501, 3599, 3555]
  line "P1: LTC (60.0+0.60s)" [3602, 3619, 3673]
  line "P1: VLTC (2m24s+1.12s)" [3642, 3676, 3694]
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
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3694 | 63 | 56 | 54% | 3669 | 89% |
|  |  | E1 | 3719 | 25 | 366 | 53% | 3696 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3673 | 48 | 96 | 53% | 3656 | 89% |
|  |  | E1 | 3704 | 25 | 364 | 51% | 3699 | 94% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3555 | 43 | 124 | 49% | 3559 | 84% |
|  |  | E1 | 3587 | 29 | 284 | 52% | 3572 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3725 | 41 | 140 | 54% | 3698 | 85% |
|  |  | P1 | 3676 | 58 | 64 | 52% | 3661 | 95% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3715 | 39 | 148 | 53% | 3695 | 91% |
|  |  | P1 | 3619 | 64 | 52 | 51% | 3613 | 98% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3599 | 45 | 112 | 47% | 3619 | 87% |
|  |  | E1 | 3579 | 36 | 186 | 50% | 3580 | 81% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  |  | P1 | 3642 | 42 | 158 | 64% | 3407 | 70% |
|  |  | E1 | 3714 | 32 | 252 | 60% | 3580 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3602 | 32 | 274 | 64% | 3294 | 71% |
|  |  | E1 | 3691 | 30 | 280 | 58% | 3529 | 79% |
|  |  | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3501 | 33 | 212 | 48% | 3510 | 82% |
|  |  | E1 | 3549 | 28 | 316 | 47% | 3565 | 76% |
|  |  | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |