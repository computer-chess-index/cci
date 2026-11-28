# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3298<sub>(-7) | 3553<sub>(+8) | 3615<sub>(-3) |  |
| 1.3.0 | 2026-06-17 | 3305 | 3545 | 3618 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3359<sub>(+29) | 3533<sub>(+54) | 3571<sub>(+31) |  |
| 1.3.0 | 2026-06-17 | 3330 | 3479 | 3540 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3359<sub>(+4) | 3524<sub>(-1) | 3549<sub>(-2) |  |
| 1.3.0 | 2026-06-17 | 3355 | 3525 | 3551 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Renegade+<version>&body=###%20Engine%20name%0ARenegade%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:42:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3305, 3298]
  line "E1: LTC (60.0+0.60s)" [3545, 3553]
  line "E1: VLTC (2m24s+1.12s)" [3618, 3615]
  line "P1: STC (8.0+0.08s)" [3330, 3359]
  line "P1: LTC (60.0+0.60s)" [3479, 3533]
  line "P1: VLTC (2m24s+1.12s)" [3540, 3571]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3355, 3359]
  line "T1: LTC (60.0+0.60s)" [3525, 3524]
  line "T1: VLTC (2m24s+1.12s)" [3551, 3549]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3571 | 37 | 186 | 55% | 3502 | 77% |
|  |  | E1 | 3615 | 29 | 288 | 53% | 3529 | 79% |
|  |  | T1 | 3549 | 33 | 206 | 50% | 3553 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3553 | 28 | 320 | 55% | 3480 | 73% |
|  |  | T1 | 3524 | 31 | 244 | 49% | 3530 | 86% |
|  |  | P1 | 3533 | 34 | 216 | 57% | 3447 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3298 | 23 | 510 | 46% | 3328 | 64% |
|  |  | T1 | 3359 | 26 | 380 | 52% | 3347 | 70% |
|  |  | P1 | 3359 | 31 | 256 | 50% | 3362 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3551 | 33 | 226 | 54% | 3511 | 81% |
|  |  | P1 | 3540 | 96 | 40 | 78% | 3127 | 40% |
|  |  | E1 | 3618 | 66 | 66 | 61% | 3349 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3525 | 31 | 260 | 53% | 3474 | 77% |
|  |  | P1 | 3479 | 112 | 28 | 77% | 3197 | 46% |
|  |  | E1 | 3545 | 51 | 100 | 57% | 3452 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3355 | 35 | 218 | 53% | 3297 | 66% |
|  |  | P1 | 3330 | 74 | 48 | 57% | 3271 | 65% |
|  |  | E1 | 3305 | 51 | 112 | 52% | 3245 | 50% |