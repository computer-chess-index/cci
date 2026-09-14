# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3352<sub>(+4) | 3517<sub>(-2) | 3544<sub>(0) |  |
| 1.3.0 | 2026-06-17 | 3348<sub>(+new) | 3519<sub>(+new) | 3544<sub>(+new) |  |
| 1.2.0 | 2025-05-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Renegade+<version>&body=###%20Engine%20name%0ARenegade%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:41:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3348, 3352]
  line "STC (8.0+0.08s)" [3348, 3352]
  line "LTC (60.0+0.60s)" [3519, 3517]
  line "" [3544, 3544]
  line "VLTC (2m24s+1.12s)" [3544, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 34 | 198 | 49% | 3548 | 88% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 32 | 224 | 49% | 3526 | 86% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 3352 | 26 | 376 | 51% | 3343 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 33 | 226 | 54% | 3505 | 81% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 31 | 260 | 53% | 3467 | 77% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 3348 | 35 | 218 | 53% | 3291 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |