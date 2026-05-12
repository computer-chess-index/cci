# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3383<sub>(+12) | 3546<sub>(+21) | 3580<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3371<sub>(+new) | 3525<sub>(+new) | 3557<sub>(+new) |  |
| 0.7.0 | 2024-08-11 |  |  |  |  |
| 0.60 | 2024-06-30 | 3258<sub>(+new) | 3459<sub>(+new) | 3486<sub>(+new) |  |
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

Generated: 2026-05-12 06:26:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3258, 3371, 3383]
  line "STC (8.0+0.08s)" [3258, 3371, 3383]
  line "LTC (60.0+0.60s)" [3459, 3525, 3546]
  line "VLTC (2m24s+1.12s)" [3486, 3557, 3580]
  line "VLTC (2m24s+1.12s)" [3486, 3557, 3580]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 23 | 414 | 49% | 3584 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 24 | 400 | 51% | 3541 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3383 | 22 | 504 | 50% | 3382 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 13 | 1468 | 51% | 3553 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 13 | 1484 | 50% | 3524 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3371 | 13 | 1460 | 49% | 3376 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3486 | 28 | 304 | 50% | 3487 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 28 | 316 | 52% | 3443 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3258 | 29 | 352 | 56% | 3120 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |