# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3397<sub>(+49) | 3545<sub>(+46) | 3555<sub>(+27) |  |
| 8.2.5 | 2025-07-14 | 3348<sub>(-3) | 3499<sub>(+16) | 3528<sub>(+4) |  |
| 8.1 | 2024-12-03 | 3351<sub>(+4) | 3483<sub>(-11) | 3524<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3347<sub>(+new) | 3494<sub>(+new) | 3524<sub>(+new) |  |
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

Generated: 2026-09-25 04:37:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3347, 3351, 3348, 3397]
  line "STC (8.0+0.08s)" [3347, 3351, 3348, 3397]
  line "LTC (60.0+0.60s)" [3494, 3483, 3499, 3545]
  line "" [3524, 3524, 3528, 3555]
  line "VLTC (2m24s+1.12s)" [3524, 3524, 3528, 3555]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 21 | 502 | 50% | 3557 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 21 | 516 | 50% | 3545 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3397 | 18 | 730 | 51% | 3391 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 32 | 220 | 51% | 3524 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3499 | 32 | 236 | 49% | 3506 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3348 | 31 | 254 | 49% | 3356 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 14 | 1160 | 50% | 3521 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 14 | 1176 | 50% | 3484 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3351 | 15 | 1124 | 51% | 3347 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 18 | 748 | 51% | 3491 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3494 | 19 | 676 | 51% | 3486 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3347 | 20 | 680 | 55% | 3218 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |