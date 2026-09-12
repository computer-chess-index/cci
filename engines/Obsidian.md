# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3441<sub>(+28) | 3563<sub>(+25) | 3588<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3413<sub>(-7) | 3538<sub>(-6) | 3561<sub>(-2) |  |
| 14.0 | 2024-10-22 | 3420<sub>(+23) | 3544<sub>(+27) | 3563<sub>(+7) |  |
| 13.0 | 2024-07-01 | 3397 | 3517 | 3556 |  |
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

Generated: 2026-09-12 04:39:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3397, 3420, 3413, 3441]
  line "STC (8.0+0.08s)" [3397, 3420, 3413, 3441]
  line "LTC (60.0+0.60s)" [3517, 3544, 3538, 3563]
  line "" [3556, 3563, 3561, 3588]
  line "VLTC (2m24s+1.12s)" [3556, 3563, 3561, 3588]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3588 | 20 | 560 | 53% | 3571 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3563 | 17 | 796 | 51% | 3556 | 89% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3441 | 14 | 1184 | 49% | 3444 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 31 | 236 | 51% | 3556 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 29 | 280 | 50% | 3536 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3413 | 27 | 320 | 51% | 3405 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 22 | 492 | 52% | 3552 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3544 | 19 | 644 | 51% | 3536 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3420 | 16 | 944 | 50% | 3417 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 38 | 160 | 52% | 3537 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 34 | 200 | 49% | 3525 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3397 | 28 | 332 | 52% | 3384 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |