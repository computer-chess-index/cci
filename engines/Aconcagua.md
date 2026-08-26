# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2334<sub>(+146) | 2597<sub>(+148) | 2699<sub>(+133) |  |
| 5.1.0 | 2026-03-01 | 2188<sub>(+29) | 2449<sub>(+3) | 2566<sub>(+117) |  |
| 5.0.0 | 2026-01-25 | 2159<sub>(+199) | 2446<sub>(+187) | 2449<sub>(+86) |  |
| 4.1.0 | 2025-12-14 | 1960<sub>(+51) | 2259<sub>(+77) | 2363<sub>(+57) |  |
| 4.0.0 | 2025-11-09 | 1909 | 2182 | 2306 |  |
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

Generated: 2026-08-26 06:22:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1909, 1960, 2159, 2188, 2334]
  line "STC (8.0+0.08s)" [1909, 1960, 2159, 2188, 2334]
  line "LTC (60.0+0.60s)" [2182, 2259, 2446, 2449, 2597]
  line "VLTC (2m24s+1.12s)" [2306, 2363, 2449, 2566, 2699]
  line "VLTC (2m24s+1.12s)" [2306, 2363, 2449, 2566, 2699]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2699 | 31 | 330 | 52% | 2682 | 38% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2597 | 27 | 442 | 53% | 2570 | 33% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2334 | 30 | 378 | 48% | 2356 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2566 | 27 | 428 | 50% | 2570 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2449 | 29 | 376 | 51% | 2437 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2188 | 27 | 468 | 49% | 2190 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2449 | 42 | 196 | 51% | 2441 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2446 | 37 | 246 | 49% | 2450 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2159 | 34 | 290 | 50% | 2161 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2363 | 40 | 214 | 50% | 2368 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2259 | 40 | 222 | 51% | 2242 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1960 | 33 | 312 | 47% | 1986 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2306 | 46 | 172 | 41% | 2414 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2182 | 55 | 116 | 47% | 2209 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1909 | 62 | 92 | 47% | 1936 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |