# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3495<sub>(+43) | 3582<sub>(+13) | 3605<sub>(+22) |  |
| 0.8.0 | 2025-08-30 | 3452 | 3569 | 3583 |  |
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

Generated: 2026-09-25 04:41:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3400 --> 3700
  line "" [3452, 3495]
  line "STC (8.0+0.08s)" [3452, 3495]
  line "LTC (60.0+0.60s)" [3569, 3582]
  line "" [3583, 3605]
  line "VLTC (2m24s+1.12s)" [3583, 3605]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3605 | 30 | 244 | 53% | 3586 | 93% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3582 | 25 | 352 | 51% | 3578 | 93% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3495 | 19 | 668 | 51% | 3491 | 82% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 27 | 306 | 54% | 3557 | 88% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3569 | 29 | 268 | 51% | 3556 | 87% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3452 | 26 | 378 | 51% | 3437 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |