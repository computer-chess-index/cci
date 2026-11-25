# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2633<sub>(-68) | 2919<sub>(-16) | 3048<sub>(-3) |  |
| 1.12 | 2026-11-19 | 2701<sub>(-3) | 2935<sub>(-55) | 3051<sub>(+1) |  |
| 1.11 | 2026-05-11 | 2704<sub>(-77) | 2990<sub>(+66) | 3050<sub>(+11) |  |
| 1.10 | 2026-02-21 | 2781 | 2924 | 3039 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12.1 | 2026-11-21 | 2587<sub>(-100) | 2869<sub>(-89) | 2971<sub>(-76) |  |
| 1.12 | 2026-11-19 | 2687<sub>(+17) | 2958<sub>(-1) | 3047<sub>(+20) |  |
| 1.11 | 2026-05-11 | 2670<sub>(-15) | 2959<sub>(-56) | 3027<sub>(-29) |  |
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

Generated: 2026-11-25 05:42:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11", "1.12", "1.12.1"]
  y-axis "Elo Rating" 2500 --> 3100
  line "E1: STC (8.0+0.08s)" [2781, 2704, 2701, 2633]
  line "E1: LTC (60.0+0.60s)" [2924, 2990, 2935, 2919]
  line "E1: VLTC (2m24s+1.12s)" [3039, 3050, 3051, 3048]
  line "P1: STC (8.0+0.08s)" [2685, 2670, 2687, 2587]
  line "P1: LTC (60.0+0.60s)" [3015, 2959, 2958, 2869]
  line "P1: VLTC (2m24s+1.12s)" [3056, 3027, 3047, 2971]
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
| 1.12.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2971 | 43 | 176 | 46% | 3005 | 34% |
|  |  | E1 | 3048 | 46 | 144 | 50% | 3047 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2869 | 49 | 128 | 48% | 2885 | 37% |
|  |  | E1 | 2919 | 41 | 192 | 50% | 2921 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2633 | 38 | 230 | 49% | 2641 | 26% |
|  |  | P1 | 2587 | 49 | 152 | 58% | 2500 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.12 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3047 | 47 | 130 | 53% | 3029 | 45% |
|  |  | E1 | 3051 | 42 | 180 | 51% | 3044 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2958 | 52 | 116 | 51% | 2943 | 35% |
|  |  | E1 | 2935 | 36 | 242 | 49% | 2942 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2687 | 47 | 144 | 52% | 2669 | 33% |
|  |  | E1 | 2701 | 37 | 248 | 53% | 2672 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3027 | 34 | 272 | 50% | 3005 | 39% |
|  |  | E1 | 3050 | 28 | 410 | 51% | 3028 | 34% |
|  |  | T1 | 3048 | 25 | 512 | 50% | 3052 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2990 | 28 | 402 | 50% | 2993 | 36% |
|  |  | T1 | 2958 | 25 | 520 | 52% | 2942 | 38% |
|  |  | P1 | 2959 | 35 | 246 | 49% | 2970 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2704 | 30 | 378 | 46% | 2730 | 31% |
|  |  | T1 | 2731 | 25 | 498 | 49% | 2743 | 37% |
|  |  | P1 | 2670 | 33 | 306 | 44% | 2735 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3038 | 26 | 454 | 52% | 3023 | 40% |
|  |  | P1 | 3056 | 80 | 54 | 51% | 3056 | 24% |
|  |  | E1 | 3039 | 59 | 104 | 58% | 2898 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2966 | 28 | 386 | 50% | 2966 | 41% |
|  |  | P1 | 3015 | 88 | 60 | 63% | 2776 | 22% |
|  |  | E1 | 2924 | 57 | 96 | 53% | 2897 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2746 | 27 | 446 | 53% | 2709 | 38% |
|  |  | P1 | 2685 | 72 | 64 | 54% | 2647 | 27% |
|  |  | E1 | 2781 | 59 | 96 | 47% | 2804 | 28% |