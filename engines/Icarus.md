# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3320<sub>(-6) | 3484<sub>(+2) | 3503<sub>(-19) |  |
| 1.1 | 2026-06-05 | 3326<sub>(+23) | 3482<sub>(+35) | 3522<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3303 | 3447 | 3491 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-25 06:25:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3303, 3326, 3320]
  line "STC (8.0+0.08s)" [3303, 3326, 3320]
  line "LTC (60.0+0.60s)" [3447, 3482, 3484]
  line "VLTC (2m24s+1.12s)" [3491, 3522, 3503]
  line "VLTC (2m24s+1.12s)" [3491, 3522, 3503]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 34 | 196 | 49% | 3506 | 85% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 37 | 174 | 50% | 3484 | 84% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3320 | 36 | 188 | 49% | 3326 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 28 | 300 | 50% | 3521 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 24 | 404 | 52% | 3468 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3326 | 28 | 324 | 51% | 3322 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 27 | 334 | 50% | 3488 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 26 | 338 | 51% | 3441 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3303 | 27 | 348 | 51% | 3297 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |