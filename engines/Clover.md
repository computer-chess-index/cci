# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3383<sub>(+46) | 3534<sub>(+47) | 3545<sub>(+30) |  |
| 8.2.5 | 2025-07-14 | 3337<sub>(-3) | 3487<sub>(+16) | 3515<sub>(+4) |  |
| 8.1 | 2024-12-03 | 3340<sub>(+5) | 3471<sub>(-11) | 3511<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3335<sub>(+new) | 3482<sub>(+new) | 3511<sub>(+new) |  |
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

Generated: 2026-08-22 06:24:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3335, 3340, 3337, 3383]
  line "STC (8.0+0.08s)" [3335, 3340, 3337, 3383]
  line "LTC (60.0+0.60s)" [3482, 3471, 3487, 3534]
  line "VLTC (2m24s+1.12s)" [3511, 3511, 3515, 3545]
  line "VLTC (2m24s+1.12s)" [3511, 3511, 3515, 3545]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 22 | 474 | 50% | 3545 | 89% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 22 | 492 | 50% | 3533 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3383 | 19 | 678 | 50% | 3380 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 32 | 220 | 51% | 3511 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 32 | 236 | 49% | 3494 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3337 | 31 | 254 | 49% | 3344 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 14 | 1160 | 50% | 3509 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 14 | 1176 | 50% | 3472 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3340 | 15 | 1124 | 51% | 3336 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 18 | 748 | 51% | 3479 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 19 | 676 | 51% | 3474 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3335 | 20 | 680 | 55% | 3208 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |