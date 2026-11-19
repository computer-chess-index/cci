# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3375<sub>(+259) | 3530<sub>(+119) | 3619<sub>(+143) |  |
| 6.0 | 2024-08-10 | 3116 | 3411 | 3476 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3352<sub>(+219) | 3506<sub>(+128) | 3538<sub>(+110) |  |
| 6.0 | 2024-08-10 | 3133 | 3378 | 3428 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3386<sub>(+186) | 3532<sub>(+121) | 3559<sub>(+107) |  |
| 6.0 | 2024-08-10 | 3200 | 3411 | 3452 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Devre+<version>&body=###%20Engine%20name%0ADevre%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:37:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3116, 3375]
  line "E1: LTC (60.0+0.60s)" [3411, 3530]
  line "E1: VLTC (2m24s+1.12s)" [3476, 3619]
  line "P1: STC (8.0+0.08s)" [3133, 3352]
  line "P1: LTC (60.0+0.60s)" [3378, 3506]
  line "P1: VLTC (2m24s+1.12s)" [3428, 3538]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3200, 3386]
  line "T1: LTC (60.0+0.60s)" [3411, 3532]
  line "T1: VLTC (2m24s+1.12s)" [3452, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3538 | 109 | 28 | 77% | 3243 | 46% |
|  |  | E1 | 3619 | 73 | 60 | 61% | 3348 | 52% |
|  |  | T1 | 3559 | 30 | 258 | 51% | 3545 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3506 | 133 | 24 | 81% | 3087 | 38% |
|  |  | E1 | 3530 | 66 | 68 | 65% | 3302 | 60% |
|  |  | T1 | 3532 | 26 | 346 | 51% | 3511 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3352 | 101 | 26 | 60% | 3270 | 58% |
|  |  | E1 | 3375 | 54 | 88 | 53% | 3337 | 68% |
|  |  | T1 | 3386 | 26 | 378 | 54% | 3339 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3428 | 34 | 204 | 49% | 3434 | 75% |
|  |  | E1 | 3476 | 25 | 394 | 50% | 3478 | 73% |
|  |  | T1 | 3452 | 32 | 244 | 49% | 3456 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3411 | 25 | 406 | 49% | 3422 | 74% |
|  |  | T1 | 3411 | 30 | 286 | 50% | 3411 | 71% |
|  |  | P1 | 3378 | 32 | 242 | 49% | 3386 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3116 | 25 | 464 | 45% | 3155 | 51% |
|  |  | T1 | 3200 | 32 | 268 | 48% | 3213 | 61% |
|  |  | P1 | 3133 | 30 | 292 | 48% | 3144 | 62% |