# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1705<sub>(+15) | 1932<sub>(+60) | 2043<sub>(+48) |  |
| 0.6.0 | 2025-11-11 | 1690<sub>(+new) | 1872<sub>(+new) | 1995<sub>(+new) |  |
| 0.5.1 | 2025-11-04 |  |  |  | no public available .exe |
| 0.5.0 | 2025-11-03 | 1590<sub>(+new) | 1804<sub>(+new) | 1901<sub>(+new) |  |
| 0.4.2 | 2025-10-13 |  |  |  |  |
| 0.4.1 | 2025-10-09 |  |  |  |  |
| 0.4.0 | 2025-10-09 |  |  |  |  |
| 0.3.0 | 2025-10-05 |  |  |  |  |
| 0.2.0 | 2023-03-12 |  |  |  |  |
| 0.1.1 | 2022-12-03 |  |  |  |  |
| 0.1.0 | 2022-12-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess-rs+<version>&body=###%20Engine%20name%0AChess-rs%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:23:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "STC (8.0+0.08s)" [1590, 1690, 1705]
  line "STC (8.0+0.08s)" [1590, 1690, 1705]
  line "LTC (60.0+0.60s)" [1804, 1872, 1932]
  line "VLTC (2m24s+1.12s)" [1901, 1995, 2043]
  line "VLTC (2m24s+1.12s)" [1901, 1995, 2043]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2043 | 26 | 512 | 49% | 2047 | 21% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1932 | 25 | 550 | 49% | 1940 | 23% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1705 | 25 | 586 | 49% | 1708 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1995 | 44 | 184 | 49% | 2003 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1872 | 50 | 146 | 50% | 1875 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1690 | 54 | 124 | 50% | 1688 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1901 | 49 | 148 | 49% | 1910 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1804 | 46 | 176 | 47% | 1839 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1590 | 49 | 156 | 47% | 1619 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |