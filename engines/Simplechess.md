# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3213<sub>(+88) | 3479<sub>(+81) | 3519<sub>(+39) |  |
| 3.6.0 | 2026-10-19 | 3125 | 3398 | 3480 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3233<sub>(+58) | 3414<sub>(+15) | 3467<sub>(+19) |  |
| 3.6.0 | 2026-10-19 | 3175 | 3399 | 3448 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3175 | 3399 | 3448 |  |
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

Generated: 2026-11-24 05:43:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3125, 3213]
  line "E1: LTC (60.0+0.60s)" [3398, 3479]
  line "E1: VLTC (2m24s+1.12s)" [3480, 3519]
  line "P1: STC (8.0+0.08s)" [3175, 3233]
  line "P1: LTC (60.0+0.60s)" [3399, 3414]
  line "P1: VLTC (2m24s+1.12s)" [3448, 3467]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3519 | 34 | 208 | 50% | 3514 | 73% |
|  |  | P1 | 3467 | 44 | 124 | 50% | 3468 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3479 | 29 | 296 | 51% | 3475 | 67% |
|  |  | P1 | 3414 | 36 | 188 | 47% | 3438 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3233 | 34 | 230 | 48% | 3247 | 65% |
|  |  | E1 | 3213 | 27 | 392 | 51% | 3202 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3448 | 39 | 176 | 59% | 3336 | 68% |
|  |  | E1 | 3480 | 31 | 292 | 54% | 3405 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3399 | 37 | 204 | 57% | 3263 | 62% |
|  |  | E1 | 3398 | 28 | 362 | 52% | 3328 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3175 | 37 | 248 | 57% | 2969 | 42% |
|  |  | E1 | 3125 | 31 | 344 | 56% | 2947 | 43% |