# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3353<sub>(+14) | 3502<sub>(+14) | 3534<sub>(-4) |  |
| 1.0 | 2025-01-08 | 3339 | 3488 | 3538 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Horsie+<version>&body=###%20Engine%20name%0AHorsie%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 04:35:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3339, 3353]
  line "STC (8.0+0.08s)" [3339, 3353]
  line "LTC (60.0+0.60s)" [3488, 3502]
  line "" [3538, 3534]
  line "VLTC (2m24s+1.12s)" [3538, 3534]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 16 | 926 | 50% | 3532 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 16 | 938 | 50% | 3498 | 83% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3353 | 15 | 1086 | 50% | 3355 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 28 | 304 | 49% | 3544 | 86% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3488 | 26 | 348 | 51% | 3480 | 85% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3339 | 29 | 292 | 49% | 3343 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |