# Engine: Clover

Author: Luca Metehau

Home: https://github.com/lucametehau/CloverEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1 | 2025-09-14 | 3380<sub>(+47) | 3532<sub>(+48) | 3542<sub>(+29) |  |
| 8.2.5 | 2025-07-14 | 3333<sub>(-4) | 3484<sub>(+16) | 3513<sub>(+4) |  |
| 8.1 | 2024-12-03 | 3337<sub>(+5) | 3468<sub>(-11) | 3509<sub>(0) |  |
| 8.0.2 | 2024-09-05 | 3332<sub>(+new) | 3479<sub>(+new) | 3509<sub>(+new) |  |
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

Generated: 2026-08-19 06:24:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.2", "8.1", "8.2.5", "9.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3332, 3337, 3333, 3380]
  line "STC (8.0+0.08s)" [3332, 3337, 3333, 3380]
  line "LTC (60.0+0.60s)" [3479, 3468, 3484, 3532]
  line "VLTC (2m24s+1.12s)" [3509, 3509, 3513, 3542]
  line "VLTC (2m24s+1.12s)" [3509, 3509, 3513, 3542]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 22 | 470 | 50% | 3542 | 90% |
| 9.1 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 22 | 492 | 50% | 3530 | 89% |
| 9.1 | STC <sub>(8.0+0.08s)</sub> | 3380 | 19 | 666 | 51% | 3376 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 32 | 220 | 51% | 3509 | 91% |
| 8.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 32 | 236 | 49% | 3491 | 81% |
| 8.2.5 | STC <sub>(8.0+0.08s)</sub> | 3333 | 31 | 254 | 49% | 3341 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 14 | 1160 | 50% | 3506 | 84% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 14 | 1176 | 50% | 3470 | 83% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3337 | 15 | 1124 | 51% | 3332 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 18 | 748 | 51% | 3476 | 84% |
| 8.0.2 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 19 | 676 | 51% | 3471 | 83% |
| 8.0.2 | STC <sub>(8.0+0.08s)</sub> | 3332 | 20 | 680 | 55% | 3205 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |