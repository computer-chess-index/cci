# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1925<sub>(0) | 2080<sub>(0) | 2217<sub>(0) |  |
| 0.2.9 | 2026-05-19 | 1925<sub>(+232) | 2080<sub>(+220) | 2217<sub>(+289) |  |
| 0.2.8 | 2026-05-15 | 1693<sub>(+100) | 1860<sub>(+31) | 1928<sub>(+70) |  |
| 0.2.7 | 2026-05-11 | 1593<sub>(+new) | 1829<sub>(+new) | 1858<sub>(+new) |  |
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

Generated: 2026-06-07 06:23:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.2.9"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1593, 1693, 1925, 1925]
  line "STC (8.0+0.08s)" [1593, 1693, 1925, 1925]
  line "LTC (60.0+0.60s)" [1829, 1860, 2080, 2080]
  line "VLTC (2m24s+1.12s)" [1858, 1928, 2217, 2217]
  line "VLTC (2m24s+1.12s)" [1858, 1928, 2217, 2217]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 51 | 134 | 50% | 2199 | 22% |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2217 | 42 | 194 | 51% | 2209 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2088 | 65 | 76 | 52% | 2070 | 33% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2080 | 43 | 184 | 50% | 2080 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1910 | 52 | 124 | 52% | 1891 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1925 | 41 | 216 | 51% | 1913 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1928 | 34 | 312 | 48% | 1941 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1860 | 35 | 276 | 51% | 1843 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1693 | 33 | 314 | 46% | 1723 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1858 | 32 | 334 | 47% | 1887 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1829 | 35 | 304 | 49% | 1845 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1593 | 36 | 292 | 50% | 1589 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |