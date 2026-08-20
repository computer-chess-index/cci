# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3453<sub>(+21) | 3568<sub>(+9) | 3580<sub>(+23) |  |
| 7.0.0 | 2025-09-25 | 3432<sub>(+new) | 3559<sub>(+new) | 3557<sub>(+5) |  |
| 6.0.2 | 2025-06-06 |  |  | 3552<sub>(+1) |  |
| 5.0.0 | 2025-03-23 | 3360<sub>(+5) | 3526<sub>(+new) | 3551<sub>(+25) |  |
| 4.0.1 | 2025-01-18 | 3355<sub>(+66) |  | 3526<sub>(+4) |  |
| 3.0.1 | 2024-11-22 | 3289<sub>(-31) | 3432<sub>(-32) | 3522<sub>(+23) |  |
| 2.1.0 | 2024-07-02 | 3320 | 3464 | 3499 |  |
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

Generated: 2026-08-20 06:28:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3320, 3289, 3360, 3432, 3453]
  line "STC (8.0+0.08s)" [3320, 3289, 3360, 3432, 3453]
  line "LTC (60.0+0.60s)" [3464, 3432, 3526, 3559, 3568]
  line "VLTC (2m24s+1.12s)" [3499, 3522, 3551, 3557, 3580]
  line "VLTC (2m24s+1.12s)" [3499, 3522, 3551, 3557, 3580]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 42 | 128 | 51% | 3572 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3568 | 41 | 132 | 50% | 3568 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3453 | 35 | 200 | 47% | 3474 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 24 | 392 | 51% | 3552 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 42 | 130 | 50% | 3557 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3432 | 35 | 204 | 49% | 3433 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 34 | 192 | 51% | 3548 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 26 | 332 | 51% | 3541 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 68 | 48 | 48% | 3540 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3360 | 208 | 4 | 50% | 3360 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 20 | 600 | 50% | 3525 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3355 | 59 | 72 | 52% | 3339 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 21 | 544 | 50% | 3519 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3432 | 36 | 208 | 50% | 3425 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3289 | 33 | 248 | 47% | 3308 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 23 | 460 | 52% | 3484 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 63 | 64 | 63% | 3362 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3320 | 98 | 92 | 92% | 2519 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |