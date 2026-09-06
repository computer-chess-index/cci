# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3356<sub>(-10) | 3536<sub>(+6) | 3561<sub>(+8) |  |
| 5.0 | 2026-02-07 | 3366<sub>(+111) | 3530<sub>(+94) | 3553<sub>(+70) |  |
| 4.0 | 2025-08-23 | 3255 | 3436 | 3483 |  |
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

Generated: 2026-09-06 06:29:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3255, 3366, 3356]
  line "STC (8.0+0.08s)" [3255, 3366, 3356]
  line "LTC (60.0+0.60s)" [3436, 3530, 3536]
  line "" [3483, 3553, 3561]
  line "VLTC (2m24s+1.12s)" [3483, 3553, 3561]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 25 | 356 | 51% | 3555 | 87% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 25 | 374 | 49% | 3542 | 86% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3356 | 24 | 432 | 49% | 3363 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 23 | 442 | 50% | 3553 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 23 | 442 | 51% | 3524 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3366 | 23 | 474 | 50% | 3364 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3483 | 29 | 282 | 51% | 3475 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3436 | 34 | 220 | 51% | 3417 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3255 | 29 | 316 | 54% | 3218 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |