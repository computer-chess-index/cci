# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.8.0 | 2026-10-18 | 3364<sub>(+74) | 3621<sub>(+45) | 3679<sub>(+45) |  |
| 3.7.0 | 2026-08-27 | 3290 | 3576 | 3634 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.8.0 | 2026-10-18 | 3519<sub>(+97) | 3687<sub>(+24) | 3725<sub>(+27) |  |
| 3.7.0 | 2026-08-27 | 3422 | 3663 | 3698 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-08-27 | 3295<sub>(+106) | 3492<sub>(+72) | 3538<sub>(+67) |  |
| 3.6.0 | 2024-12-28 | 3189<sub>(+15) | 3420<sub>(+4) | 3471<sub>(+19) |  |
| 3.5.0 | 2023-06-22 | 3174 | 3416 | 3452 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Igel+<version>&body=###%20Engine%20name%0AIgel%0A%0A###%20Version%0A3.7.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-23 04:39:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.7.0", "3.8.0"]
  y-axis "Elo Rating" 3200 --> 3800
  line "E1: STC (8.0+0.08s)" [3290, 3364]
  line "E1: LTC (60.0+0.60s)" [3576, 3621]
  line "E1: VLTC (2m24s+1.12s)" [3634, 3679]
  line "P1: STC (8.0+0.08s)" [3422, 3519]
  line "P1: LTC (60.0+0.60s)" [3663, 3687]
  line "P1: VLTC (2m24s+1.12s)" [3698, 3725]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.5.0", "3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "T1: STC (8.0+0.08s)" [3174, 3189, 3295]
  line "T1: LTC (60.0+0.60s)" [3416, 3420, 3492]
  line "T1: VLTC (2m24s+1.12s)" [3452, 3471, 3538]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3679 | 39 | 148 | 53% | 3660 | 86% |
|  |  | P1 | 3725 | 57 | 68 | 53% | 3704 | 94% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3621 | 36 | 180 | 53% | 3603 | 79% |
|  |  | P1 | 3687 | 49 | 96 | 50% | 3687 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3519 | 40 | 154 | 53% | 3501 | 69% |
|  |  | E1 | 3364 | 38 | 174 | 50% | 3366 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3538 | 28 | 282 | 51% | 3529 | 87% |
|  |  | P1 | 3698 | 41 | 134 | 51% | 3691 | 87% |
|  |  | E1 | 3634 | 33 | 212 | 49% | 3641 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3492 | 30 | 260 | 49% | 3497 | 80% |
|  |  | P1 | 3663 | 35 | 200 | 52% | 3650 | 78% |
|  |  | E1 | 3576 | 32 | 232 | 49% | 3583 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3295 | 32 | 248 | 50% | 3298 | 71% |
|  |  | P1 | 3422 | 34 | 222 | 50% | 3422 | 71% |
|  |  | E1 | 3290 | 29 | 312 | 46% | 3321 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3471 | 12 | 1674 | 50% | 3474 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3420 | 12 | 1616 | 50% | 3417 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3189 | 12 | 1708 | 49% | 3198 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3452 | 17 | 800 | 50% | 3449 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3416 | 17 | 828 | 49% | 3418 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3174 | 18 | 872 | 52% | 3133 | 58% |