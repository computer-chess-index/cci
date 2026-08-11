# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.2 | 2026-08-08 | 2703<sub>(+216) | 2938<sub>(+148) | 3081<sub>(+227) |  |
| 0.4.1 | 2026-07-26 | 2487<sub>(+133) | 2790<sub>(+116) | 2854<sub>(+72) |  |
| 0.4.0 | 2026-07-19 | 2354<sub>(+93) | 2674<sub>(+89) | 2782<sub>(+120) |  |
| 0.3.2 | 2026-07-06 | 2261<sub>(+new) | 2585<sub>(+new) | 2662<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1916<sub>(+227) | 2097<sub>(+241) | 2214<sub>(+290) |  |
| 0.2.8 | 2026-05-15 | 1689<sub>(+100) | 1856<sub>(+32) | 1924<sub>(+72) |  |
| 0.2.7 | 2026-05-11 | 1589 | 1824 | 1852 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.4.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-11 06:24:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2"]
  y-axis "Elo Rating" 1500 --> 3100
  line "STC (8.0+0.08s)" [1589, 1689, 1916, 2261, 2354, 2487, 2703]
  line "STC (8.0+0.08s)" [1589, 1689, 1916, 2261, 2354, 2487, 2703]
  line "LTC (60.0+0.60s)" [1824, 1856, 2097, 2585, 2674, 2790, 2938]
  line "VLTC (2m24s+1.12s)" [1852, 1924, 2214, 2662, 2782, 2854, 3081]
  line "VLTC (2m24s+1.12s)" [1852, 1924, 2214, 2662, 2782, 2854, 3081]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3081 | 47 | 120 | 51% | 3073 | 60% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 61 | 76 | 50% | 2935 | 50% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2703 | 63 | 80 | 55% | 2655 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2854 | 33 | 276 | 52% | 2839 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2790 | 33 | 272 | 48% | 2805 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2487 | 33 | 304 | 48% | 2504 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2782 | 35 | 244 | 53% | 2761 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2674 | 39 | 216 | 53% | 2650 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2354 | 39 | 216 | 49% | 2364 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2662 | 39 | 200 | 50% | 2657 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2585 | 44 | 174 | 54% | 2543 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2261 | 42 | 200 | 48% | 2273 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2214 | 34 | 298 | 51% | 2211 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2097 | 37 | 258 | 52% | 2080 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1916 | 35 | 288 | 51% | 1909 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1924 | 34 | 312 | 48% | 1937 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1856 | 35 | 276 | 51% | 1837 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1689 | 33 | 314 | 46% | 1719 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1852 | 32 | 334 | 47% | 1881 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1824 | 35 | 304 | 49% | 1840 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1589 | 36 | 292 | 50% | 1585 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |