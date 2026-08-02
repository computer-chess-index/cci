# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.1 | 2026-07-26 | 2493<sub>(+137) | 2796<sub>(+122) | 2840<sub>(+56) |  |
| 0.4.0 | 2026-07-19 | 2356<sub>(+93) | 2674<sub>(+87) | 2784<sub>(+122) |  |
| 0.3.2 | 2026-07-06 | 2263<sub>(+new) | 2587<sub>(+new) | 2662<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1914<sub>(+226) | 2097<sub>(+242) | 2214<sub>(+292) |  |
| 0.2.8 | 2026-05-15 | 1688<sub>(+99) | 1855<sub>(+31) | 1922<sub>(+70) |  |
| 0.2.7 | 2026-05-11 | 1589<sub>(+new) | 1824<sub>(+new) | 1852<sub>(+new) |  |
| 0.2.6 | 2024-11-29 |  |  |  |  |
| 0.2.5 | 2024-11-26 |  |  |  |  |
| 0.2.4 | 2024-11-24 |  |  |  |  |
| 0.2.3 | 2024-11-22 |  |  |  |  |
| 0.2.2 | 2024-11-22 |  |  |  |  |
| 0.2.1 | 2024-11-20 |  |  |  |  |
| 0.2.0 | 2024-11-19 |  |  |  |  |
| 0.1.0 | 2024-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-02 06:24:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1589, 1688, 1914, 2263, 2356, 2493]
  line "STC (8.0+0.08s)" [1589, 1688, 1914, 2263, 2356, 2493]
  line "LTC (60.0+0.60s)" [1824, 1855, 2097, 2587, 2674, 2796]
  line "VLTC (2m24s+1.12s)" [1852, 1922, 2214, 2662, 2784, 2840]
  line "VLTC (2m24s+1.12s)" [1852, 1922, 2214, 2662, 2784, 2840]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2840 | 39 | 196 | 51% | 2832 | 41% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2796 | 35 | 240 | 49% | 2805 | 42% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2493 | 34 | 280 | 49% | 2506 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2784 | 35 | 244 | 53% | 2762 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2674 | 39 | 216 | 53% | 2651 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2356 | 39 | 216 | 49% | 2365 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2662 | 39 | 200 | 50% | 2657 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2587 | 44 | 174 | 54% | 2545 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2263 | 42 | 200 | 48% | 2275 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2214 | 34 | 298 | 51% | 2213 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2097 | 37 | 258 | 52% | 2080 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1914 | 35 | 288 | 51% | 1908 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1922 | 34 | 312 | 48% | 1936 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1855 | 35 | 276 | 51% | 1837 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1688 | 33 | 314 | 46% | 1717 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1852 | 32 | 334 | 47% | 1881 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1824 | 35 | 304 | 49% | 1840 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1589 | 36 | 292 | 50% | 1585 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |