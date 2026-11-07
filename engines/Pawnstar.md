# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 2876<sub>(-21) | 3214<sub>(-44) | 3329<sub>(+43) |  |
| 1.0.0 | 2026-10-15 | 2897<sub>(+82) | 3258<sub>(+81) | 3286<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2815 | 3177 | 3279 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3008<sub>(-34) | 3390<sub>(+20) | 3441<sub>(-20) |  |
| 1.0.0 | 2026-10-15 | 3042<sub>(+72) | 3370<sub>(-13) | 3461<sub>(+67) |  |
| 0.13.593 | 2026-06-30 | 2970 | 3383 | 3394 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.13.593 | 2026-06-30 | 2831 | 3125 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnstar+<version>&body=###%20Engine%20name%0APawnstar%0A%0A###%20Version%0A0.13.593" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:40:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2815, 2897, 2876]
  line "E1: LTC (60.0+0.60s)" [3177, 3258, 3214]
  line "E1: VLTC (2m24s+1.12s)" [3279, 3286, 3329]
  line "P1: STC (8.0+0.08s)" [2970, 3042, 3008]
  line "P1: LTC (60.0+0.60s)" [3383, 3370, 3390]
  line "P1: VLTC (2m24s+1.12s)" [3394, 3461, 3441]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3329 | 28 | 336 | 53% | 3306 | 64% |
|  |  | P1 | 3441 | 33 | 232 | 47% | 3460 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3214 | 29 | 344 | 54% | 3185 | 51% |
|  |  | P1 | 3390 | 41 | 152 | 49% | 3395 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3008 | 38 | 212 | 45% | 3052 | 40% |
|  |  | E1 | 2876 | 37 | 228 | 49% | 2884 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3461 | 40 | 160 | 50% | 3464 | 66% |
|  |  | E1 | 3286 | 34 | 232 | 50% | 3283 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3370 | 39 | 180 | 50% | 3367 | 58% |
|  |  | E1 | 3258 | 32 | 276 | 51% | 3249 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3042 | 39 | 198 | 52% | 3023 | 45% |
|  |  | E1 | 2897 | 28 | 394 | 47% | 2923 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3279 | 30 | 312 | 47% | 3299 | 51% |
|  |  | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3394 | 35 | 220 | 46% | 3425 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3177 | 31 | 300 | 48% | 3195 | 53% |
|  |  | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3383 | 34 | 248 | 52% | 3363 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2815 | 30 | 382 | 46% | 2853 | 31% |
|  |  | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2970 | 41 | 192 | 46% | 3008 | 35% |