# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3455<sub>(+76) | 3607<sub>(+17) | 3656<sub>(+49) |  |
| 0.5.0 | 2026-10-17 | 3379 | 3590 | 3607 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3479<sub>(+62) | 3572<sub>(+40) | 3603<sub>(+42) |  |
| 0.5.0 | 2026-10-17 | 3417 | 3532 | 3561 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3417 | 3532 | 3561 |  |
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

Generated: 2026-11-28 05:39:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3379, 3455]
  line "E1: LTC (60.0+0.60s)" [3590, 3607]
  line "E1: VLTC (2m24s+1.12s)" [3607, 3656]
  line "P1: STC (8.0+0.08s)" [3417, 3479]
  line "P1: LTC (60.0+0.60s)" [3532, 3572]
  line "P1: VLTC (2m24s+1.12s)" [3561, 3603]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3603 | 46 | 108 | 50% | 3603 | 85% |
|  |  | E1 | 3656 | 32 | 222 | 51% | 3650 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3572 | 43 | 124 | 52% | 3561 | 82% |
|  |  | E1 | 3607 | 33 | 210 | 51% | 3602 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3455 | 28 | 310 | 50% | 3453 | 73% |
|  |  | P1 | 3479 | 43 | 132 | 52% | 3455 | 77% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3561 | 36 | 212 | 62% | 3402 | 69% |
|  |  | E1 | 3607 | 32 | 250 | 58% | 3471 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3532 | 42 | 164 | 64% | 3272 | 69% |
|  |  | E1 | 3590 | 33 | 260 | 56% | 3416 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3417 | 37 | 208 | 60% | 3204 | 64% |
|  |  | E1 | 3379 | 29 | 336 | 57% | 3236 | 62% |