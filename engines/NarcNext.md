# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3255<sub>(-12) | 3474<sub>(0) | 3507<sub>(-31) |  |
| 5.0 | 2026-11-02 | 3267<sub>(+413) | 3474<sub>(+253) | 3538<sub>(+213) |  |
| 4.1 | 2026-08-06 | 2854 | 3221 | 3325 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3382<sub>(+16) | 3614<sub>(+62) | 3603<sub>(+20) |  |
| 5.0 | 2026-11-02 | 3366<sub>(+442) | 3552<sub>(+227) | 3583<sub>(+155) |  |
| 4.1 | 2026-08-06 | 2924 | 3325 | 3428 |  |
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

Generated: 2026-11-10 05:40:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [2854, 3267, 3255]
  line "E1: LTC (60.0+0.60s)" [3221, 3474, 3474]
  line "E1: VLTC (2m24s+1.12s)" [3325, 3538, 3507]
  line "P1: STC (8.0+0.08s)" [2924, 3366, 3382]
  line "P1: LTC (60.0+0.60s)" [3325, 3552, 3614]
  line "P1: VLTC (2m24s+1.12s)" [3428, 3583, 3603]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3603 | 49 | 98 | 50% | 3602 | 82% |
|  |  | E1 | 3507 | 34 | 210 | 50% | 3509 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3474 | 36 | 194 | 51% | 3470 | 73% |
|  |  | P1 | 3614 | 44 | 128 | 50% | 3617 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3255 | 32 | 266 | 52% | 3239 | 62% |
|  |  | P1 | 3382 | 44 | 136 | 49% | 3391 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3583 | 44 | 130 | 52% | 3568 | 72% |
|  |  | E1 | 3538 | 34 | 224 | 54% | 3507 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3552 | 34 | 214 | 57% | 3503 | 75% |
|  |  | E1 | 3474 | 31 | 264 | 54% | 3443 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3366 | 47 | 122 | 55% | 3324 | 58% |
|  |  | E1 | 3267 | 32 | 272 | 53% | 3232 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3428 | 31 | 276 | 48% | 3441 | 57% |
|  |  | E1 | 3325 | 27 | 378 | 47% | 3347 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3325 | 35 | 226 | 49% | 3333 | 56% |
|  |  | E1 | 3221 | 28 | 372 | 48% | 3233 | 47% |
|  |  | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2924 | 37 | 236 | 46% | 2967 | 38% |
|  |  | E1 | 2854 | 29 | 386 | 45% | 2901 | 37% |
|  |  | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |