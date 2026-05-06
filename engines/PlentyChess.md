# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2025-09-25 | 3480<sub>(+new) | 3610<sub>(+new) | 3606<sub>(+4) |  |
| 6.0.2 | 2025-06-06 |  |  | 3602<sub>(+2) |  |
| 5.0.0 | 2025-03-23 | 3411<sub>(+5) | 3576<sub>(+new) | 3600<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3406<sub>(+new) |  | 3576<sub>(+new) |  |
| 4.0.0 | 2025-01-18 |  |  |  |  |
| 3.0.2 | 2024-11-26 |  |  |  |  |
| 3.0.1 | 2024-11-22 | 3341<sub>(+new) | 3482<sub>(+new) | 3572<sub>(+new) |  |
| 3.0.0 | 2024-11-21 |  |  |  |  |
| 2.1.0 | 2024-07-02 | 3374<sub>(+new) | 3514<sub>(+new) | 3551<sub>(+new) |  |
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

Generated: 2026-05-06 06:27:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "STC (8.0+0.08s)" [3374, 3341, 3411, 3480]
  line "STC (8.0+0.08s)" [3374, 3341, 3411, 3480]
  line "LTC (60.0+0.60s)" [3514, 3482, 3576, 3610]
  line "VLTC (2m24s+1.12s)" [3551, 3572, 3600, 3606]
  line "VLTC (2m24s+1.12s)" [3551, 3572, 3600, 3606]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3606 | 24 | 384 | 51% | 3602 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3610 | 45 | 110 | 50% | 3607 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3480 | 36 | 192 | 49% | 3483 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3602 | 34 | 192 | 51% | 3598 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3600 | 26 | 332 | 51% | 3591 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3576 | 68 | 48 | 48% | 3590 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3411 | 208 | 4 | 50% | 3411 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 20 | 600 | 50% | 3576 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3406 | 59 | 72 | 52% | 3390 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 21 | 544 | 50% | 3571 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 36 | 208 | 50% | 3475 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3341 | 33 | 248 | 47% | 3359 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 23 | 460 | 52% | 3536 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 63 | 64 | 63% | 3413 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3374 | 98 | 92 | 92% | 2569 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |