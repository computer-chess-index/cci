# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3056<sub>(+47) | 3340<sub>(+95) | 3406<sub>(+42) |  |
| 1.0.1 | 2026-07-27 | 3009 | 3245 | 3364 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3100<sub>(+45) | 3348<sub>(+61) | 3402<sub>(+13) |  |
| 1.0.1 | 2026-07-27 | 3055 | 3287 | 3389 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3101<sub>(+23) | 3380<sub>(+98) | 3410<sub>(+51) |  |
| 1.0.1 | 2026-07-27 | 3078<sub>(+1) | 3282<sub>(-21) | 3359<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3077 | 3303 | 3355 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ursus+<version>&body=###%20Engine%20name%0AUrsus%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:43:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3009, 3056]
  line "E1: LTC (60.0+0.60s)" [3245, 3340]
  line "E1: VLTC (2m24s+1.12s)" [3364, 3406]
  line "P1: STC (8.0+0.08s)" [3055, 3100]
  line "P1: LTC (60.0+0.60s)" [3287, 3348]
  line "P1: VLTC (2m24s+1.12s)" [3389, 3402]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "T1: STC (8.0+0.08s)" [3077, 3078, 3101]
  line "T1: LTC (60.0+0.60s)" [3303, 3282, 3380]
  line "T1: VLTC (2m24s+1.12s)" [3355, 3359, 3410]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3410 | 38 | 172 | 51% | 3402 | 73% |
|  |  | P1 | 3402 | 41 | 148 | 54% | 3351 | 73% |
|  |  | E1 | 3406 | 29 | 326 | 52% | 3348 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3380 | 38 | 172 | 50% | 3378 | 69% |
|  |  | P1 | 3348 | 42 | 160 | 58% | 3271 | 61% |
|  |  | E1 | 3340 | 33 | 248 | 53% | 3303 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3101 | 35 | 220 | 48% | 3121 | 57% |
|  |  | P1 | 3100 | 39 | 192 | 49% | 3097 | 48% |
|  |  | E1 | 3056 | 34 | 274 | 57% | 2981 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3359 | 37 | 184 | 48% | 3370 | 68% |
|  |  | P1 | 3389 | 80 | 44 | 60% | 3270 | 57% |
|  |  | E1 | 3364 | 82 | 44 | 58% | 3227 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3282 | 37 | 184 | 49% | 3285 | 66% |
|  |  | P1 | 3287 | 72 | 48 | 58% | 3216 | 71% |
|  |  | E1 | 3245 | 73 | 56 | 58% | 3108 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3078 | 46 | 132 | 52% | 3066 | 52% |
|  |  | P1 | 3055 | 77 | 44 | 42% | 3116 | 61% |
|  |  | E1 | 3009 | 76 | 52 | 49% | 2977 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3355 | 40 | 160 | 55% | 3309 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3303 | 40 | 166 | 55% | 3252 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3077 | 49 | 120 | 55% | 3023 | 53% |