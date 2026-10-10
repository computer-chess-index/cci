# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3236 | 3455 | 3540 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3513 | 3686 | 3740 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3344<sub>(+9) | 3505<sub>(+8) | 3525<sub>(0) |  |
| 6.0 | 2024-10-24 | 3335<sub>(+113) | 3497<sub>(+76) | 3525<sub>(+78) |  |
| 5.0 | 2024-05-23 | 3222 | 3421 | 3447 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Starzix+<version>&body=###%20Engine%20name%0AStarzix%0A%0A###%20Version%0A6.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:42:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3222, 3335, 3344]
  line "STC (8.0+0.08s)" [3222, 3335, 3344]
  line "LTC (60.0+0.60s)" [3421, 3497, 3505]
  line "" [3447, 3525, 3525]
  line "VLTC (2m24s+1.12s)" [3447, 3525, 3525]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 22 | 458 | 50% | 3525 | 87% |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3740 | 40 | 148 | 54% | 3713 | 84% |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 39 | 156 | 48% | 3548 | 78% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3686 | 48 | 102 | 49% | 3691 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 40 | 148 | 51% | 3447 | 78% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3505 | 22 | 456 | 50% | 3505 | 86% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3513 | 36 | 204 | 51% | 3502 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3236 | 31 | 282 | 46% | 3262 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3344 | 20 | 620 | 50% | 3345 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 12 | 1620 | 50% | 3525 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 12 | 1600 | 50% | 3495 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3335 | 13 | 1628 | 50% | 3337 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3447 | 32 | 236 | 51% | 3441 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 32 | 240 | 48% | 3432 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3222 | 27 | 408 | 53% | 3136 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |