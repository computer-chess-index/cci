# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3440<sub>(+29) | 3559<sub>(+25) | 3584<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3411<sub>(-6) | 3534<sub>(-7) | 3557<sub>(-3) |  |
| 14.0 | 2024-10-22 | 3417<sub>(+23) | 3541<sub>(+27) | 3560<sub>(+7) |  |
| 13.0 | 2024-07-01 | 3394<sub>(+new) | 3514<sub>(+new) | 3553<sub>(+new) |  |
| 12.0 | 2024-04-11 |  |  |  |  |
| 11.0 | 2024-03-02 |  |  |  |  |
| 10.0 | 2024-01-16 |  |  |  |  |
| 9.0 | 2023-12-17 |  |  |  |  |
| 8.0 | 2023-11-30 |  |  |  |  |
| 7.0 | 2023-11-07 |  |  |  |  |
| 6.0 | 2023-10-21 |  |  |  |  |
| 5.0 | 2023-10-01 |  |  |  |  |
| 4.0 | 2023-09-23 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Obsidian+<version>&body=###%20Engine%20name%0AObsidian%0A%0A###%20Version%0A16.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:27:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3394, 3417, 3411, 3440]
  line "STC (8.0+0.08s)" [3394, 3417, 3411, 3440]
  line "LTC (60.0+0.60s)" [3514, 3541, 3534, 3559]
  line "VLTC (2m24s+1.12s)" [3553, 3560, 3557, 3584]
  line "VLTC (2m24s+1.12s)" [3553, 3560, 3557, 3584]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3584 | 22 | 476 | 53% | 3565 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 18 | 692 | 51% | 3552 | 88% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3440 | 15 | 1020 | 49% | 3443 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 31 | 236 | 51% | 3552 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 29 | 280 | 50% | 3533 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3411 | 27 | 320 | 51% | 3402 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 22 | 492 | 52% | 3549 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 19 | 644 | 51% | 3533 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3417 | 16 | 944 | 50% | 3414 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 38 | 160 | 52% | 3534 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3514 | 34 | 200 | 49% | 3522 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3394 | 28 | 332 | 52% | 3383 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |