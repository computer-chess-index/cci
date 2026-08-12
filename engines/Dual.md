# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.2 | 2026-08-08 | 2707<sub>(+223) | 2940<sub>(+152) | 3085<sub>(+234) |  |
| 0.4.1 | 2026-07-26 | 2484<sub>(+131) | 2788<sub>(+116) | 2851<sub>(+70) |  |
| 0.4.0 | 2026-07-19 | 2353<sub>(+93) | 2672<sub>(+89) | 2781<sub>(+121) |  |
| 0.3.2 | 2026-07-06 | 2260<sub>(+new) | 2583<sub>(+new) | 2660<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1914<sub>(+226) | 2097<sub>(+242) | 2213<sub>(+291) |  |
| 0.2.8 | 2026-05-15 | 1688<sub>(+99) | 1855<sub>(+32) | 1922<sub>(+70) |  |
| 0.2.7 | 2026-05-11 | 1589 | 1823 | 1852 |  |
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

Generated: 2026-08-12 06:26:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2"]
  y-axis "Elo Rating" 1500 --> 3100
  line "STC (8.0+0.08s)" [1589, 1688, 1914, 2260, 2353, 2484, 2707]
  line "STC (8.0+0.08s)" [1589, 1688, 1914, 2260, 2353, 2484, 2707]
  line "LTC (60.0+0.60s)" [1823, 1855, 2097, 2583, 2672, 2788, 2940]
  line "VLTC (2m24s+1.12s)" [1852, 1922, 2213, 2660, 2781, 2851, 3085]
  line "VLTC (2m24s+1.12s)" [1852, 1922, 2213, 2660, 2781, 2851, 3085]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3085 | 46 | 124 | 52% | 3071 | 60% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2940 | 59 | 80 | 51% | 2934 | 51% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2707 | 62 | 84 | 55% | 2655 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2851 | 33 | 276 | 52% | 2838 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2788 | 33 | 272 | 48% | 2804 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2484 | 33 | 304 | 48% | 2502 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2781 | 35 | 244 | 53% | 2759 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2672 | 39 | 216 | 53% | 2649 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2353 | 39 | 216 | 49% | 2363 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2660 | 39 | 200 | 50% | 2654 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2583 | 44 | 174 | 54% | 2541 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2260 | 42 | 200 | 48% | 2272 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2213 | 34 | 298 | 51% | 2211 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2097 | 37 | 258 | 52% | 2079 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1914 | 35 | 288 | 51% | 1909 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1922 | 34 | 312 | 48% | 1936 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1855 | 35 | 276 | 51% | 1837 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1688 | 33 | 314 | 46% | 1717 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1852 | 32 | 334 | 47% | 1881 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1823 | 35 | 304 | 49% | 1840 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1589 | 36 | 292 | 50% | 1585 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |