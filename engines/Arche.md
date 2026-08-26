# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.10 | 2026-08-22 | 1593<sub>(0) | 1783<sub>(+19) | 1894<sub>(+16) |  |
| 0.3.9 | 2026-08-04 | 1593<sub>(+136) | 1764<sub>(+171) | 1878<sub>(+223) |  |
| 0.3.8 | 2026-08-01 | 1457<sub>(+69) | 1593<sub>(-16) | 1655<sub>(+1) |  |
| 0.3.7 | 2026-07-31 | 1388 | 1609 | 1654 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arche+<version>&body=###%20Engine%20name%0AArche%0A%0A###%20Version%0A0.3.10" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:22:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9", "0.3.10"]
  y-axis "Elo Rating" 1300 --> 1900
  line "STC (8.0+0.08s)" [1388, 1457, 1593, 1593]
  line "STC (8.0+0.08s)" [1388, 1457, 1593, 1593]
  line "LTC (60.0+0.60s)" [1609, 1593, 1764, 1783]
  line "VLTC (2m24s+1.12s)" [1654, 1655, 1878, 1894]
  line "VLTC (2m24s+1.12s)" [1654, 1655, 1878, 1894]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.10 | VLTC <sub>(2m24s+1.12s)</sub> | 1894 | 39 | 220 | 50% | 1893 | 26% |
| 0.3.10 | LTC <sub>(60.0+0.60s)</sub> | 1783 | 38 | 248 | 52% | 1764 | 21% |
| 0.3.10 | STC <sub>(8.0+0.08s)</sub> | 1593 | 37 | 258 | 47% | 1625 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | 1878 | 33 | 334 | 55% | 1824 | 18% |
| 0.3.9 | LTC <sub>(60.0+0.60s)</sub> | 1764 | 39 | 248 | 50% | 1767 | 16% |
| 0.3.9 | STC <sub>(8.0+0.08s)</sub> | 1593 | 34 | 302 | 51% | 1573 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1655 | 44 | 178 | 52% | 1638 | 23% |
| 0.3.8 | LTC <sub>(60.0+0.60s)</sub> | 1593 | 54 | 120 | 50% | 1592 | 23% |
| 0.3.8 | STC <sub>(8.0+0.08s)</sub> | 1457 | 48 | 156 | 53% | 1426 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1654 | 39 | 246 | 47% | 1708 | 20% |
| 0.3.7 | LTC <sub>(60.0+0.60s)</sub> | 1609 | 37 | 272 | 47% | 1659 | 21% |
| 0.3.7 | STC <sub>(8.0+0.08s)</sub> | 1388 | 37 | 290 | 43% | 1477 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |