# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2751<sub>(+125) | 3065<sub>(+123) | 3117<sub>(+97) |  |
| 0.95 | 2026-04-23 | 2626<sub>(+33) | 2942<sub>(+14) | 3020<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2593 | 2928 | 3056 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Myrddin+<version>&body=###%20Engine%20name%0AMyrddin%0A%0A###%20Version%0A0.96" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-28 06:27:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "" [2593, 2626, 2751]
  line "STC (8.0+0.08s)" [2593, 2626, 2751]
  line "LTC (60.0+0.60s)" [2928, 2942, 3065]
  line "" [3056, 3020, 3117]
  line "VLTC (2m24s+1.12s)" [3056, 3020, 3117]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3117 | 29 | 338 | 50% | 3119 | 53% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3065 | 28 | 356 | 51% | 3056 | 49% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2751 | 29 | 392 | 49% | 2759 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3020 | 29 | 370 | 51% | 3012 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2942 | 29 | 366 | 49% | 2950 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2626 | 29 | 398 | 52% | 2606 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3056 | 27 | 380 | 50% | 3055 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2928 | 28 | 382 | 53% | 2897 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2593 | 27 | 476 | 50% | 2576 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |