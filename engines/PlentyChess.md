# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3451<sub>(+26) | 3559<sub>(+7) | 3571<sub>(+19) |  |
| 7.0.0 | 2025-09-25 | 3425<sub>(+new) | 3552<sub>(+new) | 3552<sub>(+7) |  |
| 6.0.2 | 2025-06-06 |  |  | 3545<sub>(+1) |  |
| 5.0.0 | 2025-03-23 | 3355<sub>(+6) | 3519<sub>(+new) | 3544<sub>(+25) |  |
| 4.0.1 | 2025-01-18 | 3349<sub>(+new) |  | 3519<sub>(+new) |  |
| 4.0.0 | 2025-01-18 |  |  |  |  |
| 3.0.2 | 2024-11-26 |  |  |  |  |
| 3.0.1 | 2024-11-22 | 3283<sub>(+new) | 3425<sub>(+new) | 3515<sub>(+new) |  |
| 3.0.0 | 2024-11-21 |  |  |  |  |
| 2.1.0 | 2024-07-02 | 3314<sub>(+new) | 3457<sub>(+new) | 3492<sub>(+new) |  |
| 2.0.0 | 2024-06-12 |  |  |  |  |
| 1.0.0 | 2024-04-01 |  |  |  |  |
| 0.3.0 | 2024-02-04 |  |  |  |  |
| 0.2.1 | 2024-01-21 |  |  |  |  |
| 0.2.0 | 2024-01-20 |  |  |  |  |
| 0.1.0 | 2024-01-12 |  |  |  |  |
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

Generated: 2026-08-05 06:28:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3314, 3283, 3355, 3425, 3451]
  line "STC (8.0+0.08s)" [3314, 3283, 3355, 3425, 3451]
  line "LTC (60.0+0.60s)" [3457, 3425, 3519, 3552, 3559]
  line "VLTC (2m24s+1.12s)" [3492, 3515, 3544, 3552, 3571]
  line "VLTC (2m24s+1.12s)" [3492, 3515, 3544, 3552, 3571]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3571 | 42 | 124 | 51% | 3564 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 42 | 124 | 50% | 3561 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3451 | 37 | 176 | 47% | 3472 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 24 | 392 | 51% | 3545 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3552 | 42 | 130 | 50% | 3551 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3425 | 35 | 204 | 49% | 3426 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 34 | 192 | 51% | 3541 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 26 | 332 | 51% | 3534 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 68 | 48 | 48% | 3533 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3355 | 208 | 4 | 50% | 3355 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 20 | 600 | 50% | 3518 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3349 | 59 | 72 | 52% | 3333 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 21 | 544 | 50% | 3513 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 36 | 208 | 50% | 3418 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3283 | 33 | 248 | 47% | 3301 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 23 | 460 | 52% | 3479 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 63 | 64 | 63% | 3356 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3314 | 98 | 92 | 92% | 2514 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |