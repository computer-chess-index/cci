# Engine: Berserk

Author: Jay Honnold

Home: https://github.com/jhonnold/berserk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.7.0 | 2026-05-24 |  |  |  |  |
| 14 | 2026-05-24 | 3433<sub>(+1840) | 3545<sub>(+17) | 3573<sub>(+21) |  |
| 13 | 2024-03-31 | 1593 | 3528 | 3552 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Berserk+<version>&body=###%20Engine%20name%0ABerserk%0A%0A###%20Version%0A4.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 06:23:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1500 --> 3600
  line "" [1593, 3433]
  line "STC (8.0+0.08s)" [1593, 3433]
  line "LTC (60.0+0.60s)" [3528, 3545]
  line "" [3552, 3573]
  line "VLTC (2m24s+1.12s)" [3552, 3573]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | 3573 | 30 | 252 | 50% | 3571 | 93% |
| 14 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 31 | 236 | 50% | 3544 | 90% |
| 14 | STC <sub>(8.0+0.08s)</sub> | 3433 | 25 | 402 | 53% | 3356 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 13 | 1458 | 53% | 3478 | 84% |
| 13 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 12 | 1740 | 51% | 3522 | 87% |
| 13 | STC <sub>(8.0+0.08s)</sub> | 1593 | 15 | 1932 | 53% | 1553 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |