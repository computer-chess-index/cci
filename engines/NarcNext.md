# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3235<sub>(-14) | 3457<sub>(+1) | 3492<sub>(-30) |  |
| 5.0 | 2026-11-02 | 3249<sub>(+413) | 3456<sub>(+252) | 3522<sub>(+214) |  |
| 4.1 | 2026-08-06 | 2836 | 3204 | 3308 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3394<sub>(+18) | 3626<sub>(+62) | 3617<sub>(+22) |  |
| 5.0 | 2026-11-02 | 3376<sub>(+442) | 3564<sub>(+227) | 3595<sub>(+154) |  |
| 4.1 | 2026-08-06 | 2934 | 3337 | 3441 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-08-06 | 2871 | 3163 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+NarcNext+<version>&body=###%20Engine%20name%0ANarcNext%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:40:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [2836, 3249, 3235]
  line "E1: LTC (60.0+0.60s)" [3204, 3456, 3457]
  line "E1: VLTC (2m24s+1.12s)" [3308, 3522, 3492]
  line "P1: STC (8.0+0.08s)" [2934, 3376, 3394]
  line "P1: LTC (60.0+0.60s)" [3337, 3564, 3626]
  line "P1: VLTC (2m24s+1.12s)" [3441, 3595, 3617]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3492 | 34 | 214 | 50% | 3491 | 77% |
|  |  | P1 | 3617 | 47 | 106 | 50% | 3614 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3457 | 33 | 226 | 51% | 3453 | 71% |
|  |  | P1 | 3626 | 44 | 128 | 50% | 3627 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3394 | 42 | 148 | 49% | 3405 | 63% |
|  |  | E1 | 3235 | 31 | 274 | 52% | 3222 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3595 | 44 | 130 | 52% | 3580 | 72% |
|  |  | E1 | 3522 | 34 | 224 | 54% | 3490 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3564 | 34 | 214 | 57% | 3515 | 75% |
|  |  | E1 | 3456 | 31 | 264 | 54% | 3425 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3376 | 48 | 122 | 55% | 3335 | 58% |
|  |  | E1 | 3249 | 32 | 276 | 54% | 3206 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3441 | 31 | 276 | 48% | 3455 | 57% |
|  |  | E1 | 3308 | 27 | 378 | 47% | 3329 | 58% |
|  |  | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3337 | 35 | 226 | 49% | 3345 | 56% |
|  |  | E1 | 3204 | 28 | 372 | 48% | 3217 | 47% |
|  |  | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2836 | 29 | 386 | 45% | 2884 | 37% |
|  |  | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2934 | 37 | 236 | 46% | 2978 | 38% |