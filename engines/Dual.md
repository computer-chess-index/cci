# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-07-19 | 2369<sub>(+106) | 2674<sub>(+89) | 2780<sub>(+118) |  |
| 0.3.2 | 2026-07-06 | 2263<sub>(+new) | 2585<sub>(+new) | 2662<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1913<sub>(+225) | 2095<sub>(+240) | 2213<sub>(+291) |  |
| 0.2.8 | 2026-05-15 | 1688<sub>(+100) | 1855<sub>(+32) | 1922<sub>(+71) |  |
| 0.2.7 | 2026-05-11 | 1588<sub>(+new) | 1823<sub>(+new) | 1851<sub>(+new) |  |
| 0.2.6 | 2024-11-29 |  |  |  |  |
| 0.2.5 | 2024-11-26 |  |  |  |  |
| 0.2.4 | 2024-11-24 |  |  |  |  |
| 0.2.3 | 2024-11-22 |  |  |  |  |
| 0.2.2 | 2024-11-22 |  |  |  |  |
| 0.2.1 | 2024-11-20 |  |  |  |  |
| 0.2.0 | 2024-11-19 |  |  |  |  |
| 0.1.0 | 2024-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-24 06:24:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1588, 1688, 1913, 2263, 2369]
  line "STC (8.0+0.08s)" [1588, 1688, 1913, 2263, 2369]
  line "LTC (60.0+0.60s)" [1823, 1855, 2095, 2585, 2674]
  line "VLTC (2m24s+1.12s)" [1851, 1922, 2213, 2662, 2780]
  line "VLTC (2m24s+1.12s)" [1851, 1922, 2213, 2662, 2780]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2780 | 39 | 196 | 54% | 2750 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2674 | 40 | 208 | 53% | 2649 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2369 | 41 | 196 | 50% | 2368 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2662 | 39 | 200 | 50% | 2657 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2585 | 44 | 174 | 54% | 2543 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2263 | 42 | 200 | 48% | 2275 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2213 | 34 | 298 | 51% | 2211 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2095 | 37 | 258 | 52% | 2079 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1913 | 35 | 288 | 51% | 1906 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1922 | 34 | 312 | 48% | 1936 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1855 | 35 | 276 | 51% | 1836 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1688 | 33 | 314 | 46% | 1717 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1851 | 32 | 334 | 47% | 1879 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1823 | 35 | 304 | 49% | 1839 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1588 | 36 | 292 | 50% | 1584 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |