# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3328<sub>(-31) | 3563<sub>(+8) | 3603<sub>(+50) |  |
| 1.1 | 2026-06-05 | 3359 | 3555 | 3553 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3324<sub>(-36) | 3495<sub>(+5) | 3553<sub>(+108) |  |
| 1.1 | 2026-06-05 | 3360 | 3490 | 3445 |  |
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

Generated: 2026-11-22 05:38:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3359, 3328]
  line "E1: LTC (60.0+0.60s)" [3555, 3563]
  line "E1: VLTC (2m24s+1.12s)" [3553, 3603]
  line "P1: STC (8.0+0.08s)" [3360, 3324]
  line "P1: LTC (60.0+0.60s)" [3490, 3495]
  line "P1: VLTC (2m24s+1.12s)" [3445, 3553]
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
|  |  | P1 | 3553 | 37 | 168 | 51% | 3551 | 81% |
|  |  | E1 | 3603 | 27 | 332 | 50% | 3602 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3507 | 27 | 326 | 50% | 3509 | 85% |
|  |  | P1 | 3495 | 33 | 216 | 50% | 3498 | 85% |
|  |  | E1 | 3563 | 27 | 314 | 49% | 3569 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3336 | 29 | 288 | 49% | 3341 | 74% |
|  |  | P1 | 3324 | 31 | 266 | 50% | 3320 | 73% |
|  |  | E1 | 3328 | 25 | 420 | 48% | 3344 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3445 | 102 | 32 | 72% | 3083 | 56% |
|  |  | E1 | 3553 | 61 | 76 | 65% | 3393 | 67% |
|  |  | T1 | 3546 | 28 | 300 | 50% | 3544 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3555 | 65 | 64 | 59% | 3428 | 64% |
|  |  | T1 | 3505 | 24 | 404 | 52% | 3491 | 81% |
|  |  | P1 | 3490 | 108 | 32 | 77% | 2947 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3359 | 60 | 80 | 54% | 3275 | 55% |
|  |  | T1 | 3349 | 28 | 324 | 51% | 3345 | 75% |
|  |  | P1 | 3360 | 83 | 44 | 69% | 3183 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3515 | 27 | 334 | 50% | 3511 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3470 | 26 | 338 | 51% | 3464 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3325 | 27 | 348 | 51% | 3318 | 71% |