# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3254<sub>(+496) | 3505<sub>(+364) | 3578<sub>(+370) |  |
| 2.0 | 2026-10-03 | 2758 | 3141 | 3208 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-10-20 | 3418<sub>(+551) | 3591<sub>(+425) | 3638<sub>(+325) |  |
| 2.0 | 2026-10-03 | 2867 | 3166 | 3313 |  |
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

Generated: 2026-10-22 04:38:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 2700 --> 3700
  line "E1: STC (8.0+0.08s)" [2758, 3254]
  line "E1: LTC (60.0+0.60s)" [3141, 3505]
  line "E1: VLTC (2m24s+1.12s)" [3208, 3578]
  line "P1: STC (8.0+0.08s)" [2867, 3418]
  line "P1: LTC (60.0+0.60s)" [3166, 3591]
  line "P1: VLTC (2m24s+1.12s)" [3313, 3638]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3638 | 50 | 104 | 60% | 3557 | 68% |
|  |  | E1 | 3578 | 42 | 148 | 55% | 3530 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3591 | 54 | 94 | 60% | 3497 | 65% |
|  |  | E1 | 3505 | 38 | 176 | 56% | 3456 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3418 | 66 | 68 | 60% | 3293 | 57% |
|  |  | E1 | 3254 | 38 | 202 | 54% | 3208 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3208 | 34 | 272 | 54% | 3140 | 42% |
|  |  | P1 | 3313 | 40 | 192 | 57% | 3218 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3141 | 35 | 262 | 53% | 3060 | 39% |
|  |  | P1 | 3166 | 40 | 208 | 62% | 2943 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2758 | 34 | 302 | 57% | 2637 | 30% |
|  |  | P1 | 2867 | 46 | 164 | 51% | 2836 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |