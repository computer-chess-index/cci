# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3417<sub>(0) | 3536<sub>(+2) | 3567<sub>(-2) |  |
| 8.1.12 | 2025-11-09 | 3417<sub>(+7) | 3534<sub>(-2) | 3569<sub>(+13) |  |
| 8.1 | 2025-08-16 | 3410<sub>(+31) | 3536<sub>(+26) | 3556<sub>(+10) |  |
| 8.0 | 2025-03-03 | 3379<sub>(+43) | 3510<sub>(+13) | 3546<sub>(+18) |  |
| 7.1 | 2024-10-26 | 3336<sub>(+11) | 3497<sub>(+18) | 3528<sub>(+6) |  |
| 7.0 | 2024-05-25 | 3325 | 3479 | 3522 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexandria+<version>&body=###%20Engine%20name%0AAlexandria%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-15 06:22:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3325, 3336, 3379, 3410, 3417, 3417]
  line "STC (8.0+0.08s)" [3325, 3336, 3379, 3410, 3417, 3417]
  line "LTC (60.0+0.60s)" [3479, 3497, 3510, 3536, 3534, 3536]
  line "VLTC (2m24s+1.12s)" [3522, 3528, 3546, 3556, 3569, 3567]
  line "VLTC (2m24s+1.12s)" [3522, 3528, 3546, 3556, 3569, 3567]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 27 | 306 | 52% | 3552 | 87% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 24 | 404 | 51% | 3530 | 91% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3417 | 21 | 578 | 51% | 3413 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 34 | 202 | 51% | 3561 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 30 | 256 | 49% | 3541 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3417 | 26 | 360 | 50% | 3416 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 31 | 240 | 50% | 3555 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 27 | 304 | 50% | 3536 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3410 | 26 | 348 | 50% | 3407 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 26 | 348 | 51% | 3537 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 23 | 428 | 50% | 3513 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3379 | 24 | 440 | 50% | 3382 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 19 | 648 | 51% | 3521 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 16 | 868 | 50% | 3497 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3336 | 16 | 964 | 50% | 3339 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 30 | 268 | 56% | 3445 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 33 | 212 | 51% | 3472 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3325 | 32 | 244 | 52% | 3305 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |