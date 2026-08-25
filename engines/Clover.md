# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3384<sub>(+47) | 3534<sub>(+46) | 3546<sub>(+29) |  |
| 8.2.5 | 2025-07-14 | 3337<sub>(-4) | 3488<sub>(+16) | 3517<sub>(+4) |  |
| 8.1 | 2024-12-03 | 3341<sub>(+5) | 3472<sub>(-11) | 3513<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3336<sub>(+new) | 3483<sub>(+new) | 3513<sub>(+new) |  |
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

Generated: 2026-08-25 06:24:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3336, 3341, 3337, 3384]
  line "STC (8.0+0.08s)" [3336, 3341, 3337, 3384]
  line "LTC (60.0+0.60s)" [3483, 3472, 3488, 3534]
  line "VLTC (2m24s+1.12s)" [3513, 3513, 3517, 3546]
  line "VLTC (2m24s+1.12s)" [3513, 3513, 3517, 3546]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 22 | 482 | 50% | 3546 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 21 | 496 | 50% | 3534 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3384 | 19 | 678 | 50% | 3380 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 32 | 220 | 51% | 3511 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3488 | 32 | 236 | 49% | 3494 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3337 | 31 | 254 | 49% | 3345 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 14 | 1160 | 50% | 3510 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 14 | 1176 | 50% | 3474 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3341 | 15 | 1124 | 51% | 3336 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 18 | 748 | 51% | 3480 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 19 | 676 | 51% | 3475 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3336 | 20 | 680 | 55% | 3209 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |