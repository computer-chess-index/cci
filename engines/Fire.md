# Engine: Fire

Author: Norman Schmidt

Home: https://github.com/Firefather/fire

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3132<sub>(+19) | 3384<sub>(+6) | 3475<sub>(-13) |  |
| 9.3 | 2024-03-10 | 3113 | 3378 | 3488 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3133<sub>(+52) | 3367<sub>(+55) | 3410<sub>(-119) |  |
| 9.3 | 2024-03-10 | 3081 | 3312 | 3529 |  |
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

Generated: 2026-11-18 05:38:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3113, 3132]
  line "E1: LTC (60.0+0.60s)" [3378, 3384]
  line "E1: VLTC (2m24s+1.12s)" [3488, 3475]
  line "P1: STC (8.0+0.08s)" [3081, 3133]
  line "P1: LTC (60.0+0.60s)" [3312, 3367]
  line "P1: VLTC (2m24s+1.12s)" [3529, 3410]
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
|  |  | E1 | 3475 | 29 | 304 | 50% | 3474 | 73% |
|  |  | P1 | 3410 | 33 | 224 | 49% | 3421 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3394 | 18 | 748 | 50% | 3393 | 71% |
|  |  | E1 | 3384 | 25 | 408 | 53% | 3357 | 66% |
|  |  | P1 | 3367 | 27 | 348 | 52% | 3353 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3156 | 17 | 948 | 51% | 3148 | 60% |
|  |  | E1 | 3132 | 27 | 378 | 49% | 3143 | 54% |
|  |  | P1 | 3133 | 31 | 298 | 48% | 3152 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3529 | 151 | 16 | 78% | 3174 | 44% |
|  |  | T1 | 3438 | 13 | 1520 | 49% | 3440 | 75% |
|  |  | E1 | 3488 | 64 | 72 | 58% | 3316 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3384 | 13 | 1496 | 50% | 3384 | 73% |
|  |  | E1 | 3378 | 58 | 80 | 54% | 3343 | 59% |
|  |  | P1 | 3312 | 94 | 36 | 60% | 3205 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3113 | 58 | 92 | 51% | 3092 | 42% |
|  |  | P1 | 3081 | 86 | 48 | 63% | 2819 | 38% |
|  |  | T1 | 3156 | 14 | 1428 | 51% | 3133 | 57% |