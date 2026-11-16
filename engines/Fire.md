# Engine: Fire

Author: Norman Schmidt

Home: https://github.com/Firefather/fire

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3137<sub>(+14) | 3390<sub>(+18) | 3475<sub>(-17) |  |
| 9.3 | 2024-03-10 | 3123 | 3372 | 3492 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3128<sub>(+54) | 3359<sub>(+100) | 3402<sub>(-116) |  |
| 9.3 | 2024-03-10 | 3074 | 3259 | 3518 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3156<sub>(0) | 3394<sub>(+10) | 3440<sub>(+2) |  |
| 9.3 | 2024-03-10 | 3156 | 3384 | 3438 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fire+<version>&body=###%20Engine%20name%0AFire%0A%0A###%20Version%0A10.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:38:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3123, 3137]
  line "E1: LTC (60.0+0.60s)" [3372, 3390]
  line "E1: VLTC (2m24s+1.12s)" [3492, 3475]
  line "P1: STC (8.0+0.08s)" [3074, 3128]
  line "P1: LTC (60.0+0.60s)" [3259, 3359]
  line "P1: VLTC (2m24s+1.12s)" [3518, 3402]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "T1: STC (8.0+0.08s)" [3156, 3156]
  line "T1: LTC (60.0+0.60s)" [3384, 3394]
  line "T1: VLTC (2m24s+1.12s)" [3438, 3440]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3440 | 18 | 736 | 49% | 3444 | 75% |
|  |  | E1 | 3475 | 29 | 292 | 50% | 3478 | 73% |
|  |  | P1 | 3402 | 33 | 224 | 49% | 3413 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3394 | 18 | 748 | 50% | 3393 | 71% |
|  |  | E1 | 3390 | 25 | 404 | 53% | 3362 | 67% |
|  |  | P1 | 3359 | 27 | 348 | 52% | 3347 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3156 | 17 | 948 | 51% | 3148 | 60% |
|  |  | E1 | 3137 | 27 | 378 | 49% | 3148 | 54% |
|  |  | P1 | 3128 | 31 | 282 | 48% | 3144 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3518 | 151 | 16 | 78% | 3163 | 44% |
|  |  | T1 | 3438 | 13 | 1520 | 49% | 3440 | 75% |
|  |  | E1 | 3492 | 66 | 68 | 58% | 3310 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3384 | 13 | 1496 | 50% | 3384 | 73% |
|  |  | E1 | 3372 | 62 | 68 | 54% | 3343 | 60% |
|  |  | P1 | 3259 | 107 | 28 | 57% | 3170 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3123 | 64 | 76 | 51% | 3092 | 42% |
|  |  | P1 | 3074 | 97 | 40 | 65% | 2758 | 35% |
|  |  | T1 | 3156 | 14 | 1428 | 51% | 3133 | 57% |