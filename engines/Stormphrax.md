# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3407<sub>(+51) | 3552<sub>(+28) | 3583<sub>(+23) |  |
| 7.0.0 | 2025-06-24 | 3356<sub>(+53) | 3524<sub>(+42) | 3560<sub>(+47) |  |
| 6.0.0 | 2024-10-29 | 3303<sub>(+98) | 3482<sub>(+76) | 3513<sub>(+70) |  |
| 5.0.0 | 2024-06-26 | 3205 | 3406 | 3443 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:42:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3205, 3303, 3356, 3407]
  line "STC (8.0+0.08s)" [3205, 3303, 3356, 3407]
  line "LTC (60.0+0.60s)" [3406, 3482, 3524, 3552]
  line "" [3443, 3513, 3560, 3583]
  line "VLTC (2m24s+1.12s)" [3443, 3513, 3560, 3583]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 27 | 318 | 51% | 3578 | 89% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3552 | 25 | 372 | 50% | 3551 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3407 | 25 | 396 | 50% | 3407 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 18 | 722 | 51% | 3557 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 17 | 824 | 51% | 3518 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3356 | 17 | 930 | 51% | 3349 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 14 | 1184 | 50% | 3511 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 14 | 1228 | 50% | 3484 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3303 | 15 | 1188 | 50% | 3302 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3443 | 32 | 248 | 51% | 3437 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3406 | 27 | 340 | 54% | 3374 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3205 | 29 | 332 | 48% | 3221 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |