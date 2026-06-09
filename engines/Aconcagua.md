# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 |  |  |  |  |
| 5.1.0 | 2026-03-01 | 2182<sub>(+31) | 2441<sub>(+2) | 2557<sub>(+113) |  |
| 5.0.0 | 2026-01-25 | 2151<sub>(+198) | 2439<sub>(+187) | 2444<sub>(+87) |  |
| 4.1.0 | 2025-12-14 | 1953<sub>(+51) | 2252<sub>(+77) | 2357<sub>(+58) |  |
| 4.0.0 | 2025-11-09 | 1902<sub>(+new) | 2175<sub>(+new) | 2299<sub>(+new) |  |
| 3.4.0 | 2025-10-04 |  |  |  |  |
| 3.3.0 | 2025-09-14 |  |  |  |  |
| 3.2.0 | 2025-08-31 |  |  |  |  |
| 3.1.0 | 2025-08-16 |  |  |  |  |
| 3.0.0 | 2025-07-20 |  |  |  |  |
| 2.1.0 | 2025-06-28 |  |  |  |  |
| 2.0.0 | 2025-05-31 |  |  |  |  |
| 1.1.0 | 2025-05-17 |  |  |  |  |
| 1.0.0 | 2025-05-17 |  |  |  |  |
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

Generated: 2026-06-09 06:22:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0"]
  y-axis "Elo Rating" 1900 --> 2600
  line "STC (8.0+0.08s)" [1902, 1953, 2151, 2182]
  line "STC (8.0+0.08s)" [1902, 1953, 2151, 2182]
  line "LTC (60.0+0.60s)" [2175, 2252, 2439, 2441]
  line "VLTC (2m24s+1.12s)" [2299, 2357, 2444, 2557]
  line "VLTC (2m24s+1.12s)" [2299, 2357, 2444, 2557]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2557 | 27 | 428 | 50% | 2561 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2441 | 29 | 372 | 51% | 2430 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2182 | 27 | 464 | 49% | 2180 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2444 | 42 | 196 | 51% | 2435 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2439 | 37 | 246 | 49% | 2444 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2151 | 34 | 290 | 50% | 2153 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2357 | 40 | 214 | 50% | 2363 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2252 | 40 | 222 | 51% | 2236 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1953 | 33 | 312 | 47% | 1979 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2299 | 46 | 172 | 41% | 2407 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2175 | 55 | 116 | 47% | 2202 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1902 | 62 | 92 | 47% | 1929 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |