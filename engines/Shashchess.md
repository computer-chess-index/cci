# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3638<sub>(+11) | 3748<sub>(-16) | 3758<sub>(-17) |  |
| 42 | 2026-11-05 | 3627<sub>(+27) | 3764<sub>(+24) | 3775<sub>(+13) |  |
| 41.2 | 2026-03-31 | 3600 | 3740 | 3762 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42.1 | 2026-11-08 | 3764<sub>(-46) | 3875<sub>(+50) | 3885<sub>(+4) |  |
| 42 | 2026-11-05 | 3810<sub>(+102) | 3825<sub>(+17) | 3881<sub>(+33) |  |
| 41.2 | 2026-03-31 | 3708 | 3808 | 3848 |  |
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

Generated: 2026-11-12 05:42:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42", "42.1"]
  y-axis "Elo Rating" 3600 --> 3900
  line "E1: STC (8.0+0.08s)" [3600, 3627, 3638]
  line "E1: LTC (60.0+0.60s)" [3740, 3764, 3748]
  line "E1: VLTC (2m24s+1.12s)" [3762, 3775, 3758]
  line "P1: STC (8.0+0.08s)" [3708, 3810, 3764]
  line "P1: LTC (60.0+0.60s)" [3808, 3825, 3875]
  line "P1: VLTC (2m24s+1.12s)" [3848, 3881, 3885]
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
| 42.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3885 | 70 | 44 | 51% | 3879 | 93% |
|  |  | E1 | 3758 | 37 | 168 | 53% | 3740 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3875 | 53 | 80 | 52% | 3860 | 89% |
|  |  | E1 | 3748 | 35 | 176 | 51% | 3741 | 94% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3764 | 45 | 112 | 50% | 3767 | 83% |
|  |  | E1 | 3638 | 30 | 268 | 52% | 3622 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3881 | 60 | 60 | 52% | 3870 | 97% |
|  |  | E1 | 3775 | 42 | 128 | 54% | 3746 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3825 | 64 | 52 | 51% | 3818 | 98% |
|  |  | E1 | 3764 | 40 | 140 | 53% | 3745 | 93% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3810 | 46 | 108 | 47% | 3827 | 87% |
|  |  | E1 | 3627 | 37 | 172 | 49% | 3630 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3848 | 42 | 158 | 64% | 3599 | 70% |
|  |  | E1 | 3762 | 32 | 252 | 60% | 3627 | 79% |
|  |  | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3740 | 30 | 280 | 58% | 3575 | 79% |
|  |  | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  |  | P1 | 3808 | 32 | 274 | 64% | 3483 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3600 | 28 | 316 | 47% | 3617 | 76% |
|  |  | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3708 | 33 | 212 | 48% | 3718 | 82% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |