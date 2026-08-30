# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3429<sub>(+50) | 3567<sub>(+45) | 3590<sub>(+48) |  |
| 5 | 2022-11-05 | 3379 | 3522 | 3542 |  |
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

Generated: 2026-08-30 06:24:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3379, 3429]
  line "STC (8.0+0.08s)" [3379, 3429]
  line "LTC (60.0+0.60s)" [3522, 3567]
  line "" [3542, 3590]
  line "VLTC (2m24s+1.12s)" [3542, 3590]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 33 | 208 | 53% | 3571 | 88% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3567 | 21 | 528 | 51% | 3560 | 87% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3429 | 18 | 726 | 51% | 3424 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 27 | 320 | 55% | 3499 | 85% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 12 | 1640 | 50% | 3522 | 86% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 3379 | 12 | 1796 | 52% | 3367 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |