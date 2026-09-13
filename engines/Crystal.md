# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3432<sub>(+49) | 3569<sub>(+43) | 3594<sub>(+48) |  |
| 5 | 2022-11-05 | 3383 | 3526 | 3546 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crystal+<version>&body=###%20Engine%20name%0ACrystal%0A%0A###%20Version%0A9" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-13 04:37:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3383, 3432]
  line "STC (8.0+0.08s)" [3383, 3432]
  line "LTC (60.0+0.60s)" [3526, 3569]
  line "" [3546, 3594]
  line "VLTC (2m24s+1.12s)" [3546, 3594]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3594 | 31 | 232 | 53% | 3576 | 90% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3569 | 20 | 554 | 51% | 3565 | 87% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3432 | 18 | 754 | 51% | 3428 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 27 | 320 | 55% | 3503 | 85% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3526 | 12 | 1640 | 50% | 3526 | 86% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 3383 | 12 | 1796 | 52% | 3371 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |