# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3191<sub>(-10) | 3409<sub>(0) | 3451<sub>(-25) |  |
| 5.0 | 2026-11-02 | 3201<sub>(+405) | 3409<sub>(+250) | 3476<sub>(+216) |  |
| 4.1 | 2026-08-06 | 2796 | 3159 | 3260 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3173<sub>(+18) | 3410<sub>(+63) | 3399<sub>(+21) |  |
| 5.0 | 2026-11-02 | 3155<sub>(+401) | 3347<sub>(+227) | 3378<sub>(+156) |  |
| 4.1 | 2026-08-06 | 2754 | 3120 | 3222 |  |
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

Generated: 2026-11-16 05:40:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2796, 3201, 3191]
  line "E1: LTC (60.0+0.60s)" [3159, 3409, 3409]
  line "E1: VLTC (2m24s+1.12s)" [3260, 3476, 3451]
  line "P1: STC (8.0+0.08s)" [2754, 3155, 3173]
  line "P1: LTC (60.0+0.60s)" [3120, 3347, 3410]
  line "P1: VLTC (2m24s+1.12s)" [3222, 3378, 3399]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3451 | 32 | 230 | 51% | 3444 | 76% |
|  |  | P1 | 3399 | 46 | 110 | 50% | 3397 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3410 | 44 | 128 | 50% | 3411 | 73% |
|  |  | E1 | 3409 | 33 | 226 | 51% | 3405 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3173 | 40 | 160 | 48% | 3189 | 63% |
|  |  | E1 | 3191 | 30 | 294 | 51% | 3182 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3378 | 43 | 134 | 53% | 3360 | 72% |
|  |  | E1 | 3476 | 32 | 240 | 54% | 3445 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3347 | 33 | 222 | 57% | 3302 | 74% |
|  |  | E1 | 3409 | 31 | 268 | 54% | 3378 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3155 | 46 | 130 | 53% | 3125 | 58% |
|  |  | E1 | 3201 | 31 | 300 | 53% | 3152 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3222 | 31 | 276 | 48% | 3236 | 57% |
|  |  | E1 | 3260 | 27 | 378 | 47% | 3282 | 58% |
|  |  | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3159 | 28 | 372 | 48% | 3173 | 47% |
|  |  | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3120 | 35 | 226 | 49% | 3128 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2796 | 29 | 386 | 45% | 2843 | 37% |
|  |  | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2754 | 37 | 236 | 46% | 2799 | 38% |