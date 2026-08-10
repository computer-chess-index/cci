# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3374<sub>(+44) | 3528<sub>(+48) | 3538<sub>(+29) |  |
| 8.2.5 | 2025-07-14 | 3330<sub>(-3) | 3480<sub>(+16) | 3509<sub>(+4) |  |
| 8.1 | 2024-12-03 | 3333<sub>(+5) | 3464<sub>(-11) | 3505<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3328<sub>(+new) | 3475<sub>(+new) | 3505<sub>(+new) |  |
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

Generated: 2026-08-10 07:48:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3328, 3333, 3330, 3374]
  line "STC (8.0+0.08s)" [3328, 3333, 3330, 3374]
  line "LTC (60.0+0.60s)" [3475, 3464, 3480, 3528]
  line "VLTC (2m24s+1.12s)" [3505, 3505, 3509, 3538]
  line "VLTC (2m24s+1.12s)" [3505, 3505, 3509, 3538]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 22 | 470 | 50% | 3538 | 90% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 22 | 488 | 50% | 3526 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3374 | 19 | 654 | 50% | 3372 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 32 | 220 | 51% | 3503 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 32 | 236 | 49% | 3486 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3330 | 31 | 254 | 49% | 3337 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 14 | 1160 | 50% | 3502 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 14 | 1176 | 50% | 3465 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3333 | 15 | 1124 | 51% | 3328 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 18 | 748 | 51% | 3472 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3475 | 19 | 676 | 51% | 3467 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3328 | 20 | 680 | 55% | 3200 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |