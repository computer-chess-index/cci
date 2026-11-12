# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3260<sub>(+89) | 3526<sub>(+79) | 3572<sub>(+42) |  |
| 3.6.0 | 2026-10-19 | 3171 | 3447 | 3530 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3425<sub>(+61) | 3615<sub>(+16) | 3667<sub>(+25) |  |
| 3.6.0 | 2026-10-19 | 3364 | 3599 | 3642 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3364 | 3599 | 3642 |  |
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

Generated: 2026-11-12 05:42:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3171, 3260]
  line "E1: LTC (60.0+0.60s)" [3447, 3526]
  line "E1: VLTC (2m24s+1.12s)" [3530, 3572]
  line "P1: STC (8.0+0.08s)" [3364, 3425]
  line "P1: LTC (60.0+0.60s)" [3599, 3615]
  line "P1: VLTC (2m24s+1.12s)" [3642, 3667]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3667 | 45 | 120 | 50% | 3664 | 74% |
|  |  | E1 | 3572 | 35 | 200 | 51% | 3565 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3615 | 38 | 172 | 47% | 3638 | 72% |
|  |  | E1 | 3526 | 32 | 256 | 50% | 3526 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3425 | 37 | 190 | 49% | 3430 | 66% |
|  |  | E1 | 3260 | 28 | 344 | 52% | 3243 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3642 | 40 | 172 | 59% | 3524 | 68% |
|  |  | E1 | 3530 | 32 | 276 | 54% | 3451 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3599 | 38 | 200 | 58% | 3445 | 63% |
|  |  | E1 | 3447 | 30 | 326 | 53% | 3368 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3171 | 33 | 302 | 57% | 2974 | 41% |
|  |  | P1 | 3364 | 37 | 244 | 57% | 3136 | 42% |