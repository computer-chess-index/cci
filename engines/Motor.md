# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3332<sub>(+11) | 3498<sub>(+23) | 3532<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3321<sub>(+115) | 3475<sub>(+66) | 3509<sub>(+72) |  |
| 0.60 | 2024-06-30 | 3206 | 3409 | 3437 |  |
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

Generated: 2026-08-24 06:26:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3206, 3321, 3332]
  line "STC (8.0+0.08s)" [3206, 3321, 3332]
  line "LTC (60.0+0.60s)" [3409, 3475, 3498]
  line "VLTC (2m24s+1.12s)" [3437, 3509, 3532]
  line "VLTC (2m24s+1.12s)" [3437, 3509, 3532]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 21 | 506 | 49% | 3536 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3498 | 22 | 464 | 50% | 3494 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3332 | 20 | 612 | 50% | 3333 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 13 | 1468 | 51% | 3505 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3475 | 13 | 1484 | 50% | 3475 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3321 | 13 | 1460 | 49% | 3326 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3437 | 28 | 304 | 50% | 3438 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 28 | 316 | 52% | 3393 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3206 | 29 | 352 | 56% | 3073 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |