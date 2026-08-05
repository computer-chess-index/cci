# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2330<sub>(+151) | 2580<sub>(+141) | 2691<sub>(+134) |  |
| 5.1.0 | 2026-03-01 | 2179<sub>(+31) | 2439<sub>(+2) | 2557<sub>(+116) |  |
| 5.0.0 | 2026-01-25 | 2148<sub>(+197) | 2437<sub>(+188) | 2441<sub>(+88) |  |
| 4.1.0 | 2025-12-14 | 1951<sub>(+52) | 2249<sub>(+77) | 2353<sub>(+57) |  |
| 4.0.0 | 2025-11-09 | 1899<sub>(+new) | 2172<sub>(+new) | 2296<sub>(+new) |  |
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

Generated: 2026-08-05 06:22:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1800 --> 2700
  line "STC (8.0+0.08s)" [1899, 1951, 2148, 2179, 2330]
  line "STC (8.0+0.08s)" [1899, 1951, 2148, 2179, 2330]
  line "LTC (60.0+0.60s)" [2172, 2249, 2437, 2439, 2580]
  line "VLTC (2m24s+1.12s)" [2296, 2353, 2441, 2557, 2691]
  line "VLTC (2m24s+1.12s)" [2296, 2353, 2441, 2557, 2691]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2691 | 31 | 318 | 52% | 2674 | 38% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2580 | 28 | 406 | 52% | 2557 | 32% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2330 | 31 | 350 | 48% | 2346 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2557 | 27 | 428 | 50% | 2562 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2439 | 29 | 376 | 51% | 2429 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2179 | 27 | 468 | 49% | 2179 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2441 | 42 | 196 | 51% | 2433 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2437 | 37 | 246 | 49% | 2442 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2148 | 34 | 290 | 50% | 2151 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2353 | 40 | 214 | 50% | 2358 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2249 | 40 | 222 | 51% | 2233 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1951 | 33 | 312 | 47% | 1976 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2296 | 46 | 172 | 41% | 2404 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2172 | 55 | 116 | 47% | 2199 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1899 | 62 | 92 | 47% | 1926 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |