# Engine: Shashchess

Author: Andrea Manzo

Home: https://github.com/amchess/ShashChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42 | 2026-11-05 | 3644<sub>(+27) | 3784<sub>(+27) | 3795<sub>(+14) |  |
| 41.2 | 2026-03-31 | 3617 | 3757 | 3781 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 42 | 2026-11-05 | 3796<sub>(+100) | 3812<sub>(+16) | 3865<sub>(+30) |  |
| 41.2 | 2026-03-31 | 3696 | 3796 | 3835 |  |
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

Generated: 2026-11-10 05:42:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["41.2", "42"]
  y-axis "Elo Rating" 3600 --> 3900
  line "E1: STC (8.0+0.08s)" [3617, 3644]
  line "E1: LTC (60.0+0.60s)" [3757, 3784]
  line "E1: VLTC (2m24s+1.12s)" [3781, 3795]
  line "P1: STC (8.0+0.08s)" [3696, 3796]
  line "P1: LTC (60.0+0.60s)" [3796, 3812]
  line "P1: VLTC (2m24s+1.12s)" [3835, 3865]
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
| 42 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3795 | 43 | 124 | 54% | 3765 | 86% |
|  |  | P1 | 3865 | 60 | 60 | 52% | 3854 | 97% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3812 | 64 | 52 | 51% | 3806 | 98% |
|  |  | E1 | 3784 | 40 | 136 | 53% | 3764 | 93% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3796 | 46 | 108 | 47% | 3815 | 87% |
|  |  | E1 | 3644 | 37 | 172 | 49% | 3648 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3835 | 42 | 158 | 64% | 3587 | 70% |
|  |  | E1 | 3781 | 32 | 252 | 60% | 3645 | 79% |
|  |  | T1 | 3621 | 32 | 228 | 55% | 3586 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3796 | 32 | 274 | 64% | 3471 | 71% |
|  |  | E1 | 3757 | 30 | 280 | 58% | 3594 | 79% |
|  |  | T1 | 3605 | 30 | 244 | 52% | 3587 | 90% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3696 | 33 | 212 | 48% | 3706 | 82% |
|  |  | E1 | 3617 | 28 | 316 | 47% | 3634 | 76% |
|  |  | T1 | 3514 | 19 | 626 | 51% | 3509 | 83% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 41 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3611 | 34 | 198 | 56% | 3565 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3602 | 39 | 156 | 54% | 3567 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3522 | 26 | 358 | 51% | 3509 | 78% |