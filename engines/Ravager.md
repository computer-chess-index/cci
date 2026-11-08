# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3418<sub>(+414) | 3671<sub>(+311) | 3714<sub>(+212) |  |
| 3.3.0 | 2026-10-09 | 3004<sub>(+415) | 3360<sub>(+318) | 3502<sub>(+321) |  |
| 2.0 | 2026-08-23 | 2589 | 3042 | 3181 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3557<sub>(+378) | 3780<sub>(+292) | 3779<sub>(+192) |  |
| 3.3.0 | 2026-10-09 | 3179<sub>(+395) | 3488<sub>(+271) | 3587<sub>(+208) |  |
| 2.0 | 2026-08-23 | 2784 | 3217 | 3379 |  |
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

Generated: 2026-11-08 05:41:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3800
  line "E1: STC (8.0+0.08s)" [2589, 3004, 3418]
  line "E1: LTC (60.0+0.60s)" [3042, 3360, 3671]
  line "E1: VLTC (2m24s+1.12s)" [3181, 3502, 3714]
  line "P1: STC (8.0+0.08s)" [2784, 3179, 3557]
  line "P1: LTC (60.0+0.60s)" [3217, 3488, 3780]
  line "P1: VLTC (2m24s+1.12s)" [3379, 3587, 3779]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3714 | 31 | 246 | 48% | 3727 | 87% |
|  |  | P1 | 3779 | 39 | 156 | 55% | 3745 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3671 | 33 | 214 | 54% | 3642 | 80% |
|  |  | P1 | 3780 | 40 | 148 | 48% | 3791 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3418 | 29 | 312 | 55% | 3376 | 61% |
|  |  | P1 | 3557 | 43 | 136 | 53% | 3528 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3587 | 43 | 134 | 53% | 3564 | 69% |
|  |  | E1 | 3502 | 34 | 208 | 50% | 3499 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3488 | 28 | 322 | 56% | 3441 | 68% |
|  |  | E1 | 3360 | 31 | 276 | 54% | 3325 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3179 | 36 | 216 | 50% | 3168 | 56% |
|  |  | E1 | 3004 | 36 | 226 | 54% | 2974 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3181 | 30 | 302 | 44% | 3229 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3379 | 37 | 204 | 49% | 3390 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3042 | 30 | 322 | 42% | 3105 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3217 | 39 | 184 | 48% | 3231 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2589 | 35 | 298 | 39% | 2708 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2784 | 37 | 216 | 48% | 2793 | 43% |