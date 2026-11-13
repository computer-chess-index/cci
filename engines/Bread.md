# Engine: Bread

Author: 

Home: https://github.com/Nonlinear2/Bread-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-03-15 | 3071<sub>(+119) | 3313<sub>(+108) | 3384<sub>(+205) |  |
| 2.1.1 | 2025-12-22 | 2952 | 3205 | 3179 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-03-15 | 3082<sub>(+194) | 3322<sub>(+233) | 3414<sub>(+451) |  |
| 2.1.1 | 2025-12-22 | 2888 | 3089 | 2963 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-03-15 | 3114<sub>(+109) | 3321<sub>(+107) | 3397<sub>(+131) |  |
| 2.1.1 | 2025-12-22 | 3005<sub>(+135) | 3214<sub>(+89) | 3266<sub>(+104) |  |
| 2.0.0 | 2025-10-18 | 2870 | 3125 | 3162 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bread+<version>&body=###%20Engine%20name%0ABread%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:36:33

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2952, 3071]
  line "E1: LTC (60.0+0.60s)" [3205, 3313]
  line "E1: VLTC (2m24s+1.12s)" [3179, 3384]
  line "P1: STC (8.0+0.08s)" [2888, 3082]
  line "P1: LTC (60.0+0.60s)" [3089, 3322]
  line "P1: VLTC (2m24s+1.12s)" [2963, 3414]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "T1: STC (8.0+0.08s)" [2870, 3005, 3114]
  line "T1: LTC (60.0+0.60s)" [3125, 3214, 3321]
  line "T1: VLTC (2m24s+1.12s)" [3162, 3266, 3397]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3397 | 22 | 500 | 50% | 3399 | 75% |
|  |  | P1 | 3414 | 35 | 210 | 52% | 3378 | 73% |
|  |  | E1 | 3384 | 27 | 392 | 57% | 3291 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3322 | 32 | 260 | 52% | 3293 | 64% |
|  |  | E1 | 3313 | 27 | 382 | 57% | 3216 | 59% |
|  |  | T1 | 3321 | 24 | 436 | 51% | 3314 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3082 | 33 | 248 | 48% | 3096 | 58% |
|  |  | E1 | 3071 | 27 | 380 | 48% | 3089 | 54% |
|  |  | T1 | 3114 | 22 | 588 | 50% | 3112 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3266 | 30 | 294 | 50% | 3263 | 61% |
|  |  | P1 | 2963 | 164 | 12 | 83% | 2687 | 33% |
|  |  | E1 | 3179 | 231 | 20 | 98% | 2346 | 5% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3214 | 28 | 348 | 50% | 3204 | 55% |
|  |  | P1 | 3089 | 161 | 8 | 56% | 3056 | 63% |
|  |  | E1 | 3205 | 147 | 20 | 65% | 2950 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3005 | 28 | 364 | 52% | 2989 | 47% |
|  |  | P1 | 2888 | 181 | 12 | 63% | 2754 | 25% |
|  |  | E1 | 2952 | 106 | 40 | 69% | 2568 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3162 | 37 | 208 | 57% | 3055 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 40 | 188 | 56% | 3042 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2870 | 38 | 208 | 51% | 2839 | 44% |