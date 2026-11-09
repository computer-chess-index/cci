# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42 | 2026-11-05 | 3634<sub>(+24) | 3779<sub>(+27) | 3787<sub>(+12) |  |
| 41.2 | 2026-03-31 | 3610 | 3752 | 3775 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42 | 2026-11-05 | 3804<sub>(+106) | 3812<sub>(+14) | 3869<sub>(+32) |  |
| 41.2 | 2026-03-31 | 3698 | 3798 | 3837 |  |
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

Generated: 2026-11-09 05:42:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42"]
  y-axis "Elo Rating" 3600 --> 3900
  line "E1: STC (8.0+0.08s)" [3610, 3634]
  line "E1: LTC (60.0+0.60s)" [3752, 3779]
  line "E1: VLTC (2m24s+1.12s)" [3775, 3787]
  line "P1: STC (8.0+0.08s)" [3698, 3804]
  line "P1: LTC (60.0+0.60s)" [3798, 3812]
  line "P1: VLTC (2m24s+1.12s)" [3837, 3869]
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
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3869 | 62 | 56 | 52% | 3858 | 96% |
|  |  | E1 | 3787 | 44 | 120 | 54% | 3760 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3812 | 66 | 48 | 51% | 3806 | 98% |
|  |  | E1 | 3779 | 41 | 132 | 53% | 3758 | 92% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3804 | 51 | 88 | 47% | 3822 | 85% |
|  |  | E1 | 3634 | 38 | 160 | 49% | 3640 | 82% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3837 | 42 | 158 | 64% | 3588 | 70% |
|  |  | E1 | 3775 | 32 | 252 | 60% | 3640 | 79% |
|  |  | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3798 | 32 | 274 | 64% | 3472 | 71% |
|  |  | E1 | 3752 | 30 | 280 | 58% | 3587 | 79% |
|  |  | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3610 | 28 | 316 | 47% | 3627 | 76% |
|  |  | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
|  |  | P1 | 3698 | 33 | 212 | 48% | 3707 | 82% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |