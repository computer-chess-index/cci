# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3348<sub>(+5) | 3509<sub>(-5) | 3541<sub>(+3) |  |
| 1.3.0 | 2026-06-17 | 3343<sub>(+new) | 3514<sub>(+new) | 3538<sub>(+new) |  |
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

Generated: 2026-08-29 06:28:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3343, 3348]
  line "STC (8.0+0.08s)" [3343, 3348]
  line "LTC (60.0+0.60s)" [3514, 3509]
  line "" [3538, 3541]
  line "VLTC (2m24s+1.12s)" [3538, 3541]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 35 | 190 | 50% | 3542 | 88% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 33 | 216 | 48% | 3521 | 86% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 3348 | 27 | 348 | 52% | 3337 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 33 | 226 | 54% | 3501 | 81% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 31 | 260 | 53% | 3461 | 77% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 3343 | 35 | 218 | 53% | 3286 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |