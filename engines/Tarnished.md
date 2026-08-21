# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3349<sub>(-11) | 3530<sub>(+6) | 3556<sub>(+10) |  |
| 5.0 | 2026-02-07 | 3360<sub>(+111) | 3524<sub>(+95) | 3546<sub>(+70) |  |
| 4.0 | 2025-08-23 | 3249 | 3429 | 3476 |  |
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

Generated: 2026-08-21 06:31:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3249, 3360, 3349]
  line "STC (8.0+0.08s)" [3249, 3360, 3349]
  line "LTC (60.0+0.60s)" [3429, 3524, 3530]
  line "VLTC (2m24s+1.12s)" [3476, 3546, 3556]
  line "VLTC (2m24s+1.12s)" [3476, 3546, 3556]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 26 | 344 | 51% | 3549 | 86% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 25 | 358 | 49% | 3536 | 85% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3349 | 25 | 400 | 49% | 3356 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 23 | 442 | 50% | 3546 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 23 | 442 | 51% | 3517 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3360 | 23 | 474 | 50% | 3357 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 29 | 282 | 51% | 3468 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3429 | 34 | 220 | 51% | 3410 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3249 | 29 | 316 | 54% | 3212 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |