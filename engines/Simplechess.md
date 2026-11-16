# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3216<sub>(+83) | 3482<sub>(+87) | 3524<sub>(+40) |  |
| 3.6.0 | 2026-10-19 | 3133 | 3395 | 3484 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3206<sub>(+58) | 3398<sub>(+20) | 3451<sub>(+22) |  |
| 3.6.0 | 2026-10-19 | 3148 | 3378 | 3429 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3148 | 3378 | 3429 |  |
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

Generated: 2026-11-16 05:42:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3133, 3216]
  line "E1: LTC (60.0+0.60s)" [3395, 3482]
  line "E1: VLTC (2m24s+1.12s)" [3484, 3524]
  line "P1: STC (8.0+0.08s)" [3148, 3206]
  line "P1: LTC (60.0+0.60s)" [3378, 3398]
  line "P1: VLTC (2m24s+1.12s)" [3429, 3451]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3451 | 44 | 124 | 50% | 3451 | 74% |
|  |  | E1 | 3524 | 34 | 208 | 50% | 3519 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3398 | 38 | 172 | 47% | 3421 | 72% |
|  |  | E1 | 3482 | 31 | 272 | 51% | 3479 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3206 | 35 | 206 | 48% | 3220 | 66% |
|  |  | E1 | 3216 | 28 | 360 | 52% | 3204 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3429 | 39 | 176 | 59% | 3316 | 68% |
|  |  | E1 | 3484 | 31 | 292 | 54% | 3409 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3378 | 37 | 204 | 57% | 3241 | 62% |
|  |  | E1 | 3395 | 29 | 346 | 52% | 3326 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3148 | 37 | 248 | 57% | 2944 | 42% |
|  |  | E1 | 3133 | 31 | 332 | 56% | 2946 | 43% |