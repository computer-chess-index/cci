# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.1 | 2026-09-04 |  |  |  |  |
| 0.4.0 | 2026-08-28 | 1763<sub>(+173) | 1974<sub>(+197) | 2014<sub>(+121) |  |
| 0.3.10 | 2026-08-22 | 1590<sub>(-3) | 1777<sub>(+13) | 1893<sub>(+15) |  |
| 0.3.9 | 2026-08-04 | 1593<sub>(+136) | 1764<sub>(+172) | 1878<sub>(+223) |  |
| 0.3.8 | 2026-08-01 | 1457<sub>(+69) | 1592<sub>(-17) | 1655<sub>(+1) |  |
| 0.3.7 | 2026-07-31 | 1388 | 1609 | 1654 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arche+<version>&body=###%20Engine%20name%0AArche%0A%0A###%20Version%0A0.4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:22:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9", "0.3.10", "0.4.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "" [1388, 1457, 1593, 1590, 1763]
  line "STC (8.0+0.08s)" [1388, 1457, 1593, 1590, 1763]
  line "LTC (60.0+0.60s)" [1609, 1592, 1764, 1777, 1974]
  line "" [1654, 1655, 1878, 1893, 2014]
  line "VLTC (2m24s+1.12s)" [1654, 1655, 1878, 1893, 2014]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2014 | 39 | 210 | 49% | 2025 | 33% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 1974 | 41 | 208 | 51% | 1960 | 21% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1763 | 38 | 244 | 50% | 1767 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.10 | VLTC <sub>(2m24s+1.12s)</sub> | 1893 | 38 | 242 | 50% | 1889 | 25% |
| 0.3.10 | LTC <sub>(60.0+0.60s)</sub> | 1777 | 37 | 260 | 51% | 1764 | 20% |
| 0.3.10 | STC <sub>(8.0+0.08s)</sub> | 1590 | 36 | 280 | 46% | 1625 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | 1878 | 33 | 334 | 55% | 1824 | 18% |
| 0.3.9 | LTC <sub>(60.0+0.60s)</sub> | 1764 | 39 | 248 | 50% | 1767 | 16% |
| 0.3.9 | STC <sub>(8.0+0.08s)</sub> | 1593 | 34 | 302 | 51% | 1573 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1655 | 44 | 178 | 52% | 1638 | 23% |
| 0.3.8 | LTC <sub>(60.0+0.60s)</sub> | 1592 | 54 | 120 | 50% | 1590 | 23% |
| 0.3.8 | STC <sub>(8.0+0.08s)</sub> | 1457 | 48 | 156 | 53% | 1426 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1654 | 39 | 246 | 47% | 1706 | 20% |
| 0.3.7 | LTC <sub>(60.0+0.60s)</sub> | 1609 | 37 | 272 | 47% | 1659 | 21% |
| 0.3.7 | STC <sub>(8.0+0.08s)</sub> | 1388 | 37 | 290 | 43% | 1477 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |