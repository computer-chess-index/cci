# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3275<sub>(+36) | 3509<sub>(+37) | 3544<sub>(+8) |  |
| 3.0 | 2026-10-20 | 3239<sub>(+497) | 3472<sub>(+352) | 3536<sub>(+349) |  |
| 2.0 | 2026-10-03 | 2742<sub>(+258) | 3120<sub>(+298) | 3187<sub>(+272) |  |
| 1.0 | 2026-09-28 | 2484 | 2822 | 2915 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3309<sub>(+47) | 3475<sub>(+47) | 3524<sub>(+53) |  |
| 3.0 | 2026-10-20 | 3262<sub>(+516) | 3428<sub>(+404) | 3471<sub>(+315) |  |
| 2.0 | 2026-10-03 | 2746 | 3024 | 3156 |  |
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

Generated: 2026-11-24 05:38:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2484, 2742, 3239, 3275]
  line "E1: LTC (60.0+0.60s)" [2822, 3120, 3472, 3509]
  line "E1: VLTC (2m24s+1.12s)" [2915, 3187, 3536, 3544]
  line "P1: STC (8.0+0.08s)" [2746, 3262, 3309]
  line "P1: LTC (60.0+0.60s)" [3024, 3428, 3475]
  line "P1: VLTC (2m24s+1.12s)" [3156, 3471, 3524]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3544 | 31 | 246 | 50% | 3542 | 83% |
|  |  | P1 | 3524 | 36 | 182 | 52% | 3510 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3509 | 30 | 275 | 51% | 3499 | 77% |
|  |  | P1 | 3475 | 37 | 184 | 53% | 3453 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3309 | 36 | 200 | 51% | 3305 | 65% |
|  |  | E1 | 3275 | 31 | 284 | 51% | 3266 | 59% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3471 | 40 | 158 | 57% | 3418 | 75% |
|  |  | E1 | 3536 | 34 | 220 | 52% | 3515 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3428 | 43 | 140 | 57% | 3366 | 71% |
|  |  | E1 | 3472 | 34 | 224 | 54% | 3441 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3262 | 49 | 114 | 56% | 3189 | 64% |
|  |  | E1 | 3239 | 31 | 292 | 53% | 3204 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3156 | 40 | 192 | 57% | 3067 | 46% |
|  |  | E1 | 3187 | 34 | 272 | 54% | 3120 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3024 | 40 | 212 | 61% | 2819 | 43% |
|  |  | E1 | 3120 | 35 | 262 | 53% | 3039 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2746 | 45 | 168 | 51% | 2720 | 28% |
|  |  | E1 | 2742 | 34 | 302 | 57% | 2620 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  |  | E1 | 2915 | 39 | 222 | 45% | 2974 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  |  | P1 | 2813 | 39 | 218 | 39% | 2925 | 37% |
|  |  | E1 | 2822 | 35 | 278 | 51% | 2823 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |
|  |  | P1 | 2452 | 47 | 156 | 48% | 2489 | 26% |
|  |  | E1 | 2484 | 47 | 164 | 48% | 2522 | 21% |