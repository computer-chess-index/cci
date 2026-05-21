# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2298<sub>(+42) | 2547<sub>(+62) | 2628<sub>(+51) |  |
| 1.4.0 | 2026-04-01 | 2256<sub>(+212) | 2485<sub>(+131) | 2577<sub>(+197) |  |
| 1.3.2 | 2026-03-14 | 2044<sub>(+27) | 2354<sub>(+24) | 2380<sub>(+3) |  |
| 1.3.1 | 2026-03-10 | 2017<sub>(+153) | 2330<sub>(+113) | 2377<sub>(+133) |  |
| 1.3.0 | 2026-03-08 | 1864<sub>(+185) | 2217<sub>(+305) | 2244<sub>(+237) |  |
| 1.2.1 | 2026-03-07 | 1679<sub>(+new) | 1912<sub>(+new) | 2007<sub>(+new) |  |
| 1.2.0 | 2026-03-05 |  |  |  |  |
| 1.1.0 | 2026-03-05 |  |  |  |  |
| 1.0.0 | 2026-03-05 |  |  |  |  |
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

Generated: 2026-05-21 06:23:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1679, 1864, 2017, 2044, 2256, 2298]
  line "STC (8.0+0.08s)" [1679, 1864, 2017, 2044, 2256, 2298]
  line "LTC (60.0+0.60s)" [1912, 2217, 2330, 2354, 2485, 2547]
  line "VLTC (2m24s+1.12s)" [2007, 2244, 2377, 2380, 2577, 2628]
  line "VLTC (2m24s+1.12s)" [2007, 2244, 2377, 2380, 2577, 2628]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2628 | 31 | 324 | 51% | 2622 | 37% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2547 | 31 | 342 | 50% | 2550 | 34% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2298 | 32 | 328 | 50% | 2296 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2577 | 30 | 360 | 50% | 2574 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2485 | 32 | 320 | 49% | 2491 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2256 | 31 | 360 | 52% | 2238 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2380 | 34 | 296 | 49% | 2390 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2354 | 32 | 312 | 51% | 2349 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2044 | 32 | 320 | 48% | 2063 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2377 | 37 | 244 | 51% | 2365 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2330 | 37 | 240 | 51% | 2322 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2017 | 40 | 212 | 52% | 2001 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2244 | 44 | 188 | 54% | 2209 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2217 | 41 | 204 | 55% | 2175 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1864 | 42 | 196 | 50% | 1864 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2007 | 39 | 254 | 50% | 2017 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1912 | 45 | 192 | 46% | 1980 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1679 | 44 | 200 | 47% | 1752 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |