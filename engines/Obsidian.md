# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3438<sub>(+27) | 3561<sub>(+25) | 3587<sub>(+28) |  |
| 15.0 | 2025-01-31 | 3411<sub>(-7) | 3536<sub>(-6) | 3559<sub>(-2) |  |
| 14.0 | 2024-10-22 | 3418<sub>(+23) | 3542<sub>(+27) | 3561<sub>(+6) |  |
| 13.0 | 2024-07-01 | 3395 | 3515 | 3555 |  |
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

Generated: 2026-09-06 04:37:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3395, 3418, 3411, 3438]
  line "STC (8.0+0.08s)" [3395, 3418, 3411, 3438]
  line "LTC (60.0+0.60s)" [3515, 3542, 3536, 3561]
  line "" [3555, 3561, 3559, 3587]
  line "VLTC (2m24s+1.12s)" [3555, 3561, 3559, 3587]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3587 | 20 | 544 | 53% | 3568 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3561 | 17 | 784 | 51% | 3555 | 89% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3438 | 14 | 1184 | 49% | 3441 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 31 | 236 | 51% | 3555 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 29 | 280 | 50% | 3534 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3411 | 27 | 320 | 51% | 3402 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 22 | 492 | 52% | 3551 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3542 | 19 | 644 | 51% | 3534 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3418 | 16 | 944 | 50% | 3416 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 38 | 160 | 52% | 3536 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 34 | 200 | 49% | 3524 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3395 | 28 | 332 | 52% | 3383 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |