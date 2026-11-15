# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3456<sub>(+89) | 3610<sub>(+12) | 3665<sub>(+55) |  |
| 0.5.0 | 2026-10-17 | 3367 | 3598 | 3610 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3461<sub>(+70) | 3545<sub>(+38) | 3583<sub>(+47) |  |
| 0.5.0 | 2026-10-17 | 3391 | 3507 | 3536 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3391 | 3507 | 3536 |  |
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

Generated: 2026-11-15 05:39:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3367, 3456]
  line "E1: LTC (60.0+0.60s)" [3598, 3610]
  line "E1: VLTC (2m24s+1.12s)" [3610, 3665]
  line "P1: STC (8.0+0.08s)" [3391, 3461]
  line "P1: LTC (60.0+0.60s)" [3507, 3545]
  line "P1: VLTC (2m24s+1.12s)" [3536, 3583]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3583 | 51 | 88 | 51% | 3576 | 84% |
|  |  | E1 | 3665 | 34 | 190 | 52% | 3656 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3545 | 44 | 120 | 52% | 3534 | 82% |
|  |  | E1 | 3610 | 37 | 170 | 51% | 3605 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3461 | 44 | 124 | 52% | 3451 | 79% |
|  |  | E1 | 3456 | 31 | 258 | 50% | 3455 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3610 | 34 | 234 | 59% | 3465 | 74% |
|  |  | P1 | 3536 | 36 | 212 | 62% | 3374 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3598 | 33 | 248 | 57% | 3410 | 68% |
|  |  | P1 | 3507 | 42 | 164 | 64% | 3247 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3367 | 32 | 280 | 56% | 3208 | 62% |
|  |  | P1 | 3391 | 39 | 196 | 60% | 3163 | 63% |