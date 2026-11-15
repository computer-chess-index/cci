# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3582<sub>(+11) | 3695<sub>(-15) | 3704<sub>(-17) |  |
| 42 | 2026-11-05 | 3571<sub>(+29) | 3710<sub>(+24) | 3721<sub>(+13) |  |
| 41.2 | 2026-03-31 | 3542 | 3686 | 3708 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3551<sub>(-41) | 3659<sub>(+49) | 3677<sub>(+12) |  |
| 42 | 2026-11-05 | 3592<sub>(+98) | 3610<sub>(+16) | 3665<sub>(+31) |  |
| 41.2 | 2026-03-31 | 3494 | 3594 | 3634 |  |
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

Generated: 2026-11-15 05:42:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3400 --> 3800
  line "E1: STC (8.0+0.08s)" [3542, 3571, 3582]
  line "E1: LTC (60.0+0.60s)" [3686, 3710, 3695]
  line "E1: VLTC (2m24s+1.12s)" [3708, 3721, 3704]
  line "P1: STC (8.0+0.08s)" [3494, 3592, 3551]
  line "P1: LTC (60.0+0.60s)" [3594, 3610, 3659]
  line "P1: VLTC (2m24s+1.12s)" [3634, 3665, 3677]
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
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3677 | 67 | 48 | 52% | 3664 | 92% |
|  |  | E1 | 3704 | 37 | 168 | 53% | 3686 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3659 | 53 | 80 | 52% | 3645 | 89% |
|  |  | E1 | 3695 | 35 | 176 | 51% | 3687 | 94% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3551 | 45 | 116 | 50% | 3552 | 84% |
|  |  | E1 | 3582 | 30 | 272 | 52% | 3564 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3665 | 60 | 60 | 52% | 3654 | 97% |
|  |  | E1 | 3721 | 41 | 136 | 54% | 3695 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3610 | 64 | 52 | 51% | 3603 | 98% |
|  |  | E1 | 3710 | 39 | 148 | 53% | 3690 | 91% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3592 | 45 | 112 | 47% | 3613 | 87% |
|  |  | E1 | 3571 | 37 | 172 | 49% | 3573 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3708 | 32 | 252 | 60% | 3573 | 79% |
|  |  | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  |  | P1 | 3634 | 42 | 158 | 64% | 3394 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  |  | P1 | 3594 | 32 | 274 | 64% | 3286 | 71% |
|  |  | E1 | 3686 | 30 | 280 | 58% | 3524 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3494 | 33 | 212 | 48% | 3503 | 82% |
|  |  | E1 | 3542 | 28 | 316 | 47% | 3560 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |