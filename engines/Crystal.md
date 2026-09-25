# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3437<sub>(+50) | 3573<sub>(+43) | 3599<sub>(+47) |  |
| 5 | 2022-11-05 | 3387 | 3530 | 3552 |  |
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

Generated: 2026-09-25 04:37:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3387, 3437]
  line "STC (8.0+0.08s)" [3387, 3437]
  line "LTC (60.0+0.60s)" [3530, 3573]
  line "" [3552, 3599]
  line "VLTC (2m24s+1.12s)" [3552, 3599]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3599 | 31 | 236 | 53% | 3582 | 89% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3573 | 20 | 566 | 51% | 3569 | 87% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3437 | 18 | 766 | 51% | 3432 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 27 | 320 | 55% | 3507 | 85% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 12 | 1640 | 50% | 3532 | 86% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 3387 | 12 | 1796 | 52% | 3376 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |