# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3417<sub>(+413) | 3665<sub>(+306) | 3713<sub>(+211) |  |
| 3.3.0 | 2026-10-09 | 3004<sub>(+415) | 3359<sub>(+317) | 3502<sub>(+321) |  |
| 2.0 | 2026-08-23 | 2589 | 3042 | 3181 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3578<sub>(+377) | 3802<sub>(+293) | 3798<sub>(+189) |  |
| 3.3.0 | 2026-10-09 | 3201<sub>(+397) | 3509<sub>(+270) | 3609<sub>(+210) |  |
| 2.0 | 2026-08-23 | 2804 | 3239 | 3399 |  |
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

Generated: 2026-11-04 05:41:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3900
  line "E1: STC (8.0+0.08s)" [2589, 3004, 3417]
  line "E1: LTC (60.0+0.60s)" [3042, 3359, 3665]
  line "E1: VLTC (2m24s+1.12s)" [3181, 3502, 3713]
  line "P1: STC (8.0+0.08s)" [2804, 3201, 3578]
  line "P1: LTC (60.0+0.60s)" [3239, 3509, 3802]
  line "P1: VLTC (2m24s+1.12s)" [3399, 3609, 3798]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3798 | 40 | 152 | 55% | 3762 | 80% |
|  |  | E1 | 3713 | 31 | 242 | 48% | 3727 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3802 | 41 | 140 | 48% | 3811 | 80% |
|  |  | E1 | 3665 | 38 | 170 | 54% | 3632 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3417 | 31 | 288 | 55% | 3372 | 60% |
|  |  | P1 | 3578 | 43 | 136 | 53% | 3548 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3609 | 43 | 134 | 53% | 3586 | 69% |
|  |  | E1 | 3502 | 34 | 208 | 50% | 3499 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3509 | 28 | 322 | 56% | 3461 | 68% |
|  |  | E1 | 3359 | 31 | 276 | 54% | 3325 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3201 | 36 | 216 | 50% | 3190 | 56% |
|  |  | E1 | 3004 | 36 | 226 | 54% | 2973 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3399 | 37 | 204 | 49% | 3410 | 54% |
|  |  | E1 | 3181 | 30 | 302 | 44% | 3231 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3239 | 39 | 184 | 48% | 3252 | 52% |
|  |  | E1 | 3042 | 30 | 322 | 42% | 3105 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2589 | 35 | 298 | 39% | 2708 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2804 | 37 | 216 | 48% | 2815 | 43% |