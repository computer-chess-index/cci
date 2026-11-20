# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12 | 2026-11-19 | 2700<sub>(-3) | 2930<sub>(-59) | 3055<sub>(+7) |  |
| 1.11 | 2026-05-11 | 2703<sub>(-81) | 2989<sub>(+61) | 3048<sub>(+13) |  |
| 1.10 | 2026-02-21 | 2784 | 2928 | 3035 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.12 | 2026-11-19 | 2641<sub>(-9) | 2923<sub>(-11) | 3020<sub>(+20) |  |
| 1.11 | 2026-05-11 | 2650<sub>(-15) | 2934<sub>(-64) | 3000<sub>(-29) |  |
| 1.10 | 2026-02-21 | 2665 | 2998 | 3029 |  |
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

Generated: 2026-11-20 05:42:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11", "1.12"]
  y-axis "Elo Rating" 2600 --> 3100
  line "E1: STC (8.0+0.08s)" [2784, 2703, 2700]
  line "E1: LTC (60.0+0.60s)" [2928, 2989, 2930]
  line "E1: VLTC (2m24s+1.12s)" [3035, 3048, 3055]
  line "P1: STC (8.0+0.08s)" [2665, 2650, 2641]
  line "P1: LTC (60.0+0.60s)" [2998, 2934, 2923]
  line "P1: VLTC (2m24s+1.12s)" [3029, 3000, 3020]
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
| 1.12 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3020 | 62 | 70 | 55% | 2985 | 56% |
|  |  | E1 | 3055 | 43 | 176 | 51% | 3044 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2923 | 66 | 68 | 51% | 2912 | 43% |
|  |  | E1 | 2930 | 39 | 206 | 49% | 2942 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2641 | 62 | 82 | 51% | 2635 | 33% |
|  |  | E1 | 2700 | 38 | 232 | 54% | 2668 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3048 | 28 | 410 | 51% | 3028 | 34% |
|  |  | T1 | 3048 | 25 | 512 | 50% | 3052 | 39% |
|  |  | P1 | 3000 | 35 | 268 | 50% | 2981 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2958 | 25 | 520 | 52% | 2942 | 38% |
|  |  | P1 | 2934 | 36 | 238 | 49% | 2942 | 39% |
|  |  | E1 | 2989 | 28 | 402 | 50% | 2992 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2731 | 25 | 498 | 49% | 2743 | 37% |
|  |  | P1 | 2650 | 33 | 306 | 44% | 2714 | 29% |
|  |  | E1 | 2703 | 30 | 378 | 46% | 2728 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3038 | 26 | 454 | 52% | 3023 | 40% |
|  |  | P1 | 3029 | 80 | 54 | 51% | 3028 | 24% |
|  |  | E1 | 3035 | 59 | 104 | 58% | 2896 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2966 | 28 | 386 | 50% | 2966 | 41% |
|  |  | P1 | 2998 | 88 | 60 | 63% | 2762 | 22% |
|  |  | E1 | 2928 | 57 | 96 | 53% | 2900 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2746 | 27 | 446 | 53% | 2709 | 38% |
|  |  | P1 | 2665 | 72 | 64 | 54% | 2627 | 27% |
|  |  | E1 | 2784 | 59 | 96 | 47% | 2808 | 28% |