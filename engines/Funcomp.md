# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3335<sub>(+30) | 3580<sub>(+39) | 3606<sub>(-1) |  |
| 3.0 | 2026-10-20 | 3305<sub>(+506) | 3541<sub>(+358) | 3607<sub>(+355) |  |
| 2.0 | 2026-10-03 | 2799 | 3183 | 3252 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3487<sub>(+54) | 3663<sub>(+58) | 3690<sub>(+30) |  |
| 3.0 | 2026-10-20 | 3433<sub>(+557) | 3605<sub>(+427) | 3660<sub>(+334) |  |
| 2.0 | 2026-10-03 | 2876 | 3178 | 3326 |  |
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

Generated: 2026-11-08 05:38:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2700 --> 3700
  line "E1: STC (8.0+0.08s)" [2799, 3305, 3335]
  line "E1: LTC (60.0+0.60s)" [3183, 3541, 3580]
  line "E1: VLTC (2m24s+1.12s)" [3252, 3607, 3606]
  line "P1: STC (8.0+0.08s)" [2876, 3433, 3487]
  line "P1: LTC (60.0+0.60s)" [3178, 3605, 3663]
  line "P1: VLTC (2m24s+1.12s)" [3326, 3660, 3690]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3606 | 35 | 186 | 50% | 3607 | 84% |
|  |  | P1 | 3690 | 47 | 104 | 50% | 3687 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3663 | 38 | 180 | 53% | 3641 | 68% |
|  |  | E1 | 3580 | 32 | 236 | 52% | 3565 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3487 | 43 | 140 | 51% | 3483 | 67% |
|  |  | E1 | 3335 | 36 | 200 | 51% | 3329 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3660 | 40 | 154 | 57% | 3603 | 75% |
|  |  | E1 | 3607 | 36 | 192 | 53% | 3578 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3605 | 45 | 128 | 57% | 3538 | 69% |
|  |  | E1 | 3541 | 36 | 196 | 55% | 3501 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3433 | 54 | 96 | 57% | 3343 | 61% |
|  |  | E1 | 3305 | 33 | 260 | 54% | 3264 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3326 | 40 | 192 | 57% | 3232 | 46% |
|  |  | E1 | 3252 | 34 | 272 | 54% | 3183 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3178 | 40 | 212 | 61% | 2959 | 43% |
|  |  | E1 | 3183 | 35 | 262 | 53% | 3101 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2876 | 45 | 168 | 51% | 2847 | 28% |
|  |  | E1 | 2799 | 34 | 302 | 57% | 2677 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |