# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.2 | 2026-08-08 | 2705<sub>(+220) | 2938<sub>(+149) | 3087<sub>(+234) |  |
| 0.4.1 | 2026-07-26 | 2485<sub>(+131) | 2789<sub>(+116) | 2853<sub>(+72) |  |
| 0.4.0 | 2026-07-19 | 2354<sub>(+93) | 2673<sub>(+89) | 2781<sub>(+120) |  |
| 0.3.2 | 2026-07-06 | 2261<sub>(+new) | 2584<sub>(+new) | 2661<sub>(+new) |  |
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

Generated: 2026-08-15 06:24:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2"]
  y-axis "Elo Rating" 1500 --> 3100
  line "STC (8.0+0.08s)" [1589, 1689, 1916, 2261, 2354, 2485, 2705]
  line "STC (8.0+0.08s)" [1589, 1689, 1916, 2261, 2354, 2485, 2705]
  line "LTC (60.0+0.60s)" [1824, 1856, 2097, 2584, 2673, 2789, 2938]
  line "VLTC (2m24s+1.12s)" [1852, 1924, 2214, 2661, 2781, 2853, 3087]
  line "VLTC (2m24s+1.12s)" [1852, 1924, 2214, 2661, 2781, 2853, 3087]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3087 | 45 | 130 | 52% | 3071 | 59% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 54 | 100 | 50% | 2936 | 48% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2705 | 62 | 84 | 55% | 2655 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2853 | 33 | 276 | 52% | 2839 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2789 | 33 | 272 | 48% | 2805 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2485 | 33 | 304 | 48% | 2503 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2781 | 35 | 244 | 53% | 2759 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2673 | 39 | 216 | 53% | 2650 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2354 | 39 | 216 | 49% | 2364 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2661 | 39 | 200 | 50% | 2655 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2584 | 44 | 174 | 54% | 2542 | 30% |
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
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1589 | 36 | 292 | 50% | 1586 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |