# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3209<sub>(+84) | 3474<sub>(+79) | 3517<sub>(+38) |  |
| 3.6.0 | 2026-10-19 | 3125 | 3395 | 3479 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3241<sub>(+60) | 3424<sub>(+19) | 3475<sub>(+16) |  |
| 3.6.0 | 2026-10-19 | 3181 | 3405 | 3459 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3181 | 3405 | 3459 |  |
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

Generated: 2026-11-26 05:43:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3125, 3209]
  line "E1: LTC (60.0+0.60s)" [3395, 3474]
  line "E1: VLTC (2m24s+1.12s)" [3479, 3517]
  line "P1: STC (8.0+0.08s)" [3181, 3241]
  line "P1: LTC (60.0+0.60s)" [3405, 3424]
  line "P1: VLTC (2m24s+1.12s)" [3459, 3475]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3475 | 44 | 124 | 50% | 3475 | 74% |
|  |  | E1 | 3517 | 34 | 208 | 50% | 3511 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3424 | 35 | 196 | 47% | 3445 | 73% |
|  |  | E1 | 3474 | 29 | 304 | 50% | 3472 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3241 | 34 | 230 | 48% | 3255 | 65% |
|  |  | E1 | 3209 | 26 | 400 | 51% | 3200 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3479 | 31 | 294 | 54% | 3402 | 64% |
|  |  | P1 | 3459 | 38 | 184 | 59% | 3348 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3395 | 28 | 374 | 52% | 3326 | 53% |
|  |  | P1 | 3405 | 37 | 208 | 57% | 3274 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3181 | 36 | 256 | 57% | 2982 | 43% |
|  |  | E1 | 3125 | 30 | 360 | 56% | 2952 | 43% |