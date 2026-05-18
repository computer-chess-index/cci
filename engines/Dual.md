# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2.8 | 2026-05-15 | 1746<sub>(+129) | 1906<sub>(+39) | 1993<sub>(+94) |  |
| 0.2.7 | 2026-05-11 | 1617<sub>(+new) | 1867<sub>(+new) | 1899<sub>(+new) |  |
| 0.2.6 | 2024-11-29 |  |  |  |  |
| 0.2.5 | 2024-11-26 |  |  |  |  |
| 0.2.4 | 2024-11-24 |  |  |  |  |
| 0.2.3 | 2024-11-22 |  |  |  |  |
| 0.2.2 | 2024-11-22 |  |  |  |  |
| 0.2.1 | 2024-11-20 |  |  |  |  |
| 0.2.0 | 2024-11-19 |  |  |  |  |
| 0.1.0 | 2024-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.2.8" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-18 06:23:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8"]
  y-axis "Elo Rating" 1600 --> 2000
  line "STC (8.0+0.08s)" [1617, 1746]
  line "STC (8.0+0.08s)" [1617, 1746]
  line "LTC (60.0+0.60s)" [1867, 1906]
  line "VLTC (2m24s+1.12s)" [1899, 1993]
  line "VLTC (2m24s+1.12s)" [1899, 1993]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1993 | 39 | 232 | 48% | 2012 | 25% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1906 | 43 | 184 | 50% | 1904 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1746 | 37 | 234 | 46% | 1786 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1899 | 33 | 334 | 47% | 1928 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1867 | 35 | 304 | 49% | 1883 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1617 | 36 | 292 | 50% | 1613 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |