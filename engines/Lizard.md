# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3270<sub>(+65) | 3515<sub>(+29) | 3598<sub>(+38) |  |
| 11.1.5 | 2024-12-30 | 3205 | 3486 | 3560 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3313<sub>(+23) | 3507<sub>(+5) | 3565<sub>(-8) |  |
| 11.1.5 | 2024-12-30 | 3290 | 3502 | 3573 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3314<sub>(+16) | 3495<sub>(+21) | 3529<sub>(+11) |  |
| 11.1.5 | 2024-12-30 | 3298<sub>(+55) | 3474<sub>(+17) | 3518<sub>(+13) |  |
| 11.0 | 2024-09-26 | 3243<sub>(+10) | 3457<sub>(-14) | 3505<sub>(-4) |  |
| 10.5 | 2024-07-13 | 3233 | 3471 | 3509 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lizard+<version>&body=###%20Engine%20name%0ALizard%0A%0A###%20Version%0A11.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:40:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "E1: STC (8.0+0.08s)" [3205, 3270]
  line "E1: LTC (60.0+0.60s)" [3486, 3515]
  line "E1: VLTC (2m24s+1.12s)" [3560, 3598]
  line "P1: STC (8.0+0.08s)" [3290, 3313]
  line "P1: LTC (60.0+0.60s)" [3502, 3507]
  line "P1: VLTC (2m24s+1.12s)" [3573, 3565]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3233, 3243, 3298, 3314]
  line "T1: LTC (60.0+0.60s)" [3471, 3457, 3474, 3495]
  line "T1: VLTC (2m24s+1.12s)" [3509, 3505, 3518, 3529]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3565 | 36 | 176 | 52% | 3553 | 83% |
|  |  | E1 | 3598 | 30 | 260 | 51% | 3592 | 86% |
|  |  | T1 | 3529 | 12 | 1692 | 50% | 3530 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3515 | 29 | 288 | 50% | 3514 | 78% |
|  |  | T1 | 3495 | 12 | 1678 | 50% | 3494 | 82% |
|  |  | P1 | 3507 | 35 | 188 | 51% | 3501 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3270 | 24 | 468 | 46% | 3302 | 62% |
|  |  | T1 | 3314 | 12 | 1734 | 51% | 3308 | 63% |
|  |  | P1 | 3313 | 27 | 344 | 50% | 3310 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3518 | 21 | 544 | 50% | 3515 | 85% |
|  |  | P1 | 3573 | 111 | 46 | 86% | 2886 | 24% |
|  |  | E1 | 3560 | 59 | 72 | 58% | 3494 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3502 | 88 | 44 | 70% | 3233 | 45% |
|  |  | E1 | 3486 | 52 | 100 | 63% | 3348 | 69% |
|  |  | T1 | 3474 | 21 | 544 | 50% | 3475 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3290 | 53 | 96 | 58% | 3216 | 67% |
|  |  | E1 | 3205 | 48 | 122 | 50% | 3187 | 55% |
|  |  | T1 | 3298 | 22 | 552 | 49% | 3306 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3505 | 18 | 760 | 50% | 3503 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3457 | 18 | 768 | 49% | 3465 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3243 | 18 | 816 | 49% | 3245 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3509 | 31 | 252 | 52% | 3455 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3471 | 35 | 192 | 50% | 3468 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3233 | 31 | 272 | 48% | 3244 | 61% |