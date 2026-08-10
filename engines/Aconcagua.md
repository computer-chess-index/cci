# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2331<sub>(+151) | 2587<sub>(+146) | 2692<sub>(+132) |  |
| 5.1.0 | 2026-03-01 | 2180<sub>(+31) | 2441<sub>(+3) | 2560<sub>(+118) |  |
| 5.0.0 | 2026-01-25 | 2149<sub>(+197) | 2438<sub>(+188) | 2442<sub>(+88) |  |
| 4.1.0 | 2025-12-14 | 1952<sub>(+51) | 2250<sub>(+76) | 2354<sub>(+56) |  |
| 4.0.0 | 2025-11-09 | 1901 | 2174 | 2298 |  |
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

Generated: 2026-08-10 07:43:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1901, 1952, 2149, 2180, 2331]
  line "STC (8.0+0.08s)" [1901, 1952, 2149, 2180, 2331]
  line "LTC (60.0+0.60s)" [2174, 2250, 2438, 2441, 2587]
  line "VLTC (2m24s+1.12s)" [2298, 2354, 2442, 2560, 2692]
  line "VLTC (2m24s+1.12s)" [2298, 2354, 2442, 2560, 2692]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2692 | 31 | 318 | 52% | 2676 | 38% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2587 | 28 | 418 | 53% | 2561 | 33% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2331 | 31 | 350 | 48% | 2348 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2560 | 27 | 428 | 50% | 2564 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2441 | 29 | 376 | 51% | 2430 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2180 | 27 | 468 | 49% | 2180 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2442 | 42 | 196 | 51% | 2434 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2438 | 37 | 246 | 49% | 2444 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2149 | 34 | 290 | 50% | 2152 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2354 | 40 | 214 | 50% | 2360 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2250 | 40 | 222 | 51% | 2234 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1952 | 33 | 312 | 47% | 1978 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2298 | 46 | 172 | 41% | 2407 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2174 | 55 | 116 | 47% | 2201 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1901 | 62 | 92 | 47% | 1928 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |