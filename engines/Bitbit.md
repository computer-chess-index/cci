# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2881<sub>(+41) | 3195<sub>(+156) | 3283<sub>(+20) |  |
| 1.6 | 2025-10-18 | 2840 | 3039 | 3263 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2878<sub>(+23) | 3133<sub>(+27) | 3235<sub>(+135) |  |
| 1.6 | 2025-10-18 | 2855 | 3106 | 3100 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2954<sub>(+42) | 3205<sub>(+54) | 3274<sub>(+58) |  |
| 1.6 | 2025-10-18 | 2912 | 3151 | 3216 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bitbit+<version>&body=###%20Engine%20name%0ABitbit%0A%0A###%20Version%0A1.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:36:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2840, 2881]
  line "E1: LTC (60.0+0.60s)" [3039, 3195]
  line "E1: VLTC (2m24s+1.12s)" [3263, 3283]
  line "P1: STC (8.0+0.08s)" [2855, 2878]
  line "P1: LTC (60.0+0.60s)" [3106, 3133]
  line "P1: VLTC (2m24s+1.12s)" [3100, 3235]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2900 --> 3300
  line "T1: STC (8.0+0.08s)" [2912, 2954]
  line "T1: LTC (60.0+0.60s)" [3151, 3205]
  line "T1: VLTC (2m24s+1.12s)" [3216, 3274]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3274 | 27 | 358 | 50% | 3278 | 65% |
|  |  | P1 | 3235 | 31 | 268 | 48% | 3248 | 66% |
|  |  | E1 | 3283 | 26 | 400 | 49% | 3287 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3205 | 28 | 332 | 49% | 3210 | 61% |
|  |  | P1 | 3133 | 31 | 284 | 47% | 3156 | 62% |
|  |  | E1 | 3195 | 24 | 492 | 49% | 3205 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2954 | 28 | 372 | 51% | 2948 | 47% |
|  |  | P1 | 2878 | 35 | 254 | 49% | 2888 | 41% |
|  |  | E1 | 2881 | 26 | 452 | 45% | 2913 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3263 | 79 | 52 | 56% | 3205 | 38% |
|  |  | T1 | 3216 | 24 | 478 | 52% | 3191 | 54% |
|  |  | P1 | 3100 | 110 | 28 | 70% | 2836 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3039 | 74 | 56 | 56% | 2996 | 48% |
|  |  | T1 | 3151 | 24 | 510 | 52% | 3123 | 52% |
|  |  | P1 | 3106 | 94 | 40 | 74% | 2820 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2840 | 78 | 68 | 54% | 2664 | 26% |
|  |  | T1 | 2912 | 21 | 692 | 50% | 2900 | 40% |
|  |  | P1 | 2855 | 104 | 32 | 47% | 2871 | 31% |