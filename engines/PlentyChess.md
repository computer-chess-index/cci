# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3455<sub>(+22) | 3568<sub>(+8) | 3580<sub>(+21) |  |
| 7.0.0 | 2025-09-25 | 3433<sub>(+new) | 3560<sub>(+new) | 3559<sub>(+7) |  |
| 6.0.2 | 2025-06-06 |  |  | 3552<sub>(0) |  |
| 5.0.0 | 2025-03-23 | 3362<sub>(+6) | 3528<sub>(+new) | 3552<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3356<sub>(+66) |  | 3528<sub>(+6) |  |
| 3.0.1 | 2024-11-22 | 3290<sub>(-31) | 3432<sub>(-32) | 3522<sub>(+21) |  |
| 2.1.0 | 2024-07-02 | 3321 | 3464 | 3501 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PlentyChess+<version>&body=###%20Engine%20name%0APlentyChess%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:28:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3321, 3290, 3362, 3433, 3455]
  line "STC (8.0+0.08s)" [3321, 3290, 3362, 3433, 3455]
  line "LTC (60.0+0.60s)" [3464, 3432, 3528, 3560, 3568]
  line "VLTC (2m24s+1.12s)" [3501, 3522, 3552, 3559, 3580]
  line "VLTC (2m24s+1.12s)" [3501, 3522, 3552, 3559, 3580]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 42 | 128 | 51% | 3572 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3568 | 41 | 132 | 50% | 3569 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3455 | 35 | 200 | 47% | 3475 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 24 | 392 | 51% | 3553 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3560 | 42 | 130 | 50% | 3559 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3433 | 35 | 204 | 49% | 3433 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 34 | 192 | 51% | 3549 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 26 | 332 | 51% | 3542 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 68 | 48 | 48% | 3540 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3362 | 208 | 4 | 50% | 3362 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3528 | 20 | 600 | 50% | 3526 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3356 | 59 | 72 | 52% | 3340 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 21 | 544 | 50% | 3521 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3432 | 36 | 208 | 50% | 3425 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3290 | 33 | 248 | 47% | 3308 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 23 | 460 | 52% | 3486 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 63 | 64 | 63% | 3363 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3321 | 98 | 92 | 92% | 2519 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |