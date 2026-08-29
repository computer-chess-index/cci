# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3437<sub>(+27) | 3560<sub>(+26) | 3584<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3410<sub>(-7) | 3534<sub>(-7) | 3557<sub>(-3) |  |
| 14.0 | 2024-10-22 | 3417<sub>(+23) | 3541<sub>(+28) | 3560<sub>(+8) |  |
| 13.0 | 2024-07-01 | 3394 | 3513 | 3552 |  |
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

Generated: 2026-08-29 06:27:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3394, 3417, 3410, 3437]
  line "STC (8.0+0.08s)" [3394, 3417, 3410, 3437]
  line "LTC (60.0+0.60s)" [3513, 3541, 3534, 3560]
  line "" [3552, 3560, 3557, 3584]
  line "VLTC (2m24s+1.12s)" [3552, 3560, 3557, 3584]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3584 | 20 | 544 | 53% | 3567 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3560 | 17 | 784 | 51% | 3552 | 89% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3437 | 14 | 1172 | 49% | 3440 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 31 | 236 | 51% | 3552 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 29 | 280 | 50% | 3532 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3410 | 27 | 320 | 51% | 3401 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 22 | 492 | 52% | 3549 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 19 | 644 | 51% | 3532 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3417 | 16 | 944 | 50% | 3413 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 38 | 160 | 52% | 3533 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 34 | 200 | 49% | 3522 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3394 | 28 | 332 | 52% | 3382 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |