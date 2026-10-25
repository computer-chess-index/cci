# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3410<sub>(+409) | 3660<sub>(+304) | 3722<sub>(+221) |  |
| 3.3.0 | 2026-10-09 | 3001<sub>(+413) | 3356<sub>(+317) | 3501<sub>(+323) |  |
| 2.0 | 2026-08-23 | 2588 | 3039 | 3178 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3526<sub>(+374) | 3764<sub>(+304) | 3750<sub>(+191) |  |
| 3.3.0 | 2026-10-09 | 3152<sub>(+395) | 3460<sub>(+269) | 3559<sub>(+210) |  |
| 2.0 | 2026-08-23 | 2757 | 3191 | 3349 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-25 05:42:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3800
  line "E1: STC (8.0+0.08s)" [2588, 3001, 3410]
  line "E1: LTC (60.0+0.60s)" [3039, 3356, 3660]
  line "E1: VLTC (2m24s+1.12s)" [3178, 3501, 3722]
  line "P1: STC (8.0+0.08s)" [2757, 3152, 3526]
  line "P1: LTC (60.0+0.60s)" [3191, 3460, 3764]
  line "P1: VLTC (2m24s+1.12s)" [3349, 3559, 3750]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3722 | 33 | 208 | 48% | 3735 | 86% |
|  |  | P1 | 3750 | 42 | 136 | 56% | 3708 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3660 | 41 | 144 | 54% | 3626 | 82% |
|  |  | P1 | 3764 | 51 | 92 | 48% | 3768 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3410 | 32 | 260 | 55% | 3366 | 61% |
|  |  | P1 | 3526 | 44 | 128 | 53% | 3498 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3559 | 43 | 134 | 53% | 3536 | 69% |
|  |  | E1 | 3501 | 34 | 208 | 50% | 3498 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3460 | 28 | 322 | 56% | 3413 | 68% |
|  |  | E1 | 3356 | 31 | 276 | 54% | 3321 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3152 | 36 | 216 | 50% | 3141 | 56% |
|  |  | E1 | 3001 | 36 | 226 | 54% | 2970 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3178 | 30 | 302 | 44% | 3227 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3349 | 37 | 204 | 49% | 3362 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3039 | 30 | 322 | 42% | 3102 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3191 | 39 | 184 | 48% | 3205 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2588 | 35 | 298 | 39% | 2707 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2757 | 37 | 216 | 48% | 2766 | 43% |