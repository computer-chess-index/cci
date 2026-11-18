# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3336<sub>(+69) | 3584<sub>(+67) | 3626<sub>(+16) |  |
| 1.0 | 2025-01-08 | 3267 | 3517 | 3610 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3336<sub>(+38) | 3518<sub>(+17) | 3565<sub>(+122) |  |
| 1.0 | 2025-01-08 | 3298 | 3501 | 3443 |  |
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

Generated: 2026-11-18 05:39:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3267, 3336]
  line "E1: LTC (60.0+0.60s)" [3517, 3584]
  line "E1: VLTC (2m24s+1.12s)" [3610, 3626]
  line "P1: STC (8.0+0.08s)" [3298, 3336]
  line "P1: LTC (60.0+0.60s)" [3501, 3518]
  line "P1: VLTC (2m24s+1.12s)" [3443, 3565]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3544 | 16 | 946 | 50% | 3541 | 87% |
|  |  | P1 | 3565 | 38 | 160 | 48% | 3580 | 87% |
|  |  | E1 | 3626 | 30 | 256 | 51% | 3617 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3518 | 38 | 164 | 48% | 3529 | 82% |
|  |  | E1 | 3584 | 30 | 272 | 52% | 3572 | 78% |
|  |  | T1 | 3513 | 16 | 950 | 51% | 3509 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3336 | 32 | 252 | 49% | 3345 | 67% |
|  |  | E1 | 3336 | 24 | 446 | 47% | 3359 | 64% |
|  |  | T1 | 3363 | 15 | 1098 | 50% | 3364 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3548 | 28 | 304 | 49% | 3553 | 86% |
|  |  | P1 | 3443 | 111 | 24 | 67% | 3232 | 58% |
|  |  | E1 | 3610 | 77 | 48 | 59% | 3463 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3501 | 131 | 16 | 72% | 3316 | 56% |
|  |  | E1 | 3517 | 79 | 50 | 66% | 3306 | 52% |
|  |  | T1 | 3498 | 26 | 348 | 51% | 3490 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3298 | 78 | 52 | 63% | 3032 | 54% |
|  |  | E1 | 3267 | 61 | 82 | 58% | 3129 | 50% |
|  |  | T1 | 3348 | 29 | 292 | 49% | 3352 | 75% |