# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3463<sub>(+85) | 3613<sub>(+18) | 3664<sub>(+50) |  |
| 0.5.0 | 2026-10-17 | 3378 | 3595 | 3614 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3461<sub>(+68) | 3549<sub>(+38) | 3588<sub>(+50) |  |
| 0.5.0 | 2026-10-17 | 3393 | 3511 | 3538 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3393 | 3511 | 3538 |  |
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

Generated: 2026-11-19 05:39:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3378, 3463]
  line "E1: LTC (60.0+0.60s)" [3595, 3613]
  line "E1: VLTC (2m24s+1.12s)" [3614, 3664]
  line "P1: STC (8.0+0.08s)" [3393, 3461]
  line "P1: LTC (60.0+0.60s)" [3511, 3549]
  line "P1: VLTC (2m24s+1.12s)" [3538, 3588]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3664 | 33 | 202 | 51% | 3656 | 90% |
|  |  | P1 | 3588 | 49 | 96 | 51% | 3583 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3613 | 37 | 174 | 51% | 3607 | 81% |
|  |  | P1 | 3549 | 43 | 124 | 52% | 3538 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3463 | 30 | 278 | 50% | 3459 | 74% |
|  |  | P1 | 3461 | 43 | 128 | 51% | 3453 | 79% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3538 | 36 | 212 | 62% | 3379 | 69% |
|  |  | E1 | 3614 | 33 | 246 | 59% | 3472 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3511 | 42 | 164 | 64% | 3252 | 69% |
|  |  | E1 | 3595 | 33 | 256 | 57% | 3417 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3393 | 38 | 200 | 60% | 3171 | 64% |
|  |  | E1 | 3378 | 31 | 304 | 57% | 3222 | 61% |