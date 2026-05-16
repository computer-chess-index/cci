# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2025-09-25 | 3484<sub>(+new) | 3613<sub>(+new) | 3609<sub>(+4) |  |
| 6.0.2 | 2025-06-06 |  |  | 3605<sub>(0) |  |
| 5.0.0 | 2025-03-23 | 3416<sub>(+6) | 3580<sub>(+new) | 3605<sub>(+25) |  |
| 4.0.1 | 2025-01-18 | 3410<sub>(+new) |  | 3580<sub>(+new) |  |
| 4.0.0 | 2025-01-18 |  |  |  |  |
| 3.0.2 | 2024-11-26 |  |  |  |  |
| 3.0.1 | 2024-11-22 | 3344<sub>(+new) | 3486<sub>(+new) | 3575<sub>(+new) |  |
| 3.0.0 | 2024-11-21 |  |  |  |  |
| 2.1.0 | 2024-07-02 | 3376<sub>(+new) | 3518<sub>(+new) | 3553<sub>(+new) |  |
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

Generated: 2026-05-16 06:26:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "STC (8.0+0.08s)" [3376, 3344, 3416, 3484]
  line "STC (8.0+0.08s)" [3376, 3344, 3416, 3484]
  line "LTC (60.0+0.60s)" [3518, 3486, 3580, 3613]
  line "VLTC (2m24s+1.12s)" [3553, 3575, 3605, 3609]
  line "VLTC (2m24s+1.12s)" [3553, 3575, 3605, 3609]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3609 | 24 | 384 | 51% | 3606 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3613 | 45 | 110 | 50% | 3611 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3484 | 35 | 200 | 49% | 3487 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3605 | 34 | 192 | 51% | 3602 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3605 | 26 | 332 | 51% | 3595 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3580 | 68 | 48 | 48% | 3594 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3416 | 208 | 4 | 50% | 3416 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 20 | 600 | 50% | 3579 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3410 | 59 | 72 | 52% | 3394 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 21 | 544 | 50% | 3573 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 36 | 208 | 50% | 3479 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3344 | 33 | 248 | 47% | 3362 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 23 | 460 | 52% | 3540 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 63 | 64 | 63% | 3417 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3376 | 98 | 92 | 92% | 2572 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |