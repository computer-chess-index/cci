# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3443<sub>(+90) | 3592<sub>(+9) | 3649<sub>(+54) |  |
| 0.5.0 | 2026-10-17 | 3353 | 3583 | 3595 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3509<sub>(+72) | 3592<sub>(+37) | 3630<sub>(+47) |  |
| 0.5.0 | 2026-10-17 | 3437 | 3555 | 3583 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3437 | 3555 | 3583 |  |
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

Generated: 2026-11-13 05:39:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3353, 3443]
  line "E1: LTC (60.0+0.60s)" [3583, 3592]
  line "E1: VLTC (2m24s+1.12s)" [3595, 3649]
  line "P1: STC (8.0+0.08s)" [3437, 3509]
  line "P1: LTC (60.0+0.60s)" [3555, 3592]
  line "P1: VLTC (2m24s+1.12s)" [3583, 3630]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3630 | 51 | 88 | 51% | 3623 | 84% |
|  |  | E1 | 3649 | 34 | 190 | 52% | 3638 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3592 | 44 | 120 | 52% | 3580 | 82% |
|  |  | E1 | 3592 | 38 | 162 | 51% | 3588 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3509 | 44 | 124 | 52% | 3498 | 79% |
|  |  | E1 | 3443 | 31 | 254 | 50% | 3441 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3583 | 36 | 212 | 62% | 3417 | 69% |
|  |  | E1 | 3595 | 34 | 234 | 59% | 3452 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3583 | 34 | 244 | 57% | 3395 | 67% |
|  |  | P1 | 3555 | 42 | 164 | 64% | 3287 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3353 | 32 | 280 | 56% | 3198 | 62% |
|  |  | P1 | 3437 | 39 | 196 | 60% | 3204 | 63% |