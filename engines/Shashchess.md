# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3568<sub>(+12) | 3677<sub>(-15) | 3687<sub>(-16) |  |
| 42 | 2026-11-05 | 3556<sub>(+27) | 3692<sub>(+24) | 3703<sub>(+12) |  |
| 41.2 | 2026-03-31 | 3529 | 3668 | 3691 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3596<sub>(-44) | 3707<sub>(+50) | 3719<sub>(+5) |  |
| 42 | 2026-11-05 | 3640<sub>(+99) | 3657<sub>(+16) | 3714<sub>(+33) |  |
| 41.2 | 2026-03-31 | 3541 | 3641 | 3681 |  |
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

Generated: 2026-11-13 05:42:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3500 --> 3800
  line "E1: STC (8.0+0.08s)" [3529, 3556, 3568]
  line "E1: LTC (60.0+0.60s)" [3668, 3692, 3677]
  line "E1: VLTC (2m24s+1.12s)" [3691, 3703, 3687]
  line "P1: STC (8.0+0.08s)" [3541, 3640, 3596]
  line "P1: LTC (60.0+0.60s)" [3641, 3657, 3707]
  line "P1: VLTC (2m24s+1.12s)" [3681, 3714, 3719]
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
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3719 | 70 | 44 | 51% | 3711 | 93% |
|  |  | E1 | 3687 | 37 | 168 | 53% | 3668 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3707 | 53 | 80 | 52% | 3694 | 89% |
|  |  | E1 | 3677 | 35 | 176 | 51% | 3669 | 94% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3596 | 45 | 116 | 50% | 3599 | 84% |
|  |  | E1 | 3568 | 30 | 268 | 52% | 3551 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3714 | 60 | 60 | 52% | 3703 | 97% |
|  |  | E1 | 3703 | 42 | 128 | 54% | 3675 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3657 | 64 | 52 | 51% | 3652 | 98% |
|  |  | E1 | 3692 | 40 | 140 | 53% | 3673 | 93% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3640 | 45 | 112 | 47% | 3660 | 87% |
|  |  | E1 | 3556 | 37 | 172 | 49% | 3559 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3691 | 32 | 252 | 60% | 3557 | 79% |
|  |  | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  |  | P1 | 3681 | 42 | 158 | 64% | 3436 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3668 | 30 | 280 | 58% | 3507 | 79% |
|  |  | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  |  | P1 | 3641 | 32 | 274 | 64% | 3328 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3541 | 33 | 212 | 48% | 3551 | 82% |
|  |  | E1 | 3529 | 28 | 316 | 47% | 3545 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |