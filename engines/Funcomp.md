# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3260<sub>(+28) | 3502<sub>(+37) | 3534<sub>(+5) |  |
| 3.0 | 2026-10-20 | 3232<sub>(+493) | 3465<sub>(+352) | 3529<sub>(+348) |  |
| 2.0 | 2026-10-03 | 2739 | 3113 | 3181 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3298<sub>(+53) | 3470<sub>(+59) | 3517<sub>(+53) |  |
| 3.0 | 2026-10-20 | 3245<sub>(+536) | 3411<sub>(+421) | 3464<sub>(+329) |  |
| 2.0 | 2026-10-03 | 2709 | 2990 | 3135 |  |
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

Generated: 2026-11-14 05:38:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2700 --> 3600
  line "E1: STC (8.0+0.08s)" [2739, 3232, 3260]
  line "E1: LTC (60.0+0.60s)" [3113, 3465, 3502]
  line "E1: VLTC (2m24s+1.12s)" [3181, 3529, 3534]
  line "P1: STC (8.0+0.08s)" [2709, 3245, 3298]
  line "P1: LTC (60.0+0.60s)" [2990, 3411, 3470]
  line "P1: VLTC (2m24s+1.12s)" [3135, 3464, 3517]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3517 | 36 | 178 | 52% | 3503 | 83% |
|  |  | E1 | 3534 | 33 | 218 | 50% | 3537 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3470 | 37 | 184 | 53% | 3448 | 68% |
|  |  | E1 | 3502 | 31 | 252 | 52% | 3491 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3260 | 32 | 256 | 51% | 3256 | 60% |
|  |  | P1 | 3298 | 38 | 176 | 51% | 3295 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3464 | 40 | 158 | 57% | 3410 | 75% |
|  |  | E1 | 3529 | 35 | 204 | 52% | 3507 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3411 | 44 | 132 | 57% | 3348 | 70% |
|  |  | E1 | 3465 | 36 | 196 | 55% | 3426 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3245 | 53 | 100 | 57% | 3160 | 61% |
|  |  | E1 | 3232 | 32 | 268 | 54% | 3194 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3181 | 34 | 272 | 54% | 3114 | 42% |
|  |  | P1 | 3135 | 40 | 192 | 57% | 3044 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3113 | 35 | 262 | 53% | 3033 | 39% |
|  |  | P1 | 2990 | 40 | 212 | 61% | 2786 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2739 | 34 | 302 | 57% | 2620 | 30% |
|  |  | P1 | 2709 | 45 | 168 | 51% | 2684 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |