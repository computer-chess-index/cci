# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3208<sub>(+84) | 3472<sub>(+81) | 3513<sub>(+37) |  |
| 3.6.0 | 2026-10-19 | 3124 | 3391 | 3476 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3244<sub>(+62) | 3424<sub>(+18) | 3474<sub>(+15) |  |
| 3.6.0 | 2026-10-19 | 3182 | 3406 | 3459 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3182 | 3406 | 3459 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Simplechess+<version>&body=###%20Engine%20name%0ASimplechess%0A%0A###%20Version%0A3.7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:43:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3124, 3208]
  line "E1: LTC (60.0+0.60s)" [3391, 3472]
  line "E1: VLTC (2m24s+1.12s)" [3476, 3513]
  line "P1: STC (8.0+0.08s)" [3182, 3244]
  line "P1: LTC (60.0+0.60s)" [3406, 3424]
  line "P1: VLTC (2m24s+1.12s)" [3459, 3474]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3474 | 44 | 124 | 50% | 3474 | 74% |
|  |  | E1 | 3513 | 34 | 212 | 50% | 3509 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3472 | 29 | 312 | 50% | 3470 | 67% |
|  |  | P1 | 3424 | 34 | 212 | 47% | 3445 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3208 | 26 | 408 | 51% | 3200 | 57% |
|  |  | P1 | 3244 | 34 | 230 | 48% | 3256 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3459 | 38 | 184 | 59% | 3348 | 68% |
|  |  | E1 | 3476 | 30 | 298 | 54% | 3401 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3406 | 37 | 208 | 57% | 3274 | 62% |
|  |  | E1 | 3391 | 28 | 378 | 52% | 3325 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3182 | 36 | 256 | 57% | 2984 | 43% |
|  |  | E1 | 3124 | 30 | 360 | 56% | 2952 | 43% |