# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3214<sub>(+85) | 3482<sub>(+83) | 3521<sub>(+38) |  |
| 3.6.0 | 2026-10-19 | 3129 | 3399 | 3483 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3214<sub>(+56) | 3406<sub>(+20) | 3457<sub>(+20) |  |
| 3.6.0 | 2026-10-19 | 3158 | 3386 | 3437 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3158 | 3386 | 3437 |  |
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

Generated: 2026-11-20 05:42:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3129, 3214]
  line "E1: LTC (60.0+0.60s)" [3399, 3482]
  line "E1: VLTC (2m24s+1.12s)" [3483, 3521]
  line "P1: STC (8.0+0.08s)" [3158, 3214]
  line "P1: LTC (60.0+0.60s)" [3386, 3406]
  line "P1: VLTC (2m24s+1.12s)" [3437, 3457]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3457 | 44 | 124 | 50% | 3459 | 74% |
|  |  | E1 | 3521 | 34 | 208 | 50% | 3517 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3406 | 38 | 176 | 47% | 3430 | 72% |
|  |  | E1 | 3482 | 30 | 276 | 51% | 3478 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3214 | 34 | 218 | 48% | 3231 | 66% |
|  |  | E1 | 3214 | 27 | 368 | 51% | 3204 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3483 | 31 | 292 | 54% | 3406 | 64% |
|  |  | P1 | 3437 | 39 | 176 | 59% | 3324 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3386 | 37 | 204 | 57% | 3249 | 62% |
|  |  | E1 | 3399 | 28 | 362 | 52% | 3329 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3158 | 37 | 248 | 57% | 2954 | 42% |
|  |  | E1 | 3129 | 31 | 340 | 56% | 2947 | 43% |