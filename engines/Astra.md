# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3372<sub>(+9) | 3600<sub>(+24) | 3654<sub>(+24) |  |
| 6.1.1 | 2025-07-21 | 3363 | 3576 | 3630 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3386<sub>(+151) | 3549<sub>(+186) | 3602<sub>(+165) |  |
| 6.1.1 | 2025-07-21 | 3235 | 3363 | 3437 |  |
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

Generated: 2026-11-14 05:36:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3363, 3372]
  line "E1: LTC (60.0+0.60s)" [3576, 3600]
  line "E1: VLTC (2m24s+1.12s)" [3630, 3654]
  line "P1: STC (8.0+0.08s)" [3235, 3386]
  line "P1: LTC (60.0+0.60s)" [3363, 3549]
  line "P1: VLTC (2m24s+1.12s)" [3437, 3602]
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
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3654 | 32 | 264 | 57% | 3521 | 72% |
|  |  | T1 | 3559 | 27 | 312 | 49% | 3567 | 89% |
|  |  | P1 | 3602 | 36 | 188 | 50% | 3568 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3546 | 28 | 294 | 50% | 3545 | 86% |
|  |  | P1 | 3549 | 39 | 174 | 58% | 3463 | 72% |
|  |  | E1 | 3600 | 32 | 264 | 59% | 3418 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3405 | 25 | 398 | 51% | 3401 | 75% |
|  |  | P1 | 3386 | 31 | 256 | 51% | 3379 | 74% |
|  |  | E1 | 3372 | 24 | 448 | 47% | 3390 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 23 | 420 | 52% | 3509 | 87% |
|  |  | P1 | 3437 | 212 | 12 | 92% | 2979 | 17% |
|  |  | E1 | 3630 | 135 | 24 | 79% | 3181 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 25 | 400 | 51% | 3475 | 81% |
|  |  | P1 | 3363 | 141 | 20 | 85% | 3019 | 30% |
|  |  | E1 | 3576 | 118 | 28 | 79% | 3213 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3294 | 23 | 514 | 51% | 3278 | 67% |
|  |  | P1 | 3235 | 139 | 16 | 53% | 3175 | 44% |
|  |  | E1 | 3363 | 90 | 42 | 68% | 3029 | 45% |