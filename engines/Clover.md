# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3391<sub>(+47) | 3541<sub>(+46) | 3552<sub>(+28) |  |
| 8.2.5 | 2025-07-14 | 3344<sub>(-3) | 3495<sub>(+16) | 3524<sub>(+5) |  |
| 8.1 | 2024-12-03 | 3347<sub>(+6) | 3479<sub>(-11) | 3519<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3341<sub>(+new) | 3490<sub>(+new) | 3519<sub>(+new) |  |
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

Generated: 2026-09-13 04:37:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3341, 3347, 3344, 3391]
  line "STC (8.0+0.08s)" [3341, 3347, 3344, 3391]
  line "LTC (60.0+0.60s)" [3490, 3479, 3495, 3541]
  line "" [3519, 3519, 3524, 3552]
  line "VLTC (2m24s+1.12s)" [3519, 3519, 3524, 3552]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 21 | 498 | 50% | 3553 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 21 | 516 | 50% | 3541 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3391 | 18 | 726 | 51% | 3387 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 32 | 220 | 51% | 3518 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 32 | 236 | 49% | 3501 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3344 | 31 | 254 | 49% | 3351 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 14 | 1160 | 50% | 3517 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 14 | 1176 | 50% | 3480 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3347 | 15 | 1124 | 51% | 3343 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 18 | 748 | 51% | 3487 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 19 | 676 | 51% | 3482 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3341 | 20 | 680 | 55% | 3214 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |