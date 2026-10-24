# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3281<sub>(+496) | 3532<sub>(+362) | 3606<sub>(+370) |  |
| 2.0 | 2026-10-03 | 2785 | 3170 | 3236 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3395<sub>(+553) | 3564<sub>(+421) | 3622<sub>(+331) |  |
| 2.0 | 2026-10-03 | 2842 | 3143 | 3291 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-09-28 | 2576 | 2809 | 2966 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Funcomp+<version>&body=###%20Engine%20name%0AFuncomp%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-24 04:38:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 2700 --> 3700
  line "E1: STC (8.0+0.08s)" [2785, 3281]
  line "E1: LTC (60.0+0.60s)" [3170, 3532]
  line "E1: VLTC (2m24s+1.12s)" [3236, 3606]
  line "P1: STC (8.0+0.08s)" [2842, 3395]
  line "P1: LTC (60.0+0.60s)" [3143, 3564]
  line "P1: VLTC (2m24s+1.12s)" [3291, 3622]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3622 | 44 | 134 | 58% | 3559 | 72% |
|  |  | E1 | 3606 | 40 | 160 | 55% | 3560 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3532 | 38 | 176 | 56% | 3483 | 68% |
|  |  | P1 | 3564 | 46 | 124 | 57% | 3499 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3281 | 38 | 202 | 54% | 3236 | 53% |
|  |  | P1 | 3395 | 58 | 84 | 58% | 3294 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3291 | 40 | 192 | 57% | 3198 | 46% |
|  |  | E1 | 3236 | 34 | 272 | 54% | 3168 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3143 | 40 | 212 | 61% | 2927 | 43% |
|  |  | E1 | 3170 | 35 | 262 | 53% | 3087 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2842 | 45 | 168 | 51% | 2815 | 28% |
|  |  | E1 | 2785 | 34 | 302 | 57% | 2662 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |