# Engine: Fire

Author: Norman Schmidt

Home: https://github.com/Firefather/fire

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3136<sub>(+1) | 3367<sub>(+5) | 3417<sub>(+3) |  |
| 9.3 | 2024-03-10 | 3135 | 3362 | 3414 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fire+<version>&body=###%20Engine%20name%0AFire%0A%0A###%20Version%0A10.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 06:27:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3135, 3136]
  line "STC (8.0+0.08s)" [3135, 3136]
  line "LTC (60.0+0.60s)" [3362, 3367]
  line "VLTC (2m24s+1.12s)" [3414, 3417]
  line "VLTC (2m24s+1.12s)" [3414, 3417]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 19 | 696 | 50% | 3420 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 19 | 708 | 50% | 3368 | 71% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3136 | 17 | 900 | 51% | 3127 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3414 | 13 | 1520 | 49% | 3416 | 75% |
| 9.3 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 13 | 1496 | 50% | 3360 | 73% |
| 9.3 | STC <sub>(8.0+0.08s)</sub> | 3135 | 14 | 1428 | 51% | 3112 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |