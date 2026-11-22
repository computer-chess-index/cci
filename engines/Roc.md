# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12 | 2026-11-19 | 2705<sub>(+4) | 2931<sub>(-57) | 3054<sub>(+7) |  |
| 1.11 | 2026-05-11 | 2701<sub>(-81) | 2988<sub>(+60) | 3047<sub>(+12) |  |
| 1.10 | 2026-02-21 | 2782 | 2928 | 3035 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12 | 2026-11-19 | 2666<sub>(+11) | 2940<sub>(0) | 3029<sub>(+20) |  |
| 1.11 | 2026-05-11 | 2655<sub>(-15) | 2940<sub>(-61) | 3009<sub>(-27) |  |
| 1.10 | 2026-02-21 | 2670 | 3001 | 3036 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11 | 2026-05-11 | 2731<sub>(-15) | 2958<sub>(-8) | 3048<sub>(+10) |  |
| 1.10 | 2026-02-21 | 2746 | 2966 | 3038 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Roc+<version>&body=###%20Engine%20name%0ARoc%0A%0A###%20Version%0A1.11" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:42:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11", "1.12"]
  y-axis "Elo Rating" 2600 --> 3100
  line "E1: STC (8.0+0.08s)" [2782, 2701, 2705]
  line "E1: LTC (60.0+0.60s)" [2928, 2988, 2931]
  line "E1: VLTC (2m24s+1.12s)" [3035, 3047, 3054]
  line "P1: STC (8.0+0.08s)" [2670, 2655, 2666]
  line "P1: LTC (60.0+0.60s)" [3001, 2940, 2940]
  line "P1: VLTC (2m24s+1.12s)" [3036, 3009, 3029]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11"]
  y-axis "Elo Rating" 2700 --> 3100
  line "T1: STC (8.0+0.08s)" [2746, 2731]
  line "T1: LTC (60.0+0.60s)" [2966, 2958]
  line "T1: VLTC (2m24s+1.12s)" [3038, 3048]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.12 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3029 | 49 | 122 | 53% | 3009 | 47% |
|  |  | E1 | 3054 | 43 | 176 | 51% | 3043 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2940 | 52 | 116 | 51% | 2925 | 35% |
|  |  | E1 | 2931 | 38 | 214 | 49% | 2940 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2666 | 48 | 136 | 52% | 2651 | 35% |
|  |  | E1 | 2705 | 38 | 236 | 54% | 2668 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3048 | 25 | 512 | 50% | 3052 | 39% |
|  |  | P1 | 3009 | 34 | 272 | 50% | 2988 | 39% |
|  |  | E1 | 3047 | 28 | 410 | 51% | 3027 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2958 | 25 | 520 | 52% | 2942 | 38% |
|  |  | P1 | 2940 | 35 | 246 | 49% | 2950 | 40% |
|  |  | E1 | 2988 | 28 | 402 | 50% | 2990 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2655 | 33 | 306 | 44% | 2720 | 29% |
|  |  | E1 | 2701 | 30 | 378 | 46% | 2727 | 31% |
|  |  | T1 | 2731 | 25 | 498 | 49% | 2743 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3035 | 59 | 104 | 58% | 2894 | 31% |
|  |  | T1 | 3038 | 26 | 454 | 52% | 3023 | 40% |
|  |  | P1 | 3036 | 80 | 54 | 51% | 3035 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2966 | 28 | 386 | 50% | 2966 | 41% |
|  |  | P1 | 3001 | 88 | 60 | 63% | 2763 | 22% |
|  |  | E1 | 2928 | 57 | 96 | 53% | 2900 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2746 | 27 | 446 | 53% | 2709 | 38% |
|  |  | P1 | 2670 | 72 | 64 | 54% | 2633 | 27% |
|  |  | E1 | 2782 | 59 | 96 | 47% | 2805 | 28% |