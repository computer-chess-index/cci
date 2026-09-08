# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3488<sub>(+41) | 3576<sub>(+12) | 3599<sub>(+21) |  |
| 0.8.0 | 2025-08-30 | 3447 | 3564 | 3578 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Reckless+<version>&body=###%20Engine%20name%0AReckless%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-08 04:41:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3400 --> 3600
  line "" [3447, 3488]
  line "STC (8.0+0.08s)" [3447, 3488]
  line "LTC (60.0+0.60s)" [3564, 3576]
  line "" [3578, 3599]
  line "VLTC (2m24s+1.12s)" [3578, 3599]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3599 | 30 | 240 | 53% | 3579 | 93% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3576 | 25 | 344 | 51% | 3571 | 92% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3488 | 19 | 646 | 50% | 3484 | 82% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 27 | 306 | 54% | 3552 | 88% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3564 | 29 | 268 | 51% | 3551 | 87% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3447 | 26 | 378 | 51% | 3430 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |