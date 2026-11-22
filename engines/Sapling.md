# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3070<sub>(+30) | 3314<sub>(-3) | 3409<sub>(+18) |  |
| 2.0.0 | 2026-10-21 | 3040 | 3317 | 3391 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3067<sub>(+62) | 3268<sub>(-25) | 3351<sub>(+15) |  |
| 2.0.0 | 2026-10-21 | 3005 | 3293 | 3336 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3005 | 3293 | 3336 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sapling+<version>&body=###%20Engine%20name%0ASapling%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:42:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3040, 3070]
  line "E1: LTC (60.0+0.60s)" [3317, 3314]
  line "E1: VLTC (2m24s+1.12s)" [3391, 3409]
  line "P1: STC (8.0+0.08s)" [3005, 3067]
  line "P1: LTC (60.0+0.60s)" [3293, 3268]
  line "P1: VLTC (2m24s+1.12s)" [3336, 3351]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3409 | 28 | 312 | 50% | 3410 | 74% |
|  |  | P1 | 3351 | 39 | 160 | 49% | 3360 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3314 | 27 | 350 | 48% | 3329 | 67% |
|  |  | P1 | 3268 | 33 | 248 | 52% | 3255 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3067 | 37 | 194 | 53% | 3048 | 61% |
|  |  | E1 | 3070 | 31 | 288 | 51% | 3059 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3336 | 38 | 254 | 67% | 2704 | 47% |
|  |  | E1 | 3391 | 31 | 340 | 62% | 3000 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3293 | 40 | 230 | 69% | 2634 | 46% |
|  |  | E1 | 3317 | 27 | 412 | 61% | 3005 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3005 | 40 | 240 | 66% | 2473 | 40% |
|  |  | E1 | 3040 | 34 | 294 | 57% | 2754 | 43% |