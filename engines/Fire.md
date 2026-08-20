# Engine: Fire

Author: Norman Schmidt

Home: https://github.com/Firefather/fire

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10.0 | 2025-08-09 | 3143<sub>(+2) | 3376<sub>(+8) | 3425<sub>(+4) |  |
| 9.3 | 2024-03-10 | 3141 | 3368 | 3421 |  |
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

Generated: 2026-08-20 06:25:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.3", "10.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3141, 3143]
  line "STC (8.0+0.08s)" [3141, 3143]
  line "LTC (60.0+0.60s)" [3368, 3376]
  line "VLTC (2m24s+1.12s)" [3421, 3425]
  line "VLTC (2m24s+1.12s)" [3421, 3425]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 19 | 716 | 50% | 3428 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3376 | 19 | 724 | 50% | 3375 | 71% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3143 | 17 | 912 | 51% | 3133 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3421 | 13 | 1520 | 49% | 3422 | 75% |
| 9.3 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 13 | 1496 | 50% | 3367 | 73% |
| 9.3 | STC <sub>(8.0+0.08s)</sub> | 3141 | 14 | 1428 | 51% | 3119 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |