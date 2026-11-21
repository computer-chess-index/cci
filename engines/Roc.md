# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12 | 2026-11-19 | 2696<sub>(-3) | 2925<sub>(-60) | 3051<sub>(+7) |  |
| 1.11 | 2026-05-11 | 2699<sub>(-81) | 2985<sub>(+61) | 3044<sub>(+12) |  |
| 1.10 | 2026-02-21 | 2780 | 2924 | 3032 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12 | 2026-11-19 | 2669<sub>(+14) | 2916<sub>(-24) | 3043<sub>(+34) |  |
| 1.11 | 2026-05-11 | 2655<sub>(-17) | 2940<sub>(-61) | 3009<sub>(-27) |  |
| 1.10 | 2026-02-21 | 2672 | 3001 | 3036 |  |
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

Generated: 2026-11-21 05:42:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11", "1.12"]
  y-axis "Elo Rating" 2600 --> 3100
  line "E1: STC (8.0+0.08s)" [2780, 2699, 2696]
  line "E1: LTC (60.0+0.60s)" [2924, 2985, 2925]
  line "E1: VLTC (2m24s+1.12s)" [3032, 3044, 3051]
  line "P1: STC (8.0+0.08s)" [2672, 2655, 2669]
  line "P1: LTC (60.0+0.60s)" [3001, 2940, 2916]
  line "P1: VLTC (2m24s+1.12s)" [3036, 3009, 3043]
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
| 1.12 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3043 | 56 | 86 | 56% | 3001 | 56% |
|  |  | E1 | 3051 | 43 | 176 | 51% | 3040 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2916 | 62 | 76 | 49% | 2921 | 42% |
|  |  | E1 | 2925 | 39 | 210 | 49% | 2938 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2669 | 56 | 102 | 53% | 2643 | 33% |
|  |  | E1 | 2696 | 38 | 232 | 54% | 2664 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3048 | 25 | 512 | 50% | 3052 | 39% |
|  |  | P1 | 3009 | 34 | 272 | 50% | 2989 | 39% |
|  |  | E1 | 3044 | 28 | 410 | 51% | 3024 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2958 | 25 | 520 | 52% | 2942 | 38% |
|  |  | P1 | 2940 | 35 | 246 | 49% | 2950 | 40% |
|  |  | E1 | 2985 | 28 | 402 | 50% | 2988 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2731 | 25 | 498 | 49% | 2743 | 37% |
|  |  | P1 | 2655 | 33 | 306 | 44% | 2720 | 29% |
|  |  | E1 | 2699 | 30 | 378 | 46% | 2724 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3038 | 26 | 454 | 52% | 3023 | 40% |
|  |  | P1 | 3036 | 80 | 54 | 51% | 3036 | 24% |
|  |  | E1 | 3032 | 59 | 104 | 58% | 2892 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2966 | 28 | 386 | 50% | 2966 | 41% |
|  |  | P1 | 3001 | 88 | 60 | 63% | 2763 | 22% |
|  |  | E1 | 2924 | 57 | 96 | 53% | 2896 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2746 | 27 | 446 | 53% | 2709 | 38% |
|  |  | P1 | 2672 | 72 | 64 | 54% | 2634 | 27% |
|  |  | E1 | 2780 | 59 | 96 | 47% | 2803 | 28% |