# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3275<sub>(+34) | 3511<sub>(+36) | 3546<sub>(+8) |  |
| 3.0 | 2026-10-20 | 3241<sub>(+499) | 3475<sub>(+354) | 3538<sub>(+348) |  |
| 2.0 | 2026-10-03 | 2742<sub>(+261) | 3121<sub>(+287) | 3190<sub>(+271) |  |
| 1.0 | 2026-09-28 | 2481 | 2834 | 2919 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3298<sub>(+46) | 3465<sub>(+47) | 3514<sub>(+53) |  |
| 3.0 | 2026-10-20 | 3252<sub>(+513) | 3418<sub>(+402) | 3461<sub>(+315) |  |
| 2.0 | 2026-10-03 | 2739 | 3016 | 3146 |  |
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

Generated: 2026-11-22 05:38:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2481, 2742, 3241, 3275]
  line "E1: LTC (60.0+0.60s)" [2834, 3121, 3475, 3511]
  line "E1: VLTC (2m24s+1.12s)" [2919, 3190, 3538, 3546]
  line "P1: STC (8.0+0.08s)" [2739, 3252, 3298]
  line "P1: LTC (60.0+0.60s)" [3016, 3418, 3465]
  line "P1: VLTC (2m24s+1.12s)" [3146, 3461, 3514]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3514 | 36 | 182 | 52% | 3501 | 84% |
|  |  | E1 | 3546 | 31 | 246 | 50% | 3545 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3511 | 30 | 267 | 51% | 3502 | 77% |
|  |  | P1 | 3465 | 37 | 184 | 53% | 3445 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3275 | 31 | 276 | 51% | 3267 | 60% |
|  |  | P1 | 3298 | 36 | 200 | 51% | 3294 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3461 | 40 | 158 | 57% | 3409 | 75% |
|  |  | E1 | 3538 | 34 | 220 | 52% | 3518 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3418 | 43 | 140 | 57% | 3356 | 71% |
|  |  | E1 | 3475 | 34 | 224 | 54% | 3443 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3252 | 49 | 114 | 56% | 3179 | 64% |
|  |  | E1 | 3241 | 31 | 292 | 53% | 3206 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3190 | 34 | 272 | 54% | 3123 | 42% |
|  |  | P1 | 3146 | 40 | 192 | 57% | 3056 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3121 | 35 | 262 | 53% | 3040 | 39% |
|  |  | P1 | 3016 | 40 | 212 | 61% | 2811 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2739 | 45 | 168 | 51% | 2712 | 28% |
|  |  | E1 | 2742 | 34 | 302 | 57% | 2622 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  |  | E1 | 2919 | 47 | 156 | 43% | 3001 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  |  | E1 | 2834 | 38 | 242 | 52% | 2823 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |
|  |  | E1 | 2481 | 49 | 148 | 47% | 2526 | 22% |