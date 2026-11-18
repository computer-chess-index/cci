# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3465<sub>(+86) | 3615<sub>(+16) | 3668<sub>(+50) |  |
| 0.5.0 | 2026-10-17 | 3379 | 3599 | 3618 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3467<sub>(+72) | 3555<sub>(+38) | 3594<sub>(+49) |  |
| 0.5.0 | 2026-10-17 | 3395 | 3517 | 3545 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3395 | 3517 | 3545 |  |
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

Generated: 2026-11-18 05:39:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3379, 3465]
  line "E1: LTC (60.0+0.60s)" [3599, 3615]
  line "E1: VLTC (2m24s+1.12s)" [3618, 3668]
  line "P1: STC (8.0+0.08s)" [3395, 3467]
  line "P1: LTC (60.0+0.60s)" [3517, 3555]
  line "P1: VLTC (2m24s+1.12s)" [3545, 3594]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3594 | 49 | 96 | 51% | 3588 | 85% |
|  |  | E1 | 3668 | 34 | 198 | 51% | 3660 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3555 | 44 | 120 | 52% | 3544 | 82% |
|  |  | E1 | 3615 | 37 | 170 | 51% | 3610 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3467 | 43 | 128 | 51% | 3459 | 79% |
|  |  | E1 | 3465 | 30 | 278 | 50% | 3461 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3545 | 36 | 212 | 62% | 3384 | 69% |
|  |  | E1 | 3618 | 33 | 246 | 59% | 3476 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3517 | 42 | 164 | 64% | 3256 | 69% |
|  |  | E1 | 3599 | 33 | 256 | 57% | 3420 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3395 | 38 | 200 | 60% | 3174 | 64% |
|  |  | E1 | 3379 | 31 | 304 | 57% | 3224 | 61% |