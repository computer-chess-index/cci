# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3264<sub>(-22) | 3492<sub>(0) | 3532<sub>(-24) |  |
| 5.0 | 2026-11-02 | 3286<sub>(+413) | 3492<sub>(+252) | 3556<sub>(+213) |  |
| 4.1 | 2026-08-06 | 2873 | 3240 | 3343 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3432<sub>(+18) | 3665<sub>(+66) | 3656<sub>(+26) |  |
| 5.0 | 2026-11-02 | 3414<sub>(+443) | 3599<sub>(+225) | 3630<sub>(+155) |  |
| 4.1 | 2026-08-06 | 2971 | 3374 | 3475 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-08-06 | 2871 | 3163 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+NarcNext+<version>&body=###%20Engine%20name%0ANarcNext%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:40:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [2873, 3286, 3264]
  line "E1: LTC (60.0+0.60s)" [3240, 3492, 3492]
  line "E1: VLTC (2m24s+1.12s)" [3343, 3556, 3532]
  line "P1: STC (8.0+0.08s)" [2971, 3414, 3432]
  line "P1: LTC (60.0+0.60s)" [3374, 3599, 3665]
  line "P1: VLTC (2m24s+1.12s)" [3475, 3630, 3656]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3656 | 65 | 54 | 51% | 3648 | 83% |
|  |  | E1 | 3532 | 38 | 168 | 51% | 3528 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3665 | 47 | 112 | 50% | 3664 | 72% |
|  |  | E1 | 3492 | 39 | 162 | 51% | 3486 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3432 | 46 | 120 | 49% | 3440 | 63% |
|  |  | E1 | 3264 | 35 | 218 | 52% | 3252 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3630 | 44 | 130 | 52% | 3615 | 72% |
|  |  | E1 | 3556 | 34 | 224 | 54% | 3525 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3599 | 34 | 214 | 57% | 3551 | 75% |
|  |  | E1 | 3492 | 31 | 264 | 54% | 3461 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3414 | 47 | 122 | 55% | 3372 | 58% |
|  |  | E1 | 3286 | 32 | 272 | 53% | 3251 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3343 | 27 | 378 | 47% | 3364 | 58% |
|  |  | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3475 | 31 | 276 | 48% | 3488 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3240 | 28 | 372 | 48% | 3254 | 47% |
|  |  | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3374 | 35 | 226 | 49% | 3382 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2873 | 29 | 386 | 45% | 2920 | 37% |
|  |  | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2971 | 37 | 236 | 46% | 3016 | 38% |