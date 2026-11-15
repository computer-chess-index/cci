# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3378<sub>(+49) | 3600<sub>(+29) | 3657<sub>(+15) |  |
| 6.1.1 | 2025-07-21 | 3329 | 3571 | 3642 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3376<sub>(+46) | 3540<sub>(+178) | 3592<sub>(+148) |  |
| 6.1.1 | 2025-07-21 | 3330 | 3362 | 3444 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3405<sub>(+111) | 3546<sub>(+59) | 3559<sub>(+34) |  |
| 6.1.1 | 2025-07-21 | 3294 | 3487 | 3525 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Astra+<version>&body=###%20Engine%20name%0AAstra%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:36:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3329, 3378]
  line "E1: LTC (60.0+0.60s)" [3571, 3600]
  line "E1: VLTC (2m24s+1.12s)" [3642, 3657]
  line "P1: STC (8.0+0.08s)" [3330, 3376]
  line "P1: LTC (60.0+0.60s)" [3362, 3540]
  line "P1: VLTC (2m24s+1.12s)" [3444, 3592]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3294, 3405]
  line "T1: LTC (60.0+0.60s)" [3487, 3546]
  line "T1: VLTC (2m24s+1.12s)" [3525, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3559 | 27 | 312 | 49% | 3567 | 89% |
|  |  | P1 | 3592 | 36 | 188 | 50% | 3559 | 82% |
|  |  | E1 | 3657 | 32 | 264 | 57% | 3524 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3546 | 28 | 294 | 50% | 3545 | 86% |
|  |  | P1 | 3540 | 39 | 174 | 58% | 3453 | 72% |
|  |  | E1 | 3600 | 32 | 268 | 59% | 3422 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3405 | 25 | 398 | 51% | 3401 | 75% |
|  |  | P1 | 3376 | 31 | 256 | 51% | 3370 | 74% |
|  |  | E1 | 3378 | 24 | 456 | 48% | 3393 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 23 | 420 | 52% | 3509 | 87% |
|  |  | P1 | 3444 | 213 | 12 | 92% | 2981 | 17% |
|  |  | E1 | 3642 | 104 | 32 | 72% | 3294 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3362 | 140 | 20 | 85% | 3019 | 30% |
|  |  | E1 | 3571 | 99 | 36 | 71% | 3301 | 47% |
|  |  | T1 | 3487 | 25 | 400 | 51% | 3475 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3330 | 115 | 24 | 63% | 3194 | 42% |
|  |  | E1 | 3329 | 76 | 58 | 59% | 3119 | 43% |
|  |  | T1 | 3294 | 23 | 514 | 51% | 3278 | 67% |