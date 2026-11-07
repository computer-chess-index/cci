# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3353<sub>(-22) | 3634<sub>(+28) | 3692<sub>(+23) |  |
| 3.0.0 | 2026-09-13 | 3375 | 3606 | 3669 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3515<sub>(+1) | 3726<sub>(-9) | 3792<sub>(+42) |  |
| 3.0.0 | 2026-09-13 | 3514 | 3735 | 3750 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-09-13 | 3283 | 3488 | 3521 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Peras+<version>&body=###%20Engine%20name%0APeras%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:40:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3375, 3353]
  line "E1: LTC (60.0+0.60s)" [3606, 3634]
  line "E1: VLTC (2m24s+1.12s)" [3669, 3692]
  line "P1: STC (8.0+0.08s)" [3514, 3515]
  line "P1: LTC (60.0+0.60s)" [3735, 3726]
  line "P1: VLTC (2m24s+1.12s)" [3750, 3792]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3792 | 44 | 118 | 52% | 3779 | 86% |
|  |  | E1 | 3692 | 36 | 180 | 50% | 3694 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3726 | 48 | 100 | 51% | 3722 | 85% |
|  |  | E1 | 3634 | 30 | 264 | 48% | 3644 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3515 | 35 | 208 | 48% | 3528 | 71% |
|  |  | E1 | 3353 | 32 | 252 | 49% | 3359 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3750 | 36 | 184 | 48% | 3764 | 82% |
|  |  | E1 | 3669 | 33 | 220 | 48% | 3683 | 81% |
|  |  | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3606 | 31 | 248 | 47% | 3625 | 78% |
|  |  | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3735 | 36 | 188 | 48% | 3746 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3375 | 31 | 288 | 49% | 3382 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |
|  |  | P1 | 3514 | 37 | 196 | 49% | 3522 | 59% |