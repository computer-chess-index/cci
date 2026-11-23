# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2630<sub>(-73) | 2917<sub>(-15) | 3054<sub>(+3) |  |
| 1.12 | 2026-11-19 | 2703<sub>(+3) | 2932<sub>(-53) | 3051<sub>(+7) |  |
| 1.11 | 2026-05-11 | 2700<sub>(-80) | 2985<sub>(+60) | 3044<sub>(+12) |  |
| 1.10 | 2026-02-21 | 2780 | 2925 | 3032 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2572<sub>(-104) | 2861<sub>(-85) | 2971<sub>(-65) |  |
| 1.12 | 2026-11-19 | 2676<sub>(+15) | 2946<sub>(-1) | 3036<sub>(+21) |  |
| 1.11 | 2026-05-11 | 2661<sub>(-15) | 2947<sub>(-59) | 3015<sub>(-28) |  |
| 1.10 | 2026-02-21 | 2676 | 3006 | 3043 |  |
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

Generated: 2026-11-23 05:42:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11", "1.12", "1.12.1"]
  y-axis "Elo Rating" 2500 --> 3100
  line "E1: STC (8.0+0.08s)" [2780, 2700, 2703, 2630]
  line "E1: LTC (60.0+0.60s)" [2925, 2985, 2932, 2917]
  line "E1: VLTC (2m24s+1.12s)" [3032, 3044, 3051, 3054]
  line "P1: STC (8.0+0.08s)" [2676, 2661, 2676, 2572]
  line "P1: LTC (60.0+0.60s)" [3006, 2947, 2946, 2861]
  line "P1: VLTC (2m24s+1.12s)" [3043, 3015, 3036, 2971]
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
| 1.12.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2971 | 57 | 96 | 45% | 3017 | 36% |
|  |  | E1 | 3054 | 47 | 136 | 51% | 3044 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2861 | 69 | 64 | 45% | 2901 | 38% |
|  |  | E1 | 2917 | 44 | 168 | 50% | 2919 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2572 | 54 | 124 | 59% | 2475 | 25% |
|  |  | E1 | 2630 | 39 | 220 | 49% | 2637 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.12 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3036 | 49 | 122 | 53% | 3016 | 47% |
|  |  | E1 | 3051 | 43 | 176 | 51% | 3042 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2932 | 38 | 218 | 50% | 2938 | 37% |
|  |  | P1 | 2946 | 52 | 116 | 51% | 2932 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2703 | 38 | 236 | 54% | 2666 | 28% |
|  |  | P1 | 2676 | 47 | 144 | 52% | 2658 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3048 | 25 | 512 | 50% | 3052 | 39% |
|  |  | P1 | 3015 | 34 | 272 | 50% | 2994 | 39% |
|  |  | E1 | 3044 | 28 | 410 | 51% | 3024 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2958 | 25 | 520 | 52% | 2942 | 38% |
|  |  | P1 | 2947 | 35 | 246 | 49% | 2958 | 40% |
|  |  | E1 | 2985 | 28 | 402 | 50% | 2989 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2731 | 25 | 498 | 49% | 2743 | 37% |
|  |  | P1 | 2661 | 33 | 306 | 44% | 2726 | 29% |
|  |  | E1 | 2700 | 30 | 378 | 46% | 2726 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3043 | 80 | 54 | 51% | 3042 | 24% |
|  |  | E1 | 3032 | 59 | 104 | 58% | 2892 | 31% |
|  |  | T1 | 3038 | 26 | 454 | 52% | 3023 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3006 | 88 | 60 | 63% | 2769 | 22% |
|  |  | E1 | 2925 | 57 | 96 | 53% | 2897 | 38% |
|  |  | T1 | 2966 | 28 | 386 | 50% | 2966 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2676 | 72 | 64 | 54% | 2638 | 27% |
|  |  | E1 | 2780 | 59 | 96 | 47% | 2804 | 28% |
|  |  | T1 | 2746 | 27 | 446 | 53% | 2709 | 38% |