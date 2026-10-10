# Engine: Fire

Author: Norman Schmidt

Home: https://github.com/Firefather/fire

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3059 | 3309 | 3399 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3353 | 3578 | 3619 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3156<sub>(0) | 3394<sub>(+10) | 3440<sub>(+2) |  |
| 9.3 | 2024-03-10 | 3156 | 3384 | 3438 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fire+<version>&body=###%20Engine%20name%0AFire%0A%0A###%20Version%0A10.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:38:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3156, 3156]
  line "STC (8.0+0.08s)" [3156, 3156]
  line "LTC (60.0+0.60s)" [3384, 3394]
  line "" [3438, 3440]
  line "VLTC (2m24s+1.12s)" [3438, 3440]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3399 | 37 | 180 | 50% | 3399 | 69% |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3619 | 46 | 120 | 48% | 3636 | 66% |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3440 | 18 | 736 | 49% | 3444 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3394 | 18 | 748 | 50% | 3393 | 71% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3309 | 32 | 252 | 55% | 3263 | 65% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3578 | 32 | 256 | 52% | 3560 | 67% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3156 | 17 | 948 | 51% | 3148 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3059 | 34 | 244 | 48% | 3077 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3353 | 38 | 190 | 50% | 3352 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3438 | 13 | 1520 | 49% | 3440 | 75% |
| 9.3 | LTC <sub>(60.0+0.60s)</sub> | 3384 | 13 | 1496 | 50% | 3384 | 73% |
| 9.3 | STC <sub>(8.0+0.08s)</sub> | 3156 | 14 | 1428 | 51% | 3133 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |