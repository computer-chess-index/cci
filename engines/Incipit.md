# Engine: Incipit

Author: Adam Twiss

Home: https://github.com/adamtwiss/incipit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3529<sub>(+86) | 3679<sub>(+8) | 3735<sub>(+51) |  |
| 0.5.0 | 2026-10-17 | 3443 | 3671 | 3684 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-06 | 3665<sub>(+73) | 3746<sub>(+36) | 3785<sub>(+47) |  |
| 0.5.0 | 2026-10-17 | 3592 | 3710 | 3738 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-10-17 | 3592 | 3710 | 3738 |  |
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

Generated: 2026-11-10 05:38:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0"]
  y-axis "Elo Rating" 3400 --> 3800
  line "E1: STC (8.0+0.08s)" [3443, 3529]
  line "E1: LTC (60.0+0.60s)" [3671, 3679]
  line "E1: VLTC (2m24s+1.12s)" [3684, 3735]
  line "P1: STC (8.0+0.08s)" [3592, 3665]
  line "P1: LTC (60.0+0.60s)" [3710, 3746]
  line "P1: VLTC (2m24s+1.12s)" [3738, 3785]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3735 | 36 | 170 | 51% | 3726 | 89% |
|  |  | P1 | 3785 | 53 | 80 | 51% | 3777 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3679 | 39 | 154 | 51% | 3675 | 79% |
|  |  | P1 | 3746 | 45 | 116 | 52% | 3734 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3665 | 48 | 104 | 52% | 3652 | 81% |
|  |  | E1 | 3529 | 32 | 246 | 49% | 3530 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3738 | 36 | 212 | 62% | 3571 | 69% |
|  |  | E1 | 3684 | 34 | 234 | 59% | 3536 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3710 | 42 | 160 | 64% | 3429 | 68% |
|  |  | E1 | 3671 | 34 | 240 | 58% | 3475 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3592 | 39 | 192 | 60% | 3345 | 64% |
|  |  | E1 | 3443 | 32 | 280 | 56% | 3281 | 62% |