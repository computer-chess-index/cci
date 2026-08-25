# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3352<sub>(-10) | 3533<sub>(+7) | 3557<sub>(+8) |  |
| 5.0 | 2026-02-07 | 3362<sub>(+110) | 3526<sub>(+94) | 3549<sub>(+70) |  |
| 4.0 | 2025-08-23 | 3252 | 3432 | 3479 |  |
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

Generated: 2026-08-25 06:37:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3252, 3362, 3352]
  line "STC (8.0+0.08s)" [3252, 3362, 3352]
  line "LTC (60.0+0.60s)" [3432, 3526, 3533]
  line "VLTC (2m24s+1.12s)" [3479, 3549, 3557]
  line "VLTC (2m24s+1.12s)" [3479, 3549, 3557]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 25 | 356 | 51% | 3551 | 87% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 25 | 362 | 49% | 3538 | 85% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3352 | 25 | 404 | 49% | 3359 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 23 | 442 | 50% | 3549 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 23 | 442 | 51% | 3519 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3362 | 23 | 474 | 50% | 3360 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 29 | 282 | 51% | 3471 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3432 | 34 | 220 | 51% | 3413 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3252 | 29 | 316 | 54% | 3214 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |