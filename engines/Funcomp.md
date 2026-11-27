# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3272<sub>(+35) | 3503<sub>(+36) | 3538<sub>(+6) |  |
| 3.0 | 2026-10-20 | 3237<sub>(+495) | 3467<sub>(+350) | 3532<sub>(+346) |  |
| 2.0 | 2026-10-03 | 2742<sub>(+269) | 3117<sub>(+302) | 3186<sub>(+274) |  |
| 1.0 | 2026-09-28 | 2473 | 2815 | 2912 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3320<sub>(+50) | 3482<sub>(+48) | 3532<sub>(+54) |  |
| 3.0 | 2026-10-20 | 3270<sub>(+517) | 3434<sub>(+399) | 3478<sub>(+314) |  |
| 2.0 | 2026-10-03 | 2753<sub>(+292) | 3035<sub>(+204) | 3164<sub>(+294) |  |
| 1.0 | 2026-09-28 | 2461 | 2831 | 2870 |  |
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

Generated: 2026-11-27 05:38:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2473, 2742, 3237, 3272]
  line "E1: LTC (60.0+0.60s)" [2815, 3117, 3467, 3503]
  line "E1: VLTC (2m24s+1.12s)" [2912, 3186, 3532, 3538]
  line "P1: STC (8.0+0.08s)" [2461, 2753, 3270, 3320]
  line "P1: LTC (60.0+0.60s)" [2831, 3035, 3434, 3482]
  line "P1: VLTC (2m24s+1.12s)" [2870, 3164, 3478, 3532]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3532 | 36 | 182 | 52% | 3517 | 84% |
|  |  | E1 | 3538 | 31 | 246 | 50% | 3537 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3482 | 37 | 184 | 53% | 3460 | 68% |
|  |  | E1 | 3503 | 29 | 287 | 51% | 3495 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3320 | 36 | 204 | 51% | 3313 | 65% |
|  |  | E1 | 3272 | 31 | 288 | 51% | 3263 | 59% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3532 | 34 | 220 | 52% | 3511 | 70% |
|  |  | P1 | 3478 | 40 | 158 | 57% | 3424 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3434 | 43 | 140 | 57% | 3372 | 71% |
|  |  | E1 | 3467 | 34 | 224 | 54% | 3436 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3270 | 49 | 114 | 56% | 3195 | 64% |
|  |  | E1 | 3237 | 31 | 292 | 53% | 3202 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3164 | 40 | 192 | 57% | 3075 | 46% |
|  |  | E1 | 3186 | 34 | 272 | 54% | 3119 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3035 | 40 | 212 | 61% | 2828 | 43% |
|  |  | E1 | 3117 | 35 | 262 | 53% | 3038 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2753 | 45 | 168 | 51% | 2727 | 28% |
|  |  | E1 | 2742 | 34 | 302 | 57% | 2622 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2912 | 38 | 226 | 45% | 2970 | 34% |
|  |  | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  |  | P1 | 2870 | 55 | 108 | 45% | 2935 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2815 | 33 | 306 | 50% | 2823 | 28% |
|  |  | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  |  | P1 | 2831 | 38 | 246 | 37% | 2965 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |
|  |  | P1 | 2461 | 42 | 200 | 47% | 2523 | 25% |
|  |  | E1 | 2473 | 46 | 172 | 46% | 2523 | 20% |