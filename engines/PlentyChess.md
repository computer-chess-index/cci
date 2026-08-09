# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3452<sub>(+26) | 3560<sub>(+7) | 3572<sub>(+20) |  |
| 7.0.0 | 2025-09-25 | 3426<sub>(+new) | 3553<sub>(+new) | 3552<sub>(+6) |  |
| 6.0.2 | 2025-06-06 |  |  | 3546<sub>(+1) |  |
| 5.0.0 | 2025-03-23 | 3355<sub>(+4) | 3521<sub>(+new) | 3545<sub>(+24) |  |
| 4.0.1 | 2025-01-18 | 3351<sub>(+66) |  | 3521<sub>(+4) |  |
| 3.0.1 | 2024-11-22 | 3285<sub>(-31) | 3426<sub>(-33) | 3517<sub>(+23) |  |
| 2.1.0 | 2024-07-02 | 3316 | 3459 | 3494 |  |
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

Generated: 2026-08-09 06:27:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3316, 3285, 3355, 3426, 3452]
  line "STC (8.0+0.08s)" [3316, 3285, 3355, 3426, 3452]
  line "LTC (60.0+0.60s)" [3459, 3426, 3521, 3553, 3560]
  line "VLTC (2m24s+1.12s)" [3494, 3517, 3545, 3552, 3572]
  line "VLTC (2m24s+1.12s)" [3494, 3517, 3545, 3552, 3572]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 42 | 124 | 51% | 3567 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3560 | 42 | 124 | 50% | 3564 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3452 | 37 | 180 | 47% | 3472 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 24 | 392 | 51% | 3546 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3553 | 42 | 130 | 50% | 3552 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3426 | 35 | 204 | 49% | 3428 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 34 | 192 | 51% | 3542 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 26 | 332 | 51% | 3536 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 68 | 48 | 48% | 3534 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3355 | 208 | 4 | 50% | 3355 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 20 | 600 | 50% | 3519 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3351 | 59 | 72 | 52% | 3333 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 21 | 544 | 50% | 3514 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3426 | 36 | 208 | 50% | 3420 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3285 | 33 | 248 | 47% | 3302 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 23 | 460 | 52% | 3480 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 63 | 64 | 63% | 3357 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3316 | 98 | 92 | 92% | 2515 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |