# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3483<sub>(+28) | 3602<sub>(+24) | 3627<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3455<sub>(-5) | 3578<sub>(-6) | 3600<sub>(-3) |  |
| 14.0 | 2024-10-22 | 3460<sub>(+23) | 3584<sub>(+27) | 3603<sub>(+8) |  |
| 13.0 | 2024-07-01 | 3437<sub>(+new) | 3557<sub>(+new) | 3595<sub>(+new) |  |
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

Generated: 2026-05-05 06:26:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3400 --> 3700
  line "STC (8.0+0.08s)" [3437, 3460, 3455, 3483]
  line "STC (8.0+0.08s)" [3437, 3460, 3455, 3483]
  line "LTC (60.0+0.60s)" [3557, 3584, 3578, 3602]
  line "VLTC (2m24s+1.12s)" [3595, 3603, 3600, 3627]
  line "VLTC (2m24s+1.12s)" [3595, 3603, 3600, 3627]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3627 | 22 | 472 | 53% | 3609 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3602 | 18 | 692 | 51% | 3595 | 88% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3483 | 16 | 1012 | 50% | 3484 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3600 | 31 | 236 | 51% | 3595 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3578 | 29 | 280 | 50% | 3576 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3455 | 27 | 320 | 51% | 3445 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3603 | 22 | 492 | 52% | 3592 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3584 | 19 | 644 | 51% | 3576 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3460 | 16 | 944 | 50% | 3457 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3595 | 38 | 160 | 52% | 3578 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3557 | 34 | 200 | 49% | 3565 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3437 | 28 | 332 | 52% | 3426 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |