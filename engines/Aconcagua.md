# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2331<sub>(+144) | 2595<sub>(+147) | 2697<sub>(+133) |  |
| 5.1.0 | 2026-03-01 | 2187<sub>(+30) | 2448<sub>(+4) | 2564<sub>(+116) |  |
| 5.0.0 | 2026-01-25 | 2157<sub>(+198) | 2444<sub>(+187) | 2448<sub>(+88) |  |
| 4.1.0 | 2025-12-14 | 1959<sub>(+51) | 2257<sub>(+77) | 2360<sub>(+56) |  |
| 4.0.0 | 2025-11-09 | 1908 | 2180 | 2304 |  |
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

Generated: 2026-08-24 06:22:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1908, 1959, 2157, 2187, 2331]
  line "STC (8.0+0.08s)" [1908, 1959, 2157, 2187, 2331]
  line "LTC (60.0+0.60s)" [2180, 2257, 2444, 2448, 2595]
  line "VLTC (2m24s+1.12s)" [2304, 2360, 2448, 2564, 2697]
  line "VLTC (2m24s+1.12s)" [2304, 2360, 2448, 2564, 2697]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2697 | 31 | 330 | 52% | 2681 | 38% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2595 | 27 | 442 | 53% | 2568 | 33% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2331 | 30 | 374 | 48% | 2354 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2564 | 27 | 428 | 50% | 2569 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2448 | 29 | 376 | 51% | 2435 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2187 | 27 | 468 | 49% | 2188 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2448 | 42 | 196 | 51% | 2439 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2444 | 37 | 246 | 49% | 2449 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2157 | 34 | 290 | 50% | 2159 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2360 | 40 | 214 | 50% | 2367 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2257 | 40 | 222 | 51% | 2241 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1959 | 33 | 312 | 47% | 1985 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2304 | 46 | 172 | 41% | 2412 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2180 | 55 | 116 | 47% | 2207 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1908 | 62 | 92 | 47% | 1935 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |