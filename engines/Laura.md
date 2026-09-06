# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1731<sub>(+161) | 1908<sub>(+211) | 1976<sub>(+164) |  |
| 3.0.0 | 2026-04-29 | 1570<sub>(+212) | 1697<sub>(+32) | 1812<sub>(+123) |  |
| 2.0.0 | 2026-04-23 | 1358<sub>(+59) | 1665<sub>(+188) | 1689<sub>(+281) |  |
| 1.1.0 | 2026-01-26 | 1299 | 1477 | 1408 |  |
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

Generated: 2026-09-06 06:25:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1200 --> 2000
  line "" [1299, 1358, 1570, 1731]
  line "STC (8.0+0.08s)" [1299, 1358, 1570, 1731]
  line "LTC (60.0+0.60s)" [1477, 1665, 1697, 1908]
  line "" [1408, 1689, 1812, 1976]
  line "VLTC (2m24s+1.12s)" [1408, 1689, 1812, 1976]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1976 | 40 | 230 | 49% | 1991 | 20% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1908 | 38 | 256 | 50% | 1908 | 14% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1731 | 39 | 260 | 51% | 1719 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1812 | 51 | 152 | 50% | 1791 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1697 | 53 | 136 | 50% | 1705 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1570 | 54 | 126 | 49% | 1578 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1689 | 56 | 98 | 53% | 1670 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1665 | 55 | 104 | 48% | 1692 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1358 | 56 | 108 | 55% | 1288 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1408 | 52 | 132 | 43% | 1584 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1477 | 51 | 134 | 43% | 1605 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1299 | 62 | 134 | 47% | 1342 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |