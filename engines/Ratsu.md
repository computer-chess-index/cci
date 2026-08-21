# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2375<sub>(+138) | 2649<sub>(+107) | 2809<sub>(+203) |  |
| 2.0.0 | 2026-05-23 | 2237<sub>(+346) | 2542<sub>(+375) | 2606<sub>(+376) |  |
| 1.2.0 | 2026-05-07 | 1891<sub>(+167) | 2167<sub>(+164) | 2230<sub>(+142) |  |
| 1.1.0 | 2026-04-21 | 1724<sub>(+80) | 2003<sub>(+125) | 2088<sub>(+140) |  |
| 1.0.0 | 2026-02-20 | 1644<sub>(+101) | 1878<sub>(+76) | 1948<sub>(+88) |  |
| 0.9.0 | 2026-01-21 | 1543 | 1802 | 1860 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:29:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "STC (8.0+0.08s)" [1543, 1644, 1724, 1891, 2237, 2375]
  line "STC (8.0+0.08s)" [1543, 1644, 1724, 1891, 2237, 2375]
  line "LTC (60.0+0.60s)" [1802, 1878, 2003, 2167, 2542, 2649]
  line "VLTC (2m24s+1.12s)" [1860, 1948, 2088, 2230, 2606, 2809]
  line "VLTC (2m24s+1.12s)" [1860, 1948, 2088, 2230, 2606, 2809]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2809 | 35 | 248 | 49% | 2813 | 40% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 39 | 218 | 49% | 2653 | 32% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2375 | 34 | 298 | 49% | 2379 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2606 | 48 | 136 | 49% | 2623 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2542 | 45 | 168 | 54% | 2499 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2237 | 44 | 182 | 55% | 2184 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2230 | 31 | 364 | 51% | 2225 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2167 | 34 | 292 | 50% | 2153 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1891 | 32 | 356 | 51% | 1872 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2088 | 32 | 348 | 53% | 2063 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2003 | 33 | 326 | 51% | 1994 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1724 | 32 | 352 | 50% | 1712 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1948 | 29 | 390 | 50% | 1949 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1878 | 31 | 384 | 51% | 1871 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1644 | 30 | 394 | 48% | 1663 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1860 | 41 | 208 | 50% | 1864 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1802 | 36 | 280 | 53% | 1771 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1543 | 39 | 242 | 49% | 1551 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |