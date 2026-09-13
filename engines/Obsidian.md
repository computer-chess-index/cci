# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3443<sub>(+29) | 3564<sub>(+26) | 3590<sub>(+29) |  |
| 15.0 | 2025-01-31 | 3414<sub>(-7) | 3538<sub>(-7) | 3561<sub>(-3) |  |
| 14.0 | 2024-10-22 | 3421<sub>(+23) | 3545<sub>(+27) | 3564<sub>(+7) |  |
| 13.0 | 2024-07-01 | 3398 | 3518 | 3557 |  |
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

Generated: 2026-09-13 04:40:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3398, 3421, 3414, 3443]
  line "STC (8.0+0.08s)" [3398, 3421, 3414, 3443]
  line "LTC (60.0+0.60s)" [3518, 3545, 3538, 3564]
  line "" [3557, 3564, 3561, 3590]
  line "VLTC (2m24s+1.12s)" [3557, 3564, 3561, 3590]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 20 | 564 | 53% | 3572 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3564 | 17 | 800 | 51% | 3557 | 89% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3443 | 14 | 1188 | 49% | 3444 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 31 | 236 | 51% | 3557 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 29 | 280 | 50% | 3537 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3414 | 27 | 320 | 51% | 3405 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 22 | 492 | 52% | 3553 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 19 | 644 | 51% | 3537 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3421 | 16 | 944 | 50% | 3417 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3557 | 38 | 160 | 52% | 3538 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 34 | 200 | 49% | 3526 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3398 | 28 | 332 | 52% | 3386 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |