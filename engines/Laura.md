# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1764<sub>(+170) | 1960<sub>(+233) | 2039<sub>(+187) |  |
| 3.0.0 | 2026-04-29 | 1594<sub>(+221) | 1727<sub>(+31) | 1852<sub>(+132) |  |
| 2.0.0 | 2026-04-23 | 1373<sub>(+59) | 1696<sub>(+199) | 1720<sub>(+294) |  |
| 1.1.0 | 2026-01-26 | 1314<sub>(+new) | 1497<sub>(+new) | 1426<sub>(+new) |  |
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

Generated: 2026-05-17 06:25:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1300 --> 2100
  line "STC (8.0+0.08s)" [1314, 1373, 1594, 1764]
  line "STC (8.0+0.08s)" [1314, 1373, 1594, 1764]
  line "LTC (60.0+0.60s)" [1497, 1696, 1727, 1960]
  line "VLTC (2m24s+1.12s)" [1426, 1720, 1852, 2039]
  line "VLTC (2m24s+1.12s)" [1426, 1720, 1852, 2039]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2039 | 53 | 132 | 50% | 2040 | 18% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1960 | 50 | 152 | 51% | 1949 | 16% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1764 | 54 | 140 | 53% | 1739 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1852 | 52 | 152 | 50% | 1831 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1727 | 53 | 136 | 50% | 1736 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1594 | 54 | 126 | 49% | 1602 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1720 | 56 | 98 | 53% | 1700 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1696 | 55 | 104 | 48% | 1723 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1373 | 56 | 108 | 55% | 1301 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1426 | 53 | 132 | 43% | 1607 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1497 | 51 | 134 | 43% | 1628 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1314 | 62 | 134 | 47% | 1362 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |