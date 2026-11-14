# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3178<sub>(-12) | 3395<sub>(-2) | 3432<sub>(-28) |  |
| 5.0 | 2026-11-02 | 3190<sub>(+401) | 3397<sub>(+249) | 3460<sub>(+212) |  |
| 4.1 | 2026-08-06 | 2789 | 3148 | 3248 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3185<sub>(+14) | 3421<sub>(+61) | 3411<sub>(+21) |  |
| 5.0 | 2026-11-02 | 3171<sub>(+424) | 3360<sub>(+231) | 3390<sub>(+155) |  |
| 4.1 | 2026-08-06 | 2747 | 3129 | 3235 |  |
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

Generated: 2026-11-14 05:40:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2789, 3190, 3178]
  line "E1: LTC (60.0+0.60s)" [3148, 3397, 3395]
  line "E1: VLTC (2m24s+1.12s)" [3248, 3460, 3432]
  line "P1: STC (8.0+0.08s)" [2747, 3171, 3185]
  line "P1: LTC (60.0+0.60s)" [3129, 3360, 3421]
  line "P1: VLTC (2m24s+1.12s)" [3235, 3390, 3411]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3432 | 33 | 218 | 50% | 3432 | 77% |
|  |  | P1 | 3411 | 46 | 110 | 50% | 3409 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3395 | 33 | 226 | 51% | 3393 | 71% |
|  |  | P1 | 3421 | 44 | 128 | 50% | 3422 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3178 | 30 | 286 | 51% | 3170 | 63% |
|  |  | P1 | 3185 | 41 | 152 | 48% | 3200 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3390 | 44 | 130 | 52% | 3375 | 72% |
|  |  | E1 | 3460 | 33 | 228 | 54% | 3430 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3360 | 34 | 218 | 57% | 3312 | 75% |
|  |  | E1 | 3397 | 31 | 268 | 54% | 3364 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3171 | 47 | 122 | 55% | 3129 | 58% |
|  |  | E1 | 3190 | 32 | 280 | 53% | 3135 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3235 | 31 | 276 | 48% | 3249 | 57% |
|  |  | E1 | 3248 | 27 | 378 | 47% | 3270 | 58% |
|  |  | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3129 | 35 | 226 | 49% | 3137 | 56% |
|  |  | E1 | 3148 | 28 | 372 | 48% | 3160 | 47% |
|  |  | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2747 | 37 | 236 | 46% | 2790 | 38% |
|  |  | E1 | 2789 | 29 | 386 | 45% | 2836 | 37% |
|  |  | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |