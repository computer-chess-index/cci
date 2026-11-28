# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3330<sub>(+66) | 3572<sub>(+34) | 3615<sub>(+9) |  |
| 1.0 | 2025-01-08 | 3264 | 3538 | 3606 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3359<sub>(+14) | 3536<sub>(+19) | 3579<sub>(+103) |  |
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

Generated: 2026-11-28 05:39:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3264, 3330]
  line "E1: LTC (60.0+0.60s)" [3538, 3572]
  line "E1: VLTC (2m24s+1.12s)" [3606, 3615]
  line "P1: STC (8.0+0.08s)" [3345, 3359]
  line "P1: LTC (60.0+0.60s)" [3517, 3536]
  line "P1: VLTC (2m24s+1.12s)" [3476, 3579]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3579 | 36 | 172 | 48% | 3592 | 88% |
|  |  | E1 | 3615 | 29 | 280 | 51% | 3610 | 84% |
|  |  | T1 | 3544 | 16 | 946 | 50% | 3541 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3536 | 37 | 168 | 49% | 3544 | 82% |
|  |  | E1 | 3572 | 29 | 292 | 51% | 3567 | 79% |
|  |  | T1 | 3513 | 16 | 950 | 51% | 3509 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3359 | 31 | 260 | 49% | 3367 | 68% |
|  |  | E1 | 3330 | 23 | 490 | 47% | 3352 | 65% |
|  |  | T1 | 3363 | 15 | 1098 | 50% | 3364 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3548 | 28 | 304 | 49% | 3553 | 86% |
|  |  | P1 | 3476 | 102 | 28 | 66% | 3279 | 61% |
|  |  | E1 | 3606 | 62 | 68 | 57% | 3502 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3517 | 80 | 40 | 56% | 3459 | 68% |
|  |  | E1 | 3538 | 55 | 90 | 61% | 3406 | 67% |
|  |  | T1 | 3498 | 26 | 348 | 51% | 3490 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3345 | 68 | 68 | 62% | 3128 | 53% |
|  |  | E1 | 3264 | 42 | 164 | 54% | 3194 | 55% |
|  |  | T1 | 3348 | 29 | 292 | 49% | 3352 | 75% |