# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3272<sub>(+28) | 3515<sub>(+39) | 3548<sub>(+7) |  |
| 3.0 | 2026-10-20 | 3244<sub>(+501) | 3476<sub>(+352) | 3541<sub>(+348) |  |
| 2.0 | 2026-10-03 | 2743 | 3124 | 3193 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3282<sub>(+47) | 3457<sub>(+55) | 3507<sub>(+54) |  |
| 3.0 | 2026-10-20 | 3235<sub>(+519) | 3402<sub>(+408) | 3453<sub>(+326) |  |
| 2.0 | 2026-10-03 | 2716 | 2994 | 3127 |  |
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

Generated: 2026-11-16 05:38:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2700 --> 3600
  line "E1: STC (8.0+0.08s)" [2743, 3244, 3272]
  line "E1: LTC (60.0+0.60s)" [3124, 3476, 3515]
  line "E1: VLTC (2m24s+1.12s)" [3193, 3541, 3548]
  line "P1: STC (8.0+0.08s)" [2716, 3235, 3282]
  line "P1: LTC (60.0+0.60s)" [2994, 3402, 3457]
  line "P1: VLTC (2m24s+1.12s)" [3127, 3453, 3507]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3548 | 32 | 230 | 50% | 3548 | 83% |
|  |  | P1 | 3507 | 36 | 178 | 52% | 3494 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3515 | 30 | 265 | 52% | 3503 | 77% |
|  |  | P1 | 3457 | 37 | 184 | 53% | 3436 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3272 | 32 | 256 | 51% | 3268 | 60% |
|  |  | P1 | 3282 | 38 | 180 | 50% | 3282 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3453 | 40 | 158 | 57% | 3399 | 75% |
|  |  | E1 | 3541 | 34 | 216 | 52% | 3521 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3402 | 44 | 136 | 57% | 3341 | 71% |
|  |  | E1 | 3476 | 34 | 216 | 54% | 3443 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3235 | 52 | 102 | 56% | 3154 | 62% |
|  |  | E1 | 3244 | 31 | 284 | 54% | 3208 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3193 | 34 | 272 | 54% | 3125 | 42% |
|  |  | P1 | 3127 | 40 | 192 | 57% | 3038 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2994 | 40 | 212 | 61% | 2792 | 43% |
|  |  | E1 | 3124 | 35 | 262 | 53% | 3044 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2716 | 45 | 168 | 51% | 2691 | 28% |
|  |  | E1 | 2743 | 34 | 302 | 57% | 2623 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |