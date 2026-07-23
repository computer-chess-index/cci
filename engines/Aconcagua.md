# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2331<sub>(+153) | 2568<sub>(+129) | 2691<sub>(+134) |  |
| 5.1.0 | 2026-03-01 | 2178<sub>(+30) | 2439<sub>(+2) | 2557<sub>(+116) |  |
| 5.0.0 | 2026-01-25 | 2148<sub>(+199) | 2437<sub>(+188) | 2441<sub>(+88) |  |
| 4.1.0 | 2025-12-14 | 1949<sub>(+51) | 2249<sub>(+78) | 2353<sub>(+57) |  |
| 4.0.0 | 2025-11-09 | 1898<sub>(+new) | 2171<sub>(+new) | 2296<sub>(+new) |  |
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

Generated: 2026-07-23 06:22:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1800 --> 2700
  line "STC (8.0+0.08s)" [1898, 1949, 2148, 2178, 2331]
  line "STC (8.0+0.08s)" [1898, 1949, 2148, 2178, 2331]
  line "LTC (60.0+0.60s)" [2171, 2249, 2437, 2439, 2568]
  line "VLTC (2m24s+1.12s)" [2296, 2353, 2441, 2557, 2691]
  line "VLTC (2m24s+1.12s)" [2296, 2353, 2441, 2557, 2691]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2691 | 32 | 310 | 52% | 2673 | 38% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2568 | 30 | 362 | 51% | 2554 | 33% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2331 | 32 | 322 | 48% | 2348 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2557 | 27 | 428 | 50% | 2561 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2439 | 29 | 376 | 51% | 2429 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2178 | 27 | 468 | 49% | 2178 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2441 | 42 | 196 | 51% | 2433 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2437 | 37 | 246 | 49% | 2442 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2148 | 34 | 290 | 50% | 2149 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2353 | 40 | 214 | 50% | 2360 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2249 | 40 | 222 | 51% | 2232 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1949 | 33 | 312 | 47% | 1975 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2296 | 46 | 172 | 41% | 2404 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2171 | 55 | 116 | 47% | 2199 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1898 | 62 | 92 | 47% | 1925 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |