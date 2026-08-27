# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3386<sub>(+46) | 3536<sub>(+46) | 3548<sub>(+30) |  |
| 8.2.5 | 2025-07-14 | 3340<sub>(-3) | 3490<sub>(+16) | 3518<sub>(+4) |  |
| 8.1 | 2024-12-03 | 3343<sub>(+6) | 3474<sub>(-10) | 3514<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3337<sub>(+new) | 3484<sub>(+new) | 3514<sub>(+new) |  |
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

Generated: 2026-08-27 06:24:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3337, 3343, 3340, 3386]
  line "STC (8.0+0.08s)" [3337, 3343, 3340, 3386]
  line "LTC (60.0+0.60s)" [3484, 3474, 3490, 3536]
  line "VLTC (2m24s+1.12s)" [3514, 3514, 3518, 3548]
  line "VLTC (2m24s+1.12s)" [3514, 3514, 3518, 3548]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 22 | 482 | 50% | 3548 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 21 | 504 | 50% | 3536 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3386 | 19 | 682 | 50% | 3383 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 32 | 220 | 51% | 3514 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 32 | 236 | 49% | 3497 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3340 | 31 | 254 | 49% | 3347 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 14 | 1160 | 50% | 3511 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 14 | 1176 | 50% | 3475 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3343 | 15 | 1124 | 51% | 3339 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3514 | 18 | 748 | 51% | 3482 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 19 | 676 | 51% | 3476 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3337 | 20 | 680 | 55% | 3210 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |