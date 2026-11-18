# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2913<sub>(+89) | 3150<sub>(+63) | 3210<sub>(+77) |  |
| 0.21.0 | 2025-10-13 | 2824 | 3087 | 3133 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2839<sub>(+42) | 3102<sub>(+116) | 3173<sub>(+52) |  |
| 0.21.0 | 2025-10-13 | 2797 | 2986 | 3121 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2873<sub>(+29) | 3105<sub>(+19) | 3177<sub>(+54) |  |
| 0.21.0 | 2025-10-13 | 2844 | 3086 | 3123 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Princhess+<version>&body=###%20Engine%20name%0APrinchess%0A%0A###%20Version%0A0.22.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:41:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2824, 2913]
  line "E1: LTC (60.0+0.60s)" [3087, 3150]
  line "E1: VLTC (2m24s+1.12s)" [3133, 3210]
  line "P1: STC (8.0+0.08s)" [2797, 2839]
  line "P1: LTC (60.0+0.60s)" [2986, 3102]
  line "P1: VLTC (2m24s+1.12s)" [3121, 3173]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "T1: STC (8.0+0.08s)" [2844, 2873]
  line "T1: LTC (60.0+0.60s)" [3086, 3105]
  line "T1: VLTC (2m24s+1.12s)" [3123, 3177]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3173 | 28 | 338 | 51% | 3167 | 57% |
|  |  | E1 | 3210 | 26 | 426 | 50% | 3209 | 53% |
|  |  | T1 | 3177 | 33 | 256 | 50% | 3174 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3102 | 32 | 284 | 49% | 3120 | 51% |
|  |  | E1 | 3150 | 26 | 426 | 51% | 3141 | 51% |
|  |  | T1 | 3105 | 30 | 308 | 50% | 3106 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2839 | 31 | 316 | 50% | 2842 | 44% |
|  |  | E1 | 2913 | 27 | 402 | 50% | 2917 | 41% |
|  |  | T1 | 2873 | 32 | 296 | 49% | 2885 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3123 | 24 | 504 | 50% | 3124 | 51% |
|  |  | P1 | 3121 | 74 | 60 | 58% | 2984 | 40% |
|  |  | E1 | 3133 | 60 | 90 | 57% | 3035 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3086 | 23 | 542 | 50% | 3082 | 50% |
|  |  | P1 | 2986 | 85 | 54 | 52% | 2863 | 22% |
|  |  | E1 | 3087 | 60 | 88 | 57% | 3019 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2844 | 21 | 728 | 51% | 2834 | 38% |
|  |  | P1 | 2797 | 66 | 72 | 55% | 2691 | 40% |
|  |  | E1 | 2824 | 59 | 102 | 51% | 2823 | 29% |