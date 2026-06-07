# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1750<sub>(+184) | 1897<sub>(+204) | 1963<sub>(+155) |  |
| 3.0.0 | 2026-04-29 | 1566<sub>(+215) | 1693<sub>(+31) | 1808<sub>(+122) |  |
| 2.0.0 | 2026-04-23 | 1351<sub>(+59) | 1662<sub>(+189) | 1686<sub>(+283) |  |
| 1.1.0 | 2026-01-26 | 1292<sub>(+new) | 1473<sub>(+new) | 1403<sub>(+new) |  |
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

Generated: 2026-06-07 06:25:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1200 --> 2000
  line "STC (8.0+0.08s)" [1292, 1351, 1566, 1750]
  line "STC (8.0+0.08s)" [1292, 1351, 1566, 1750]
  line "LTC (60.0+0.60s)" [1473, 1662, 1693, 1897]
  line "VLTC (2m24s+1.12s)" [1403, 1686, 1808, 1963]
  line "VLTC (2m24s+1.12s)" [1403, 1686, 1808, 1963]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1963 | 49 | 152 | 48% | 1983 | 17% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1897 | 47 | 168 | 50% | 1899 | 15% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1750 | 50 | 156 | 54% | 1710 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1808 | 51 | 152 | 50% | 1787 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1693 | 53 | 136 | 50% | 1702 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1566 | 54 | 126 | 49% | 1574 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1686 | 56 | 98 | 53% | 1667 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1662 | 55 | 104 | 48% | 1689 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1351 | 56 | 108 | 55% | 1283 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1403 | 52 | 132 | 43% | 1578 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1473 | 51 | 134 | 43% | 1600 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1292 | 62 | 134 | 47% | 1338 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |