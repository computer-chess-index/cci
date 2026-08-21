# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1731<sub>(+164) | 1898<sub>(+204) | 1985<sub>(+177) |  |
| 3.0.0 | 2026-04-29 | 1567<sub>(+212) | 1694<sub>(+32) | 1808<sub>(+122) |  |
| 2.0.0 | 2026-04-23 | 1355<sub>(+59) | 1662<sub>(+186) | 1686<sub>(+281) |  |
| 1.1.0 | 2026-01-26 | 1296 | 1476 | 1405 |  |
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

Generated: 2026-08-21 06:27:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1200 --> 2000
  line "STC (8.0+0.08s)" [1296, 1355, 1567, 1731]
  line "STC (8.0+0.08s)" [1296, 1355, 1567, 1731]
  line "LTC (60.0+0.60s)" [1476, 1662, 1694, 1898]
  line "VLTC (2m24s+1.12s)" [1405, 1686, 1808, 1985]
  line "VLTC (2m24s+1.12s)" [1405, 1686, 1808, 1985]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1985 | 43 | 198 | 50% | 1987 | 18% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1898 | 42 | 216 | 50% | 1899 | 15% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1731 | 42 | 224 | 51% | 1720 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1808 | 51 | 152 | 50% | 1787 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1694 | 53 | 136 | 50% | 1702 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1567 | 54 | 126 | 49% | 1575 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1686 | 56 | 98 | 53% | 1667 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1662 | 55 | 104 | 48% | 1689 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1355 | 56 | 108 | 55% | 1285 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1405 | 52 | 132 | 43% | 1581 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1476 | 51 | 134 | 43% | 1602 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1296 | 62 | 134 | 47% | 1341 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |