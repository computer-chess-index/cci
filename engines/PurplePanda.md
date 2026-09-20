# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1698<sub>(+51) | 2014<sub>(+101) | 2074<sub>(+89) |  |
| 20 | 2025-12-15 | 1647 | 1913 | 1985 |  |
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

Generated: 2026-09-20 04:40:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1600 --> 2100
  line "" [1647, 1698]
  line "STC (8.0+0.08s)" [1647, 1698]
  line "LTC (60.0+0.60s)" [1913, 2014]
  line "" [1985, 2074]
  line "VLTC (2m24s+1.12s)" [1985, 2074]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | 2074 | 34 | 318 | 47% | 2111 | 17% |
| 21 | LTC <sub>(60.0+0.60s)</sub> | 2014 | 34 | 312 | 50% | 2029 | 19% |
| 21 | STC <sub>(8.0+0.08s)</sub> | 1698 | 34 | 336 | 50% | 1694 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | 1985 | 25 | 566 | 48% | 2014 | 21% |
| 20 | LTC <sub>(60.0+0.60s)</sub> | 1913 | 25 | 580 | 50% | 1918 | 17% |
| 20 | STC <sub>(8.0+0.08s)</sub> | 1647 | 25 | 640 | 47% | 1675 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |