# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1701<sub>(+51) | 2017<sub>(+101) | 2076<sub>(+89) |  |
| 20 | 2025-12-15 | 1650 | 1916 | 1987 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PurplePanda+<version>&body=###%20Engine%20name%0APurplePanda%0A%0A###%20Version%0A21" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:41:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1600 --> 2100
  line "" [1650, 1701]
  line "STC (8.0+0.08s)" [1650, 1701]
  line "LTC (60.0+0.60s)" [1916, 2017]
  line "" [1987, 2076]
  line "VLTC (2m24s+1.12s)" [1987, 2076]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | 2076 | 34 | 318 | 47% | 2114 | 17% |
| 21 | LTC <sub>(60.0+0.60s)</sub> | 2017 | 34 | 312 | 50% | 2032 | 19% |
| 21 | STC <sub>(8.0+0.08s)</sub> | 1701 | 34 | 336 | 50% | 1697 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | 1987 | 25 | 566 | 48% | 2017 | 21% |
| 20 | LTC <sub>(60.0+0.60s)</sub> | 1916 | 25 | 580 | 50% | 1921 | 17% |
| 20 | STC <sub>(8.0+0.08s)</sub> | 1650 | 25 | 640 | 47% | 1678 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |