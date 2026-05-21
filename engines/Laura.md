# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1752<sub>(+183) | 1913<sub>(+217) | 1966<sub>(+154) |  |
| 3.0.0 | 2026-04-29 | 1569<sub>(+212) | 1696<sub>(+31) | 1812<sub>(+123) |  |
| 2.0.0 | 2026-04-23 | 1357<sub>(+60) | 1665<sub>(+189) | 1689<sub>(+281) |  |
| 1.1.0 | 2026-01-26 | 1297<sub>(+new) | 1476<sub>(+new) | 1408<sub>(+new) |  |
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

Generated: 2026-05-21 06:25:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1200 --> 2000
  line "STC (8.0+0.08s)" [1297, 1357, 1569, 1752]
  line "STC (8.0+0.08s)" [1297, 1357, 1569, 1752]
  line "LTC (60.0+0.60s)" [1476, 1665, 1696, 1913]
  line "VLTC (2m24s+1.12s)" [1408, 1689, 1812, 1966]
  line "VLTC (2m24s+1.12s)" [1408, 1689, 1812, 1966]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1966 | 51 | 140 | 48% | 1987 | 17% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1913 | 49 | 156 | 51% | 1905 | 16% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1752 | 52 | 148 | 55% | 1708 | 12% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1812 | 51 | 152 | 50% | 1790 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1696 | 53 | 136 | 50% | 1705 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1569 | 54 | 126 | 49% | 1577 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1689 | 56 | 98 | 53% | 1670 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1665 | 55 | 104 | 48% | 1692 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1357 | 56 | 108 | 55% | 1287 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1408 | 52 | 132 | 43% | 1582 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1476 | 51 | 134 | 43% | 1602 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1297 | 62 | 134 | 47% | 1341 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |