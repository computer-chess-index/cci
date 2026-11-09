# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2850<sub>(+721) | 3185<sub>(+717) | 3264<sub>(+676) |  |
| 1.0 | 2026-07-26 | 2129 | 2468 | 2588 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3025<sub>(+818) | 3272<sub>(+745) | 3348<sub>(+780) |  |
| 1.0 | 2026-07-26 | 2207 | 2527 | 2568 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-07-26 | 2194 | 2468 | 2520 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scarlet+<version>&body=###%20Engine%20name%0AScarlet%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-09 05:42:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2129, 2850]
  line "E1: LTC (60.0+0.60s)" [2468, 3185]
  line "E1: VLTC (2m24s+1.12s)" [2588, 3264]
  line "P1: STC (8.0+0.08s)" [2207, 3025]
  line "P1: LTC (60.0+0.60s)" [2527, 3272]
  line "P1: VLTC (2m24s+1.12s)" [2568, 3348]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3348 | 36 | 232 | 54% | 3298 | 48% |
|  |  | E1 | 3264 | 29 | 344 | 53% | 3231 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3272 | 40 | 196 | 55% | 3213 | 39% |
|  |  | E1 | 3185 | 30 | 332 | 52% | 3152 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3025 | 33 | 284 | 48% | 3032 | 37% |
|  |  | E1 | 2850 | 30 | 376 | 55% | 2790 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2568 | 44 | 194 | 45% | 2634 | 20% |
|  |  | E1 | 2588 | 39 | 238 | 48% | 2610 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2527 | 46 | 180 | 48% | 2566 | 22% |
|  |  | E1 | 2468 | 38 | 246 | 50% | 2460 | 26% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2207 | 44 | 184 | 49% | 2214 | 21% |
|  |  | E1 | 2129 | 36 | 276 | 47% | 2160 | 21% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |