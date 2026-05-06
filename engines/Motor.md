# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3379<sub>(+9) | 3544<sub>(+20) | 3578<sub>(+22) |  |
| 0.8.0 | 2024-10-28 | 3370<sub>(+new) | 3524<sub>(+new) | 3556<sub>(+new) |  |
| 0.7.0 | 2024-08-11 |  |  |  |  |
| 0.60 | 2024-06-30 | 3256<sub>(+new) | 3457<sub>(+new) | 3484<sub>(+new) |  |
| 0.5.0 | 2024-05-23 |  |  |  |  |
| 0.4.0 | 2024-04-18 |  |  |  |  |
| 0.3.0 | 2024-03-30 |  |  |  |  |
| 0.2.0 | 2024-03-09 |  |  |  |  |
| 0.1.0 | 2024-02-18 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Motor+<version>&body=###%20Engine%20name%0AMotor%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-06 06:26:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3256, 3370, 3379]
  line "STC (8.0+0.08s)" [3256, 3370, 3379]
  line "LTC (60.0+0.60s)" [3457, 3524, 3544]
  line "VLTC (2m24s+1.12s)" [3484, 3556, 3578]
  line "VLTC (2m24s+1.12s)" [3484, 3556, 3578]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 24 | 410 | 49% | 3583 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 25 | 388 | 50% | 3540 | 82% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3379 | 22 | 492 | 50% | 3382 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 13 | 1468 | 51% | 3552 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 13 | 1484 | 50% | 3522 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3370 | 13 | 1460 | 49% | 3375 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3484 | 28 | 304 | 50% | 3486 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 28 | 316 | 52% | 3441 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3256 | 29 | 352 | 56% | 3119 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |