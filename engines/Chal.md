# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-09-08 | 2673<sub>(+383) | 2870<sub>(+305) | 2936<sub>(+282) |  |
| 1.4.1 | 2026-04-26 | 2290<sub>(+23) | 2565<sub>(+67) | 2654<sub>(+63) |  |
| 1.4.0 | 2026-04-01 | 2267<sub>(+214) | 2498<sub>(+133) | 2591<sub>(+200) |  |
| 1.3.2 | 2026-03-14 | 2053<sub>(+29) | 2365<sub>(+25) | 2391<sub>(+4) |  |
| 1.3.1 | 2026-03-10 | 2024<sub>(+154) | 2340<sub>(+112) | 2387<sub>(+134) |  |
| 1.3.0 | 2026-03-08 | 1870<sub>(+184) | 2228<sub>(+311) | 2253<sub>(+239) |  |
| 1.2.1 | 2026-03-07 | 1686 | 1917 | 2014 |  |
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

Generated: 2026-10-08 04:36:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1", "2.0.0"]
  y-axis "Elo Rating" 1600 --> 3000
  line "" [1686, 1870, 2024, 2053, 2267, 2290, 2673]
  line "STC (8.0+0.08s)" [1686, 1870, 2024, 2053, 2267, 2290, 2673]
  line "LTC (60.0+0.60s)" [1917, 2228, 2340, 2365, 2498, 2565, 2870]
  line "" [2014, 2253, 2387, 2391, 2591, 2654, 2936]
  line "VLTC (2m24s+1.12s)" [2014, 2253, 2387, 2391, 2591, 2654, 2936]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2936 | 34 | 256 | 48% | 2948 | 43% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2870 | 29 | 352 | 48% | 2889 | 43% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2673 | 35 | 258 | 51% | 2661 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2654 | 25 | 498 | 52% | 2637 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2565 | 25 | 514 | 49% | 2572 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2290 | 26 | 488 | 48% | 2314 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2591 | 30 | 360 | 50% | 2588 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2498 | 32 | 320 | 49% | 2503 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2267 | 31 | 360 | 52% | 2249 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2391 | 34 | 296 | 49% | 2400 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2365 | 32 | 312 | 51% | 2360 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2053 | 32 | 320 | 48% | 2071 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2387 | 37 | 244 | 51% | 2373 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2340 | 37 | 240 | 51% | 2331 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2024 | 40 | 212 | 52% | 2009 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2253 | 44 | 188 | 54% | 2218 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2228 | 41 | 204 | 55% | 2184 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1870 | 42 | 196 | 50% | 1870 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2014 | 39 | 254 | 50% | 2024 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1917 | 45 | 192 | 46% | 1987 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1686 | 44 | 200 | 47% | 1759 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |