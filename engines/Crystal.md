# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3436<sub>(+92) | 3636<sub>(+40) | 3677<sub>(+24) |  |
| 5 | 2022-11-05 | 3344 | 3596 | 3653 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3411<sub>(+117) | 3580<sub>(-7) | 3619<sub>(+155) |  |
| 5 | 2022-11-05 | 3294 | 3587 | 3464 |  |
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

Generated: 2026-11-19 05:37:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3344, 3436]
  line "E1: LTC (60.0+0.60s)" [3596, 3636]
  line "E1: VLTC (2m24s+1.12s)" [3653, 3677]
  line "P1: STC (8.0+0.08s)" [3294, 3411]
  line "P1: LTC (60.0+0.60s)" [3587, 3580]
  line "P1: VLTC (2m24s+1.12s)" [3464, 3619]
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
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3677 | 28 | 282 | 50% | 3679 | 91% |
|  |  | P1 | 3619 | 39 | 146 | 51% | 3610 | 93% |
|  |  | T1 | 3602 | 31 | 236 | 53% | 3584 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3636 | 28 | 304 | 50% | 3638 | 83% |
|  |  | P1 | 3580 | 39 | 152 | 50% | 3582 | 85% |
|  |  | T1 | 3576 | 20 | 566 | 51% | 3572 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3436 | 25 | 422 | 48% | 3448 | 68% |
|  |  | P1 | 3411 | 31 | 246 | 50% | 3413 | 76% |
|  |  | T1 | 3440 | 18 | 770 | 51% | 3434 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3653 | 68 | 56 | 60% | 3559 | 70% |
|  |  | P1 | 3464 | 102 | 28 | 71% | 3259 | 57% |
|  |  | T1 | 3555 | 27 | 320 | 55% | 3510 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3587 | 113 | 24 | 75% | 3353 | 50% |
|  |  | T1 | 3533 | 12 | 1640 | 50% | 3534 | 86% |
|  |  | E1 | 3596 | 65 | 60 | 59% | 3506 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3390 | 12 | 1796 | 52% | 3378 | 73% |
|  |  | E1 | 3344 | 57 | 84 | 55% | 3290 | 62% |
|  |  | P1 | 3294 | 97 | 36 | 71% | 2842 | 47% |