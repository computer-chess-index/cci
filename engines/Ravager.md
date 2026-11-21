# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3359<sub>(+413) | 3600<sub>(+303) | 3646<sub>(+209) |  |
| 3.3.0 | 2026-10-09 | 2946<sub>(+416) | 3297<sub>(+318) | 3437<sub>(+323) |  |
| 2.0 | 2026-08-23 | 2530 | 2979 | 3114 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3367<sub>(+362) | 3582<sub>(+280) | 3583<sub>(+188) |  |
| 3.3.0 | 2026-10-09 | 3005<sub>(+356) | 3302<sub>(+259) | 3395<sub>(+205) |  |
| 2.0 | 2026-08-23 | 2649 | 3043 | 3190 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:41:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2530, 2946, 3359]
  line "E1: LTC (60.0+0.60s)" [2979, 3297, 3600]
  line "E1: VLTC (2m24s+1.12s)" [3114, 3437, 3646]
  line "P1: STC (8.0+0.08s)" [2649, 3005, 3367]
  line "P1: LTC (60.0+0.60s)" [3043, 3302, 3582]
  line "P1: VLTC (2m24s+1.12s)" [3190, 3395, 3583]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3646 | 29 | 282 | 48% | 3657 | 86% |
|  |  | P1 | 3583 | 39 | 160 | 55% | 3549 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3582 | 38 | 164 | 47% | 3595 | 81% |
|  |  | E1 | 3600 | 32 | 238 | 53% | 3578 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3367 | 40 | 160 | 53% | 3339 | 71% |
|  |  | E1 | 3359 | 27 | 366 | 55% | 3318 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3395 | 42 | 146 | 53% | 3374 | 71% |
|  |  | E1 | 3437 | 32 | 244 | 50% | 3434 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3302 | 28 | 338 | 57% | 3254 | 67% |
|  |  | E1 | 3297 | 29 | 312 | 54% | 3266 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3005 | 34 | 248 | 49% | 2992 | 54% |
|  |  | E1 | 2946 | 34 | 258 | 53% | 2923 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3114 | 30 | 302 | 44% | 3164 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3190 | 37 | 204 | 49% | 3202 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3043 | 39 | 184 | 48% | 3058 | 52% |
|  |  | E1 | 2979 | 30 | 322 | 42% | 3042 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2649 | 37 | 216 | 48% | 2660 | 43% |
|  |  | E1 | 2530 | 35 | 298 | 39% | 2650 | 26% |