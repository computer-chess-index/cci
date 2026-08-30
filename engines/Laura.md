# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1731<sub>(+162) | 1906<sub>(+209) | 1975<sub>(+165) |  |
| 3.0.0 | 2026-04-29 | 1569<sub>(+212) | 1697<sub>(+32) | 1810<sub>(+121) |  |
| 2.0.0 | 2026-04-23 | 1357<sub>(+60) | 1665<sub>(+188) | 1689<sub>(+281) |  |
| 1.1.0 | 2026-01-26 | 1297 | 1477 | 1408 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Laura+<version>&body=###%20Engine%20name%0ALaura%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 15:50:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1200 --> 2000
  line "" [1297, 1357, 1569, 1731]
  line "STC (8.0+0.08s)" [1297, 1357, 1569, 1731]
  line "LTC (60.0+0.60s)" [1477, 1665, 1697, 1906]
  line "" [1408, 1689, 1810, 1975]
  line "VLTC (2m24s+1.12s)" [1408, 1689, 1810, 1975]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1975 | 41 | 218 | 49% | 1990 | 19% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1906 | 40 | 240 | 50% | 1906 | 15% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1731 | 39 | 252 | 51% | 1719 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1810 | 51 | 152 | 50% | 1791 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1697 | 53 | 136 | 50% | 1705 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1569 | 54 | 126 | 49% | 1578 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1689 | 56 | 98 | 53% | 1669 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1665 | 55 | 104 | 48% | 1692 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1357 | 56 | 108 | 55% | 1287 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1408 | 52 | 132 | 43% | 1584 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1477 | 51 | 134 | 43% | 1604 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1297 | 62 | 134 | 47% | 1342 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |