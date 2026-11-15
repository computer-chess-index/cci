# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3182<sub>(-11) | 3399<sub>(0) | 3434<sub>(-30) |  |
| 5.0 | 2026-11-02 | 3193<sub>(+405) | 3399<sub>(+248) | 3464<sub>(+213) |  |
| 4.1 | 2026-08-06 | 2788 | 3151 | 3251 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3174<sub>(+12) | 3411<sub>(+60) | 3402<sub>(+22) |  |
| 5.0 | 2026-11-02 | 3162<sub>(+419) | 3351<sub>(+231) | 3380<sub>(+155) |  |
| 4.1 | 2026-08-06 | 2743 | 3120 | 3225 |  |
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

Generated: 2026-11-15 05:40:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2788, 3193, 3182]
  line "E1: LTC (60.0+0.60s)" [3151, 3399, 3399]
  line "E1: VLTC (2m24s+1.12s)" [3251, 3464, 3434]
  line "P1: STC (8.0+0.08s)" [2743, 3162, 3174]
  line "P1: LTC (60.0+0.60s)" [3120, 3351, 3411]
  line "P1: VLTC (2m24s+1.12s)" [3225, 3380, 3402]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3402 | 46 | 110 | 50% | 3399 | 83% |
|  |  | E1 | 3434 | 33 | 218 | 50% | 3434 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3411 | 44 | 128 | 50% | 3413 | 73% |
|  |  | E1 | 3399 | 33 | 226 | 51% | 3395 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3174 | 41 | 156 | 48% | 3193 | 62% |
|  |  | E1 | 3182 | 30 | 286 | 51% | 3174 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3380 | 44 | 130 | 52% | 3366 | 72% |
|  |  | E1 | 3464 | 33 | 236 | 54% | 3436 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3351 | 34 | 218 | 57% | 3301 | 75% |
|  |  | E1 | 3399 | 31 | 268 | 54% | 3368 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3162 | 47 | 122 | 55% | 3120 | 58% |
|  |  | E1 | 3193 | 31 | 296 | 53% | 3141 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3251 | 27 | 378 | 47% | 3272 | 58% |
|  |  | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3225 | 31 | 276 | 48% | 3239 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3151 | 28 | 372 | 48% | 3163 | 47% |
|  |  | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3120 | 35 | 226 | 49% | 3128 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2743 | 37 | 236 | 46% | 2786 | 38% |
|  |  | E1 | 2788 | 29 | 386 | 45% | 2835 | 37% |