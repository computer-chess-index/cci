# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3374<sub>(+45) | 3526<sub>(+47) | 3537<sub>(+30) |  |
| 8.2.5 | 2025-07-14 | 3329<sub>(-3) | 3479<sub>(+16) | 3507<sub>(+4) |  |
| 8.1 | 2024-12-03 | 3332<sub>(+6) | 3463<sub>(-11) | 3503<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3326<sub>(+new) | 3474<sub>(+new) | 3503<sub>(+new) |  |
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

Generated: 2026-08-15 06:24:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3326, 3332, 3329, 3374]
  line "STC (8.0+0.08s)" [3326, 3332, 3329, 3374]
  line "LTC (60.0+0.60s)" [3474, 3463, 3479, 3526]
  line "VLTC (2m24s+1.12s)" [3503, 3503, 3507, 3537]
  line "VLTC (2m24s+1.12s)" [3503, 3503, 3507, 3537]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 22 | 470 | 50% | 3537 | 90% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 22 | 488 | 50% | 3525 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3374 | 19 | 658 | 50% | 3372 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 32 | 220 | 51% | 3503 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 32 | 236 | 49% | 3486 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3329 | 31 | 254 | 49% | 3336 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 14 | 1160 | 50% | 3501 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 14 | 1176 | 50% | 3464 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3332 | 15 | 1124 | 51% | 3326 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 18 | 748 | 51% | 3471 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 19 | 676 | 51% | 3465 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3326 | 20 | 680 | 55% | 3200 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |