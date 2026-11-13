# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3308<sub>(-16) | 3541<sub>(+113) | 3580<sub>(+287) |  |
| 1.1 | 2026-06-05 | 3324 | 3428 | 3293 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3364<sub>(+347) | 3536<sub>(+489) | 3594<sub>(+392) |  |
| 1.1 | 2026-06-05 | 3017 | 3047 | 3202 |  |
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

Generated: 2026-11-13 05:39:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.1.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3324, 3308]
  line "E1: LTC (60.0+0.60s)" [3428, 3541]
  line "E1: VLTC (2m24s+1.12s)" [3293, 3580]
  line "P1: STC (8.0+0.08s)" [3017, 3364]
  line "P1: LTC (60.0+0.60s)" [3047, 3536]
  line "P1: VLTC (2m24s+1.12s)" [3202, 3594]
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
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3594 | 38 | 164 | 51% | 3590 | 82% |
|  |  | E1 | 3580 | 28 | 308 | 50% | 3579 | 84% |
|  |  | T1 | 3538 | 24 | 404 | 50% | 3536 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3541 | 28 | 306 | 49% | 3548 | 82% |
|  |  | T1 | 3507 | 27 | 326 | 50% | 3509 | 85% |
|  |  | P1 | 3536 | 33 | 216 | 50% | 3538 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3308 | 26 | 384 | 48% | 3322 | 65% |
|  |  | T1 | 3336 | 29 | 288 | 49% | 3341 | 74% |
|  |  | P1 | 3364 | 31 | 262 | 50% | 3362 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3546 | 28 | 300 | 50% | 3544 | 86% |
|  |  | P1 | 3202 | 184 | 12 | 79% | 2755 | 42% |
|  |  | E1 | 3293 | 156 | 16 | 78% | 2994 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3505 | 24 | 404 | 52% | 3491 | 81% |
|  |  | P1 | 3047 | 199 | 12 | 88% | 2400 | 25% |
|  |  | E1 | 3428 | 138 | 20 | 73% | 3112 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3349 | 28 | 324 | 51% | 3345 | 75% |
|  |  | P1 | 3017 | 176 | 8 | 75% | 2819 | 50% |
|  |  | E1 | 3324 | 137 | 20 | 80% | 2915 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3515 | 27 | 334 | 50% | 3511 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3470 | 26 | 338 | 51% | 3464 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3325 | 27 | 348 | 51% | 3318 | 71% |