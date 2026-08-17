# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3341<sub>(-12) | 3524<sub>(+7) | 3549<sub>(+8) |  |
| 5.0 | 2026-02-07 | 3353<sub>(+110) | 3517<sub>(+95) | 3541<sub>(+71) |  |
| 4.0 | 2025-08-23 | 3243 | 3422 | 3470 |  |
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

Generated: 2026-08-17 06:43:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3243, 3353, 3341]
  line "STC (8.0+0.08s)" [3243, 3353, 3341]
  line "LTC (60.0+0.60s)" [3422, 3517, 3524]
  line "VLTC (2m24s+1.12s)" [3470, 3541, 3549]
  line "VLTC (2m24s+1.12s)" [3470, 3541, 3549]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 26 | 344 | 51% | 3542 | 86% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 25 | 358 | 49% | 3530 | 85% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3341 | 25 | 388 | 49% | 3349 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 23 | 442 | 50% | 3540 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 23 | 442 | 51% | 3510 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3353 | 23 | 474 | 50% | 3351 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 29 | 282 | 51% | 3461 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3422 | 34 | 220 | 51% | 3405 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3243 | 29 | 316 | 54% | 3206 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |