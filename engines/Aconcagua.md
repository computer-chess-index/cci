# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1.0 | 2026-03-01 | 2182<sub>(+27) | 2441<sub>(-1) | 2557<sub>(+111) |  |
| 5.0.0 | 2026-01-25 | 2155<sub>(+197) | 2442<sub>(+186) | 2446<sub>(+85) |  |
| 4.1.0 | 2025-12-14 | 1958<sub>(+50) | 2256<sub>(+77) | 2361<sub>(+59) |  |
| 4.0.0 | 2025-11-09 | 1908<sub>(+new) | 2179<sub>(+new) | 2302<sub>(+new) |  |
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

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aconcagua+<version>&body=###%20Engine%20name%0AAconcagua%0A%0A###%20Version%0A5.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-21 06:22:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0"]
  y-axis "Elo Rating" 1900 --> 2600
  line "STC (8.0+0.08s)" [1908, 1958, 2155, 2182]
  line "STC (8.0+0.08s)" [1908, 1958, 2155, 2182]
  line "LTC (60.0+0.60s)" [2179, 2256, 2442, 2441]
  line "VLTC (2m24s+1.12s)" [2302, 2361, 2446, 2557]
  line "VLTC (2m24s+1.12s)" [2302, 2361, 2446, 2557]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2557 | 27 | 420 | 49% | 2562 | 39% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2441 | 30 | 364 | 51% | 2433 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2182 | 28 | 452 | 49% | 2183 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2446 | 42 | 196 | 51% | 2438 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2442 | 37 | 246 | 49% | 2448 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2155 | 34 | 290 | 50% | 2157 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2361 | 40 | 214 | 50% | 2367 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2256 | 40 | 222 | 51% | 2240 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1958 | 33 | 312 | 47% | 1985 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2302 | 46 | 172 | 41% | 2411 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2179 | 55 | 116 | 47% | 2206 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1908 | 62 | 92 | 47% | 1933 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |