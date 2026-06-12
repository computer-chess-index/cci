# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2354<sub>(+174) | 2534<sub>(+92) | 2712<sub>(+155) |  |
| 5.1.0 | 2026-03-01 | 2180<sub>(+31) | 2442<sub>(+4) | 2557<sub>(+115) |  |
| 5.0.0 | 2026-01-25 | 2149<sub>(+197) | 2438<sub>(+186) | 2442<sub>(+86) |  |
| 4.1.0 | 2025-12-14 | 1952<sub>(+50) | 2252<sub>(+78) | 2356<sub>(+58) |  |
| 4.0.0 | 2025-11-09 | 1902<sub>(+new) | 2174<sub>(+new) | 2298<sub>(+new) |  |
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

Generated: 2026-06-12 06:22:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2800
  line "STC (8.0+0.08s)" [1902, 1952, 2149, 2180, 2354]
  line "STC (8.0+0.08s)" [1902, 1952, 2149, 2180, 2354]
  line "LTC (60.0+0.60s)" [2174, 2252, 2438, 2442, 2534]
  line "VLTC (2m24s+1.12s)" [2298, 2356, 2442, 2557, 2712]
  line "VLTC (2m24s+1.12s)" [2298, 2356, 2442, 2557, 2712]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2712 | 44 | 160 | 57% | 2651 | 39% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2534 | 56 | 104 | 51% | 2519 | 32% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2354 | 55 | 108 | 50% | 2353 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2557 | 27 | 428 | 50% | 2561 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2442 | 29 | 376 | 51% | 2430 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2180 | 27 | 468 | 49% | 2180 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2442 | 42 | 196 | 51% | 2434 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2438 | 37 | 246 | 49% | 2444 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2149 | 34 | 290 | 50% | 2152 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2356 | 40 | 214 | 50% | 2361 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2252 | 40 | 222 | 51% | 2234 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1952 | 33 | 312 | 47% | 1979 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2298 | 46 | 172 | 41% | 2407 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2174 | 55 | 116 | 47% | 2202 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1902 | 62 | 92 | 47% | 1928 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |