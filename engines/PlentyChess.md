# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2025-09-25 | 3418<sub>(+new) | 3546<sub>(+new) | 3542<sub>(+4) |  |
| 6.0.2 | 2025-06-06 |  |  | 3538<sub>(+1) |  |
| 5.0.0 | 2025-03-23 | 3348<sub>(+5) | 3513<sub>(+new) | 3537<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3343<sub>(+new) |  | 3513<sub>(+new) |  |
| 4.0.0 | 2025-01-18 |  |  |  |  |
| 3.0.2 | 2024-11-26 |  |  |  |  |
| 3.0.1 | 2024-11-22 | 3278<sub>(+new) | 3418<sub>(+new) | 3509<sub>(+new) |  |
| 3.0.0 | 2024-11-21 |  |  |  |  |
| 2.1.0 | 2024-07-02 | 3310<sub>(+new) | 3452<sub>(+new) | 3487<sub>(+new) |  |
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

Generated: 2026-06-08 06:26:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3310, 3278, 3348, 3418]
  line "STC (8.0+0.08s)" [3310, 3278, 3348, 3418]
  line "LTC (60.0+0.60s)" [3452, 3418, 3513, 3546]
  line "VLTC (2m24s+1.12s)" [3487, 3509, 3537, 3542]
  line "VLTC (2m24s+1.12s)" [3487, 3509, 3537, 3542]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 24 | 384 | 51% | 3538 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 45 | 110 | 50% | 3544 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3418 | 35 | 200 | 49% | 3421 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 34 | 192 | 51% | 3534 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 26 | 332 | 51% | 3528 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 68 | 48 | 48% | 3526 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3348 | 208 | 4 | 50% | 3348 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 20 | 600 | 50% | 3513 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3343 | 59 | 72 | 52% | 3326 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 21 | 544 | 50% | 3507 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3418 | 36 | 208 | 50% | 3411 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3278 | 33 | 248 | 47% | 3295 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3487 | 23 | 460 | 52% | 3472 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3452 | 63 | 64 | 63% | 3349 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3310 | 98 | 92 | 92% | 2514 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |