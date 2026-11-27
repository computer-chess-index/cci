# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2634<sub>(-61) | 2921<sub>(-6) | 3047<sub>(+1) |  |
| 1.12 | 2026-11-19 | 2695<sub>(-6) | 2927<sub>(-58) | 3046<sub>(+2) |  |
| 1.11 | 2026-05-11 | 2701<sub>(-77) | 2985<sub>(+62) | 3044<sub>(+11) |  |
| 1.10 | 2026-02-21 | 2778 | 2923 | 3033 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2595<sub>(-92) | 2876<sub>(-82) | 2971<sub>(-79) |  |
| 1.12 | 2026-11-19 | 2687<sub>(+17) | 2958<sub>(-3) | 3050<sub>(+22) |  |
| 1.11 | 2026-05-11 | 2670<sub>(-17) | 2961<sub>(-55) | 3028<sub>(-30) |  |
| 1.10 | 2026-02-21 | 2687 | 3016 | 3058 |  |
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

Generated: 2026-11-27 05:42:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11", "1.12", "1.12.1"]
  y-axis "Elo Rating" 2500 --> 3100
  line "E1: STC (8.0+0.08s)" [2778, 2701, 2695, 2634]
  line "E1: LTC (60.0+0.60s)" [2923, 2985, 2927, 2921]
  line "E1: VLTC (2m24s+1.12s)" [3033, 3044, 3046, 3047]
  line "P1: STC (8.0+0.08s)" [2687, 2670, 2687, 2595]
  line "P1: LTC (60.0+0.60s)" [3016, 2961, 2958, 2876]
  line "P1: VLTC (2m24s+1.12s)" [3058, 3028, 3050, 2971]
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
| 1.12.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3047 | 45 | 148 | 51% | 3042 | 42% |
|  |  | P1 | 2971 | 43 | 176 | 46% | 3006 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2921 | 37 | 236 | 50% | 2920 | 30% |
|  |  | P1 | 2876 | 47 | 140 | 49% | 2885 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2595 | 44 | 184 | 57% | 2518 | 23% |
|  |  | E1 | 2634 | 37 | 240 | 49% | 2639 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.12 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3050 | 47 | 130 | 53% | 3031 | 45% |
|  |  | E1 | 3046 | 42 | 180 | 51% | 3038 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2958 | 52 | 116 | 51% | 2944 | 35% |
|  |  | E1 | 2927 | 36 | 246 | 49% | 2935 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2687 | 47 | 144 | 52% | 2669 | 33% |
|  |  | E1 | 2695 | 35 | 264 | 53% | 2670 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3044 | 28 | 410 | 51% | 3023 | 34% |
|  |  | T1 | 3048 | 25 | 512 | 50% | 3052 | 39% |
|  |  | P1 | 3028 | 34 | 272 | 50% | 3006 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2958 | 25 | 520 | 52% | 2942 | 38% |
|  |  | P1 | 2961 | 35 | 246 | 49% | 2970 | 40% |
|  |  | E1 | 2985 | 28 | 402 | 50% | 2988 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2731 | 25 | 498 | 49% | 2743 | 37% |
|  |  | P1 | 2670 | 33 | 306 | 44% | 2735 | 29% |
|  |  | E1 | 2701 | 30 | 378 | 46% | 2727 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3038 | 26 | 454 | 52% | 3023 | 40% |
|  |  | P1 | 3058 | 80 | 54 | 51% | 3058 | 24% |
|  |  | E1 | 3033 | 59 | 104 | 58% | 2893 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2966 | 28 | 386 | 50% | 2966 | 41% |
|  |  | P1 | 3016 | 88 | 60 | 63% | 2778 | 22% |
|  |  | E1 | 2923 | 57 | 96 | 53% | 2894 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2746 | 27 | 446 | 53% | 2709 | 38% |
|  |  | P1 | 2687 | 72 | 64 | 54% | 2647 | 27% |
|  |  | E1 | 2778 | 59 | 96 | 47% | 2800 | 28% |