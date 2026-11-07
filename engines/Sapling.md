# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3148<sub>(+35) | 3397<sub>(-8) | 3497<sub>(+23) |  |
| 2.0.0 | 2026-10-21 | 3113 | 3405 | 3474 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3279<sub>(+59) | 3499<sub>(-34) | 3596<sub>(+18) |  |
| 2.0.0 | 2026-10-21 | 3220 | 3533 | 3578 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3220 | 3533 | 3578 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sapling+<version>&body=###%20Engine%20name%0ASapling%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:42:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3113, 3148]
  line "E1: LTC (60.0+0.60s)" [3405, 3397]
  line "E1: VLTC (2m24s+1.12s)" [3474, 3497]
  line "P1: STC (8.0+0.08s)" [3220, 3279]
  line "P1: LTC (60.0+0.60s)" [3533, 3499]
  line "P1: VLTC (2m24s+1.12s)" [3578, 3596]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3596 | 41 | 144 | 50% | 3598 | 73% |
|  |  | E1 | 3497 | 30 | 268 | 50% | 3495 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3499 | 35 | 212 | 51% | 3494 | 60% |
|  |  | E1 | 3397 | 29 | 298 | 47% | 3417 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3279 | 43 | 146 | 53% | 3258 | 60% |
|  |  | E1 | 3148 | 35 | 232 | 52% | 3135 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3578 | 38 | 254 | 67% | 2894 | 47% |
|  |  | E1 | 3474 | 32 | 320 | 62% | 3052 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3405 | 29 | 380 | 62% | 3056 | 53% |
|  |  | P1 | 3533 | 43 | 214 | 70% | 2763 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3113 | 35 | 272 | 57% | 2807 | 42% |
|  |  | P1 | 3220 | 43 | 220 | 68% | 2587 | 39% |