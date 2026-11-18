# Engine: Funcomp

Author: James Coit

Home: https://github.com/Moxnar/FunComp

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3274<sub>(+35) | 3509<sub>(+37) | 3544<sub>(+8) |  |
| 3.0 | 2026-10-20 | 3239<sub>(+500) | 3472<sub>(+352) | 3536<sub>(+349) |  |
| 2.0 | 2026-10-03 | 2739 | 3120 | 3187 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-30 | 3289<sub>(+45) | 3467<sub>(+57) | 3517<sub>(+56) |  |
| 3.0 | 2026-10-20 | 3244<sub>(+517) | 3410<sub>(+405) | 3461<sub>(+325) |  |
| 2.0 | 2026-10-03 | 2727 | 3005 | 3136 |  |
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

Generated: 2026-11-18 05:38:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0", "3.1"]
  y-axis "Elo Rating" 2700 --> 3600
  line "E1: STC (8.0+0.08s)" [2739, 3239, 3274]
  line "E1: LTC (60.0+0.60s)" [3120, 3472, 3509]
  line "E1: VLTC (2m24s+1.12s)" [3187, 3536, 3544]
  line "P1: STC (8.0+0.08s)" [2727, 3244, 3289]
  line "P1: LTC (60.0+0.60s)" [3005, 3410, 3467]
  line "P1: VLTC (2m24s+1.12s)" [3136, 3461, 3517]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3517 | 36 | 178 | 52% | 3502 | 83% |
|  |  | E1 | 3544 | 31 | 238 | 50% | 3544 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3467 | 37 | 184 | 53% | 3445 | 68% |
|  |  | E1 | 3509 | 30 | 267 | 51% | 3499 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3289 | 38 | 184 | 50% | 3289 | 64% |
|  |  | E1 | 3274 | 31 | 272 | 51% | 3264 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3461 | 40 | 158 | 57% | 3407 | 75% |
|  |  | E1 | 3536 | 34 | 220 | 52% | 3517 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3472 | 34 | 224 | 54% | 3440 | 70% |
|  |  | P1 | 3410 | 44 | 136 | 57% | 3349 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3239 | 31 | 292 | 53% | 3204 | 57% |
|  |  | P1 | 3244 | 51 | 106 | 56% | 3166 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3136 | 40 | 192 | 57% | 3047 | 46% |
|  |  | E1 | 3187 | 34 | 272 | 54% | 3120 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3005 | 40 | 212 | 61% | 2803 | 43% |
|  |  | E1 | 3120 | 35 | 262 | 53% | 3039 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2727 | 45 | 168 | 51% | 2701 | 28% |
|  |  | E1 | 2739 | 34 | 302 | 57% | 2618 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2966 | 38 | 230 | 54% | 2924 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2809 | 41 | 204 | 57% | 2719 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2576 | 43 | 196 | 56% | 2510 | 25% |