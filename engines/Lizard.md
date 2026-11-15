# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3267<sub>(+39) | 3515<sub>(+67) | 3600<sub>(+44) |  |
| 11.1.5 | 2024-12-30 | 3228 | 3448 | 3556 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3286<sub>(+108) | 3483<sub>(+57) | 3541<sub>(-5) |  |
| 11.1.5 | 2024-12-30 | 3178 | 3426 | 3546 |  |
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

Generated: 2026-11-15 05:39:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["11.1.5", "11.2"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3228, 3267]
  line "E1: LTC (60.0+0.60s)" [3448, 3515]
  line "E1: VLTC (2m24s+1.12s)" [3556, 3600]
  line "P1: STC (8.0+0.08s)" [3178, 3286]
  line "P1: LTC (60.0+0.60s)" [3426, 3483]
  line "P1: VLTC (2m24s+1.12s)" [3546, 3541]
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
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3541 | 37 | 172 | 52% | 3528 | 83% |
|  |  | E1 | 3600 | 31 | 240 | 51% | 3591 | 87% |
|  |  | T1 | 3529 | 12 | 1692 | 50% | 3530 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3515 | 30 | 264 | 51% | 3511 | 78% |
|  |  | T1 | 3495 | 12 | 1678 | 50% | 3494 | 82% |
|  |  | P1 | 3483 | 35 | 188 | 51% | 3476 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3267 | 25 | 436 | 45% | 3301 | 61% |
|  |  | T1 | 3314 | 12 | 1734 | 51% | 3308 | 63% |
|  |  | P1 | 3286 | 29 | 304 | 51% | 3281 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3518 | 21 | 544 | 50% | 3515 | 85% |
|  |  | P1 | 3546 | 154 | 38 | 95% | 2709 | 11% |
|  |  | E1 | 3556 | 98 | 28 | 70% | 3387 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3426 | 128 | 28 | 84% | 3004 | 25% |
|  |  | E1 | 3448 | 91 | 40 | 74% | 3168 | 53% |
|  |  | T1 | 3474 | 21 | 544 | 50% | 3475 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3178 | 96 | 32 | 64% | 3044 | 53% |
|  |  | E1 | 3228 | 73 | 56 | 55% | 3156 | 46% |
|  |  | T1 | 3298 | 22 | 552 | 49% | 3306 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3505 | 18 | 760 | 50% | 3503 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3457 | 18 | 768 | 49% | 3465 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3243 | 18 | 816 | 49% | 3245 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3509 | 31 | 252 | 52% | 3455 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3471 | 35 | 192 | 50% | 3468 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3233 | 31 | 272 | 48% | 3244 | 61% |