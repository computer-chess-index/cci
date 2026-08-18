# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3430<sub>(+27) | 3552<sub>(+24) | 3579<sub>(+28) |  |
| 15.0 | 2025-01-31 | 3403<sub>(-7) | 3528<sub>(-5) | 3551<sub>(-2) |  |
| 14.0 | 2024-10-22 | 3410<sub>(+24) | 3533<sub>(+27) | 3553<sub>(+8) |  |
| 13.0 | 2024-07-01 | 3386 | 3506 | 3545 |  |
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

Generated: 2026-08-18 06:27:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3386, 3410, 3403, 3430]
  line "STC (8.0+0.08s)" [3386, 3410, 3403, 3430]
  line "LTC (60.0+0.60s)" [3506, 3533, 3528, 3552]
  line "VLTC (2m24s+1.12s)" [3545, 3553, 3551, 3579]
  line "VLTC (2m24s+1.12s)" [3545, 3553, 3551, 3579]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 21 | 532 | 53% | 3560 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3552 | 17 | 768 | 51% | 3545 | 89% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3430 | 15 | 1156 | 49% | 3433 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 31 | 236 | 51% | 3545 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 29 | 280 | 50% | 3525 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3403 | 27 | 320 | 51% | 3394 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3553 | 22 | 492 | 52% | 3542 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 19 | 644 | 51% | 3525 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3410 | 16 | 944 | 50% | 3406 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 38 | 160 | 52% | 3526 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3506 | 34 | 200 | 49% | 3515 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3386 | 28 | 332 | 52% | 3375 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |