# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3583<sub>(+8) | 3702<sub>(-9) | 3714<sub>(-7) |  |
| 42 | 2026-11-05 | 3575<sub>(+31) | 3711<sub>(+24) | 3721<sub>(+10) |  |
| 41.2 | 2026-03-31 | 3544 | 3687 | 3711 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3555<sub>(-45) | 3675<sub>(+56) | 3695<sub>(+18) |  |
| 42 | 2026-11-05 | 3600<sub>(+99) | 3619<sub>(+17) | 3677<sub>(+35) |  |
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

Generated: 2026-11-21 05:42:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3500 --> 3800
  line "E1: STC (8.0+0.08s)" [3544, 3575, 3583]
  line "E1: LTC (60.0+0.60s)" [3687, 3711, 3702]
  line "E1: VLTC (2m24s+1.12s)" [3711, 3721, 3714]
  line "P1: STC (8.0+0.08s)" [3501, 3600, 3555]
  line "P1: LTC (60.0+0.60s)" [3602, 3619, 3675]
  line "P1: VLTC (2m24s+1.12s)" [3642, 3677, 3695]
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
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3695 | 63 | 56 | 54% | 3671 | 89% |
|  |  | E1 | 3714 | 25 | 358 | 53% | 3692 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3702 | 25 | 356 | 51% | 3695 | 94% |
|  |  | P1 | 3675 | 51 | 88 | 53% | 3654 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3583 | 29 | 284 | 52% | 3568 | 79% |
|  |  | P1 | 3555 | 43 | 124 | 49% | 3559 | 84% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3677 | 58 | 64 | 52% | 3663 | 95% |
|  |  | E1 | 3721 | 41 | 140 | 54% | 3694 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3619 | 64 | 52 | 51% | 3613 | 98% |
|  |  | E1 | 3711 | 39 | 148 | 53% | 3691 | 91% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3600 | 45 | 112 | 47% | 3621 | 87% |
|  |  | E1 | 3575 | 36 | 186 | 50% | 3575 | 81% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  |  | P1 | 3642 | 42 | 158 | 64% | 3407 | 70% |
|  |  | E1 | 3711 | 32 | 252 | 60% | 3576 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  |  | P1 | 3602 | 32 | 274 | 64% | 3294 | 71% |
|  |  | E1 | 3687 | 30 | 280 | 58% | 3525 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3501 | 33 | 212 | 48% | 3510 | 82% |
|  |  | E1 | 3544 | 28 | 316 | 47% | 3561 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |