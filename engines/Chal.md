# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-09-08 | 2673<sub>(+386) | 2871<sub>(+309) | 2944<sub>(+293) |  |
| 1.4.1 | 2026-04-26 | 2287<sub>(+23) | 2562<sub>(+67) | 2651<sub>(+64) |  |
| 1.4.0 | 2026-04-01 | 2264<sub>(+213) | 2495<sub>(+132) | 2587<sub>(+200) |  |
| 1.3.2 | 2026-03-14 | 2051<sub>(+30) | 2363<sub>(+26) | 2387<sub>(+3) |  |
| 1.3.1 | 2026-03-10 | 2021<sub>(+154) | 2337<sub>(+112) | 2384<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1867<sub>(+185) | 2225<sub>(+311) | 2249<sub>(+237) |  |
| 1.2.1 | 2026-03-07 | 1682 | 1914 | 2012 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chal+<version>&body=###%20Engine%20name%0AChal%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:36:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1", "2.0.0"]
  y-axis "Elo Rating" 1600 --> 3000
  line "" [1682, 1867, 2021, 2051, 2264, 2287, 2673]
  line "STC (8.0+0.08s)" [1682, 1867, 2021, 2051, 2264, 2287, 2673]
  line "LTC (60.0+0.60s)" [1914, 2225, 2337, 2363, 2495, 2562, 2871]
  line "" [2012, 2249, 2384, 2387, 2587, 2651, 2944]
  line "VLTC (2m24s+1.12s)" [2012, 2249, 2384, 2387, 2587, 2651, 2944]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2944 | 36 | 240 | 50% | 2946 | 42% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2871 | 30 | 336 | 48% | 2885 | 43% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2673 | 38 | 228 | 52% | 2649 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2651 | 25 | 498 | 52% | 2634 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2562 | 25 | 514 | 49% | 2569 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2287 | 26 | 488 | 48% | 2310 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2587 | 30 | 360 | 50% | 2585 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2495 | 32 | 320 | 49% | 2500 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2264 | 31 | 360 | 52% | 2246 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2387 | 34 | 296 | 49% | 2398 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2363 | 32 | 312 | 51% | 2357 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2051 | 32 | 320 | 48% | 2068 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2384 | 37 | 244 | 51% | 2372 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2337 | 37 | 240 | 51% | 2329 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2021 | 40 | 212 | 52% | 2006 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2249 | 44 | 188 | 54% | 2215 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2225 | 41 | 204 | 55% | 2182 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1867 | 42 | 196 | 50% | 1867 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2012 | 39 | 254 | 50% | 2021 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1914 | 45 | 192 | 46% | 1985 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1682 | 44 | 200 | 47% | 1755 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |