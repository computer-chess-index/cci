# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2630<sub>(-67) | 2928<sub>(0) | 3043<sub>(-3) |  |
| 1.12 | 2026-11-19 | 2697<sub>(-4) | 2928<sub>(-56) | 3046<sub>(+3) |  |
| 1.11 | 2026-05-11 | 2701<sub>(-77) | 2984<sub>(+63) | 3043<sub>(+11) |  |
| 1.10 | 2026-02-21 | 2778 | 2921 | 3032 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2584<sub>(-103) | 2874<sub>(-83) | 2970<sub>(-77) |  |
| 1.12 | 2026-11-19 | 2687<sub>(+17) | 2957<sub>(-2) | 3047<sub>(+22) |  |
| 1.11 | 2026-05-11 | 2670<sub>(-15) | 2959<sub>(-56) | 3025<sub>(-31) |  |
| 1.10 | 2026-02-21 | 2685 | 3015 | 3056 |  |
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

Generated: 2026-11-26 05:42:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11", "1.12", "1.12.1"]
  y-axis "Elo Rating" 2500 --> 3100
  line "E1: STC (8.0+0.08s)" [2778, 2701, 2697, 2630]
  line "E1: LTC (60.0+0.60s)" [2921, 2984, 2928, 2928]
  line "E1: VLTC (2m24s+1.12s)" [3032, 3043, 3046, 3043]
  line "P1: STC (8.0+0.08s)" [2685, 2670, 2687, 2584]
  line "P1: LTC (60.0+0.60s)" [3015, 2959, 2957, 2874]
  line "P1: VLTC (2m24s+1.12s)" [3056, 3025, 3047, 2970]
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
| 1.12.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3043 | 46 | 144 | 50% | 3042 | 42% |
|  |  | P1 | 2970 | 43 | 176 | 46% | 3005 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2928 | 39 | 220 | 51% | 2919 | 30% |
|  |  | P1 | 2874 | 47 | 140 | 49% | 2884 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2630 | 38 | 236 | 49% | 2638 | 27% |
|  |  | P1 | 2584 | 47 | 164 | 57% | 2507 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.12 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3047 | 47 | 130 | 53% | 3028 | 45% |
|  |  | E1 | 3046 | 42 | 180 | 51% | 3038 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2957 | 52 | 116 | 51% | 2943 | 35% |
|  |  | E1 | 2928 | 36 | 242 | 49% | 2935 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2687 | 47 | 144 | 52% | 2669 | 33% |
|  |  | E1 | 2697 | 36 | 256 | 53% | 2670 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3043 | 28 | 410 | 51% | 3023 | 34% |
|  |  | T1 | 3048 | 25 | 512 | 50% | 3052 | 39% |
|  |  | P1 | 3025 | 34 | 272 | 50% | 3005 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2984 | 28 | 402 | 50% | 2986 | 36% |
|  |  | T1 | 2958 | 25 | 520 | 52% | 2942 | 38% |
|  |  | P1 | 2959 | 35 | 246 | 49% | 2969 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2731 | 25 | 498 | 49% | 2743 | 37% |
|  |  | P1 | 2670 | 33 | 306 | 44% | 2735 | 29% |
|  |  | E1 | 2701 | 30 | 378 | 46% | 2727 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3038 | 26 | 454 | 52% | 3023 | 40% |
|  |  | P1 | 3056 | 80 | 54 | 51% | 3055 | 24% |
|  |  | E1 | 3032 | 59 | 104 | 58% | 2892 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2966 | 28 | 386 | 50% | 2966 | 41% |
|  |  | P1 | 3015 | 88 | 60 | 63% | 2777 | 22% |
|  |  | E1 | 2921 | 57 | 96 | 53% | 2893 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2746 | 27 | 446 | 53% | 2709 | 38% |
|  |  | P1 | 2685 | 72 | 64 | 54% | 2647 | 27% |
|  |  | E1 | 2778 | 59 | 96 | 47% | 2800 | 28% |