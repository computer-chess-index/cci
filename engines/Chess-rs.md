# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1690<sub>(+15) | 1918<sub>(+60) | 2021<sub>(+42) |  |
| 0.6.0 | 2025-11-11 | 1675<sub>(+new) | 1858<sub>(+new) | 1979<sub>(+new) |  |
| 0.5.1 | 2025-11-04 |  |  |  | no public available .exe |
| 0.5.0 | 2025-11-03 | 1577<sub>(+new) | 1789<sub>(+new) | 1886<sub>(+new) |  |
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

Generated: 2026-05-22 06:23:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "STC (8.0+0.08s)" [1577, 1675, 1690]
  line "STC (8.0+0.08s)" [1577, 1675, 1690]
  line "LTC (60.0+0.60s)" [1789, 1858, 1918]
  line "VLTC (2m24s+1.12s)" [1886, 1979, 2021]
  line "VLTC (2m24s+1.12s)" [1886, 1979, 2021]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2021 | 26 | 528 | 49% | 2032 | 21% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1918 | 25 | 558 | 49% | 1925 | 23% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1690 | 25 | 598 | 49% | 1690 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1979 | 44 | 184 | 49% | 1989 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1858 | 50 | 146 | 50% | 1860 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1675 | 54 | 124 | 50% | 1674 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1886 | 49 | 148 | 49% | 1895 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1789 | 46 | 176 | 47% | 1824 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1577 | 49 | 156 | 47% | 1605 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |