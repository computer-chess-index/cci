# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3213<sub>(+84) | 3482<sub>(+83) | 3521<sub>(+38) |  |
| 3.6.0 | 2026-10-19 | 3129 | 3399 | 3483 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3221<sub>(+57) | 3406<sub>(+16) | 3459<sub>(+19) |  |
| 3.6.0 | 2026-10-19 | 3164 | 3390 | 3440 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3164 | 3390 | 3440 |  |
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

Generated: 2026-11-22 05:42:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3129, 3213]
  line "E1: LTC (60.0+0.60s)" [3399, 3482]
  line "E1: VLTC (2m24s+1.12s)" [3483, 3521]
  line "P1: STC (8.0+0.08s)" [3164, 3221]
  line "P1: LTC (60.0+0.60s)" [3390, 3406]
  line "P1: VLTC (2m24s+1.12s)" [3440, 3459]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3521 | 34 | 208 | 50% | 3517 | 73% |
|  |  | P1 | 3459 | 44 | 124 | 50% | 3459 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3482 | 30 | 280 | 51% | 3478 | 68% |
|  |  | P1 | 3406 | 36 | 188 | 47% | 3430 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3221 | 34 | 218 | 48% | 3237 | 66% |
|  |  | E1 | 3213 | 27 | 376 | 51% | 3204 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3440 | 39 | 176 | 59% | 3326 | 68% |
|  |  | E1 | 3483 | 31 | 292 | 54% | 3406 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3390 | 37 | 204 | 57% | 3255 | 62% |
|  |  | E1 | 3399 | 28 | 362 | 52% | 3329 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3164 | 37 | 248 | 57% | 2959 | 42% |
|  |  | E1 | 3129 | 31 | 340 | 56% | 2947 | 43% |