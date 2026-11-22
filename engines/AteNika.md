# Engine: AteNika

Author: Yevhenii Sekhin

Home: https://github.com/LesterEvSe/AteNika

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2026-09-20 | 2719<sub>(+86) | 3071<sub>(+100) | 3150<sub>(+54) |  |
| 0.6.0 | 2026-09-13 | 2633 | 2971 | 3096 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2026-09-20 | 2662<sub>(+73) | 2989<sub>(+55) | 3044<sub>(-2) |  |
| 0.6.0 | 2026-09-13 | 2589 | 2934 | 3046 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2026-09-20 | 2743<sub>(+65) | 3081<sub>(+70) | 3129<sub>(+46) |  |
| 0.6.0 | 2026-09-13 | 2678<sub>(+634) | 3011<sub>(+689) | 3083<sub>(+729) |  |
| 0.5.0 | 2026-09-02 | 2044<sub>(+142) | 2322<sub>(+188) | 2354<sub>(+125) |  |
| 0.4.0 | 2026-08-30 | 1902 | 2134 | 2229 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+AteNika+<version>&body=###%20Engine%20name%0AAteNika%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:36:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.6.0", "0.7.0"]
  y-axis "Elo Rating" 2500 --> 3200
  line "E1: STC (8.0+0.08s)" [2633, 2719]
  line "E1: LTC (60.0+0.60s)" [2971, 3071]
  line "E1: VLTC (2m24s+1.12s)" [3096, 3150]
  line "P1: STC (8.0+0.08s)" [2589, 2662]
  line "P1: LTC (60.0+0.60s)" [2934, 2989]
  line "P1: VLTC (2m24s+1.12s)" [3046, 3044]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "T1: STC (8.0+0.08s)" [1902, 2044, 2678, 2743]
  line "T1: LTC (60.0+0.60s)" [2134, 2322, 3011, 3081]
  line "T1: VLTC (2m24s+1.12s)" [2229, 2354, 3083, 3129]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3129 | 45 | 134 | 46% | 3166 | 60% |
|  |  | P1 | 3044 | 48 | 112 | 48% | 3058 | 63% |
|  |  | E1 | 3150 | 30 | 300 | 51% | 3140 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2989 | 38 | 192 | 48% | 3009 | 55% |
|  |  | E1 | 3071 | 29 | 320 | 51% | 3059 | 59% |
|  |  | T1 | 3081 | 42 | 158 | 52% | 3063 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2662 | 39 | 190 | 50% | 2660 | 44% |
|  |  | E1 | 2719 | 44 | 164 | 50% | 2723 | 39% |
|  |  | T1 | 2743 | 51 | 116 | 53% | 2716 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3083 | 36 | 230 | 55% | 3033 | 48% |
|  |  | P1 | 3046 | 51 | 108 | 46% | 3078 | 56% |
|  |  | E1 | 3096 | 33 | 244 | 49% | 3098 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3011 | 36 | 222 | 53% | 2978 | 52% |
|  |  | P1 | 2934 | 40 | 176 | 48% | 2954 | 49% |
|  |  | E1 | 2971 | 33 | 262 | 48% | 2993 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2678 | 45 | 158 | 53% | 2643 | 37% |
|  |  | P1 | 2589 | 46 | 158 | 45% | 2650 | 32% |
|  |  | E1 | 2633 | 37 | 224 | 48% | 2646 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2354 | 36 | 262 | 50% | 2357 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2322 | 42 | 202 | 52% | 2303 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2044 | 36 | 270 | 49% | 2061 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2229 | 38 | 248 | 48% | 2252 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2134 | 40 | 230 | 50% | 2138 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1902 | 38 | 248 | 50% | 1901 | 16% |