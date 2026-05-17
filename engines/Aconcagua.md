# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1.0 | 2026-03-01 | 2255<sub>(+46) | 2500<sub>(-2) | 2619<sub>(+113) |  |
| 5.0.0 | 2026-01-25 | 2209<sub>(+207) | 2502<sub>(+189) | 2506<sub>(+87) |  |
| 4.1.0 | 2025-12-14 | 2002<sub>(+55) | 2313<sub>(+80) | 2419<sub>(+58) |  |
| 4.0.0 | 2025-11-09 | 1947<sub>(+new) | 2233<sub>(+new) | 2361<sub>(+new) |  |
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

Generated: 2026-05-17 06:22:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1947, 2002, 2209, 2255]
  line "STC (8.0+0.08s)" [1947, 2002, 2209, 2255]
  line "LTC (60.0+0.60s)" [2233, 2313, 2502, 2500]
  line "VLTC (2m24s+1.12s)" [2361, 2419, 2506, 2619]
  line "VLTC (2m24s+1.12s)" [2361, 2419, 2506, 2619]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2619 | 27 | 420 | 49% | 2624 | 39% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2500 | 30 | 364 | 51% | 2492 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2255 | 28 | 436 | 50% | 2253 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2506 | 42 | 196 | 51% | 2498 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2502 | 37 | 246 | 49% | 2507 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2209 | 34 | 290 | 50% | 2211 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2419 | 40 | 214 | 50% | 2425 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2313 | 40 | 222 | 51% | 2295 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 2002 | 33 | 312 | 47% | 2028 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2361 | 46 | 172 | 41% | 2469 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2233 | 55 | 116 | 47% | 2260 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1947 | 62 | 92 | 47% | 1974 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |