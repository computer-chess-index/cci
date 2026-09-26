# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3447<sub>(+27) | 3568<sub>(+24) | 3594<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3420<sub>(-5) | 3544<sub>(-5) | 3567<sub>(-2) |  |
| 14.0 | 2024-10-22 | 3425<sub>(+23) | 3549<sub>(+27) | 3569<sub>(+8) |  |
| 13.0 | 2024-07-01 | 3402 | 3522 | 3561 |  |
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

Generated: 2026-09-26 04:40:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3400 --> 3600
  line "" [3402, 3425, 3420, 3447]
  line "STC (8.0+0.08s)" [3402, 3425, 3420, 3447]
  line "LTC (60.0+0.60s)" [3522, 3549, 3544, 3568]
  line "" [3561, 3569, 3567, 3594]
  line "VLTC (2m24s+1.12s)" [3561, 3569, 3567, 3594]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3594 | 20 | 564 | 53% | 3576 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3568 | 17 | 800 | 51% | 3561 | 89% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3447 | 14 | 1196 | 49% | 3449 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3567 | 31 | 236 | 51% | 3561 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 29 | 280 | 50% | 3541 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3420 | 27 | 320 | 51% | 3410 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 22 | 492 | 52% | 3557 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3549 | 19 | 644 | 51% | 3541 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3425 | 16 | 944 | 50% | 3422 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 38 | 160 | 52% | 3542 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 34 | 200 | 49% | 3530 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3402 | 28 | 332 | 52% | 3390 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |