# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3452<sub>(+new) | 3545<sub>(+new) | 3578<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3363<sub>(+10) | 3528<sub>(+9) | 3538<sub>(+9) |  |
| 1.9.1 | 2026-01-12 | 3353<sub>(-11) | 3519<sub>(+17) | 3529<sub>(-9) |  |
| 1.9 | 2026-01-03 | 3364<sub>(+new) | 3502<sub>(+new) | 3538<sub>(+new) |  |
| 1.8.1 | 2025-07-25 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnocchio+<version>&body=###%20Engine%20name%0APawnocchio%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 08:01:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3364, 3353, 3363, 3452]
  line "STC (8.0+0.08s)" [3364, 3353, 3363, 3452]
  line "LTC (60.0+0.60s)" [3502, 3519, 3528, 3545]
  line "VLTC (2m24s+1.12s)" [3538, 3529, 3538, 3578]
  line "VLTC (2m24s+1.12s)" [3538, 3529, 3538, 3578]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 30 | 250 | 53% | 3560 | 90% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 28 | 296 | 50% | 3542 | 91% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3452 | 26 | 344 | 51% | 3443 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 25 | 380 | 51% | 3534 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 25 | 372 | 51% | 3524 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3363 | 22 | 518 | 49% | 3367 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 35 | 188 | 49% | 3538 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 35 | 186 | 51% | 3513 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3353 | 35 | 208 | 51% | 3341 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 35 | 192 | 53% | 3509 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 33 | 224 | 53% | 3463 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3364 | 34 | 224 | 54% | 3318 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |