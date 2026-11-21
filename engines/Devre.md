# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3376<sub>(+259) | 3532<sub>(+118) | 3621<sub>(+145) |  |
| 6.0 | 2024-08-10 | 3117 | 3414 | 3476 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3370<sub>(+226) | 3515<sub>(+129) | 3555<sub>(+123) |  |
| 6.0 | 2024-08-10 | 3144 | 3386 | 3432 |  |
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

Generated: 2026-11-21 05:37:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3117, 3376]
  line "E1: LTC (60.0+0.60s)" [3414, 3532]
  line "E1: VLTC (2m24s+1.12s)" [3476, 3621]
  line "P1: STC (8.0+0.08s)" [3144, 3370]
  line "P1: LTC (60.0+0.60s)" [3386, 3515]
  line "P1: VLTC (2m24s+1.12s)" [3432, 3555]
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
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3559 | 30 | 258 | 51% | 3545 | 84% |
|  |  | P1 | 3555 | 99 | 32 | 73% | 3294 | 53% |
|  |  | E1 | 3621 | 73 | 60 | 61% | 3348 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3532 | 26 | 346 | 51% | 3511 | 81% |
|  |  | P1 | 3515 | 132 | 24 | 81% | 3101 | 38% |
|  |  | E1 | 3532 | 66 | 68 | 65% | 3303 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3386 | 26 | 378 | 54% | 3339 | 70% |
|  |  | P1 | 3370 | 101 | 26 | 60% | 3286 | 58% |
|  |  | E1 | 3376 | 54 | 88 | 53% | 3339 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3452 | 32 | 244 | 49% | 3456 | 76% |
|  |  | P1 | 3432 | 34 | 208 | 49% | 3440 | 76% |
|  |  | E1 | 3476 | 25 | 398 | 50% | 3479 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3411 | 30 | 286 | 50% | 3411 | 71% |
|  |  | P1 | 3386 | 32 | 242 | 49% | 3393 | 75% |
|  |  | E1 | 3414 | 24 | 418 | 49% | 3422 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3200 | 32 | 268 | 48% | 3213 | 61% |
|  |  | P1 | 3144 | 30 | 296 | 48% | 3155 | 61% |
|  |  | E1 | 3117 | 25 | 468 | 45% | 3159 | 51% |