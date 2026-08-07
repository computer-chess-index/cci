# Engine: Arche

Author: Andrew Wright

Home: https://github.com/aywrite/arche

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.9 | 2026-08-04 | 1580<sub>(+134) | 1791<sub>(+206) | 1872<sub>(+224) |  |
| 0.3.8 | 2026-08-01 | 1446<sub>(+69) | 1585<sub>(-17) | 1648<sub>(+1) |  |
| 0.3.7 | 2026-07-31 | 1377 | 1602 | 1647 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arche+<version>&body=###%20Engine%20name%0AArche%0A%0A###%20Version%0A0.3.9" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-07 08:38:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.7", "0.3.8", "0.3.9"]
  y-axis "Elo Rating" 1300 --> 1900
  line "STC (8.0+0.08s)" [1377, 1446, 1580]
  line "STC (8.0+0.08s)" [1377, 1446, 1580]
  line "LTC (60.0+0.60s)" [1602, 1585, 1791]
  line "VLTC (2m24s+1.12s)" [1647, 1648, 1872]
  line "VLTC (2m24s+1.12s)" [1647, 1648, 1872]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.9 | VLTC <sub>(2m24s+1.12s)</sub> | 1872 | 37 | 270 | 57% | 1801 | 18% |
| 0.3.9 | LTC <sub>(60.0+0.60s)</sub> | 1791 | 45 | 184 | 54% | 1752 | 16% |
| 0.3.9 | STC <sub>(8.0+0.08s)</sub> | 1581 | 40 | 228 | 51% | 1573 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1648 | 44 | 178 | 52% | 1629 | 23% |
| 0.3.8 | LTC <sub>(60.0+0.60s)</sub> | 1585 | 54 | 120 | 50% | 1584 | 23% |
| 0.3.8 | STC <sub>(8.0+0.08s)</sub> | 1446 | 48 | 156 | 53% | 1415 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1647 | 39 | 246 | 47% | 1701 | 20% |
| 0.3.7 | LTC <sub>(60.0+0.60s)</sub> | 1602 | 37 | 272 | 47% | 1652 | 21% |
| 0.3.7 | STC <sub>(8.0+0.08s)</sub> | 1377 | 37 | 290 | 43% | 1467 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |