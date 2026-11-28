# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2634<sub>(-65) | 2923<sub>(-4) | 3048<sub>(+2) |  |
| 1.12 | 2026-11-19 | 2699<sub>(-1) | 2927<sub>(-57) | 3046<sub>(+3) |  |
| 1.11 | 2026-05-11 | 2700<sub>(-78) | 2984<sub>(+65) | 3043<sub>(+12) |  |
| 1.10 | 2026-02-21 | 2778 | 2919 | 3031 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2596<sub>(-92) | 2876<sub>(-82) | 2973<sub>(-78) |  |
| 1.12 | 2026-11-19 | 2688<sub>(+16) | 2958<sub>(-4) | 3051<sub>(+22) |  |
| 1.11 | 2026-05-11 | 2672<sub>(-15) | 2962<sub>(-55) | 3029<sub>(-30) |  |
| 1.10 | 2026-02-21 | 2687 | 3017 | 3059 |  |
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

Generated: 2026-11-28 05:42:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11", "1.12", "1.12.1"]
  y-axis "Elo Rating" 2500 --> 3100
  line "E1: STC (8.0+0.08s)" [2778, 2700, 2699, 2634]
  line "E1: LTC (60.0+0.60s)" [2919, 2984, 2927, 2923]
  line "E1: VLTC (2m24s+1.12s)" [3031, 3043, 3046, 3048]
  line "P1: STC (8.0+0.08s)" [2687, 2672, 2688, 2596]
  line "P1: LTC (60.0+0.60s)" [3017, 2962, 2958, 2876]
  line "P1: VLTC (2m24s+1.12s)" [3059, 3029, 3051, 2973]
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
| 1.12.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2973 | 43 | 176 | 46% | 3008 | 34% |
|  |  | E1 | 3048 | 44 | 160 | 51% | 3043 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2876 | 47 | 140 | 49% | 2885 | 36% |
|  |  | E1 | 2923 | 37 | 248 | 50% | 2920 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2596 | 44 | 184 | 57% | 2519 | 23% |
|  |  | E1 | 2634 | 37 | 240 | 49% | 2639 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.12 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3046 | 42 | 180 | 51% | 3038 | 32% |
|  |  | P1 | 3051 | 47 | 130 | 53% | 3032 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2958 | 52 | 116 | 51% | 2944 | 35% |
|  |  | E1 | 2927 | 35 | 250 | 49% | 2934 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2688 | 47 | 144 | 52% | 2670 | 33% |
|  |  | E1 | 2699 | 35 | 268 | 53% | 2670 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3048 | 25 | 512 | 50% | 3052 | 39% |
|  |  | P1 | 3029 | 34 | 272 | 50% | 3009 | 39% |
|  |  | E1 | 3043 | 28 | 410 | 51% | 3023 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2958 | 25 | 520 | 52% | 2942 | 38% |
|  |  | P1 | 2962 | 35 | 246 | 49% | 2971 | 40% |
|  |  | E1 | 2984 | 28 | 402 | 50% | 2986 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2731 | 25 | 498 | 49% | 2743 | 37% |
|  |  | P1 | 2672 | 33 | 306 | 44% | 2736 | 29% |
|  |  | E1 | 2700 | 30 | 378 | 46% | 2726 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3031 | 59 | 104 | 58% | 2890 | 31% |
|  |  | T1 | 3038 | 26 | 454 | 52% | 3023 | 40% |
|  |  | P1 | 3059 | 80 | 54 | 51% | 3059 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2919 | 57 | 96 | 53% | 2892 | 38% |
|  |  | T1 | 2966 | 28 | 386 | 50% | 2966 | 41% |
|  |  | P1 | 3017 | 88 | 60 | 63% | 2780 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2778 | 59 | 96 | 47% | 2800 | 28% |
|  |  | T1 | 2746 | 27 | 446 | 53% | 2709 | 38% |
|  |  | P1 | 2687 | 72 | 64 | 54% | 2649 | 27% |