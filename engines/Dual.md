# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1912<sub>(0) | 2091<sub>(0) | 2215<sub>(0) |  |
| 0.2.9 | 2026-05-19 | 1912<sub>(+222) | 2091<sub>(+232) | 2215<sub>(+290) |  |
| 0.2.8 | 2026-05-15 | 1690<sub>(+100) | 1859<sub>(+32) | 1925<sub>(+70) |  |
| 0.2.7 | 2026-05-11 | 1590<sub>(+new) | 1827<sub>(+new) | 1855<sub>(+new) |  |
| 0.2.6 | 2024-11-29 |  |  |  |  |
| 0.2.5 | 2024-11-26 |  |  |  |  |
| 0.2.4 | 2024-11-24 |  |  |  |  |
| 0.2.3 | 2024-11-22 |  |  |  |  |
| 0.2.2 | 2024-11-22 |  |  |  |  |
| 0.2.1 | 2024-11-20 |  |  |  |  |
| 0.2.0 | 2024-11-19 |  |  |  |  |
| 0.1.0 | 2024-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-09 06:24:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.2.9"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1590, 1690, 1912, 1912]
  line "STC (8.0+0.08s)" [1590, 1690, 1912, 1912]
  line "LTC (60.0+0.60s)" [1827, 1859, 2091, 2091]
  line "VLTC (2m24s+1.12s)" [1855, 1925, 2215, 2215]
  line "VLTC (2m24s+1.12s)" [1855, 1925, 2215, 2215]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 51 | 134 | 50% | 2199 | 22% |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2215 | 40 | 222 | 51% | 2206 | 22% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2091 | 41 | 206 | 51% | 2076 | 25% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2088 | 65 | 76 | 52% | 2070 | 33% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1910 | 52 | 124 | 52% | 1891 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1912 | 39 | 240 | 51% | 1908 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1925 | 34 | 312 | 48% | 1939 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1859 | 35 | 276 | 51% | 1840 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1690 | 33 | 314 | 46% | 1720 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1855 | 32 | 334 | 47% | 1885 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1827 | 35 | 304 | 49% | 1843 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1590 | 36 | 292 | 50% | 1586 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |