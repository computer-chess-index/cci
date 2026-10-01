# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-09-27 |  |  |  |  |
| 0.4.6 | 2026-09-23 |  |  |  |  |
| 0.4.5 | 2026-09-19 |  |  |  |  |
| 0.4.4 | 2026-09-14 |  |  |  |  |
| 0.4.3 | 2026-09-12 |  |  |  |  |
| 0.4.2 | 2026-09-07 |  |  |  |  |
| 0.4.1 | 2026-09-04 |  |  |  |  |
| 0.4.0 | 2026-08-28 | 1771<sub>(+177) | 1987<sub>(+208) | 2012<sub>(+115) |  |
| 0.3.10 | 2026-08-22 | 1594<sub>(-3) | 1779<sub>(+10) | 1897<sub>(+16) |  |
| 0.3.9 | 2026-08-04 | 1597<sub>(+138) | 1769<sub>(+173) | 1881<sub>(+222) |  |
| 0.3.8 | 2026-08-01 | 1459<sub>(+68) | 1596<sub>(-16) | 1659<sub>(+1) |  |
| 0.3.7 | 2026-07-31 | 1391 | 1612 | 1658 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arche+<version>&body=###%20Engine%20name%0AArche%0A%0A###%20Version%0A0.4.7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-01 04:35:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9", "0.3.10", "0.4.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "" [1391, 1459, 1597, 1594, 1771]
  line "STC (8.0+0.08s)" [1391, 1459, 1597, 1594, 1771]
  line "LTC (60.0+0.60s)" [1612, 1596, 1769, 1779, 1987]
  line "" [1658, 1659, 1881, 1897, 2012]
  line "VLTC (2m24s+1.12s)" [1658, 1659, 1881, 1897, 2012]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2012 | 37 | 232 | 48% | 2024 | 33% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 1987 | 39 | 228 | 52% | 1964 | 22% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1771 | 37 | 268 | 49% | 1778 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.10 | VLTC <sub>(2m24s+1.12s)</sub> | 1897 | 38 | 242 | 50% | 1893 | 25% |
| 0.3.10 | LTC <sub>(60.0+0.60s)</sub> | 1779 | 37 | 260 | 51% | 1767 | 20% |
| 0.3.10 | STC <sub>(8.0+0.08s)</sub> | 1594 | 36 | 280 | 46% | 1629 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | 1881 | 33 | 334 | 55% | 1827 | 18% |
| 0.3.9 | LTC <sub>(60.0+0.60s)</sub> | 1769 | 38 | 248 | 50% | 1771 | 16% |
| 0.3.9 | STC <sub>(8.0+0.08s)</sub> | 1597 | 34 | 302 | 51% | 1577 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1659 | 44 | 178 | 52% | 1640 | 23% |
| 0.3.8 | LTC <sub>(60.0+0.60s)</sub> | 1596 | 54 | 120 | 50% | 1593 | 23% |
| 0.3.8 | STC <sub>(8.0+0.08s)</sub> | 1459 | 48 | 156 | 53% | 1428 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1658 | 39 | 246 | 47% | 1710 | 20% |
| 0.3.7 | LTC <sub>(60.0+0.60s)</sub> | 1612 | 37 | 272 | 47% | 1663 | 21% |
| 0.3.7 | STC <sub>(8.0+0.08s)</sub> | 1391 | 37 | 290 | 43% | 1481 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |