# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2298<sub>(+42) | 2552<sub>(+65) | 2624<sub>(+47) |  |
| 1.4.0 | 2026-04-01 | 2256<sub>(+213) | 2487<sub>(+131) | 2577<sub>(+197) |  |
| 1.3.2 | 2026-03-14 | 2043<sub>(+27) | 2356<sub>(+26) | 2380<sub>(+1) |  |
| 1.3.1 | 2026-03-10 | 2016<sub>(+152) | 2330<sub>(+113) | 2379<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1864<sub>(+186) | 2217<sub>(+307) | 2244<sub>(+237) |  |
| 1.2.1 | 2026-03-07 | 1678<sub>(+new) | 1910<sub>(+new) | 2007<sub>(+new) |  |
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

Generated: 2026-05-22 14:52:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1678, 1864, 2016, 2043, 2256, 2298]
  line "STC (8.0+0.08s)" [1678, 1864, 2016, 2043, 2256, 2298]
  line "LTC (60.0+0.60s)" [1910, 2217, 2330, 2356, 2487, 2552]
  line "VLTC (2m24s+1.12s)" [2007, 2244, 2379, 2380, 2577, 2624]
  line "VLTC (2m24s+1.12s)" [2007, 2244, 2379, 2380, 2577, 2624]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2624 | 31 | 328 | 50% | 2623 | 37% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2552 | 31 | 346 | 50% | 2552 | 34% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2298 | 32 | 328 | 50% | 2298 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2577 | 30 | 360 | 50% | 2576 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2487 | 32 | 320 | 49% | 2492 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2256 | 31 | 360 | 52% | 2238 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2380 | 34 | 296 | 49% | 2391 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2356 | 32 | 312 | 51% | 2350 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2043 | 32 | 320 | 48% | 2061 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2379 | 37 | 244 | 51% | 2365 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2330 | 37 | 240 | 51% | 2322 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2016 | 40 | 212 | 52% | 1999 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2244 | 44 | 188 | 54% | 2209 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2217 | 41 | 204 | 55% | 2174 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1864 | 42 | 196 | 50% | 1863 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2007 | 39 | 254 | 50% | 2016 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1910 | 45 | 192 | 46% | 1980 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1678 | 44 | 200 | 47% | 1751 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |