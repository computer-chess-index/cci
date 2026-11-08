# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3247<sub>(-17) | 3471<sub>(0) | 3502<sub>(-32) |  |
| 5.0 | 2026-11-02 | 3264<sub>(+411) | 3471<sub>(+253) | 3534<sub>(+212) |  |
| 4.1 | 2026-08-06 | 2853 | 3218 | 3322 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3380<sub>(+14) | 3617<sub>(+66) | 3603<sub>(+21) |  |
| 5.0 | 2026-11-02 | 3366<sub>(+442) | 3551<sub>(+227) | 3582<sub>(+157) |  |
| 4.1 | 2026-08-06 | 2924 | 3324 | 3425 |  |
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

Generated: 2026-11-08 05:40:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [2853, 3264, 3247]
  line "E1: LTC (60.0+0.60s)" [3218, 3471, 3471]
  line "E1: VLTC (2m24s+1.12s)" [3322, 3534, 3502]
  line "P1: STC (8.0+0.08s)" [2924, 3366, 3380]
  line "P1: LTC (60.0+0.60s)" [3324, 3551, 3617]
  line "P1: VLTC (2m24s+1.12s)" [3425, 3582, 3603]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3603 | 56 | 74 | 50% | 3602 | 81% |
|  |  | E1 | 3502 | 36 | 190 | 49% | 3506 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3617 | 47 | 112 | 50% | 3615 | 72% |
|  |  | E1 | 3471 | 39 | 166 | 51% | 3465 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3380 | 45 | 128 | 49% | 3391 | 65% |
|  |  | E1 | 3247 | 33 | 238 | 52% | 3232 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3582 | 44 | 130 | 52% | 3565 | 72% |
|  |  | E1 | 3534 | 34 | 224 | 54% | 3503 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3551 | 34 | 214 | 57% | 3502 | 75% |
|  |  | E1 | 3471 | 31 | 264 | 54% | 3440 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3366 | 47 | 122 | 55% | 3324 | 58% |
|  |  | E1 | 3264 | 32 | 272 | 53% | 3229 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3322 | 27 | 378 | 47% | 3344 | 58% |
|  |  | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3425 | 31 | 276 | 48% | 3438 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3218 | 28 | 372 | 48% | 3232 | 47% |
|  |  | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3324 | 35 | 226 | 49% | 3332 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2924 | 37 | 236 | 46% | 2969 | 38% |
|  |  | E1 | 2853 | 29 | 386 | 45% | 2900 | 37% |