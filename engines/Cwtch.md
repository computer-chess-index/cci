# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-07-06 | 3011<sub>(+57) | 3290<sub>(+144) | 3362<sub>(+119) |  |
| 5 | 2026-04-06 | 2954 | 3146 | 3243 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-07-06 | 3004<sub>(+133) | 3247<sub>(+85) | 3329<sub>(+100) |  |
| 5 | 2026-04-06 | 2871 | 3162 | 3229 |  |
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

Generated: 2026-11-24 05:37:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "6"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2954, 3011]
  line "E1: LTC (60.0+0.60s)" [3146, 3290]
  line "E1: VLTC (2m24s+1.12s)" [3243, 3362]
  line "P1: STC (8.0+0.08s)" [2871, 3004]
  line "P1: LTC (60.0+0.60s)" [3162, 3247]
  line "P1: VLTC (2m24s+1.12s)" [3229, 3329]
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
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3329 | 28 | 328 | 51% | 3325 | 61% |
|  |  | E1 | 3362 | 26 | 392 | 51% | 3355 | 64% |
|  |  | T1 | 3306 | 26 | 396 | 52% | 3295 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3247 | 30 | 316 | 53% | 3225 | 54% |
|  |  | E1 | 3290 | 26 | 428 | 51% | 3279 | 54% |
|  |  | T1 | 3237 | 25 | 416 | 49% | 3245 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3011 | 25 | 482 | 49% | 3019 | 41% |
|  |  | T1 | 3027 | 24 | 488 | 48% | 3039 | 49% |
|  |  | P1 | 3004 | 29 | 356 | 54% | 2969 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3218 | 25 | 438 | 48% | 3240 | 59% |
|  |  | P1 | 3229 | 71 | 64 | 59% | 3077 | 44% |
|  |  | E1 | 3243 | 53 | 104 | 57% | 3166 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3148 | 28 | 358 | 50% | 3147 | 56% |
|  |  | P1 | 3162 | 75 | 64 | 67% | 2866 | 41% |
|  |  | E1 | 3146 | 54 | 108 | 52% | 3121 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2890 | 28 | 396 | 49% | 2903 | 40% |
|  |  | P1 | 2871 | 65 | 82 | 45% | 2915 | 29% |
|  |  | E1 | 2954 | 51 | 120 | 48% | 2939 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3141 | 26 | 428 | 50% | 3141 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3096 | 27 | 376 | 53% | 3070 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2855 | 25 | 482 | 53% | 2823 | 41% |