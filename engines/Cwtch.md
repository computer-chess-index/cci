# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-07-06 | 3008<sub>(+62) | 3286<sub>(+122) | 3357<sub>(+112) |  |
| 5 | 2026-04-06 | 2946 | 3164 | 3245 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-07-06 | 2982<sub>(+96) | 3225<sub>(+97) | 3310<sub>(+100) |  |
| 5 | 2026-04-06 | 2886 | 3128 | 3210 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-07-06 | 3027<sub>(+137) | 3237<sub>(+89) | 3306<sub>(+88) |  |
| 5 | 2026-04-06 | 2890<sub>(+35) | 3148<sub>(+52) | 3218<sub>(+77) |  |
| 4 | 2025-12-05 | 2855 | 3096 | 3141 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A6" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:37:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "6"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2946, 3008]
  line "E1: LTC (60.0+0.60s)" [3164, 3286]
  line "E1: VLTC (2m24s+1.12s)" [3245, 3357]
  line "P1: STC (8.0+0.08s)" [2886, 2982]
  line "P1: LTC (60.0+0.60s)" [3128, 3225]
  line "P1: VLTC (2m24s+1.12s)" [3210, 3310]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3400
  line "T1: STC (8.0+0.08s)" [2855, 2890, 3027]
  line "T1: LTC (60.0+0.60s)" [3096, 3148, 3237]
  line "T1: VLTC (2m24s+1.12s)" [3141, 3218, 3306]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3310 | 29 | 324 | 51% | 3305 | 62% |
|  |  | E1 | 3357 | 26 | 392 | 51% | 3351 | 64% |
|  |  | T1 | 3306 | 26 | 396 | 52% | 3295 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3225 | 31 | 288 | 53% | 3201 | 53% |
|  |  | E1 | 3286 | 26 | 420 | 51% | 3276 | 54% |
|  |  | T1 | 3237 | 25 | 416 | 49% | 3245 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3008 | 26 | 454 | 49% | 3017 | 41% |
|  |  | T1 | 3027 | 24 | 488 | 48% | 3039 | 49% |
|  |  | P1 | 2982 | 30 | 340 | 54% | 2944 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3218 | 25 | 438 | 48% | 3240 | 59% |
|  |  | P1 | 3210 | 77 | 56 | 62% | 3032 | 41% |
|  |  | E1 | 3245 | 58 | 92 | 59% | 3152 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3148 | 28 | 358 | 50% | 3147 | 56% |
|  |  | P1 | 3128 | 82 | 56 | 69% | 2804 | 38% |
|  |  | E1 | 3164 | 60 | 88 | 56% | 3105 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2890 | 28 | 396 | 49% | 2903 | 40% |
|  |  | P1 | 2886 | 73 | 66 | 48% | 2894 | 27% |
|  |  | E1 | 2946 | 58 | 100 | 47% | 2932 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3141 | 26 | 428 | 50% | 3141 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3096 | 27 | 376 | 53% | 3070 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2855 | 25 | 482 | 53% | 2823 | 41% |