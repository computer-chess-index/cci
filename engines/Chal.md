# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2277<sub>(+28) | 2554<sub>(+74) | 2637<sub>(+65) |  |
| 1.4.0 | 2026-04-01 | 2249<sub>(+212) | 2480<sub>(+132) | 2572<sub>(+200) |  |
| 1.3.2 | 2026-03-14 | 2037<sub>(+28) | 2348<sub>(+26) | 2372<sub>(+1) |  |
| 1.3.1 | 2026-03-10 | 2009<sub>(+151) | 2322<sub>(+111) | 2371<sub>(+134) |  |
| 1.3.0 | 2026-03-08 | 1858<sub>(+187) | 2211<sub>(+307) | 2237<sub>(+236) |  |
| 1.2.1 | 2026-03-07 | 1671 | 1904 | 2001 |  |
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

Generated: 2026-08-12 07:47:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1671, 1858, 2009, 2037, 2249, 2277]
  line "STC (8.0+0.08s)" [1671, 1858, 2009, 2037, 2249, 2277]
  line "LTC (60.0+0.60s)" [1904, 2211, 2322, 2348, 2480, 2554]
  line "VLTC (2m24s+1.12s)" [2001, 2237, 2371, 2372, 2572, 2637]
  line "VLTC (2m24s+1.12s)" [2001, 2237, 2371, 2372, 2572, 2637]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2637 | 26 | 466 | 52% | 2619 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2554 | 26 | 468 | 50% | 2553 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2277 | 28 | 444 | 48% | 2302 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2572 | 30 | 360 | 50% | 2570 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2480 | 32 | 320 | 49% | 2485 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2249 | 31 | 360 | 52% | 2232 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2372 | 34 | 296 | 49% | 2383 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2348 | 32 | 312 | 51% | 2342 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2037 | 32 | 320 | 48% | 2056 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2371 | 37 | 244 | 51% | 2357 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2322 | 37 | 240 | 51% | 2314 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2009 | 40 | 212 | 52% | 1994 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2237 | 44 | 188 | 54% | 2202 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2211 | 41 | 204 | 55% | 2168 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1858 | 42 | 196 | 50% | 1856 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2001 | 39 | 254 | 50% | 2010 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1904 | 45 | 192 | 46% | 1974 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1671 | 44 | 200 | 47% | 1744 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |