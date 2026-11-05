# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0 | 2026-11-02 | 3281<sub>(+427) | 3478<sub>(+258) | 3546<sub>(+222) |  |
| 4.1 | 2026-08-06 | 2854 | 3220 | 3324 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0 | 2026-11-02 | 3417<sub>(+439) | 3573<sub>(+195) | 3621<sub>(+143) |  |
| 4.1 | 2026-08-06 | 2978 | 3378 | 3478 |  |
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

Generated: 2026-11-05 05:40:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [2854, 3281]
  line "E1: LTC (60.0+0.60s)" [3220, 3478]
  line "E1: VLTC (2m24s+1.12s)" [3324, 3546]
  line "P1: STC (8.0+0.08s)" [2978, 3417]
  line "P1: LTC (60.0+0.60s)" [3378, 3573]
  line "P1: VLTC (2m24s+1.12s)" [3478, 3621]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3621 | 60 | 68 | 51% | 3611 | 74% |
|  |  | E1 | 3546 | 45 | 124 | 59% | 3476 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3573 | 56 | 80 | 61% | 3497 | 71% |
|  |  | E1 | 3478 | 44 | 140 | 59% | 3411 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3417 | 64 | 70 | 57% | 3351 | 51% |
|  |  | E1 | 3281 | 54 | 104 | 59% | 3175 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3478 | 31 | 276 | 48% | 3491 | 57% |
|  |  | E1 | 3324 | 27 | 378 | 47% | 3345 | 58% |
|  |  | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3220 | 28 | 372 | 48% | 3233 | 47% |
|  |  | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3378 | 35 | 226 | 49% | 3386 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2854 | 29 | 386 | 45% | 2901 | 37% |
|  |  | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2978 | 37 | 236 | 46% | 3023 | 38% |