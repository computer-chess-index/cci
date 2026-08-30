# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-28 | 1771<sub>(+182) | 1989<sub>(+214) | 2005<sub>(+112) |  |
| 0.3.10 | 2026-08-22 | 1589<sub>(-4) | 1775<sub>(+11) | 1893<sub>(+16) |  |
| 0.3.9 | 2026-08-04 | 1593<sub>(+136) | 1764<sub>(+172) | 1877<sub>(+222) |  |
| 0.3.8 | 2026-08-01 | 1457<sub>(+69) | 1592<sub>(-16) | 1655<sub>(+1) |  |
| 0.3.7 | 2026-07-31 | 1388 | 1608 | 1654 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arche+<version>&body=###%20Engine%20name%0AArche%0A%0A###%20Version%0A0.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 13:06:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9", "0.3.10", "0.4.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "" [1388, 1457, 1593, 1589, 1771]
  line "STC (8.0+0.08s)" [1388, 1457, 1593, 1589, 1771]
  line "LTC (60.0+0.60s)" [1608, 1592, 1764, 1775, 1989]
  line "" [1654, 1655, 1877, 1893, 2005]
  line "VLTC (2m24s+1.12s)" [1654, 1655, 1877, 1893, 2005]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2005 | 48 | 136 | 47% | 2026 | 35% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 1989 | 55 | 120 | 55% | 1939 | 20% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1771 | 53 | 128 | 52% | 1754 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.10 | VLTC <sub>(2m24s+1.12s)</sub> | 1893 | 38 | 242 | 50% | 1889 | 25% |
| 0.3.10 | LTC <sub>(60.0+0.60s)</sub> | 1775 | 37 | 260 | 51% | 1764 | 20% |
| 0.3.10 | STC <sub>(8.0+0.08s)</sub> | 1589 | 36 | 280 | 46% | 1624 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | 1877 | 33 | 334 | 55% | 1824 | 18% |
| 0.3.9 | LTC <sub>(60.0+0.60s)</sub> | 1764 | 38 | 248 | 50% | 1767 | 16% |
| 0.3.9 | STC <sub>(8.0+0.08s)</sub> | 1593 | 34 | 302 | 51% | 1573 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1655 | 44 | 178 | 52% | 1636 | 23% |
| 0.3.8 | LTC <sub>(60.0+0.60s)</sub> | 1592 | 54 | 120 | 50% | 1590 | 23% |
| 0.3.8 | STC <sub>(8.0+0.08s)</sub> | 1457 | 48 | 156 | 53% | 1426 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1654 | 39 | 246 | 47% | 1706 | 20% |
| 0.3.7 | LTC <sub>(60.0+0.60s)</sub> | 1608 | 37 | 272 | 47% | 1658 | 21% |
| 0.3.7 | STC <sub>(8.0+0.08s)</sub> | 1388 | 37 | 290 | 43% | 1477 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |