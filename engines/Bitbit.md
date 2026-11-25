# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2889<sub>(+39) | 3204<sub>(+108) | 3289<sub>(+69) |  |
| 1.6 | 2025-10-18 | 2850 | 3096 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2934<sub>(+46) | 3174<sub>(+4) | 3271<sub>(+123) |  |
| 1.6 | 2025-10-18 | 2888 | 3170 | 3148 |  |
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

Generated: 2026-11-25 05:36:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2850, 2889]
  line "E1: LTC (60.0+0.60s)" [3096, 3204]
  line "E1: VLTC (2m24s+1.12s)" [3220, 3289]
  line "P1: STC (8.0+0.08s)" [2888, 2934]
  line "P1: LTC (60.0+0.60s)" [3170, 3174]
  line "P1: VLTC (2m24s+1.12s)" [3148, 3271]
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
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3289 | 26 | 412 | 49% | 3297 | 60% |
|  |  | T1 | 3274 | 27 | 358 | 50% | 3278 | 65% |
|  |  | P1 | 3271 | 29 | 308 | 49% | 3278 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3205 | 28 | 332 | 49% | 3210 | 61% |
|  |  | P1 | 3174 | 29 | 316 | 48% | 3190 | 62% |
|  |  | E1 | 3204 | 23 | 536 | 49% | 3213 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2954 | 28 | 372 | 51% | 2948 | 47% |
|  |  | P1 | 2934 | 31 | 306 | 49% | 2939 | 42% |
|  |  | E1 | 2889 | 25 | 504 | 45% | 2927 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3216 | 24 | 478 | 52% | 3191 | 54% |
|  |  | P1 | 3148 | 60 | 86 | 55% | 3070 | 41% |
|  |  | E1 | 3220 | 53 | 108 | 49% | 3228 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3151 | 24 | 510 | 52% | 3123 | 52% |
|  |  | P1 | 3170 | 55 | 100 | 59% | 3065 | 51% |
|  |  | E1 | 3096 | 48 | 128 | 56% | 3048 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2912 | 21 | 692 | 50% | 2900 | 40% |
|  |  | P1 | 2888 | 60 | 88 | 49% | 2904 | 41% |
|  |  | E1 | 2850 | 53 | 128 | 51% | 2765 | 30% |