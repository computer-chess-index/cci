# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3332<sub>(+74) | 3576<sub>(+36) | 3617<sub>(+10) |  |
| 1.0 | 2025-01-08 | 3258 | 3540 | 3607 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3359<sub>(+14) | 3536<sub>(+19) | 3578<sub>(+102) |  |
| 1.0 | 2025-01-08 | 3345 | 3517 | 3476 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3363<sub>(+15) | 3513<sub>(+15) | 3544<sub>(-4) |  |
| 1.0 | 2025-01-08 | 3348 | 3498 | 3548 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Horsie+<version>&body=###%20Engine%20name%0AHorsie%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:39:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3258, 3332]
  line "E1: LTC (60.0+0.60s)" [3540, 3576]
  line "E1: VLTC (2m24s+1.12s)" [3607, 3617]
  line "P1: STC (8.0+0.08s)" [3345, 3359]
  line "P1: LTC (60.0+0.60s)" [3517, 3536]
  line "P1: VLTC (2m24s+1.12s)" [3476, 3578]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3348, 3363]
  line "T1: LTC (60.0+0.60s)" [3498, 3513]
  line "T1: VLTC (2m24s+1.12s)" [3548, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3617 | 29 | 280 | 51% | 3611 | 84% |
|  |  | T1 | 3544 | 16 | 946 | 50% | 3541 | 87% |
|  |  | P1 | 3578 | 36 | 172 | 48% | 3592 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3513 | 16 | 950 | 51% | 3509 | 83% |
|  |  | P1 | 3536 | 37 | 168 | 49% | 3544 | 82% |
|  |  | E1 | 3576 | 29 | 288 | 51% | 3568 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3363 | 15 | 1098 | 50% | 3364 | 69% |
|  |  | P1 | 3359 | 31 | 260 | 49% | 3367 | 68% |
|  |  | E1 | 3332 | 23 | 486 | 47% | 3355 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3607 | 62 | 68 | 57% | 3505 | 72% |
|  |  | T1 | 3548 | 28 | 304 | 49% | 3553 | 86% |
|  |  | P1 | 3476 | 102 | 28 | 66% | 3278 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3498 | 26 | 348 | 51% | 3490 | 85% |
|  |  | P1 | 3517 | 80 | 40 | 56% | 3459 | 68% |
|  |  | E1 | 3540 | 57 | 86 | 62% | 3401 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3348 | 29 | 292 | 49% | 3352 | 75% |
|  |  | P1 | 3345 | 68 | 68 | 62% | 3127 | 53% |
|  |  | E1 | 3258 | 44 | 146 | 53% | 3187 | 55% |