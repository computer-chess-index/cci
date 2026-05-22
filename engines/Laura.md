# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1752<sub>(+185) | 1906<sub>(+212) | 1970<sub>(+160) |  |
| 3.0.0 | 2026-04-29 | 1567<sub>(+213) | 1694<sub>(+31) | 1810<sub>(+122) |  |
| 2.0.0 | 2026-04-23 | 1354<sub>(+61) | 1663<sub>(+189) | 1688<sub>(+283) |  |
| 1.1.0 | 2026-01-26 | 1293<sub>(+new) | 1474<sub>(+new) | 1405<sub>(+new) |  |
| 1.0.0 | 2025-05-30 |  |  |  |  |
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

Generated: 2026-05-22 14:59:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1200 --> 2000
  line "STC (8.0+0.08s)" [1293, 1354, 1567, 1752]
  line "STC (8.0+0.08s)" [1293, 1354, 1567, 1752]
  line "LTC (60.0+0.60s)" [1474, 1663, 1694, 1906]
  line "VLTC (2m24s+1.12s)" [1405, 1688, 1810, 1970]
  line "VLTC (2m24s+1.12s)" [1405, 1688, 1810, 1970]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1970 | 50 | 148 | 49% | 1985 | 18% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1906 | 48 | 160 | 51% | 1902 | 16% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1752 | 51 | 152 | 54% | 1710 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1810 | 51 | 152 | 50% | 1789 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1694 | 53 | 136 | 50% | 1704 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1567 | 54 | 126 | 49% | 1575 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1688 | 56 | 98 | 53% | 1669 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1663 | 55 | 104 | 48% | 1690 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1354 | 56 | 108 | 55% | 1284 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1405 | 52 | 132 | 43% | 1580 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1474 | 51 | 134 | 43% | 1601 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1293 | 62 | 134 | 47% | 1338 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |