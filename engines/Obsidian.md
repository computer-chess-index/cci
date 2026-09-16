# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3444<sub>(+28) | 3565<sub>(+25) | 3591<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3416<sub>(-6) | 3540<sub>(-6) | 3564<sub>(-1) |  |
| 14.0 | 2024-10-22 | 3422<sub>(+23) | 3546<sub>(+27) | 3565<sub>(+6) |  |
| 13.0 | 2024-07-01 | 3399 | 3519 | 3559 |  |
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

Generated: 2026-09-16 04:40:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3399, 3422, 3416, 3444]
  line "STC (8.0+0.08s)" [3399, 3422, 3416, 3444]
  line "LTC (60.0+0.60s)" [3519, 3546, 3540, 3565]
  line "" [3559, 3565, 3564, 3591]
  line "VLTC (2m24s+1.12s)" [3559, 3565, 3564, 3591]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3591 | 20 | 564 | 53% | 3573 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3565 | 17 | 800 | 51% | 3559 | 89% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3444 | 14 | 1192 | 49% | 3445 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 31 | 236 | 51% | 3559 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3540 | 29 | 280 | 50% | 3538 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3416 | 27 | 320 | 51% | 3406 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 22 | 492 | 52% | 3555 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3546 | 19 | 644 | 51% | 3538 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3422 | 16 | 944 | 50% | 3418 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 38 | 160 | 52% | 3540 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 34 | 200 | 49% | 3528 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3399 | 28 | 332 | 52% | 3387 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |