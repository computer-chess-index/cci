# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2329<sub>(+142) | 2596<sub>(+150) | 2696<sub>(+132) |  |
| 5.1.0 | 2026-03-01 | 2187<sub>(+31) | 2446<sub>(+2) | 2564<sub>(+116) |  |
| 5.0.0 | 2026-01-25 | 2156<sub>(+197) | 2444<sub>(+187) | 2448<sub>(+88) |  |
| 4.1.0 | 2025-12-14 | 1959<sub>(+51) | 2257<sub>(+78) | 2360<sub>(+57) |  |
| 4.0.0 | 2025-11-09 | 1908 | 2179 | 2303 |  |
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

Generated: 2026-08-23 06:22:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1908, 1959, 2156, 2187, 2329]
  line "STC (8.0+0.08s)" [1908, 1959, 2156, 2187, 2329]
  line "LTC (60.0+0.60s)" [2179, 2257, 2444, 2446, 2596]
  line "VLTC (2m24s+1.12s)" [2303, 2360, 2448, 2564, 2696]
  line "VLTC (2m24s+1.12s)" [2303, 2360, 2448, 2564, 2696]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2696 | 31 | 330 | 52% | 2681 | 38% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2596 | 27 | 438 | 53% | 2568 | 32% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2329 | 30 | 370 | 47% | 2354 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2564 | 27 | 428 | 50% | 2569 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2446 | 29 | 376 | 51% | 2435 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2187 | 27 | 468 | 49% | 2187 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2448 | 42 | 196 | 51% | 2439 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2444 | 37 | 246 | 49% | 2449 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2156 | 34 | 290 | 50% | 2159 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2360 | 40 | 214 | 50% | 2365 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2257 | 40 | 222 | 51% | 2240 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1959 | 33 | 312 | 47% | 1985 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2303 | 46 | 172 | 41% | 2412 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2179 | 55 | 116 | 47% | 2207 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1908 | 62 | 92 | 47% | 1933 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |