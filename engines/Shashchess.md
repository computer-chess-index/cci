# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3591<sub>(+8) | 3706<sub>(-15) | 3715<sub>(-18) |  |
| 42 | 2026-11-05 | 3583<sub>(+30) | 3721<sub>(+25) | 3733<sub>(+12) |  |
| 41.2 | 2026-03-31 | 3553 | 3696 | 3721 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3551<sub>(-45) | 3664<sub>(+49) | 3687<sub>(+16) |  |
| 42 | 2026-11-05 | 3596<sub>(+99) | 3615<sub>(+17) | 3671<sub>(+33) |  |
| 41.2 | 2026-03-31 | 3497 | 3598 | 3638 |  |
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

Generated: 2026-11-17 05:43:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3400 --> 3800
  line "E1: STC (8.0+0.08s)" [3553, 3583, 3591]
  line "E1: LTC (60.0+0.60s)" [3696, 3721, 3706]
  line "E1: VLTC (2m24s+1.12s)" [3721, 3733, 3715]
  line "P1: STC (8.0+0.08s)" [3497, 3596, 3551]
  line "P1: LTC (60.0+0.60s)" [3598, 3615, 3664]
  line "P1: VLTC (2m24s+1.12s)" [3638, 3671, 3687]
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
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3715 | 37 | 168 | 53% | 3696 | 87% |
|  |  | P1 | 3687 | 65 | 52 | 53% | 3669 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3706 | 35 | 176 | 51% | 3698 | 94% |
|  |  | P1 | 3664 | 53 | 80 | 52% | 3650 | 89% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3591 | 29 | 276 | 52% | 3575 | 79% |
|  |  | P1 | 3551 | 44 | 120 | 49% | 3555 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3671 | 60 | 60 | 52% | 3660 | 97% |
|  |  | E1 | 3733 | 41 | 140 | 54% | 3707 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3615 | 64 | 52 | 51% | 3609 | 98% |
|  |  | E1 | 3721 | 39 | 148 | 53% | 3700 | 91% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3596 | 45 | 112 | 47% | 3617 | 87% |
|  |  | E1 | 3583 | 36 | 186 | 50% | 3583 | 81% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  |  | P1 | 3638 | 42 | 158 | 64% | 3399 | 70% |
|  |  | E1 | 3721 | 32 | 252 | 60% | 3584 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  |  | P1 | 3598 | 32 | 274 | 64% | 3290 | 71% |
|  |  | E1 | 3696 | 30 | 280 | 58% | 3533 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3497 | 33 | 212 | 48% | 3505 | 82% |
|  |  | E1 | 3553 | 28 | 316 | 47% | 3569 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |