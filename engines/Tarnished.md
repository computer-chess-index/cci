# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3341<sub>(-11) | 3524<sub>(+9) | 3546<sub>(+6) |  |
| 5.0 | 2026-02-07 | 3352<sub>(+109) | 3515<sub>(+93) | 3540<sub>(+70) |  |
| 4.0 | 2025-08-23 | 3243<sub>(+new) | 3422<sub>(+new) | 3470<sub>(+new) |  |
| 3.0 | 2025-06-30 |  |  |  |  |
| 2.1 | 2025-05-25 |  |  |  |  |
| 2.0 | 2025-05-14 |  |  |  |  |
| 1.0 | 2025-05-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tarnished+<version>&body=###%20Engine%20name%0ATarnished%0A%0A###%20Version%0A6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 06:33:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3243, 3352, 3341]
  line "STC (8.0+0.08s)" [3243, 3352, 3341]
  line "LTC (60.0+0.60s)" [3422, 3515, 3524]
  line "VLTC (2m24s+1.12s)" [3470, 3540, 3546]
  line "VLTC (2m24s+1.12s)" [3470, 3540, 3546]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 26 | 332 | 51% | 3541 | 86% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 26 | 352 | 49% | 3529 | 85% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3341 | 26 | 376 | 49% | 3348 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 23 | 442 | 50% | 3538 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 23 | 442 | 51% | 3510 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3352 | 23 | 474 | 50% | 3351 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 29 | 282 | 51% | 3460 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3422 | 34 | 220 | 51% | 3403 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3243 | 29 | 316 | 54% | 3205 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |