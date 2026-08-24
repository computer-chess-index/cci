# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3434<sub>(+27) | 3556<sub>(+24) | 3583<sub>(+28) |  |
| 15.0 | 2025-01-31 | 3407<sub>(-7) | 3532<sub>(-6) | 3555<sub>(-2) |  |
| 14.0 | 2024-10-22 | 3414<sub>(+23) | 3538<sub>(+28) | 3557<sub>(+8) |  |
| 13.0 | 2024-07-01 | 3391 | 3510 | 3549 |  |
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

Generated: 2026-08-24 06:27:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3391, 3414, 3407, 3434]
  line "STC (8.0+0.08s)" [3391, 3414, 3407, 3434]
  line "LTC (60.0+0.60s)" [3510, 3538, 3532, 3556]
  line "VLTC (2m24s+1.12s)" [3549, 3557, 3555, 3583]
  line "VLTC (2m24s+1.12s)" [3549, 3557, 3555, 3583]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 20 | 544 | 53% | 3564 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3556 | 17 | 776 | 51% | 3549 | 89% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3434 | 15 | 1160 | 49% | 3437 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 31 | 236 | 51% | 3549 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 29 | 280 | 50% | 3529 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3407 | 27 | 320 | 51% | 3398 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 22 | 492 | 52% | 3546 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 19 | 644 | 51% | 3529 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3414 | 16 | 944 | 50% | 3410 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 38 | 160 | 52% | 3530 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 34 | 200 | 49% | 3519 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3391 | 28 | 332 | 52% | 3379 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |