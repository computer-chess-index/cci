# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.3.1 | 2026-09-08 |  |  |  |  |
| 4.3.0 | 2026-09-05 | 3359<sub>(+81) | 3542<sub>(+72) | 3559<sub>(+33) |  |
| 4.2.6 | 2026-08-29 | 3278<sub>(+2) | 3470<sub>(+7) | 3526<sub>(+20) |  |
| 4.2.5 | 2026-08-24 | 3276<sub>(+20) | 3463<sub>(+22) | 3506<sub>(+7) |  |
| 4.2.4 | 2026-08-23 | 3256<sub>(+12) | 3441<sub>(-22) | 3499<sub>(+1) |  |
| 4.2.3 | 2026-08-21 | 3244<sub>(-8) | 3463<sub>(+12) | 3498<sub>(+19) |  |
| 4.2.2 | 2026-08-13 | 3252<sub>(+52) | 3451<sub>(-2) | 3479<sub>(-30) |  |
| 4.2.1 | 2026-08-09 | 3200<sub>(+new) | 3453<sub>(+new) | 3509<sub>(+new) |  |
| 4.1.3 | 2026-02-26 |  |  |  |  |
| 4.1.2 | 2026-02-24 |  |  |  |  |
| 4.1.1 | 2026-02-24 |  |  |  |  |
| 4.1.0 | 2026-02-22 |  |  |  | Skipped for 4.1.1 |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:38:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6", "4.3.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3200, 3252, 3244, 3256, 3276, 3278, 3359]
  line "STC (8.0+0.08s)" [3200, 3252, 3244, 3256, 3276, 3278, 3359]
  line "LTC (60.0+0.60s)" [3453, 3451, 3463, 3441, 3463, 3470, 3542]
  line "" [3509, 3479, 3498, 3499, 3506, 3526, 3559]
  line "VLTC (2m24s+1.12s)" [3509, 3479, 3498, 3499, 3506, 3526, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 37 | 166 | 51% | 3555 | 92% |
| 4.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 32 | 228 | 50% | 3541 | 86% |
| 4.3.0 | STC <sub>(8.0+0.08s)</sub> | 3359 | 31 | 258 | 49% | 3367 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 33 | 208 | 50% | 3524 | 84% |
| 4.2.6 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 31 | 250 | 51% | 3464 | 81% |
| 4.2.6 | STC <sub>(8.0+0.08s)</sub> | 3278 | 33 | 232 | 50% | 3276 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 28 | 300 | 51% | 3501 | 79% |
| 4.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 28 | 306 | 51% | 3455 | 76% |
| 4.2.5 | STC <sub>(8.0+0.08s)</sub> | 3276 | 33 | 236 | 52% | 3256 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 31 | 248 | 49% | 3506 | 79% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3441 | 33 | 226 | 51% | 3437 | 77% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3256 | 33 | 238 | 47% | 3275 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3498 | 36 | 190 | 51% | 3492 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 30 | 266 | 48% | 3476 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3244 | 35 | 212 | 49% | 3255 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 32 | 240 | 50% | 3480 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3451 | 32 | 236 | 50% | 3452 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3252 | 33 | 248 | 51% | 3248 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 56 | 88 | 59% | 3349 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3453 | 47 | 128 | 59% | 3281 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3200 | 45 | 152 | 56% | 3077 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |