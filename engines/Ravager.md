# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3363<sub>(+413) | 3606<sub>(+307) | 3652<sub>(+211) |  |
| 3.3.0 | 2026-10-09 | 2950<sub>(+416) | 3299<sub>(+317) | 3441<sub>(+322) |  |
| 2.0 | 2026-08-23 | 2534 | 2982 | 3119 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3360<sub>(+359) | 3580<sub>(+283) | 3582<sub>(+189) |  |
| 3.3.0 | 2026-10-09 | 3001<sub>(+358) | 3297<sub>(+261) | 3393<sub>(+208) |  |
| 2.0 | 2026-08-23 | 2643 | 3036 | 3185 |  |
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

Generated: 2026-11-20 05:41:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2534, 2950, 3363]
  line "E1: LTC (60.0+0.60s)" [2982, 3299, 3606]
  line "E1: VLTC (2m24s+1.12s)" [3119, 3441, 3652]
  line "P1: STC (8.0+0.08s)" [2643, 3001, 3360]
  line "P1: LTC (60.0+0.60s)" [3036, 3297, 3580]
  line "P1: VLTC (2m24s+1.12s)" [3185, 3393, 3582]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3652 | 29 | 274 | 48% | 3661 | 86% |
|  |  | P1 | 3582 | 39 | 160 | 55% | 3548 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3606 | 32 | 230 | 53% | 3579 | 81% |
|  |  | P1 | 3580 | 38 | 160 | 48% | 3594 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3360 | 41 | 152 | 53% | 3333 | 72% |
|  |  | E1 | 3363 | 27 | 362 | 55% | 3322 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3393 | 43 | 138 | 53% | 3370 | 70% |
|  |  | E1 | 3441 | 32 | 244 | 50% | 3438 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3297 | 28 | 334 | 57% | 3248 | 68% |
|  |  | E1 | 3299 | 29 | 312 | 54% | 3270 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3001 | 35 | 240 | 50% | 2984 | 55% |
|  |  | E1 | 2950 | 34 | 258 | 53% | 2927 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3119 | 30 | 302 | 44% | 3168 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3185 | 37 | 204 | 49% | 3195 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2982 | 30 | 322 | 42% | 3046 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3036 | 39 | 184 | 48% | 3050 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2643 | 37 | 216 | 48% | 2655 | 43% |
|  |  | E1 | 2534 | 35 | 298 | 39% | 2653 | 26% |