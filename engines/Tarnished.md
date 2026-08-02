# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3344<sub>(-9) | 3525<sub>(+8) | 3549<sub>(+8) |  |
| 5.0 | 2026-02-07 | 3353<sub>(+109) | 3517<sub>(+93) | 3541<sub>(+71) |  |
| 4.0 | 2025-08-23 | 3244<sub>(+new) | 3424<sub>(+new) | 3470<sub>(+new) |  |
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

Generated: 2026-08-02 06:29:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3244, 3353, 3344]
  line "STC (8.0+0.08s)" [3244, 3353, 3344]
  line "LTC (60.0+0.60s)" [3424, 3517, 3525]
  line "VLTC (2m24s+1.12s)" [3470, 3541, 3549]
  line "VLTC (2m24s+1.12s)" [3470, 3541, 3549]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 27 | 324 | 51% | 3542 | 86% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 26 | 336 | 49% | 3532 | 85% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3344 | 26 | 368 | 49% | 3349 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 23 | 442 | 50% | 3540 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 23 | 442 | 51% | 3510 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3353 | 23 | 474 | 50% | 3352 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 29 | 282 | 51% | 3461 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3424 | 34 | 220 | 51% | 3405 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3244 | 29 | 316 | 54% | 3206 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |