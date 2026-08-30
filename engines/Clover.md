# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3386<sub>(+46) | 3537<sub>(+46) | 3548<sub>(+29) |  |
| 8.2.5 | 2025-07-14 | 3340<sub>(-3) | 3491<sub>(+16) | 3519<sub>(+4) |  |
| 8.1 | 2024-12-03 | 3343<sub>(+4) | 3475<sub>(-11) | 3515<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3339<sub>(+new) | 3486<sub>(+new) | 3515<sub>(+new) |  |
| 7.1 | 2024-08-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Clover+<version>&body=###%20Engine%20name%0AClover%0A%0A###%20Version%0A9.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 15:48:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3339, 3343, 3340, 3386]
  line "STC (8.0+0.08s)" [3339, 3343, 3340, 3386]
  line "LTC (60.0+0.60s)" [3486, 3475, 3491, 3537]
  line "" [3515, 3515, 3519, 3548]
  line "VLTC (2m24s+1.12s)" [3515, 3515, 3519, 3548]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 22 | 482 | 50% | 3548 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3537 | 21 | 508 | 50% | 3537 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3386 | 19 | 690 | 50% | 3383 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 32 | 220 | 51% | 3514 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3491 | 32 | 236 | 49% | 3497 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3340 | 31 | 254 | 49% | 3348 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 14 | 1160 | 50% | 3513 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3475 | 14 | 1176 | 50% | 3476 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3343 | 15 | 1124 | 51% | 3339 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 18 | 748 | 51% | 3483 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 19 | 676 | 51% | 3478 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3339 | 20 | 680 | 55% | 3210 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |