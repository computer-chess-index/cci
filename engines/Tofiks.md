# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2182<sub>(+141) | 2419<sub>(+105) | 2488<sub>(+97) |  |
| 1.4.1 | 2026-04-11 | 2041<sub>(-39) | 2314<sub>(+28) | 2391<sub>(+14) |  |
| 1.4.0 | 2026-04-09 | 2080<sub>(+new) | 2286<sub>(+new) | 2377<sub>(+new) |  |
| 1.3.0 | 2023-10-22 |  |  |  |  |
| 1.2.0 | 2023-09-29 |  |  |  |  |
| 1.1.0 | 2023-08-17 |  |  |  |  |
| 1.0.0 | 2022-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tofiks+<version>&body=###%20Engine%20name%0ATofiks%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-20 06:29:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2080, 2041, 2182]
  line "STC (8.0+0.08s)" [2080, 2041, 2182]
  line "LTC (60.0+0.60s)" [2286, 2314, 2419]
  line "VLTC (2m24s+1.12s)" [2377, 2391, 2488]
  line "VLTC (2m24s+1.12s)" [2377, 2391, 2488]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2488 | 30 | 348 | 50% | 2484 | 34% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2419 | 30 | 374 | 50% | 2419 | 33% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2182 | 30 | 400 | 46% | 2210 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2391 | 33 | 292 | 50% | 2387 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2314 | 34 | 296 | 50% | 2313 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2041 | 34 | 302 | 51% | 2029 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2377 | 39 | 216 | 47% | 2406 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2286 | 39 | 226 | 53% | 2261 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2080 | 43 | 184 | 50% | 2075 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |