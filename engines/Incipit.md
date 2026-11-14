# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3453<sub>(+89) | 3607<sub>(+11) | 3663<sub>(+54) |  |
| 0.5.0 | 2026-10-17 | 3364 | 3596 | 3609 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3471<sub>(+70) | 3555<sub>(+38) | 3592<sub>(+47) |  |
| 0.5.0 | 2026-10-17 | 3401 | 3517 | 3545 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3401 | 3517 | 3545 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Incipit+<version>&body=###%20Engine%20name%0AIncipit%0A%0A###%20Version%0A0.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:38:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3364, 3453]
  line "E1: LTC (60.0+0.60s)" [3596, 3607]
  line "E1: VLTC (2m24s+1.12s)" [3609, 3663]
  line "P1: STC (8.0+0.08s)" [3401, 3471]
  line "P1: LTC (60.0+0.60s)" [3517, 3555]
  line "P1: VLTC (2m24s+1.12s)" [3545, 3592]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3663 | 34 | 190 | 52% | 3653 | 89% |
|  |  | P1 | 3592 | 51 | 88 | 51% | 3586 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3555 | 44 | 120 | 52% | 3542 | 82% |
|  |  | E1 | 3607 | 38 | 166 | 51% | 3602 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3471 | 44 | 124 | 52% | 3460 | 79% |
|  |  | E1 | 3453 | 31 | 254 | 50% | 3452 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3545 | 36 | 212 | 62% | 3383 | 69% |
|  |  | E1 | 3609 | 34 | 234 | 59% | 3464 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3517 | 42 | 164 | 64% | 3254 | 69% |
|  |  | E1 | 3596 | 33 | 248 | 57% | 3410 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3401 | 39 | 196 | 60% | 3171 | 63% |
|  |  | E1 | 3364 | 32 | 280 | 56% | 3206 | 62% |