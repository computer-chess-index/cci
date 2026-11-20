# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3441<sub>(+92) | 3640<sub>(+40) | 3680<sub>(+23) |  |
| 5 | 2022-11-05 | 3349 | 3600 | 3657 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3416<sub>(+118) | 3578<sub>(-13) | 3618<sub>(+148) |  |
| 5 | 2022-11-05 | 3298 | 3591 | 3470 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3440<sub>(+50) | 3576<sub>(+43) | 3602<sub>(+47) |  |
| 5 | 2022-11-05 | 3390 | 3533 | 3555 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crystal+<version>&body=###%20Engine%20name%0ACrystal%0A%0A###%20Version%0A9" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:37:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3349, 3441]
  line "E1: LTC (60.0+0.60s)" [3600, 3640]
  line "E1: VLTC (2m24s+1.12s)" [3657, 3680]
  line "P1: STC (8.0+0.08s)" [3298, 3416]
  line "P1: LTC (60.0+0.60s)" [3591, 3578]
  line "P1: VLTC (2m24s+1.12s)" [3470, 3618]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3700
  line "T1: STC (8.0+0.08s)" [3390, 3440]
  line "T1: LTC (60.0+0.60s)" [3533, 3576]
  line "T1: VLTC (2m24s+1.12s)" [3555, 3602]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3602 | 31 | 236 | 53% | 3584 | 89% |
|  |  | E1 | 3680 | 28 | 290 | 50% | 3681 | 91% |
|  |  | P1 | 3618 | 39 | 146 | 51% | 3609 | 93% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3578 | 38 | 156 | 49% | 3582 | 85% |
|  |  | T1 | 3576 | 20 | 566 | 51% | 3572 | 87% |
|  |  | E1 | 3640 | 27 | 310 | 50% | 3642 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3416 | 31 | 246 | 50% | 3417 | 76% |
|  |  | T1 | 3440 | 18 | 770 | 51% | 3434 | 76% |
|  |  | E1 | 3441 | 25 | 422 | 48% | 3452 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3657 | 68 | 56 | 60% | 3561 | 70% |
|  |  | P1 | 3470 | 102 | 28 | 71% | 3264 | 57% |
|  |  | T1 | 3555 | 27 | 320 | 55% | 3510 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3533 | 12 | 1640 | 50% | 3534 | 86% |
|  |  | E1 | 3600 | 65 | 60 | 59% | 3510 | 75% |
|  |  | P1 | 3591 | 113 | 24 | 75% | 3357 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3390 | 12 | 1796 | 52% | 3378 | 73% |
|  |  | E1 | 3349 | 57 | 84 | 55% | 3295 | 62% |
|  |  | P1 | 3298 | 97 | 36 | 71% | 2840 | 47% |