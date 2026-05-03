# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3380<sub>(+12) | 3542<sub>(+21) | 3576<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3368<sub>(+new) | 3521<sub>(+new) | 3553<sub>(+new) |  |
| 0.7.0 | 2024-08-11 |  |  |  |  |
| 0.60 | 2024-06-30 | 3255<sub>(+new) | 3455<sub>(+new) | 3482<sub>(+new) |  |
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

Generated: 2026-05-03 08:18:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3255, 3368, 3380]
  line "STC (8.0+0.08s)" [3255, 3368, 3380]
  line "LTC (60.0+0.60s)" [3455, 3521, 3542]
  line "VLTC (2m24s+1.12s)" [3482, 3553, 3576]
  line "VLTC (2m24s+1.12s)" [3482, 3553, 3576]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 24 | 410 | 49% | 3582 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 25 | 388 | 50% | 3538 | 82% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3380 | 23 | 484 | 50% | 3379 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 13 | 1468 | 51% | 3549 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 13 | 1484 | 50% | 3521 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3368 | 13 | 1460 | 49% | 3372 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 28 | 304 | 50% | 3484 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 28 | 316 | 52% | 3438 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3255 | 29 | 352 | 56% | 3116 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |