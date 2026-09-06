# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2751<sub>(+123) | 3062<sub>(+118) | 3119<sub>(+96) |  |
| 0.95 | 2026-04-23 | 2628<sub>(+33) | 2944<sub>(+14) | 3023<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2595 | 2930 | 3059 |  |
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

Generated: 2026-09-06 04:36:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "" [2595, 2628, 2751]
  line "STC (8.0+0.08s)" [2595, 2628, 2751]
  line "LTC (60.0+0.60s)" [2930, 2944, 3062]
  line "" [3059, 3023, 3119]
  line "VLTC (2m24s+1.12s)" [3059, 3023, 3119]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 28 | 362 | 50% | 3120 | 53% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3062 | 28 | 368 | 50% | 3059 | 48% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2751 | 28 | 400 | 49% | 2759 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3023 | 29 | 370 | 51% | 3013 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2944 | 29 | 366 | 49% | 2952 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2628 | 29 | 398 | 52% | 2607 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3059 | 27 | 380 | 50% | 3056 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2930 | 28 | 382 | 53% | 2898 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2595 | 27 | 476 | 50% | 2577 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |