# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3335<sub>(+29) | 3576<sub>(+34) | 3606<sub>(-3) |  |
| 3.0 | 2026-10-20 | 3306<sub>(+505) | 3542<sub>(+357) | 3609<sub>(+357) |  |
| 2.0 | 2026-10-03 | 2801 | 3185 | 3252 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3541<sub>(+55) | 3707<sub>(+48) | 3742<sub>(+28) |  |
| 3.0 | 2026-10-20 | 3486<sub>(+556) | 3659<sub>(+426) | 3714<sub>(+332) |  |
| 2.0 | 2026-10-03 | 2930 | 3233 | 3382 |  |
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

Generated: 2026-11-05 05:38:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2800 --> 3800
  line "E1: STC (8.0+0.08s)" [2801, 3306, 3335]
  line "E1: LTC (60.0+0.60s)" [3185, 3542, 3576]
  line "E1: VLTC (2m24s+1.12s)" [3252, 3609, 3606]
  line "P1: STC (8.0+0.08s)" [2930, 3486, 3541]
  line "P1: LTC (60.0+0.60s)" [3233, 3659, 3707]
  line "P1: VLTC (2m24s+1.12s)" [3382, 3714, 3742]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3606 | 37 | 174 | 49% | 3610 | 84% |
|  |  | P1 | 3742 | 47 | 102 | 50% | 3740 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3576 | 33 | 224 | 52% | 3567 | 75% |
|  |  | P1 | 3707 | 41 | 148 | 52% | 3694 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3335 | 37 | 188 | 51% | 3330 | 63% |
|  |  | P1 | 3541 | 44 | 132 | 51% | 3537 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3714 | 40 | 154 | 57% | 3656 | 75% |
|  |  | E1 | 3609 | 36 | 192 | 53% | 3579 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3659 | 45 | 128 | 57% | 3592 | 69% |
|  |  | E1 | 3542 | 36 | 196 | 55% | 3503 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3486 | 54 | 96 | 57% | 3397 | 61% |
|  |  | E1 | 3306 | 33 | 260 | 54% | 3266 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3252 | 34 | 272 | 54% | 3185 | 42% |
|  |  | P1 | 3382 | 40 | 192 | 57% | 3286 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3233 | 40 | 212 | 61% | 3016 | 43% |
|  |  | E1 | 3185 | 35 | 262 | 53% | 3102 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2930 | 45 | 168 | 51% | 2903 | 28% |
|  |  | E1 | 2801 | 34 | 302 | 57% | 2678 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |