# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3339<sub>(+72) | 3582<sub>(+65) | 3625<sub>(+16) |  |
| 1.0 | 2025-01-08 | 3267 | 3517 | 3609 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3347<sub>(+27) | 3525<sub>(-12) | 3567<sub>(+114) |  |
| 1.0 | 2025-01-08 | 3320 | 3537 | 3453 |  |
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

Generated: 2026-11-23 05:39:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3267, 3339]
  line "E1: LTC (60.0+0.60s)" [3517, 3582]
  line "E1: VLTC (2m24s+1.12s)" [3609, 3625]
  line "P1: STC (8.0+0.08s)" [3320, 3347]
  line "P1: LTC (60.0+0.60s)" [3537, 3525]
  line "P1: VLTC (2m24s+1.12s)" [3453, 3567]
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
|  |  | P1 | 3567 | 37 | 168 | 48% | 3582 | 88% |
|  |  | E1 | 3625 | 29 | 276 | 51% | 3618 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3525 | 37 | 168 | 49% | 3533 | 82% |
|  |  | E1 | 3582 | 29 | 284 | 51% | 3573 | 79% |
|  |  | T1 | 3513 | 16 | 950 | 51% | 3509 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3347 | 32 | 256 | 49% | 3356 | 68% |
|  |  | E1 | 3339 | 24 | 454 | 47% | 3359 | 64% |
|  |  | T1 | 3363 | 15 | 1098 | 50% | 3364 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3548 | 28 | 304 | 49% | 3553 | 86% |
|  |  | P1 | 3453 | 111 | 24 | 67% | 3240 | 58% |
|  |  | E1 | 3609 | 77 | 48 | 59% | 3461 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3537 | 89 | 32 | 64% | 3418 | 72% |
|  |  | E1 | 3517 | 79 | 50 | 66% | 3308 | 52% |
|  |  | T1 | 3498 | 26 | 348 | 51% | 3490 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3320 | 70 | 64 | 61% | 3102 | 53% |
|  |  | E1 | 3267 | 61 | 82 | 58% | 3129 | 50% |
|  |  | T1 | 3348 | 29 | 292 | 49% | 3352 | 75% |