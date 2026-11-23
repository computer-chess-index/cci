# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3210<sub>(+83) | 3479<sub>(+81) | 3519<sub>(+39) |  |
| 3.6.0 | 2026-10-19 | 3127 | 3398 | 3480 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3228<sub>(+55) | 3413<sub>(+16) | 3465<sub>(+18) |  |
| 3.6.0 | 2026-10-19 | 3173 | 3397 | 3447 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3173 | 3397 | 3447 |  |
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

Generated: 2026-11-23 05:42:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3127, 3210]
  line "E1: LTC (60.0+0.60s)" [3398, 3479]
  line "E1: VLTC (2m24s+1.12s)" [3480, 3519]
  line "P1: STC (8.0+0.08s)" [3173, 3228]
  line "P1: LTC (60.0+0.60s)" [3397, 3413]
  line "P1: VLTC (2m24s+1.12s)" [3447, 3465]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3465 | 44 | 124 | 50% | 3465 | 74% |
|  |  | E1 | 3519 | 34 | 208 | 50% | 3514 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3413 | 36 | 188 | 47% | 3437 | 72% |
|  |  | E1 | 3479 | 30 | 292 | 51% | 3476 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3228 | 34 | 218 | 48% | 3245 | 66% |
|  |  | E1 | 3210 | 27 | 380 | 51% | 3201 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3447 | 39 | 176 | 59% | 3333 | 68% |
|  |  | E1 | 3480 | 31 | 292 | 54% | 3405 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3397 | 37 | 204 | 57% | 3260 | 62% |
|  |  | E1 | 3398 | 28 | 362 | 52% | 3326 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3173 | 37 | 248 | 57% | 2966 | 42% |
|  |  | E1 | 3127 | 31 | 340 | 56% | 2944 | 43% |