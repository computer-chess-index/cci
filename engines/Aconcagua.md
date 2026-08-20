# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2330<sub>(+147) | 2592<sub>(+148) | 2696<sub>(+135) |  |
| 5.1.0 | 2026-03-01 | 2183<sub>(+30) | 2444<sub>(+3) | 2561<sub>(+116) |  |
| 5.0.0 | 2026-01-25 | 2153<sub>(+197) | 2441<sub>(+188) | 2445<sub>(+88) |  |
| 4.1.0 | 2025-12-14 | 1956<sub>(+51) | 2253<sub>(+77) | 2357<sub>(+57) |  |
| 4.0.0 | 2025-11-09 | 1905 | 2176 | 2300 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aconcagua+<version>&body=###%20Engine%20name%0AAconcagua%0A%0A###%20Version%0A5.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-20 06:22:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1905, 1956, 2153, 2183, 2330]
  line "STC (8.0+0.08s)" [1905, 1956, 2153, 2183, 2330]
  line "LTC (60.0+0.60s)" [2176, 2253, 2441, 2444, 2592]
  line "VLTC (2m24s+1.12s)" [2300, 2357, 2445, 2561, 2696]
  line "VLTC (2m24s+1.12s)" [2300, 2357, 2445, 2561, 2696]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2696 | 31 | 326 | 52% | 2678 | 39% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2592 | 27 | 434 | 53% | 2564 | 32% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2330 | 30 | 366 | 48% | 2352 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2561 | 27 | 428 | 50% | 2566 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2444 | 29 | 376 | 51% | 2433 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2183 | 27 | 468 | 49% | 2184 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2445 | 42 | 196 | 51% | 2437 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2441 | 37 | 246 | 49% | 2446 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2153 | 34 | 290 | 50% | 2156 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2357 | 40 | 214 | 50% | 2363 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2253 | 40 | 222 | 51% | 2237 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1956 | 33 | 312 | 47% | 1982 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2300 | 46 | 172 | 41% | 2410 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2176 | 55 | 116 | 47% | 2205 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1905 | 62 | 92 | 47% | 1932 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |