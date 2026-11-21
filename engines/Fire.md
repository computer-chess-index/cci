# Engine: Fire

Author: Norman Schmidt

Home: https://github.com/Firefather/fire

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3129<sub>(+17) | 3387<sub>(+11) | 3475<sub>(-12) |  |
| 9.3 | 2024-03-10 | 3112 | 3376 | 3487 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3140<sub>(+71) | 3370<sub>(+21) | 3411<sub>(-11) |  |
| 9.3 | 2024-03-10 | 3069 | 3349 | 3422 |  |
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

Generated: 2026-11-21 05:38:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3112, 3129]
  line "E1: LTC (60.0+0.60s)" [3376, 3387]
  line "E1: VLTC (2m24s+1.12s)" [3487, 3475]
  line "P1: STC (8.0+0.08s)" [3069, 3140]
  line "P1: LTC (60.0+0.60s)" [3349, 3370]
  line "P1: VLTC (2m24s+1.12s)" [3422, 3411]
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
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3475 | 28 | 308 | 50% | 3475 | 73% |
|  |  | P1 | 3411 | 33 | 232 | 48% | 3424 | 73% |
|  |  | T1 | 3440 | 18 | 736 | 49% | 3444 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3394 | 18 | 748 | 50% | 3393 | 71% |
|  |  | E1 | 3387 | 25 | 428 | 53% | 3359 | 67% |
|  |  | P1 | 3370 | 27 | 356 | 52% | 3357 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3156 | 17 | 948 | 51% | 3148 | 60% |
|  |  | E1 | 3129 | 27 | 386 | 48% | 3141 | 54% |
|  |  | P1 | 3140 | 30 | 302 | 48% | 3160 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3487 | 64 | 72 | 58% | 3314 | 60% |
|  |  | P1 | 3422 | 90 | 36 | 51% | 3357 | 53% |
|  |  | T1 | 3438 | 13 | 1520 | 49% | 3440 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3384 | 13 | 1496 | 50% | 3384 | 73% |
|  |  | E1 | 3376 | 58 | 80 | 54% | 3343 | 59% |
|  |  | P1 | 3349 | 80 | 48 | 59% | 3252 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3156 | 14 | 1428 | 51% | 3133 | 57% |
|  |  | E1 | 3112 | 58 | 92 | 51% | 3090 | 42% |
|  |  | P1 | 3069 | 68 | 68 | 57% | 2903 | 49% |