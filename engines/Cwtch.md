# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-07-06 | 3008<sub>(+93) | 3282<sub>(+123) | 3355<sub>(+116) |  |
| 5 | 2026-04-06 | 2915 | 3159 | 3239 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-07-06 | 3013<sub>(+129) | 3256<sub>(+58) | 3337<sub>(+106) |  |
| 5 | 2026-04-06 | 2884 | 3198 | 3231 |  |
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

Generated: 2026-11-28 05:37:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "6"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2915, 3008]
  line "E1: LTC (60.0+0.60s)" [3159, 3282]
  line "E1: VLTC (2m24s+1.12s)" [3239, 3355]
  line "P1: STC (8.0+0.08s)" [2884, 3013]
  line "P1: LTC (60.0+0.60s)" [3198, 3256]
  line "P1: VLTC (2m24s+1.12s)" [3231, 3337]
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
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3306 | 26 | 396 | 52% | 3295 | 66% |
|  |  | P1 | 3337 | 28 | 336 | 51% | 3333 | 62% |
|  |  | E1 | 3355 | 26 | 396 | 51% | 3349 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3256 | 29 | 320 | 53% | 3236 | 54% |
|  |  | E1 | 3282 | 25 | 444 | 51% | 3276 | 54% |
|  |  | T1 | 3237 | 25 | 416 | 49% | 3245 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3013 | 29 | 364 | 53% | 2981 | 45% |
|  |  | E1 | 3008 | 25 | 494 | 49% | 3016 | 41% |
|  |  | T1 | 3027 | 24 | 488 | 48% | 3039 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3239 | 45 | 144 | 55% | 3182 | 53% |
|  |  | T1 | 3218 | 25 | 438 | 48% | 3240 | 59% |
|  |  | P1 | 3231 | 66 | 72 | 57% | 3106 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3159 | 45 | 152 | 53% | 3128 | 43% |
|  |  | T1 | 3148 | 28 | 358 | 50% | 3147 | 56% |
|  |  | P1 | 3198 | 64 | 84 | 65% | 2950 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2890 | 28 | 396 | 49% | 2903 | 40% |
|  |  | P1 | 2884 | 62 | 90 | 46% | 2924 | 31% |
|  |  | E1 | 2915 | 39 | 201 | 46% | 2932 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3141 | 26 | 428 | 50% | 3141 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3096 | 27 | 376 | 53% | 3070 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2855 | 25 | 482 | 53% | 2823 | 41% |