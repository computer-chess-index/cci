# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2287<sub>(+24) | 2560<sub>(+67) | 2649<sub>(+64) |  |
| 1.4.0 | 2026-04-01 | 2263<sub>(+214) | 2493<sub>(+132) | 2585<sub>(+198) |  |
| 1.3.2 | 2026-03-14 | 2049<sub>(+29) | 2361<sub>(+25) | 2387<sub>(+3) |  |
| 1.3.1 | 2026-03-10 | 2020<sub>(+154) | 2336<sub>(+113) | 2384<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1866<sub>(+184) | 2223<sub>(+310) | 2249<sub>(+237) |  |
| 1.2.1 | 2026-03-07 | 1682 | 1913 | 2012 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chal+<version>&body=###%20Engine%20name%0AChal%0A%0A###%20Version%0A1.4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-08 04:36:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "" [1682, 1866, 2020, 2049, 2263, 2287]
  line "STC (8.0+0.08s)" [1682, 1866, 2020, 2049, 2263, 2287]
  line "LTC (60.0+0.60s)" [1913, 2223, 2336, 2361, 2493, 2560]
  line "" [2012, 2249, 2384, 2387, 2585, 2649]
  line "VLTC (2m24s+1.12s)" [2012, 2249, 2384, 2387, 2585, 2649]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2649 | 25 | 494 | 52% | 2633 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2560 | 25 | 514 | 49% | 2566 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2287 | 26 | 488 | 48% | 2310 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2585 | 30 | 360 | 50% | 2584 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2493 | 32 | 320 | 49% | 2499 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2263 | 31 | 360 | 52% | 2245 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2387 | 34 | 296 | 49% | 2396 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2361 | 32 | 312 | 51% | 2356 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2049 | 32 | 320 | 48% | 2068 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2384 | 37 | 244 | 51% | 2371 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2336 | 37 | 240 | 51% | 2327 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2020 | 40 | 212 | 52% | 2005 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2249 | 44 | 188 | 54% | 2214 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2223 | 41 | 204 | 55% | 2180 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1866 | 42 | 196 | 50% | 1866 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2012 | 39 | 254 | 50% | 2021 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1913 | 45 | 192 | 46% | 1983 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1682 | 44 | 200 | 47% | 1754 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |