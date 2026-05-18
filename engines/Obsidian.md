# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3480<sub>(+27) | 3600<sub>(+24) | 3626<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3453<sub>(-6) | 3576<sub>(-7) | 3599<sub>(-3) |  |
| 14.0 | 2024-10-22 | 3459<sub>(+23) | 3583<sub>(+27) | 3602<sub>(+7) |  |
| 13.0 | 2024-07-01 | 3436<sub>(+new) | 3556<sub>(+new) | 3595<sub>(+new) |  |
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

Generated: 2026-05-18 06:26:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3400 --> 3700
  line "STC (8.0+0.08s)" [3436, 3459, 3453, 3480]
  line "STC (8.0+0.08s)" [3436, 3459, 3453, 3480]
  line "LTC (60.0+0.60s)" [3556, 3583, 3576, 3600]
  line "VLTC (2m24s+1.12s)" [3595, 3602, 3599, 3626]
  line "VLTC (2m24s+1.12s)" [3595, 3602, 3599, 3626]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3626 | 22 | 476 | 53% | 3607 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3600 | 18 | 692 | 51% | 3594 | 88% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3480 | 15 | 1020 | 49% | 3483 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3599 | 31 | 236 | 51% | 3594 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3576 | 29 | 280 | 50% | 3575 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3453 | 27 | 320 | 51% | 3444 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3602 | 22 | 492 | 52% | 3591 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3583 | 19 | 644 | 51% | 3575 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3459 | 16 | 944 | 50% | 3456 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3595 | 38 | 160 | 52% | 3576 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3556 | 34 | 200 | 49% | 3564 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3436 | 28 | 332 | 52% | 3425 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |