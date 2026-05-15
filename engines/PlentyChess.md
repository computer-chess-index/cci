# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2025-09-25 | 3483<sub>(+new) | 3611<sub>(+new) | 3609<sub>(+6) |  |
| 6.0.2 | 2025-06-06 |  |  | 3603<sub>(0) |  |
| 5.0.0 | 2025-03-23 | 3414<sub>(+5) | 3579<sub>(+new) | 3603<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3409<sub>(+new) |  | 3579<sub>(+new) |  |
| 4.0.0 | 2025-01-18 |  |  |  |  |
| 3.0.2 | 2024-11-26 |  |  |  |  |
| 3.0.1 | 2024-11-22 | 3343<sub>(+new) | 3484<sub>(+new) | 3575<sub>(+new) |  |
| 3.0.0 | 2024-11-21 |  |  |  |  |
| 2.1.0 | 2024-07-02 | 3375<sub>(+new) | 3517<sub>(+new) | 3552<sub>(+new) |  |
| 2.0.0 | 2024-06-12 |  |  |  |  |
| 1.0.0 | 2024-04-01 |  |  |  |  |
| 0.3.0 | 2024-02-04 |  |  |  |  |
| 0.2.1 | 2024-01-21 |  |  |  |  |
| 0.2.0 | 2024-01-20 |  |  |  |  |
| 0.1.0 | 2024-01-12 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PlentyChess+<version>&body=###%20Engine%20name%0APlentyChess%0A%0A###%20Version%0A7.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-15 06:26:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "STC (8.0+0.08s)" [3375, 3343, 3414, 3483]
  line "STC (8.0+0.08s)" [3375, 3343, 3414, 3483]
  line "LTC (60.0+0.60s)" [3517, 3484, 3579, 3611]
  line "VLTC (2m24s+1.12s)" [3552, 3575, 3603, 3609]
  line "VLTC (2m24s+1.12s)" [3552, 3575, 3603, 3609]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3609 | 24 | 384 | 51% | 3605 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3611 | 45 | 110 | 50% | 3610 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3483 | 35 | 200 | 49% | 3486 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3603 | 34 | 192 | 51% | 3600 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3603 | 26 | 332 | 51% | 3594 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3579 | 68 | 48 | 48% | 3592 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3414 | 208 | 4 | 50% | 3414 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 20 | 600 | 50% | 3578 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3409 | 59 | 72 | 52% | 3393 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 21 | 544 | 50% | 3572 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 36 | 208 | 50% | 3478 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3343 | 33 | 248 | 47% | 3362 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 23 | 460 | 52% | 3538 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 63 | 64 | 63% | 3416 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3375 | 98 | 92 | 92% | 2570 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |