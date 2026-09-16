# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.4 | 2026-09-14 |  |  |  |  |
| 0.4.3 | 2026-09-12 |  |  |  |  |
| 0.4.2 | 2026-09-07 |  |  |  |  |
| 0.4.1 | 2026-09-04 |  |  |  |  |
| 0.4.0 | 2026-08-28 | 1771<sub>(+179) | 1982<sub>(+205) | 2010<sub>(+115) |  |
| 0.3.10 | 2026-08-22 | 1592<sub>(-2) | 1777<sub>(+11) | 1895<sub>(+16) |  |
| 0.3.9 | 2026-08-04 | 1594<sub>(+137) | 1766<sub>(+173) | 1879<sub>(+223) |  |
| 0.3.8 | 2026-08-01 | 1457<sub>(+69) | 1593<sub>(-16) | 1656<sub>(+1) |  |
| 0.3.7 | 2026-07-31 | 1388 | 1609 | 1655 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arche+<version>&body=###%20Engine%20name%0AArche%0A%0A###%20Version%0A0.4.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:35:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9", "0.3.10", "0.4.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "" [1388, 1457, 1594, 1592, 1771]
  line "STC (8.0+0.08s)" [1388, 1457, 1594, 1592, 1771]
  line "LTC (60.0+0.60s)" [1609, 1593, 1766, 1777, 1982]
  line "" [1655, 1656, 1879, 1895, 2010]
  line "VLTC (2m24s+1.12s)" [1655, 1656, 1879, 1895, 2010]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2010 | 37 | 232 | 48% | 2022 | 33% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 1982 | 40 | 220 | 52% | 1959 | 21% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1771 | 37 | 264 | 50% | 1770 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.10 | VLTC <sub>(2m24s+1.12s)</sub> | 1895 | 38 | 242 | 50% | 1890 | 25% |
| 0.3.10 | LTC <sub>(60.0+0.60s)</sub> | 1777 | 37 | 260 | 51% | 1766 | 20% |
| 0.3.10 | STC <sub>(8.0+0.08s)</sub> | 1592 | 36 | 280 | 46% | 1627 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | 1879 | 33 | 334 | 55% | 1825 | 18% |
| 0.3.9 | LTC <sub>(60.0+0.60s)</sub> | 1766 | 38 | 248 | 50% | 1769 | 16% |
| 0.3.9 | STC <sub>(8.0+0.08s)</sub> | 1594 | 34 | 302 | 51% | 1574 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1656 | 44 | 178 | 52% | 1638 | 23% |
| 0.3.8 | LTC <sub>(60.0+0.60s)</sub> | 1593 | 54 | 120 | 50% | 1590 | 23% |
| 0.3.8 | STC <sub>(8.0+0.08s)</sub> | 1457 | 48 | 156 | 53% | 1426 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1655 | 39 | 246 | 47% | 1708 | 20% |
| 0.3.7 | LTC <sub>(60.0+0.60s)</sub> | 1609 | 37 | 272 | 47% | 1661 | 21% |
| 0.3.7 | STC <sub>(8.0+0.08s)</sub> | 1388 | 37 | 290 | 43% | 1478 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |