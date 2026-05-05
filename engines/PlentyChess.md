# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2025-09-25 | 3480<sub>(+new) | 3609<sub>(+new) | 3605<sub>(+5) |  |
| 6.0.2 | 2025-06-06 |  |  | 3600<sub>(+1) |  |
| 5.0.0 | 2025-03-23 | 3410<sub>(+5) | 3575<sub>(+new) | 3599<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3405<sub>(+new) |  | 3575<sub>(+new) |  |
| 4.0.0 | 2025-01-18 |  |  |  |  |
| 3.0.2 | 2024-11-26 |  |  |  |  |
| 3.0.1 | 2024-11-22 | 3340<sub>(+new) | 3480<sub>(+new) | 3571<sub>(+new) |  |
| 3.0.0 | 2024-11-21 |  |  |  |  |
| 2.1.0 | 2024-07-02 | 3371<sub>(+new) | 3513<sub>(+new) | 3549<sub>(+new) |  |
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

Generated: 2026-05-05 06:26:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "STC (8.0+0.08s)" [3371, 3340, 3410, 3480]
  line "STC (8.0+0.08s)" [3371, 3340, 3410, 3480]
  line "LTC (60.0+0.60s)" [3513, 3480, 3575, 3609]
  line "VLTC (2m24s+1.12s)" [3549, 3571, 3599, 3605]
  line "VLTC (2m24s+1.12s)" [3549, 3571, 3599, 3605]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3605 | 24 | 384 | 51% | 3600 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3609 | 45 | 110 | 50% | 3606 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3480 | 36 | 188 | 49% | 3483 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3600 | 34 | 192 | 51% | 3596 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3599 | 26 | 332 | 51% | 3590 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3575 | 68 | 48 | 48% | 3588 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3410 | 208 | 4 | 50% | 3410 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 20 | 600 | 50% | 3575 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3405 | 59 | 72 | 52% | 3389 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 21 | 544 | 50% | 3569 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 36 | 208 | 50% | 3474 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3340 | 33 | 248 | 47% | 3357 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 23 | 460 | 52% | 3534 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 63 | 64 | 63% | 3411 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3371 | 98 | 92 | 92% | 2569 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |