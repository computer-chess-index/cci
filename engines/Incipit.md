# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3456<sub>(+76) | 3613<sub>(+22) | 3659<sub>(+50) |  |
| 0.5.0 | 2026-10-17 | 3380 | 3591 | 3609 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3479<sub>(+62) | 3571<sub>(+39) | 3602<sub>(+42) |  |
| 0.5.0 | 2026-10-17 | 3417 | 3532 | 3560 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3417 | 3532 | 3560 |  |
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

Generated: 2026-11-27 05:39:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3380, 3456]
  line "E1: LTC (60.0+0.60s)" [3591, 3613]
  line "E1: VLTC (2m24s+1.12s)" [3609, 3659]
  line "P1: STC (8.0+0.08s)" [3417, 3479]
  line "P1: LTC (60.0+0.60s)" [3532, 3571]
  line "P1: VLTC (2m24s+1.12s)" [3560, 3602]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3602 | 48 | 100 | 50% | 3603 | 84% |
|  |  | E1 | 3659 | 32 | 222 | 51% | 3652 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3571 | 43 | 124 | 52% | 3560 | 82% |
|  |  | E1 | 3613 | 34 | 206 | 51% | 3605 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3479 | 43 | 132 | 52% | 3455 | 77% |
|  |  | E1 | 3456 | 28 | 310 | 50% | 3455 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3609 | 32 | 250 | 58% | 3472 | 74% |
|  |  | P1 | 3560 | 36 | 212 | 62% | 3401 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3591 | 33 | 260 | 56% | 3417 | 68% |
|  |  | P1 | 3532 | 42 | 164 | 64% | 3272 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3417 | 37 | 208 | 60% | 3202 | 64% |
|  |  | E1 | 3380 | 29 | 336 | 57% | 3236 | 62% |