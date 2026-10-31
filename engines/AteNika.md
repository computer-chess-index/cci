# Engine: AteNika

Author: Yevhenii Sekhin

Home: https://github.com/LesterEvSe/AteNika

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2026-09-20 | 2770<sub>(+89) | 3117<sub>(+96) | 3201<sub>(+45) |  |
| 0.6.0 | 2026-09-13 | 2681 | 3021 | 3156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2026-09-20 | 2786<sub>(+91) | 3162<sub>(+95) | 3195<sub>(+2) |  |
| 0.6.0 | 2026-09-13 | 2695 | 3067 | 3193 |  |
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

Generated: 2026-10-31 05:36:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.6.0", "0.7.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2681, 2770]
  line "E1: LTC (60.0+0.60s)" [3021, 3117]
  line "E1: VLTC (2m24s+1.12s)" [3156, 3201]
  line "P1: STC (8.0+0.08s)" [2695, 2786]
  line "P1: LTC (60.0+0.60s)" [3067, 3162]
  line "P1: VLTC (2m24s+1.12s)" [3193, 3195]
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
|  |  | P1 | 3195 | 85 | 36 | 50% | 3194 | 61% |
|  |  | E1 | 3201 | 41 | 164 | 54% | 3170 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3081 | 42 | 158 | 52% | 3063 | 55% |
|  |  | P1 | 3162 | 58 | 80 | 51% | 3155 | 55% |
|  |  | E1 | 3117 | 37 | 198 | 52% | 3102 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2743 | 51 | 116 | 53% | 2716 | 39% |
|  |  | P1 | 2786 | 56 | 92 | 52% | 2765 | 48% |
|  |  | E1 | 2770 | 49 | 128 | 50% | 2776 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3156 | 33 | 240 | 49% | 3159 | 60% |
|  |  | T1 | 3083 | 36 | 230 | 55% | 3033 | 48% |
|  |  | P1 | 3193 | 53 | 100 | 48% | 3217 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3021 | 33 | 254 | 47% | 3048 | 54% |
|  |  | T1 | 3011 | 36 | 222 | 53% | 2978 | 52% |
|  |  | P1 | 3067 | 41 | 166 | 48% | 3081 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2678 | 45 | 158 | 53% | 2643 | 37% |
|  |  | P1 | 2695 | 48 | 144 | 45% | 2753 | 33% |
|  |  | E1 | 2681 | 39 | 198 | 48% | 2697 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2354 | 36 | 262 | 50% | 2357 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2322 | 42 | 202 | 52% | 2303 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2044 | 36 | 270 | 49% | 2061 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2229 | 38 | 248 | 48% | 2252 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2134 | 40 | 230 | 50% | 2138 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1902 | 38 | 248 | 50% | 1901 | 16% |