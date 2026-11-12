# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3514<sub>(+89) | 3663<sub>(+9) | 3719<sub>(+52) |  |
| 0.5.0 | 2026-10-17 | 3425 | 3654 | 3667 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3676<sub>(+70) | 3760<sub>(+38) | 3798<sub>(+48) |  |
| 0.5.0 | 2026-10-17 | 3606 | 3722 | 3750 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3606 | 3722 | 3750 |  |
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

Generated: 2026-11-12 05:38:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3400 --> 3800
  line "E1: STC (8.0+0.08s)" [3425, 3514]
  line "E1: LTC (60.0+0.60s)" [3654, 3663]
  line "E1: VLTC (2m24s+1.12s)" [3667, 3719]
  line "P1: STC (8.0+0.08s)" [3606, 3676]
  line "P1: LTC (60.0+0.60s)" [3722, 3760]
  line "P1: VLTC (2m24s+1.12s)" [3750, 3798]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3798 | 51 | 88 | 51% | 3791 | 84% |
|  |  | E1 | 3719 | 34 | 190 | 52% | 3710 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3760 | 44 | 120 | 52% | 3748 | 82% |
|  |  | E1 | 3663 | 38 | 162 | 51% | 3660 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3676 | 44 | 124 | 52% | 3665 | 79% |
|  |  | E1 | 3514 | 31 | 254 | 50% | 3513 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3750 | 36 | 212 | 62% | 3583 | 69% |
|  |  | E1 | 3667 | 34 | 234 | 59% | 3519 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3722 | 42 | 160 | 64% | 3440 | 68% |
|  |  | E1 | 3654 | 34 | 244 | 57% | 3461 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3606 | 39 | 192 | 60% | 3357 | 64% |
|  |  | E1 | 3425 | 32 | 280 | 56% | 3264 | 62% |