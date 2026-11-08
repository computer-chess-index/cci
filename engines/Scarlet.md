# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2854<sub>(+721) | 3187<sub>(+712) | 3268<sub>(+675) |  |
| 1.0 | 2026-07-26 | 2133 | 2475 | 2593 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3023<sub>(+816) | 3271<sub>(+745) | 3347<sub>(+779) |  |
| 1.0 | 2026-07-26 | 2207 | 2526 | 2568 |  |
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

Generated: 2026-11-08 05:42:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2133, 2854]
  line "E1: LTC (60.0+0.60s)" [2475, 3187]
  line "E1: VLTC (2m24s+1.12s)" [2593, 3268]
  line "P1: STC (8.0+0.08s)" [2207, 3023]
  line "P1: LTC (60.0+0.60s)" [2526, 3271]
  line "P1: VLTC (2m24s+1.12s)" [2568, 3347]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3347 | 36 | 232 | 54% | 3297 | 48% |
|  |  | E1 | 3268 | 29 | 340 | 53% | 3233 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3271 | 40 | 196 | 55% | 3212 | 39% |
|  |  | E1 | 3187 | 31 | 320 | 52% | 3155 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3023 | 34 | 276 | 48% | 3032 | 37% |
|  |  | E1 | 2854 | 30 | 376 | 55% | 2796 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2593 | 39 | 238 | 48% | 2615 | 26% |
|  |  | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2568 | 44 | 194 | 45% | 2634 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2475 | 38 | 246 | 50% | 2465 | 26% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2526 | 46 | 180 | 48% | 2566 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2133 | 36 | 276 | 47% | 2164 | 21% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2207 | 44 | 184 | 49% | 2214 | 21% |