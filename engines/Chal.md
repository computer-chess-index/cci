# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2284<sub>(+25) | 2564<sub>(+75) | 2649<sub>(+68) |  |
| 1.4.0 | 2026-04-01 | 2259<sub>(+214) | 2489<sub>(+132) | 2581<sub>(+198) |  |
| 1.3.2 | 2026-03-14 | 2045<sub>(+28) | 2357<sub>(+26) | 2383<sub>(+3) |  |
| 1.3.1 | 2026-03-10 | 2017<sub>(+153) | 2331<sub>(+110) | 2380<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1864<sub>(+185) | 2221<sub>(+311) | 2245<sub>(+236) |  |
| 1.2.1 | 2026-03-07 | 1679 | 1910 | 2009 |  |
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

Generated: 2026-08-25 06:23:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1679, 1864, 2017, 2045, 2259, 2284]
  line "STC (8.0+0.08s)" [1679, 1864, 2017, 2045, 2259, 2284]
  line "LTC (60.0+0.60s)" [1910, 2221, 2331, 2357, 2489, 2564]
  line "VLTC (2m24s+1.12s)" [2009, 2245, 2380, 2383, 2581, 2649]
  line "VLTC (2m24s+1.12s)" [2009, 2245, 2380, 2383, 2581, 2649]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2649 | 26 | 482 | 52% | 2627 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2564 | 26 | 482 | 50% | 2562 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2284 | 27 | 464 | 48% | 2309 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2581 | 30 | 360 | 50% | 2579 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2489 | 32 | 320 | 49% | 2495 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2259 | 31 | 360 | 52% | 2241 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2383 | 34 | 296 | 49% | 2392 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2357 | 32 | 312 | 51% | 2352 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2045 | 32 | 320 | 48% | 2064 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2380 | 37 | 244 | 51% | 2367 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2331 | 37 | 240 | 51% | 2323 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2017 | 40 | 212 | 52% | 2002 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2245 | 44 | 188 | 54% | 2211 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2221 | 41 | 204 | 55% | 2178 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1864 | 42 | 196 | 50% | 1864 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2009 | 39 | 254 | 50% | 2018 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1910 | 45 | 192 | 46% | 1980 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1679 | 44 | 200 | 47% | 1752 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |