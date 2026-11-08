# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3525<sub>(+87) | 3676<sub>(+8) | 3730<sub>(+50) |  |
| 0.5.0 | 2026-10-17 | 3438 | 3668 | 3680 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3665<sub>(+73) | 3744<sub>(+33) | 3785<sub>(+47) |  |
| 0.5.0 | 2026-10-17 | 3592 | 3711 | 3738 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3592 | 3711 | 3738 |  |
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

Generated: 2026-11-08 05:38:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3400 --> 3800
  line "E1: STC (8.0+0.08s)" [3438, 3525]
  line "E1: LTC (60.0+0.60s)" [3668, 3676]
  line "E1: VLTC (2m24s+1.12s)" [3680, 3730]
  line "P1: STC (8.0+0.08s)" [3592, 3665]
  line "P1: LTC (60.0+0.60s)" [3711, 3744]
  line "P1: VLTC (2m24s+1.12s)" [3738, 3785]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3785 | 58 | 68 | 51% | 3776 | 82% |
|  |  | E1 | 3730 | 39 | 146 | 51% | 3725 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3744 | 46 | 108 | 51% | 3734 | 82% |
|  |  | E1 | 3676 | 42 | 134 | 51% | 3672 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3665 | 49 | 100 | 52% | 3652 | 80% |
|  |  | E1 | 3525 | 33 | 234 | 50% | 3526 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3680 | 34 | 234 | 59% | 3533 | 74% |
|  |  | P1 | 3738 | 36 | 212 | 62% | 3571 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3668 | 34 | 240 | 58% | 3472 | 67% |
|  |  | P1 | 3711 | 42 | 160 | 64% | 3429 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3438 | 32 | 280 | 56% | 3278 | 62% |
|  |  | P1 | 3592 | 39 | 192 | 60% | 3345 | 64% |