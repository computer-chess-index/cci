# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3274<sub>(+35) | 3509<sub>(+37) | 3544<sub>(+8) |  |
| 3.0 | 2026-10-20 | 3239<sub>(+498) | 3472<sub>(+352) | 3536<sub>(+349) |  |
| 2.0 | 2026-10-03 | 2741<sub>(+258) | 3120<sub>(+294) | 3187<sub>(+274) |  |
| 1.0 | 2026-09-28 | 2483 | 2826 | 2913 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3305<sub>(+46) | 3474<sub>(+49) | 3521<sub>(+51) |  |
| 3.0 | 2026-10-20 | 3259<sub>(+516) | 3425<sub>(+404) | 3470<sub>(+318) |  |
| 2.0 | 2026-10-03 | 2743 | 3021 | 3152 |  |
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

Generated: 2026-11-23 05:38:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2483, 2741, 3239, 3274]
  line "E1: LTC (60.0+0.60s)" [2826, 3120, 3472, 3509]
  line "E1: VLTC (2m24s+1.12s)" [2913, 3187, 3536, 3544]
  line "P1: STC (8.0+0.08s)" [2743, 3259, 3305]
  line "P1: LTC (60.0+0.60s)" [3021, 3425, 3474]
  line "P1: VLTC (2m24s+1.12s)" [3152, 3470, 3521]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3521 | 36 | 182 | 52% | 3507 | 84% |
|  |  | E1 | 3544 | 31 | 246 | 50% | 3544 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3474 | 37 | 184 | 53% | 3452 | 68% |
|  |  | E1 | 3509 | 30 | 267 | 51% | 3499 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3305 | 36 | 200 | 51% | 3302 | 65% |
|  |  | E1 | 3274 | 31 | 276 | 51% | 3264 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3470 | 40 | 158 | 57% | 3416 | 75% |
|  |  | E1 | 3536 | 34 | 220 | 52% | 3517 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3425 | 43 | 140 | 57% | 3363 | 71% |
|  |  | E1 | 3472 | 34 | 224 | 54% | 3441 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3259 | 49 | 114 | 56% | 3186 | 64% |
|  |  | E1 | 3239 | 31 | 292 | 53% | 3204 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3152 | 40 | 192 | 57% | 3063 | 46% |
|  |  | E1 | 3187 | 34 | 272 | 54% | 3120 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3021 | 40 | 212 | 61% | 2816 | 43% |
|  |  | E1 | 3120 | 35 | 262 | 53% | 3039 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2741 | 34 | 302 | 57% | 2619 | 30% |
|  |  | P1 | 2743 | 45 | 168 | 51% | 2716 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  |  | E1 | 2913 | 44 | 182 | 44% | 2989 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  |  | P1 | 2912 | 66 | 78 | 35% | 3055 | 32% |
|  |  | E1 | 2826 | 36 | 260 | 52% | 2822 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |
|  |  | P1 | 2601 | 164 | 16 | 31% | 2838 | 13% |
|  |  | E1 | 2483 | 48 | 160 | 48% | 2522 | 21% |