# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.3.2 | 2026-09-19 |  |  |  |  |
| 4.3.1 | 2026-09-08 |  |  |  |  |
| 4.3.0 | 2026-09-05 | 3364<sub>(+82) | 3545<sub>(+71) | 3564<sub>(+34) |  |
| 4.2.6 | 2026-08-29 | 3282<sub>(+1) | 3474<sub>(+7) | 3530<sub>(+20) |  |
| 4.2.5 | 2026-08-24 | 3281<sub>(+21) | 3467<sub>(+22) | 3510<sub>(+7) |  |
| 4.2.4 | 2026-08-23 | 3260<sub>(+12) | 3445<sub>(-22) | 3503<sub>(+1) |  |
| 4.2.3 | 2026-08-21 | 3248<sub>(-8) | 3467<sub>(+12) | 3502<sub>(+19) |  |
| 4.2.2 | 2026-08-13 | 3256<sub>(+52) | 3455<sub>(-2) | 3483<sub>(-30) |  |
| 4.2.1 | 2026-08-09 | 3204<sub>(+new) | 3457<sub>(+new) | 3513<sub>(+new) |  |
| 4.1.3 | 2026-02-26 |  |  |  |  |
| 4.1.2 | 2026-02-24 |  |  |  |  |
| 4.1.1 | 2026-02-24 |  |  |  |  |
| 4.1.0 | 2026-02-22 |  |  |  | Skipped for 4.1.1 |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:38:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6", "4.3.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3204, 3256, 3248, 3260, 3281, 3282, 3364]
  line "STC (8.0+0.08s)" [3204, 3256, 3248, 3260, 3281, 3282, 3364]
  line "LTC (60.0+0.60s)" [3457, 3455, 3467, 3445, 3467, 3474, 3545]
  line "" [3513, 3483, 3502, 3503, 3510, 3530, 3564]
  line "VLTC (2m24s+1.12s)" [3513, 3483, 3502, 3503, 3510, 3530, 3564]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 35 | 178 | 51% | 3560 | 92% |
| 4.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 30 | 248 | 50% | 3545 | 86% |
| 4.3.0 | STC <sub>(8.0+0.08s)</sub> | 3364 | 31 | 266 | 49% | 3371 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 33 | 208 | 50% | 3528 | 84% |
| 4.2.6 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 31 | 250 | 51% | 3468 | 81% |
| 4.2.6 | STC <sub>(8.0+0.08s)</sub> | 3282 | 33 | 232 | 50% | 3281 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 28 | 300 | 51% | 3505 | 79% |
| 4.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 28 | 306 | 51% | 3459 | 76% |
| 4.2.5 | STC <sub>(8.0+0.08s)</sub> | 3281 | 33 | 236 | 52% | 3260 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 31 | 248 | 49% | 3510 | 79% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 33 | 226 | 51% | 3441 | 77% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3260 | 33 | 238 | 47% | 3279 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 36 | 190 | 51% | 3497 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 30 | 266 | 48% | 3480 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3248 | 35 | 212 | 49% | 3259 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3483 | 32 | 240 | 50% | 3484 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 32 | 236 | 50% | 3456 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3256 | 33 | 248 | 51% | 3252 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 56 | 88 | 59% | 3353 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 47 | 128 | 59% | 3285 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3204 | 45 | 152 | 56% | 3081 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |