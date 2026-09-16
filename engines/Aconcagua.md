# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2337<sub>(+145) | 2604<sub>(+151) | 2714<sub>(+144) |  |
| 5.1.0 | 2026-03-01 | 2192<sub>(+31) | 2453<sub>(+3) | 2570<sub>(+117) |  |
| 5.0.0 | 2026-01-25 | 2161<sub>(+198) | 2450<sub>(+189) | 2453<sub>(+88) |  |
| 4.1.0 | 2025-12-14 | 1963<sub>(+51) | 2261<sub>(+77) | 2365<sub>(+55) |  |
| 4.0.0 | 2025-11-09 | 1912 | 2184 | 2310 |  |
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

Generated: 2026-09-16 04:35:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2800
  line "" [1912, 1963, 2161, 2192, 2337]
  line "STC (8.0+0.08s)" [1912, 1963, 2161, 2192, 2337]
  line "LTC (60.0+0.60s)" [2184, 2261, 2450, 2453, 2604]
  line "" [2310, 2365, 2453, 2570, 2714]
  line "VLTC (2m24s+1.12s)" [2310, 2365, 2453, 2570, 2714]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2714 | 29 | 362 | 53% | 2688 | 37% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2604 | 26 | 482 | 53% | 2579 | 33% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2337 | 29 | 406 | 48% | 2361 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2570 | 27 | 428 | 50% | 2576 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2453 | 29 | 376 | 51% | 2441 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2192 | 27 | 468 | 49% | 2192 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2453 | 42 | 196 | 51% | 2445 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2450 | 37 | 246 | 49% | 2454 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2161 | 34 | 290 | 50% | 2164 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2365 | 40 | 214 | 50% | 2372 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2261 | 40 | 222 | 51% | 2245 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1963 | 33 | 312 | 47% | 1989 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2310 | 46 | 172 | 41% | 2418 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2184 | 55 | 116 | 47% | 2213 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1912 | 62 | 92 | 47% | 1937 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |