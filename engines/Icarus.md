# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3318<sub>(-52) | 3553<sub>(+40) | 3594<sub>(+123) |  |
| 1.1 | 2026-06-05 | 3370 | 3513 | 3471 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3326<sub>(+114) | 3498<sub>(+60) | 3556<sub>(+194) |  |
| 1.1 | 2026-06-05 | 3212 | 3438 | 3362 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3336<sub>(-13) | 3507<sub>(+2) | 3538<sub>(-8) |  |
| 1.1 | 2026-06-05 | 3349<sub>(+24) | 3505<sub>(+35) | 3546<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3325 | 3470 | 3515 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:38:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.1.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "E1: STC (8.0+0.08s)" [3370, 3318]
  line "E1: LTC (60.0+0.60s)" [3513, 3553]
  line "E1: VLTC (2m24s+1.12s)" [3471, 3594]
  line "P1: STC (8.0+0.08s)" [3212, 3326]
  line "P1: LTC (60.0+0.60s)" [3438, 3498]
  line "P1: VLTC (2m24s+1.12s)" [3362, 3556]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3325, 3349, 3336]
  line "T1: LTC (60.0+0.60s)" [3470, 3505, 3507]
  line "T1: VLTC (2m24s+1.12s)" [3515, 3546, 3538]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3538 | 24 | 404 | 50% | 3536 | 87% |
|  |  | P1 | 3556 | 38 | 164 | 51% | 3552 | 82% |
|  |  | E1 | 3594 | 28 | 308 | 50% | 3592 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3498 | 33 | 216 | 50% | 3501 | 85% |
|  |  | E1 | 3553 | 28 | 306 | 49% | 3560 | 82% |
|  |  | T1 | 3507 | 27 | 326 | 50% | 3509 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3326 | 31 | 262 | 50% | 3324 | 73% |
|  |  | E1 | 3318 | 26 | 384 | 48% | 3333 | 65% |
|  |  | T1 | 3336 | 29 | 288 | 49% | 3341 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3471 | 104 | 32 | 73% | 3212 | 47% |
|  |  | T1 | 3546 | 28 | 300 | 50% | 3544 | 86% |
|  |  | P1 | 3362 | 120 | 24 | 77% | 2963 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3513 | 111 | 28 | 68% | 3258 | 36% |
|  |  | T1 | 3505 | 24 | 404 | 52% | 3491 | 81% |
|  |  | P1 | 3438 | 138 | 24 | 83% | 2792 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3349 | 28 | 324 | 51% | 3345 | 75% |
|  |  | P1 | 3212 | 122 | 20 | 75% | 2989 | 50% |
|  |  | E1 | 3370 | 93 | 36 | 65% | 3128 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3515 | 27 | 334 | 50% | 3511 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3470 | 26 | 338 | 51% | 3464 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3325 | 27 | 348 | 51% | 3318 | 71% |