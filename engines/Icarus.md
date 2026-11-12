# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3378<sub>(+534) | 3613<sub>(+693) | 3652<sub>(+805) |  |
| 1.1 | 2026-06-05 | 2844 | 2920 | 2847 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3532<sub>(+692) | 3703<sub>(+718) | 3761<sub>(+830) |  |
| 1.1 | 2026-06-05 | 2840 | 2985 | 2931 |  |
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

Generated: 2026-11-12 05:38:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "1.1.1"]
  y-axis "Elo Rating" 2800 --> 3800
  line "E1: STC (8.0+0.08s)" [2844, 3378]
  line "E1: LTC (60.0+0.60s)" [2920, 3613]
  line "E1: VLTC (2m24s+1.12s)" [2847, 3652]
  line "P1: STC (8.0+0.08s)" [2840, 3532]
  line "P1: LTC (60.0+0.60s)" [2985, 3703]
  line "P1: VLTC (2m24s+1.12s)" [2931, 3761]
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
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3761 | 38 | 164 | 51% | 3757 | 82% |
|  |  | E1 | 3652 | 28 | 308 | 50% | 3650 | 84% |
|  |  | T1 | 3538 | 24 | 404 | 50% | 3536 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3703 | 33 | 216 | 50% | 3706 | 85% |
|  |  | E1 | 3613 | 28 | 306 | 49% | 3619 | 82% |
|  |  | T1 | 3507 | 27 | 326 | 50% | 3509 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3532 | 31 | 262 | 50% | 3529 | 73% |
|  |  | E1 | 3378 | 26 | 384 | 48% | 3393 | 65% |
|  |  | T1 | 3336 | 29 | 288 | 49% | 3341 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2847 | 171 | 8 | 63% | 2745 | 50% |
|  |  | T1 | 3546 | 28 | 300 | 50% | 3544 | 86% |
|  |  | P1 | 2931 | 179 | 8 | 75% | 2709 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3505 | 24 | 404 | 52% | 3491 | 81% |
|  |  | P1 | 2985 | 262 | 4 | 100% | 2670 | 0% |
|  |  | E1 | 2920 | 262 | 4 | 100% | 2606 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3349 | 28 | 324 | 51% | 3345 | 75% |
|  |  | P1 | 2840 | 232 | 2 | 50% | 2840 | 100% |
|  |  | E1 | 2844 | 211 | 4 | 75% | 2724 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3515 | 27 | 334 | 50% | 3511 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3470 | 26 | 338 | 51% | 3464 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3325 | 27 | 348 | 51% | 3318 | 71% |