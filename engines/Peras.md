# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3258<sub>(-25) | 3542<sub>(+24) | 3607<sub>(+28) |  |
| 3.0.0 | 2026-09-13 | 3283 | 3518 | 3579 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3251<sub>(-27) | 3495<sub>(-2) | 3559<sub>(+48) |  |
| 3.0.0 | 2026-09-13 | 3278 | 3497 | 3511 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-09-13 | 3283 | 3488 | 3521 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Peras+<version>&body=###%20Engine%20name%0APeras%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:41:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3283, 3258]
  line "E1: LTC (60.0+0.60s)" [3518, 3542]
  line "E1: VLTC (2m24s+1.12s)" [3579, 3607]
  line "P1: STC (8.0+0.08s)" [3278, 3251]
  line "P1: LTC (60.0+0.60s)" [3497, 3495]
  line "P1: VLTC (2m24s+1.12s)" [3511, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3559 | 41 | 138 | 53% | 3542 | 85% |
|  |  | E1 | 3607 | 35 | 196 | 51% | 3605 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3495 | 45 | 112 | 51% | 3484 | 85% |
|  |  | E1 | 3542 | 27 | 320 | 48% | 3557 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3251 | 27 | 340 | 45% | 3287 | 68% |
|  |  | E1 | 3258 | 28 | 344 | 49% | 3267 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3511 | 36 | 184 | 48% | 3525 | 82% |
|  |  | E1 | 3579 | 31 | 244 | 48% | 3594 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3497 | 35 | 192 | 48% | 3506 | 79% |
|  |  | E1 | 3518 | 30 | 264 | 48% | 3533 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |
|  |  | P1 | 3278 | 34 | 232 | 48% | 3290 | 58% |
|  |  | E1 | 3283 | 29 | 316 | 48% | 3297 | 60% |