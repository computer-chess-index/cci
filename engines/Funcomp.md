# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3276<sub>(+35) | 3511<sub>(+37) | 3544<sub>(+6) |  |
| 3.0 | 2026-10-20 | 3241<sub>(+496) | 3474<sub>(+353) | 3538<sub>(+348) |  |
| 2.0 | 2026-10-03 | 2745<sub>(+270) | 3121<sub>(+304) | 3190<sub>(+271) |  |
| 1.0 | 2026-09-28 | 2475 | 2817 | 2919 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3321<sub>(+51) | 3483<sub>(+47) | 3532<sub>(+53) |  |
| 3.0 | 2026-10-20 | 3270<sub>(+517) | 3436<sub>(+403) | 3479<sub>(+315) |  |
| 2.0 | 2026-10-03 | 2753 | 3033 | 3164 |  |
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

Generated: 2026-11-25 05:38:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2475, 2745, 3241, 3276]
  line "E1: LTC (60.0+0.60s)" [2817, 3121, 3474, 3511]
  line "E1: VLTC (2m24s+1.12s)" [2919, 3190, 3538, 3544]
  line "P1: STC (8.0+0.08s)" [2753, 3270, 3321]
  line "P1: LTC (60.0+0.60s)" [3033, 3436, 3483]
  line "P1: VLTC (2m24s+1.12s)" [3164, 3479, 3532]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3532 | 36 | 182 | 52% | 3517 | 84% |
|  |  | E1 | 3544 | 31 | 246 | 50% | 3544 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3483 | 37 | 184 | 53% | 3461 | 68% |
|  |  | E1 | 3511 | 29 | 279 | 51% | 3502 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3321 | 36 | 204 | 51% | 3313 | 65% |
|  |  | E1 | 3276 | 31 | 288 | 51% | 3268 | 59% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3479 | 40 | 158 | 57% | 3425 | 75% |
|  |  | E1 | 3538 | 34 | 220 | 52% | 3518 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3436 | 43 | 140 | 57% | 3374 | 71% |
|  |  | E1 | 3474 | 34 | 224 | 54% | 3441 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3241 | 31 | 292 | 53% | 3206 | 57% |
|  |  | P1 | 3270 | 49 | 114 | 56% | 3197 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3164 | 40 | 192 | 57% | 3075 | 46% |
|  |  | E1 | 3190 | 34 | 272 | 54% | 3123 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3033 | 40 | 212 | 61% | 2828 | 43% |
|  |  | E1 | 3121 | 35 | 262 | 53% | 3042 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2753 | 45 | 168 | 51% | 2727 | 28% |
|  |  | E1 | 2745 | 34 | 302 | 57% | 2623 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2919 | 39 | 222 | 45% | 2978 | 34% |
|  |  | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2824 | 38 | 226 | 39% | 2930 | 37% |
|  |  | E1 | 2817 | 34 | 298 | 50% | 2827 | 28% |
|  |  | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2462 | 44 | 176 | 48% | 2493 | 26% |
|  |  | E1 | 2475 | 47 | 168 | 46% | 2523 | 20% |
|  |  | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |