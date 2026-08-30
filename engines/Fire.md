# Engine: Fire

Author: Norman Schmidt

Home: https://github.com/Firefather/fire

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3148<sub>(+1) | 3382<sub>(+8) | 3430<sub>(+2) |  |
| 9.3 | 2024-03-10 | 3147 | 3374 | 3428 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fire+<version>&body=###%20Engine%20name%0AFire%0A%0A###%20Version%0A10.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 13:08:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3147, 3148]
  line "STC (8.0+0.08s)" [3147, 3148]
  line "LTC (60.0+0.60s)" [3374, 3382]
  line "" [3428, 3430]
  line "VLTC (2m24s+1.12s)" [3428, 3430]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 18 | 724 | 50% | 3433 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 19 | 728 | 50% | 3382 | 71% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3148 | 17 | 912 | 51% | 3139 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 13 | 1520 | 49% | 3429 | 75% |
| 9.3 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 13 | 1496 | 50% | 3374 | 73% |
| 9.3 | STC <sub>(8.0+0.08s)</sub> | 3147 | 14 | 1428 | 51% | 3124 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |